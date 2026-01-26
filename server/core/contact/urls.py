from django.urls import path
from .views import ContactCreateAPIView , ContactDetailAPIView, ContactListAPIView

urlpatterns = [
    path('contact/',ContactCreateAPIView.as_view()),
    path('contacts/', ContactListAPIView.as_view()),
path('contacts/<int:pk>/', ContactDetailAPIView.as_view()),

]
