from django.db import models
from django.contrib.auth.models import User

def resource_upload_path(instance, filename):
    return f"resources/{instance.client.id}/{filename}"

class Resource(models.Model):
    counsellor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="uploaded_resources")
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name="received_resources")
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to=resource_upload_path, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    file_type = models.CharField(max_length=100, blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
