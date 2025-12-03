from django.urls import path
from . import views

urlpatterns = [
    path("api/upload/", views.upload_resource_api),
    path("api/client/<int:client_id>/", views.client_resources_api),
]
