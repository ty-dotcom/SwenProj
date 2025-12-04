from django.urls import path
from .views import (
    hello_world,
    AvailabilityListView,
    BookSessionView,
    get_user_bookings,
    cancel_booking,
    client_resources_by_email,
    ResourceListView,
    client_resources,
    upload_file,
    upload_resource_api,
)



urlpatterns = [
    path("hello/", hello_world),
    path("client/resources/", client_resources),
    # Booking + availability
    path("availability/", AvailabilityListView.as_view()),
    path("book/", BookSessionView.as_view(), name="book"),
    path("bookings/user/<str:email>/", get_user_bookings, name="user_bookings"),
    path("bookings/<int:booking_id>/cancel/", cancel_booking, name="cancel_booking"),
    path("bookings/me/", get_user_bookings),

    # Resources
    path("upload/", upload_resource_api, name="upload_file"),
    #path("resources/client/", client_resources_by_email, name="client_resources"),
    path("resources/", ResourceListView.as_view(), name="resource_list"),
]
