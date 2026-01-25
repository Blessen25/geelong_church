from .models import Event, Contact, PrayerRequest;
from rest_framework import serializers;

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id','name','email','phone_number','subject','message','country','created_at','is_deleted','deleted_at']
        read_only_fields = ['id','created_at','is_deleted','deleted_at']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','event_name','event_date','created_at','is_deleted','deleted_at']
        read_only_fields = ['id','created_at','is_deleted','deleted_at']

class PrayerRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrayerRequest
        fields = [
            'id',
            'fullname',
            'emailaddress',
            'phonenumber',
            'country',
            'address',
            'dateofbirth',
            'contactmethod',
            'visitingfirsttime',
            'hearaboutus',
            'hearaboutother',
            'attendanotherchurch',
            'ifyeschurchname',
            'areasforprayer',
            'areaother',
            'prayerwithsomeone',
            'contactfrompastor',
            'prayerrequestmessage',
            'created_at',
            'is_deleted',
        ]
        read_only_fields = ['id', 'created_at', 'is_deleted']