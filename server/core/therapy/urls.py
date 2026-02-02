from django.urls import path
from .views import TherapyListCreatedView,TherapyDetailsView

urlpatterns = [
    path('therapy/',TherapyListCreatedView.as_view()),
    path('therapy/<int:pk>/',TherapyDetailsView.as_view())
]

