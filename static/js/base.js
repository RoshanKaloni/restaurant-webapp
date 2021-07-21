cart = JSON.parse(localStorage.getItem('cart'));
if(localStorage.getItem('cart') == null){
        cart = {};
    } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    }

    $('#popcart').popover();
    updatePopover(cart);

function updatePopover(cart)
{
    console.log(cart)
    let popStr = "";
    popStr = popStr + "<h6> Dishes in your Cart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h6><div class='mx-2 my-2'>";
    let i = 1;
    for (let item in cart){
        console.log('inside cart')

        popStr = popStr + "<b>" + i + "</b>. ";
        popStr = popStr + cart[item][1] + ": - " + cart[item][0] + ' <div style="float: right">Price: ' + cart[item][2]*cart[item][0] + '</div><br>';
        i = i+1;
        }
    popStr = popStr + "</div> <a href='/templates/cart_checkout.html'><button class='btn btn-primary' id ='checkout'>Checkout</button></a> <button class='btn btn-primary' onclick='clearCart(cart)' id ='clearCart' style='float: right'>Clear Cart</button>"
     document.getElementById('popcart').setAttribute('data-content', popStr);
    $('#popcart').popover();
    updatecheckout()
}

function clearCart(cart) {

    console.log("in base.js")
    localStorage.clear();
    cart = {};
    updateCart(cart);
    updatePopover(cart);
}