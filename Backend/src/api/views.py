from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (
    RegistrationSerializer,
    LoginSerializer,
    AppointmentSerializer,
    ContactFormSerializer,
    UserSerializer,
    ChatMessageSerializer
)
from ..core.models import ContactForm, Appointment, User
from rest_framework.generics import CreateAPIView
from django.http import FileResponse
from ..core.chat import chatbot_response, generate_pdf, process_audio_message, transcribe_audio
import tempfile
import os
import base64
import json


# Contact Form View
class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


# User Registration View
class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print(f"User Created: {user.email}")
            return Response(
                {"detail": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        print(f"Errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# User Login View
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            return Response(
                {
                    "user_id": user.id,
                    "role": user.role,
                    "user_email": user.email,
                    "name":user.first_name+user.last_name
                },
                status=status.HTTP_200_OK,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create Appointment
class AppointmentCreateView(CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def post(self, request, *args, **kwargs):
        user_id = request.data.get("patient_id")  # Get user_id from the request or local storage
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(patient_id=user_id)  # Use patient_id from the request or local storage
            return Response(
                {"detail": "Appointment created successfully", "appointment": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Approve or Decline Appointment
class AppointmentUpdateView(generics.UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def patch(self, request, *args, **kwargs):
        appointment = self.get_object()
        status_ = request.data.get('status')

        if status_ not in ['approved', 'declined']:
            return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

        appointment.status = status_
        appointment.save()
        return Response({'status': appointment.status}, status=status.HTTP_200_OK)


class AllUsersView(APIView):

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AllAppointmentsView(APIView):

    def get(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ChatbotView(APIView):
    """
    API endpoint for interacting with the chatbot and generating PDF reports.
    """
    def post(self, request, *args, **kwargs):
        generate_pdf_request = kwargs.get('generate_pdf', False)
        
        if generate_pdf_request:
            # Handle PDF generation
            try:
                conversation = request.data.get('conversation', [])
                user_id = request.data.get('user_id')
                
                if not conversation:
                    return Response({"error": "No conversation data provided"}, status=status.HTTP_400_BAD_REQUEST)
                
                pdf_path = generate_pdf(conversation)
                
                # Return the PDF file
                response = FileResponse(open(pdf_path, 'rb'), content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename="healthcare_report.pdf"'
                
                return response
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            # Handle regular chatbot interaction
            serializer = ChatMessageSerializer(data=request.data)
            
            if serializer.is_valid():
                message = serializer.validated_data.get('message')
                message_type = serializer.validated_data.get('message_type', 'text')
                # Get user_id from request data
                user_id = serializer.validated_data.get('user_id')
                
                if message_type == 'audio':
                    # Process audio input
                    try:
                        audio_data = message
                        audio_file = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
                        print(f"Temp file path: {audio_file.name}")
                        
                        try:
                            decoded_data = base64.b64decode(audio_data)
                            audio_file.write(decoded_data)
                        except Exception as e:
                            print(f"Base64 decode error: {e}")
                            audio_file.close()
                            os.unlink(audio_file.name)
                            return Response({"error": f"Invalid base64 data: {e}"}, status=status.HTTP_400_BAD_REQUEST)
                        
                        transcription = transcribe_audio(audio_file.name)
                        
                        audio_file.close()
                        
                        try:
                            os.unlink(audio_file.name)
                        except:
                            pass
                        
                        if transcription == "":
                            return Response({
                                "transcription": "Could not transcribe audio",
                                "text_response": "I couldn't understand the audio. Could you please repeat or type your message?"
                            })

                        # Pass user_id to maintain conversation history
                        response_text = chatbot_response(transcription, user_id=user_id)
                        
                        # Return transcription and text response
                        return Response({
                            "transcription": transcription,
                            "text_response": response_text
                        })
                            
                    except Exception as e:
                        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                else:
                    # Process text input
                    try:
                        # Pass user_id to maintain conversation history
                        response_text = chatbot_response(message, user_id=user_id)
                        return Response({"text_response": response_text})
                            
                    except Exception as e:
                        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)