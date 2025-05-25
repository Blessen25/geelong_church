from .models import Event, Contact;
from rest_framework import serializers;

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id','name','email','phone_number','subject','messsage','created_at','is_deleted','deleted_at']
        read_only_fields = ['id','created_at','is_deleted','deleted_at']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','event_name','event_date','created_at','is_deleted','deleted_at']
        read_only_fields = ['id','created_at','is_deleted','deleted_at']