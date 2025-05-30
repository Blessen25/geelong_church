from django.urls import path
from .views import ContactListCreateView, EventListCreateView, Home
from . import views

urlpatterns = [

    path('contact/',ContactListCreateView.as_view()),
    path('event/',EventListCreateView.as_view()),
]