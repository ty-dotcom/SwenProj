from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.utils import timezone
from datetime import timedelta

from .models import Availability, Booking
from .serializers import AvailabilitySerializer, BookingSerializer
from django.http import JsonResponse


def hello_world(request):
    return JsonResponse({"message": "Hello from API!"})


class AvailabilityListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        now = timezone.now()
        end = now + timedelta(days=60)

        slots = Availability.objects.filter(
            start_time__range=(now, end),
            is_booked=False
        )

        serializer = AvailabilitySerializer(slots, many=True)
        return Response(serializer.data)


class AvailabilityListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        slots = Availability.objects.filter(is_booked=False)
        serializer = AvailabilitySerializer(slots, many=True)
        return Response(serializer.data)

    def get(self, request):
        slots = Availability.objects.filter(is_booked=False)
        serializer = AvailabilitySerializer(slots, many=True)
        return Response(serializer.data)
class BookSessionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        availability_id = request.data.get('availability_id')
        name = request.data.get('name')
        age = request.data.get('age')
        email = request.data.get('email')

        if not all([availability_id, name, age, email]):
            return Response(
                {'detail': 'All fields are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Get the availability slot
        try:
            slot = Availability.objects.get(id=availability_id, is_booked=False)
        except Availability.DoesNotExist:
            return Response(
                {'detail': 'Slot not available'},
                status=status.HTTP_404_NOT_FOUND
            )

        # Mark slot as booked
        slot.is_booked = True
        slot.save()

        # Create booking record
        Booking.objects.create(
            availability=slot,
            client_name=name,
            client_age=age,
            client_email=email
        )

        return Response({'detail': 'Booking successful'}, status=status.HTTP_201_CREATED)


class MySessionsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        bookings = Booking.objects.filter(client=request.user).order_by('-booked_at')
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)