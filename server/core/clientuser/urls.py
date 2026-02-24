from django.urls import path
from .views import AdminUserListAPIView, MeAPIView, RegisterAPIView, LoginAPIView

urlpatterns = [
    path('register/', RegisterAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('me/', MeAPIView.as_view(), name='me'),
    path('admin/users/', AdminUserListAPIView.as_view(), name='admin-users'),

]
