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
    
    data=request.data
    items_data=data.get('items',[])

    if not items_data:
      return Response({"error":"No items provided"},status=400)
    
     # 🔥 Create Order with shipping info
    order=Order.objects.create(
      user=request.user,
      full_name=data.get('full_name'),
      address=data.get('address'),
      pincode=data.get('pincode'),
      contact_number=data.get('contact_number'),
      payment_method=data.get('payment_method'),
      total_amount=0
    )

    total_amount=0

    for item in items_data:
      product=Product.objects.get(id=item['product_id'])
      quantity=item.get('quantity',1)

      final_price=product.price
      total_price=product.price
      total_price=final_price * quantity

      total_amount+=total_price

      OrderItem.objects.create(
        order=order,
        product=product,
        quantity=quantity,
        price=final_price, )
      
      order.total_amount=total_amount
      order.save()

      return Response({
        "message":"Order placed successfully",
        "Order_id":order.id,
        "total_amount":total_amount
      })