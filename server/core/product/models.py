from django.db import models

# Create your models here.

class Product(models.Model):
  name=models.CharField(max_length=100)
  description=models.TextField()
  mrp=models.PositiveIntegerField()
  price=models.PositiveIntegerField()
  discount=models.PositiveBigIntegerField(blank=True,null=True)
  is_active=models.BooleanField(default=True)
  created_at=models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name
  
class ProductImage(models.Model):
    product=models.ForeignKey(
       Product,
       related_name='images',
       on_delete=models.CASCADE

    )

    image=models.ImageField(upload_to='products/')

    def __str__(self):
       return f"Image for {self.product.name}"