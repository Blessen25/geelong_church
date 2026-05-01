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

    
from django.db import models

class PrayerRequest(models.Model):
    fullname = models.CharField(max_length=30)
    emailaddress = models.EmailField(max_length=50)
    phonenumber = models.CharField(max_length=30, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)

    address = models.CharField(max_length=200, blank=True, null=True)
    dateofbirth = models.CharField(max_length=20, blank=True, null=True)  # or DateField if you prefer
    contactmethod = models.CharField(max_length=20)

    visitingfirsttime = models.CharField(max_length=10)
    hearaboutus = models.CharField(max_length=30)
    hearaboutother = models.CharField(max_length=60, blank=True, null=True)

    attendanotherchurch = models.CharField(max_length=10)
    ifyeschurchname = models.CharField(max_length=100, blank=True, null=True)

    areasforprayer = models.CharField(max_length=50)
    areaother = models.CharField(max_length=50, blank=True, null=True)

    prayerwithsomeone = models.CharField(max_length=10)
    contactfrompastor = models.CharField(max_length=10)

    prayerrequestmessage = models.TextField(max_length=1500)

    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.fullname

class MeetingRequest(models.Model):
    fullname = models.CharField(max_length= 50)
    dateofbirth = models.DateField()
    mobilenumber = models.CharField(max_length=20)
    country = models.CharField(max_length=50, blank=True, null=True)
    emailaddress = models.EmailField(max_length=80)
    address = models.TextField(blank=True, null=True)

    additional_attendees_count = models.PositiveBigIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.fullname
    
class MeetingAttendee(models.Model):
    meeting = models.ForeignKey(

        MeetingRequest,
        on_delete= models.CASCADE,
        related_name= 'attendees',
    )

    name = models.CharField(max_length=100)
    age = models.PositiveBigIntegerField()

    def __str__(self):
        return self.name
    

