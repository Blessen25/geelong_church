from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Home , Event_delete, edit_event
from . import views

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
    path('event/delete/<int:event_id>/',Event_delete,name='Event_delete'),
    
]