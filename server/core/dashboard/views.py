from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from django.contrib.auth.models import User

from order.models import Order
from product.models import Product
from contact.models import Contact   # change name if different


class DashboardStatsAPIView(APIView):
    permission_classes = [IsAdminUser]  # 🔐 Admin Only

    def get(self, request):
        data = {
            "total_orders": Order.objects.count(),
            "total_users": User.objects.count(),

            "total_products": Product.objects.count(),
            "active_products": Product.objects.filter(is_active=True).count(),
            "deactive_products": Product.objects.filter(is_active=False).count(),

            "total_queries": Contect.objects.count(),
            "pending_queries": Contect.objects.filter(status="pending").count(),
        }

        return Response(data)