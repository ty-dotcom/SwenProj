# api/urls.py

from django.urls import path
from .views import (
    hello_world,
    AvailabilityListView,
    BookSessionView,
    MySessionsView
)

urlpatterns = [
    path('availability/', AvailabilityListView.as_view(), name='availability'),
    path('book/', BookSessionView.as_view(), name='book'),
    path('my-sessions/', MySessionsView.as_view(), name='my_sessions'),
]