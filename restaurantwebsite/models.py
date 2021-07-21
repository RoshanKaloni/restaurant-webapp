from django.db import models
from datetime import datetime


class Menu(models.Model):
    dish_id = models.AutoField(primary_key=True)
    dish_name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='static/css/images', default="")
    price = models.IntegerField(default=150)
    desc = models.CharField(max_length=300)
    sub_category = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.dish_name


now = datetime.now()
dt_string = now.strftime("%Y/%m/%d %H:%M")


class Reservation(models.Model):
    reservation_id = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=50, default='')
    mobile_number = models.IntegerField(default=9999999999)
    Number_of_visitors = models.IntegerField(default='4')
    email_id = models.EmailField(default='')
    transaction_id = models.CharField(max_length=30)
    datetime = models.DateTimeField(default=now)

    def __str__(self):
        return self.customer_name


class PlaceOrders(models.Model):
    oder_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default='')
    email = models.EmailField(default='')
    address1 = models.CharField(max_length=200, default="")
    address2 = models.CharField(max_length=200, default="")
    city = models.CharField(max_length=100, default="")
    state = models.CharField(max_length=100, default="")
    pin_code = models.CharField(max_length=8, default='123456')
    number = models.CharField(max_length=10, default='9999999999')

    def __int__(self):
        return self.oder_id

class ContactUS(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default=None)
    mobile_number = models.CharField(max_length=100 ,default=None)
    Query = models.TextField()

    def __str__(self):
        return self.name