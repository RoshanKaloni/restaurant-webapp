from django import forms
from .models import ContactUS
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class ContactForm(forms.ModelForm):

    class Meta:
        model = ContactUS
        fields = '__all__'

        widgets = {
            'name': forms.TextInput(attrs={'class' : 'form-control'}),
            'email': forms.TextInput(attrs={'class' : 'form-control'}),
            'mobile_number': forms.TextInput(attrs={'class' : 'form-control'}),
            'Query': forms.Textarea(attrs={'class' : 'form-control', 'rows' : '3'})

        }

class CreateUserForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

#        widgets = {
#            'username': forms.TextInput(attrs={'class' : 'form-control', 'id' : 'inputUserame', 'placeholder':"Username"}),
#            'email': forms.EmailInput(attrs={'class' : 'form-control', 'id':"inputEmail", 'placeholder':"Email address"}),
#            'password1': forms.PasswordInput(attrs={'class' : 'form-control', 'id':"inputPassword", 'placeholder':"Password"}),
#            'password2': forms.PasswordInput(attrs={'class' : 'form-control', 'id':"inputConfirmPassword", 'placeholder':"Password"}),
#        }

