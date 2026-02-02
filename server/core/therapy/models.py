from django.db import models

# Create your models here.
class therapy(models.Model):
  Title=models.CharField(max_length=200)
  file=models.ImageField(upload_to='therapy/')
  description=models.TextField(blank=True)
  is_active=models.BooleanField(default=True)
  created_at=models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return self.Title