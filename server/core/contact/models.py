from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    contact=models.CharField(max_length=15)
    message=models.TextField(auto_now_add=True)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
