from rest_framework import serializers
from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework import serializers
from ..core.models import ContactForm,User,Appointment


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'



class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'role', 'email', 'password']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            role=validated_data['role'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'first_name', 'last_name'] 


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Check if email and password are provided
        if not email or not password:
            raise serializers.ValidationError("Email and password are required.")

        # Authenticate the user using the email and password
        user = authenticate(email=email, password=password)
        
        # Check if authentication failed
        if user is None:
            raise serializers.ValidationError("Invalid email or password.")

        # Check if the account is active
        if not user.is_active:
            raise serializers.ValidationError("This account is inactive.")

        return user



class AppointmentSerializer(serializers.ModelSerializer):
    patient_details = UserSerializer(source='patient', read_only=True)  # Nested patient details

    class Meta:
        model = Appointment
        fields = ['id', 'patient_details', 'doctor', 'appointment_date', 'status']
        read_only_fields = ['id', 'patient']


class ChatMessageSerializer(serializers.Serializer):
    message = serializers.CharField(required=True)
    message_type = serializers.CharField(default='text')
    user_id = serializers.CharField(required=False, allow_blank=True)