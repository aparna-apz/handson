from rest_framework import serializers
from .models import StudentUser
from django.contrib.auth.hashers import make_password

# -------------------registration serializer-------------------------------
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentUser
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        if StudentUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already registered.")
        return value

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return StudentUser.objects.create(**validated_data)
