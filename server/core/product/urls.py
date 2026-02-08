from django.urls import path
from .views import(
  ProductListAPIView,
  ProductCreateAPIView,
  ProductDetailsAPIView
)

urlpatterns = [
    path('products/',ProductListAPIView.as_view()),
    path('products/create/',ProductCreateAPIView.as_view()),
    path('products/<int:pk>/',ProductDetailsAPIView.as_view())
]
