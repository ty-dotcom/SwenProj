from django.db import models
from django.contrib.auth.models import User


def resource_upload_path(instance, filename):
    return f"resources/{instance.id}/{filename}"


class Availability(models.Model):
    counselor = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    is_booked = models.BooleanField(default=False)


class Form(models.Model):
    title = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class FormQuestion(models.Model):
    form = models.ForeignKey(Form, related_name="questions", on_delete=models.CASCADE)
    label = models.CharField(max_length=255)
    question_type = models.CharField(max_length=20)


class FormOption(models.Model):
    question = models.ForeignKey(FormQuestion, related_name="options", on_delete=models.CASCADE)
    text = models.CharField(max_length=255)


class Booking(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings", null=True, blank=True)
    availability = models.OneToOneField(Availability, on_delete=models.CASCADE)
    booked_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True, null=True)
    client_name = models.CharField(max_length=255, blank=True, null=True)
    client_age = models.IntegerField(blank=True, null=True)
    client_email = models.EmailField(blank=True, null=True)


class CancellationLog(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.SET_NULL, null=True)
    cancelled_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    cancelled_at = models.DateTimeField(auto_now_add=True)
    reason = models.TextField(blank=True, null=True)


class VideoSession(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    stream_url = models.URLField()
    started_at = models.DateTimeField(auto_now_add=True)
    ended_at = models.DateTimeField(null=True, blank=True)
    host_present = models.BooleanField(default=False)


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(null=True, blank=True)


class MessageAttachment(models.Model):
    message = models.ForeignKey(Message, related_name='attachments', on_delete=models.CASCADE)
    file = models.FileField(upload_to='message_attachments/')
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(max_length=50)
    paid_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='completed')


class Invoice(models.Model):
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE)
    issued_to = models.ForeignKey(User, on_delete=models.CASCADE)
    invoice_file = models.FileField(upload_to='invoices/')
    issued_at = models.DateTimeField(auto_now_add=True)


class Resource(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    file = models.FileField(upload_to=resource_upload_path, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    uploaded_by_id = models.IntegerField()
    

class DownloadLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    downloaded_at = models.DateTimeField(auto_now_add=True)


class ProgressReport(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    counselor = models.ForeignKey(User, related_name='written_reports', on_delete=models.CASCADE)
    session = models.ForeignKey(Booking, on_delete=models.CASCADE)
    summary = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ReportLog(models.Model):
    report = models.ForeignKey(ProgressReport, on_delete=models.CASCADE)
    changed_by = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    change_summary = models.TextField()


class FormResponse(models.Model):
    form = models.ForeignKey(Form, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    responses = models.JSONField()
    submitted_at = models.DateTimeField(auto_now_add=True)
