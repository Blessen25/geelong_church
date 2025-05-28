from django.db import models;
from django.utils import timezone
import phonenumbers
from phonenumbers import geocoder

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField(max_length=1000)
    country = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)


    def save(self, *args, **kwargs):
        try:
            parsed_number = phonenumbers.parse(self.phone_number)
            self.country = geocoder.country_name_for_number(parsed_number,"en")
            if not self.country:
                self.country = 'Unknown'
        except phonenumbers.NumberParseException:
            self.country = "Unknown"
        
        if self.is_deleted and self.deleted_at is None:
            self.deleted_at = timezone.localtime(timezone.now())
        elif not self.is_deleted:
            self.deleted_at = None
        
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.subject}"
    
    class Meta:
        ordering = ['-created_at']

class Event(models.Model):
    event_name = models.CharField(max_length=100)
    event_date = models.DateTimeField()
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

    
