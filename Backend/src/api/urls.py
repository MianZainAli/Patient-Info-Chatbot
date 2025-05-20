from django.urls import path

from .views import ContactFormView, RegistrationView, LoginView, AppointmentUpdateView, AppointmentCreateView, AllUsersView, AllAppointmentsView, ChatbotView

urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
    path('register/', RegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('appointments/create/', AppointmentCreateView.as_view(), name='appointment-create'),
    path('appointments/<int:pk>/update/', AppointmentUpdateView.as_view(), name='appointment-update'),
    path('users/', AllUsersView.as_view(), name='all_users'),
    path('appointments/', AllAppointmentsView.as_view(), name='all_appointments'),
    
    path('chatbot/', ChatbotView.as_view(), name='chatbot'),
    path('chatbot/generate-pdf/', ChatbotView.as_view(), {'generate_pdf': True}, name='generate-pdf'),
]
