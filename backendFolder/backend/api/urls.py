from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Home , event_delete, edit_event
from . import views

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
    path('event/delete/<int:event_id>/',event_delete,name='event_delete'),
    path('events/edit/<int:id>/', edit_event, name='edit_event'),

    
]