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


def edit_event(request, id):
    if request.method == 'POST':
        data = json.loads(request.body)
        try: 
            event = Event.objects.get(id = id)
            event.event_name = data['event_name']
            event.event_date = data['event_date']
            event.save()
            return JsonResponse({'status': 'success'})
        except Event.DoesNotExist:
            return JsonResponse({'status': 'not found'}, status = 404)
    return JsonResponse({'status':'bad request'},status= 400)


def event_delete(request, event_id):
    event = get_object_or_404(Event, pk = event_id)
    if request.method == 'POST':
        event.is_deleted = True
        event.deleted_at = timezone.now()
        event.save()
    return redirect('home')