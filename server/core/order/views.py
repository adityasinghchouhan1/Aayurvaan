from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db import transaction

from .models import Order,OrderItem
from product.models import Product
# Create your views here.

class CreateOrderAPIView(APIView):
  permission_classes=[IsAuthenticated]

  def post(self,request):
    