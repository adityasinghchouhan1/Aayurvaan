from django.contrib.auth.models import User

user = User.objects.get(username='Ayuvan')   # apna username daalo
user.email = 'admin@gmail.com'
user.save()
