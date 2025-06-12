from django.shortcuts import render, get_object_or_404, redirect
from rest_framework import generics
from .models import Contact, Event
from .serializers import ContactSerializer, EventSerializer
from django.http import HttpResponse, JsonResponse
from .forms import EventForm
from django.utils import timezone
import json
from django.contrib.auth import authenticate, login, get_user_model, logout;


# Create your views here.


class ContactListCreateView(generics.ListCreateAPIView):

    queryset = Contact.objects.filter(is_deleted = False)
    serializer_class = ContactSerializer

class EventListCreateView(generics.ListCreateAPIView):

    queryset = Event.objects.filter(is_deleted = False)
    serializer_class = EventSerializer


def Home(request):

    events = Event.objects.filter(is_deleted = False)
    contacts = Contact.objects.filter(is_deleted = False)
    return render(request, 'home.html', {'events' : events, 'contacts' : contacts} )

def Contact_fn(request):
    
    contact = Contact.objects.filter(is_deleted = False)
    return render(request, 'contact.html',{'contacts' : contact})

def Event_fn(request):
    
    event = Event.objects.filter(is_deleted = False)
    return render(request, 'event.html',{'events' : event})


User = get_user_model()
def User_login(request):

    context = {'username': '', 'password': ''}
    if request.method == 'POST':
        if request.POST['username'] == '' and request.POST['password'] == '':
            context['username_error'] = 'Username is required'
            context['password_error'] = 'Password is required'
            return render(request, 'login.html', context)
        elif request.POST['username'] == '':
            context['username_error'] = 'Username is required'
            return render(request, 'login.html', context)
        elif request.POST['password'] == '':
            context['password_error'] = 'Password is required'
            return render(request, 'login.html', context)
        else:
            username = request.POST['username']
            password = request.POST['password']

            context['username'] = username
            context['password'] = password

            try:
                
                user = User.objects.get(username = username)
            except User.DoesNotExist:
                context['username_error'] = 'Username does not exist'
                return render(request, 'login.html', context)
            
            user = authenticate(request, username = username, password = password)
            if user is None:
                context['credential_error'] = 'Invalid credentials'
                return render(request, 'login.html', context)
            
            login(request, user)
            return redirect('home')

    return render(request, 'login.html', context)

def User_logout(request):
    logout(request)
    return redirect('login')

def Base(request):

    return render(request, 'base.html')


def Event_delete(request, event_id):

    event = get_object_or_404(Event, pk = event_id)
    if request.method == 'POST':
        event.is_deleted = True
        event.deleted_at = timezone.now()
        event.save()
    return redirect('home')

def Event_deleteevent(request, event_id):
        event = get_object_or_404(Event, pk = event_id)
        if request.method == 'POST':
            event.is_deleted = True
            event.deleted_at = timezone.now()
            event.save()
        return redirect('Event_fn')

def Event_deleteonevent(request, event_id):

    event = get_object_or_404(Event, pk = event_id)
    if request.method == 'POST':
        event.is_deleted = True
        event.deleted_at = timezone.now()
        event.save()
    return redirect('event')

def Edit_event(request, event_id):
    
    print(">>> Edit_event view called with ID:", event_id)
    if request.method == 'POST':
        print(">>> Edit_event view called with ID entered post method:", event_id)
        
        try:
            print(">>> Edit_event view called with ID entered Try method:", event_id)
            data = json.loads(request.body)
            event = Event.objects.get(id = event_id)
            event.event_name = data.get('event_name')
            event.event_date = data.get('event_date')
            event.save()
            return JsonResponse({'success': True})
        except Event.DoesNotExist:
            print(">>> Edit_event view called with ID entered except method:", event_id)
            return JsonResponse({'success': False, 'error': 'Event not found.'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method.'})