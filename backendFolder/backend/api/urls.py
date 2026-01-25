from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Event_delete, Edit_event,Event_deleteevent, prayer_page;

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
    path("prayers/", prayer_page, name="prayer_page"),
    path('event/delete/<int:event_id>/',Event_delete,name='Event_delete'),
    path('event/edit/<int:event_id>/',Edit_event,name='Edit_event'),
    path('event/deleteeventfn/<int:event_id>/',Event_deleteevent, name='Event_deleteevent'),
]