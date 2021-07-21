from django.shortcuts import render
from .models import Menu, Reservation, PlaceOrders


def home_page(request):
    params = {'Name': 'Tejas', 'work': 'Building a website'}
    return render(request, "homePage.html", params)


@login_required(login_url='LoginForm')
def OrderNow(request):
    return render(request, 'OrderNow.html')


def trial(request):
    return render(request, 'trial.html')


def LoginForm(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return HttpResponseRedirect('/OrderNow')
            else:
                messages.info(request, 'Username OR Password is incorrect')

        return render(request, 'LoginForm.html')


def Login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return HttpResponseRedirect('/')
            else:
                messages.info(request, 'Username OR Password is incorrect')

        return render(request, 'LoginForm.html')


def Logout(request):
    logout(request)
    return HttpResponseRedirect('/LoginForm')


def Register(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    else:
        form = CreateUserForm()

        if request.method == 'POST':
            form = CreateUserForm(request.POST)

            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, user + ' user was created')
                return HttpResponseRedirect('/LoginForm')

        context = {'form': form}
        return render(request, 'RegisterForm.html', context)


def orderonline(request):
    a = ['Starter', 'Main course', 'Roti and Rice', 'Drinks', 'Desserts', 'Specials']
    dish = {}
    for i in a:
        b = Menu.objects.filter(sub_category=i)
        dish[i] = b
    dishes = dict(category=a, items1=dish)
    return render(request, "orderonline.html", dishes)


def menu(request):
    return render(request, "menu.html", {'title': 'Menu'})


def reservation(request):
    if request.method == 'POST':
        name = request.POST.get('uname')
        mobile = request.POST.get('MobileNumber')
        visitors = request.POST.get('Numberofvisitor')
        email = request.POST.get('email')
        reference = request.POST.get('reference_id')
        datetime = request.POST.get('datetime')
        dbdatetime = ''
        for i in datetime:
            if i == 'T':
                dbdatetime = dbdatetime + " "
            else:
                dbdatetime = dbdatetime + i
        print(dbdatetime)
        reserve = Reservation(customer_name=name, mobile_number=mobile, Number_of_visitors=visitors, email_id=email,
                              transaction_id=reference, datetime=dbdatetime)
        reserve.save()
    return render(request, "reservation.html", {'title': 'Book a Table'})

def Contact(request):
    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/ContactForm')

    return render(request, 'Contactform.html', {'Form': form})

def contactus(request):
    return render(request, "contactus.html", {'title': 'Contact Us'})


def aboutus(request):
    return render(request, "aboutus.html", {'title': 'About Us'})


def cart_checkout(request):
    if request.method == 'POST':
        name = request.POST.get('uname', "")
        email = request.POST.get('email', '')
        address1 = request.POST.get('address1', '')
        address2 = request.POST.get('address2', '')
        city = request.POST.get('city', '')
        state = request.POST.get('state', '')
        pin_code1 = request.POST.get('zip')
        phone_number = request.POST.get('phonenumber')
        order_sum = request.POST.get('itemsJson')
        print(name, email, address1, address2, city, state, pin_code1, phone_number, order_sum)
        checkout = PlaceOrders(email=email, name=name, address1=address1, address2=address2, city=city, state=state,
                               pin_code=pin_code1, number=phone_number)
        checkout.save()
    menu_for_checkout = {'bag': Menu.objects.all()}
    return render(request, "cart_checkout.html", menu_for_checkout)
