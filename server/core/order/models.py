from django.db import models
from django.conf import settings
from product.models import Product
# Create your models here.


class Order(models.Model):

  STATUS_CHOICES=(
    ("PENDING",'Pending'),
    ('CONDIRMES','Confirmed'),
    ('SHIPPED','Shipped'),
    ('DELIVERED','Deliverd'),
    ('CANCELLED','Cancelled'),)
  
  PAYMENT_CHOICES=(
    ('COD','Cash on Delivery'),
    ('UPI','UPI'),
    ('CARD','Card'),
  )
  
  user = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE,
    related_name='orders'
  )

  # Shipping Details
  full_name=models.CharField(max_length=150)
  address=models.TextField()
  pincode=models.CharField(max_length=10)
  contact_number=models.CharField(max_length=15)


# Payments

  payment_method=models.CharField(
  max_length=10,
  choices=PAYMENT_CHOICES,
  default='COD'
  )

  total_amount=models.PositiveIntegerField()
  status=models.CharField(
    max_length=20,
    choices=STATUS_CHOICES,
    default='PENDING',
  )

  cerated_at=models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"Order {self.id}-{self.full_name}"
  
class OrderItem(models.Model):

  order  = models.ForeignKey(
    Order,
    related_name='items',
    on_delete=models.CASCADE
  )

  product=models.ForeignKey(
    Product,
    on_delete=models.CASCADE
  )

  quantity=models.PositiveIntegerField(default=1)
  price=models.PositiveIntegerField()

  def __str__(self):
    return f"{self.product.name} ({self.quantity})"