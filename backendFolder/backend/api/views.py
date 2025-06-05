from django.shortcuts import render, get_object_or_404, redirect
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
    events = Event.objects.filter(is_deleted = False)
    return render(request, 'home.html', {'events' : events})

def Login(request):
    return render(request, 'login.html')

def Base(request):
    return render(request, 'base.html')


def event_edit(request, pk):
    event = get_object_or_404(Event, pk = pk)
    