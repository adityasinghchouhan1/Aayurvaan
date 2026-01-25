from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView

from .serializers import ContactSerializer
from .models import Contact
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ContactCreateAPIView(APIView):
  permission_classes = [AllowAny]

  def post(self, request):
    serializers = ContactSerializer(data=request.data)
    if serializers.is_valid():
      serializers.save()
      return Response({"message":"Contact Saved Succesfully "})
    return Response(serializers.errors, status=400)


class ContactListAPIView(ListAPIView):
  queryset=Contact.objects.all()
  serializer_class =ContactSerializer
  permission_classes=[IsAuthenticated]


class ContactDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]  