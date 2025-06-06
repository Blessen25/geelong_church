from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Home , event_delete, event_edit
from . import views

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
    path('event/delete/<int:event_id>/',event_delete,name='event_delete'),
    
]