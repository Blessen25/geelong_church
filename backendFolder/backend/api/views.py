from django.shortcuts import render, get_object_or_404, redirect
from rest_framework import generics
from .models import Contact, Event
from .serializers import ContactSerializer, EventSerializer
from django.http import HttpResponse, JsonResponse
from .forms import EventForm
from django.utils import timezone
import json


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


def Event_delete(request, event_id):
    event = get_object_or_404(Event, pk = event_id)
    if request.method == 'POST':
        event.is_deleted = True
        event.deleted_at = timezone.now()
        event.save()
    return redirect('home')

def Edit_event(request, event_id):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)
            event = Event.objects.get(id = event_id)
            event.event_name = data.get('event_name')
            event.event_date = data.get('event_date')
            event.save()
            return JsonResponse({'success': True})
        except Event.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Event not found.'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method.'})