from django.urls import path
from django.conf import settings
from .views import RegisterView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
]
