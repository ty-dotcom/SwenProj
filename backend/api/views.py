from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Resource  
from django.core.files.storage import default_storage
from django.http import JsonResponse
from .models import Booking

from django.contrib.auth.models import User

from .models import (
    Availability, Booking, Form, FormQuestion, FormOption,
    Resource
)

from .serializers import AvailabilitySerializer, BookingSerializer, ResourceSerializer

@csrf_exempt
def upload_file(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=400)

    if "file" not in request.FILES:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    file = request.FILES["file"]
    file_path = default_storage.save(f"uploads/{file.name}", file)

    return JsonResponse({
        "message": "Upload successful",
        "fileUrl": default_storage.url(file_path)
    })




def get_my_bookings(request):
    clerk_id = request.GET.get("clerk_id")

    if not clerk_id:
        return JsonResponse({"error": "Missing clerk_id"}, status=400)

    bookings = Booking.objects.filter(clerk_id=clerk_id).values()

    return JsonResponse(list(bookings), safe=False)


def client_resources(request):


    queryset = Resource.objects.all()

    data = [
        {
            "title": r.title,
            "description": r.description,
            "fileUrl": r.file.url if r.file else None,
            "uploadDate": r.uploaded_at,
        }
        for r in queryset
    ]

    return JsonResponse(data, safe=False)


# ---------------------------------------------------------
#  FORMS
# ---------------------------------------------------------

@api_view(["POST"])
def create_form(request):
    data = request.data
    user = User.objects.get(id=data["created_by"])

    form = Form.objects.create(
        title=data["title"],
        created_by=user
    )

    for q in data["questions"]:
        question = FormQuestion.objects.create(
            form=form,
            label=q["label"],
            question_type=q["question_type"]
        )

        for option in q["list"]:
            FormOption.objects.create(question=question, text=option)

    return Response({"message": "Form saved", "form_id": form.id})



# ---------------------------------------------------------
#  SIMPLE TEST ROUTE
# ---------------------------------------------------------

def hello_world(request):
    return JsonResponse({"message": "Hello from API!"})



# ---------------------------------------------------------
#  AVAILABILITY
# ---------------------------------------------------------

class AvailabilityListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        slots = Availability.objects.filter(is_booked=False)
        serializer = AvailabilitySerializer(slots, many=True)
        return Response(serializer.data)



# ---------------------------------------------------------
#  BOOK SESSION
# ---------------------------------------------------------

class BookSessionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        availability_id = request.data.get('availability_id')
        name = request.data.get('name')
        age = request.data.get('age')
        email = request.data.get('email')
        notes = request.data.get('notes', 'Unpaid')

        if not all([availability_id, name, age, email]):
            return Response({'detail': 'All fields are required'}, status=400)

        try:
            slot = Availability.objects.get(id=availability_id, is_booked=False)
        except Availability.DoesNotExist:
            return Response({'detail': 'Slot not available'}, status=404)

        slot.is_booked = True
        slot.save()

        booking = Booking.objects.create(
            availability=slot,
            client_name=name,
            client_age=age,
            client_email=email,
            notes=notes
        )

        return Response({
            'detail': 'Booking successful',
            'booking_id': booking.id,
            'notes': booking.notes
        }, status=201)



# ---------------------------------------------------------
#  GET USER BOOKINGS (BY EMAIL)
# ---------------------------------------------------------

@api_view(['GET'])
def get_user_bookings(request, email):
    try:
        bookings = Booking.objects.filter(client_email=email).select_related('availability')

        booking_list = [{
            'id': b.id,
            'availability_id': b.availability.id,
            'client_name': b.client_name,
            'client_email': b.client_email,
            'client_age': b.client_age,
            'booked_at': b.booked_at.isoformat(),
            'notes': b.notes or 'Unpaid',
            'start_time': b.availability.start_time.isoformat(),
            'end_time': b.availability.end_time.isoformat(),
        } for b in bookings]

        return Response(booking_list)

    except Exception as e:
        return Response({'error': str(e)}, status=500)



# ---------------------------------------------------------
#  CANCEL BOOKING (RESTORES SLOT)
# ---------------------------------------------------------

@api_view(['POST'])
def cancel_booking(request, booking_id):
    try:
        booking = Booking.objects.get(id=booking_id)
        slot = booking.availability

        # restore slot to available
        slot.is_booked = False
        slot.save()

        # remove booking
        booking.delete()

        return Response({
            'message': 'Booking cancelled successfully',
            'availability_id': slot.id
        })

    except Booking.DoesNotExist:
        return Response({'error': 'Booking not found'}, status=404)

    except Exception as e:
        return Response({'error': str(e)}, status=500)



# ---------------------------------------------------------
#  LIST RESOURCES
# ---------------------------------------------------------

class ResourceListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        

        resources = Resource.objects.all()
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data)



# ---------------------------------------------------------
#  UPLOAD RESOURCE
# ---------------------------------------------------------

@csrf_exempt
def upload_resource_api(request):
    #if request.method != "POST":
    #    return JsonResponse({"error": "Method not allowed"}, status=405)

    title = request.POST.get("title")
    description= request.POST.get("description")
    file = request.FILES.get("file")
    
    if not title:
        return JsonResponse({"error": "Title is required"}, status=400)



    resource = Resource.objects.create(
        
        title=title,
        file=file,
        description=description,
        uploaded_by_id=1,
        
    )

    return JsonResponse({
        "message": "Resource uploaded successfully.",
        "resource": {
            "title": resource.title,
            "description": resource.description,
            "uploadDate": resource.uploaded_at.isoformat(),
        }
    })



# ---------------------------------------------------------
#  GET CLIENT RESOURCES BY EMAIL
# ---------------------------------------------------------

def client_resources_by_email(request):
    email = request.GET.get('email')

    if not email:
        return JsonResponse({'error': 'Email parameter required'}, status=400)

    try:
        client = User.objects.get(email=email)
    except User.DoesNotExist:
        return JsonResponse({'error': 'Client not found'}, status=404)

    resources = Resource.objects.filter(client=client).order_by("-upload_date")

    data = [{
        "title": r.title,
        "fileUrl": r.file.url if r.file else None,
        "link": r.link,
        "uploadDate": r.upload_date.isoformat(),
    } for r in resources]

    return JsonResponse(data, safe=False)
