from rest_framework.generics import (
  ListCreateAPIView,
  RetrieveUpdateDestroyAPIView
)
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import therapy
from .serializers import TherapySerializers
# Create your views here.


class TherapyListCreatedView(ListCreateAPIView):
  queryset=therapy.objects.all()
  serializer_class=TherapySerializers

  def get_permissions(self):
   if self.request.method=='GET':
     return [AllowAny()]
   return [IsAuthenticated()]
  
class TherapyDetailsView(RetrieveUpdateDestroyAPIView):
  queryset=therapy.objects.all()  
  serializer_class=TherapySerializers
  permission_classes=[IsAuthenticated]