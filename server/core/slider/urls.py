from django.urls import path
from .views import (
   SliderListCreateView, SliderDetailView
)

urlpatterns = [
  path('sliders/', SliderListCreateView.as_view()),
path('sliders/<int:pk>/', SliderDetailView.as_view()),
]
