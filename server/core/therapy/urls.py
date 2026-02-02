from django.urls import urls
from .views import ListCreateAPIView,TherapyDetailsView

urlpatterns = [
    ("therapy/",ListCreateAPIView.as_view()),
    ("therapy/<ink:pk>/",TherapyDetailsView.as_view())

]

