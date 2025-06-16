from django.db import models;
from django.utils import timezone
import phonenumbers
from phonenumbers import geocoder
import logging

logger = logging.getLogger(__name__)
# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField(max_length=500)
    country = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)


    def save(self, *args, **kwargs):
        if self.is_deleted and self.deleted_at is None:
            self.deleted_at = timezone.localtime(timezone.now())
        elif not self.is_deleted:
            self.deleted_at = None

        super().save(*args, **kwargs)

        def __str__(self):
            return self.name

    class Meta:
        ordering = ['-created_at']

class Event(models.Model):
    event_name = models.CharField(max_length=30)
    event_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        # Set deleted_at in user's local timezone
        if self.is_deleted and self.deleted_at is None:
            self.deleted_at = timezone.localtime(timezone.now())
        elif not self.is_deleted:
            self.deleted_at = None

        super().save(*args, **kwargs)

    def __str__(self):
        return self.event_name
    
    class Meta:
        ordering = ['-event_date']

    
