from django import forms
from .models import Event
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm;

class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['event_name', 'event_date']

class AdminSignupForm(UserCreationForm):
    email = forms.EmailField(required=True)
    username = forms.CharField(required=True)
    password1 = forms.CharField(
        label="Password",
        strip=False,
        widget=forms.PasswordInput,
        required=True
    )
    password2 = forms.CharField(
        label="Confirm Password",
        widget=forms.PasswordInput,
        strip=False,
        required=True
    )
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class CustomPasswordResetForm(PasswordResetForm):
    email = forms.EmailField(
        max_length=254,
        widget=forms.EmailInput(attrs={
            'class': 'inputcstmlogin',
            'placeholder': 'Enter your email'
        }),
        label='Email'
    )

class CustomSetPasswordForm(SetPasswordForm):
    new_password1 = forms.CharField(
        label='New password',
        widget=forms.PasswordInput(attrs={
            'class': 'inputcstmlogin',
            'placeholder': 'Enter your password',
            'id': 'password1',
            'maxlength': '20',
            'onkeyup': 'ValidatePassword()',
        })
    )
    new_password2 = forms.CharField(
        label='Confirm new password',
        widget=forms.PasswordInput(attrs={
            'class': 'inputcstmlogin',
            'placeholder': 'Confirm your password',
            'id': 'password2',
            'maxlength': '20',
        })
    )