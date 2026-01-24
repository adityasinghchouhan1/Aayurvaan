from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import ContactSerializer
# Create your views here.

class ContactCreateAPIView(APIView):
  permission_classes = [AllowAny]

  def post(self, request):
    serializers = ContactSerializer(data=request.data)
    if serializers.is_valid():
      serializers.save()
      return Response({"message":"Contact Saved Succesfully "})
    return Response(serializers.errors, status=400)