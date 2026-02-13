from django.urls import path
from .views import(
  ProductListAPIView,
  ProductCreateAPIView,
  ProductDetailsAPIView,
)

urlpatterns = [
    path('orders/create/',ProductCreateAPIView)
]
