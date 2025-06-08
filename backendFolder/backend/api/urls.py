from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Event_delete, Edit_event;

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
    path('event/delete/<int:event_id>/',Event_delete,name='Event_delete'),
    path('event/edit/<int:event_id>/',Edit_event,name='Edit_event'),
    
]