from .models import therapy
from rest_framework import serializers


class TherapySerializers(serializers.ModelSerializer):
     class Meta:
          model=therapy
          fields='__all__'