from django.contrib import admin
from .models import Availability, Booking, CancellationLog

admin.site.register(Availability)
admin.site.register(Booking)
admin.site.register(CancellationLog)
