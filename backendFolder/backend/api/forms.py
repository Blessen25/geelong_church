from django import forms
from .models import Event
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['event_name', 'event_date']

class AdminSignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

    def save(self, commit= True):
        user = super().save(commit=False)
        user.is_staff = True

        if commit:
            user.save()
        return user
