from django.urls import path
from .views import CreateOrderAPIView, UserOrderListAPIView

urlpatterns = [
    path('orders/create/', CreateOrderAPIView.as_view()),
    path('orders/my-orders/', UserOrderListAPIView.as_view()),
]
