from django.shortcuts import render
from rest_framework.generics import(
  ListCreateAPIView,
  RetrieveUpdateDestroyAPIView
)
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import Slider
from .serializers import SliderSerializer
# Create your views here.

# 🔹 Client side – public sliders

class SliderListCreateView(ListCreateAPIView):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

class SliderDetailView(RetrieveUpdateDestroyAPIView):
    queryset=Slider.objects.all()
    serializer_class=SliderSerializer
    permission_classes=[IsAuthenticated]
    
            