from django.db import models

# Create your models here.
from django.contrib.auth.hashers import make_password

# -------------------registration model-------------------------------  
class StudentUser(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Will store hashed password

    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        self.save()

    def __str__(self):
        return self.email
