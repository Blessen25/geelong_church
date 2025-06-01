from django.shortcuts import render
from rest_framework import generics
from .models import Contact, Event
from .serializers import ContactSerializer, EventSerializer
from django.http import HttpResponse

# Create your views here.


class ContactListCreateView(generics.ListCreateAPIView):
    queryset = Contact.objects.filter(is_deleted = False)
    serializer_class = ContactSerializer

class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.filter(is_deleted = False)
    serializer_class = EventSerializer


def Home(request):
    return render(request, 'home.html')

def Login(request):
    return render(request, 'login.html')

def Base(request):
    return render(request, 'base.html')