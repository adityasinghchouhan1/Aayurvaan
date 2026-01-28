from django.urls import path
from .views import (
  SliderListView, SliderCreateView, SliderDetailView
)

urlpatterns = [
    path('sliders/',SliderListView.as_view()),
    path('sliders/create/',SliderCreateView.as_view()),
    path('sliders/<int:pk>/',SliderDetailView.as_view()),
]
