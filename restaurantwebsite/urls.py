from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='restaurant-home'),
    path('menu', views.menu, name='menu'),
    path('ContactForm/', views.Contact, name = 'ContactForm'),
    path('LoginForm/', views.LoginForm, name = 'LoginForm'),
    path('Logout/', views.Logout, name = 'Logout'),
    path('RegisterForm/', views.Register, name = 'RegisterForm'),
    path('aboutus', views.aboutus, name='aboutus'),
    path('orderonline', views.orderonline, name='orderonline'),
    path('reservation', views.reservation, name='reservation'),
    path('contactus', views.contactus, name='contactus'),
    path('cart_checkout', views.cart_checkout, name='cart_checkout'),
    path('templates/cart_checkout.html', views.cart_checkout, name='cart_checkout'),
    path('trial/', views.trial, name='trial')
]
