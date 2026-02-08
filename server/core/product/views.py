from rest_framework.views import APIView
from rest_framework.generics import(ListCreateAPIView,RetrieveUpdateDestroyAPIView,ListAPIView)
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from .models import Product,ProductImage
from .serializer import  ProductSerializer
from rest_framework.parsers import MultiPartParser, FormParser



class ProductListAPIView(ListAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
 

class ProductCreateAPIView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]  # ✅ REQUIRED

    def post(self, request):
        images = request.FILES.getlist('images')
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            product = serializer.save(is_active=True)

            for img in images:
                ProductImage.objects.create(
                    product=product,
                    image=img
                )

            return Response(
                {"message": "Product created successfully"},
                status=201
            )

        return Response(serializer.errors, status=400)


class ProductDetailsAPIView(RetrieveUpdateDestroyAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    permission_classes=[IsAuthenticated]