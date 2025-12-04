from rest_framework import serializers
from .models import Availability, Booking, Resource

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            "id",
            "title",
            "description",
            "file",
            "uploaded_at",
            "uploaded_by_id",
        ]
