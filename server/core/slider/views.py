from django.shortcuts import render
from rest_framework import(
  ListAPIView,
  CreateAPIView,
  RetrieveUpdateDestroyAPIView
)
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import Slider
from .serializers import SliderSerializer
# Create your views here.

# 🔹 Client side – public sliders
class SliderListView(ListAPIView):
    queryset=Slider.objects.filter(is_active=True)
    serializer_class=SliderSerializer
    permission_classes=[AllowAny]

class SliderCreateView(CreateAPIView):
    queryset=Slider.objects.all()
    serializer_class=SliderSerializer
    permission_classes=[IsAuthenticated]

class SliderDetailView(RetrieveUpdateDestroyAPIView):
    queryset=Slider.objects.all()
    serializer_class=SliderSerializer
    permission_classes=[IsAuthenticated]
    
            