from django.contrib import admin

from .models import Menu, Reservation, PlaceOrders, ContactUS

admin.site.register(Menu)
admin.site.register(Reservation)
admin.site.register(PlaceOrders)
admin.site.register(ContactUS)