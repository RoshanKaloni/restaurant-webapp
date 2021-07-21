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
    let popStr = "";
    popStr = popStr + "<h5> Cart for your items in my shopping cart </h5><div class='mx-2 my-2'>";
    let i = 1;
    for (let item in cart){
        popStr = popStr + "<b>" + i + "</b>. ";
        popStr = popStr + cart[item][1] + "   Qty: " + cart[item][0] + '<br>';
        i = i+1;
    }
    popStr = popStr + "</div> <a href='/templates/cart_checkout.html'><button class='btn btn-primary' id ='checkout'>Checkout</button></a> <button class='btn btn-primary' onclick='clearCart(cart)' id ='clearCart'>Clear Cart</button>"
    document.getElementById('popcart').setAttribute('data-content', popStr);
    $('#popcart').popover('show');
}

function clearCart(cart) {
    console.log('in copybase2')
    for (let item in cart) {
        document.getElementById('div' + item).innerHTML = '<button type="button" id="' + item + '" class="btn btn-outline-primary cartbutton">Add To Cart</button>'
    }
    localStorage.clear();
    cart = {};
    updateCart(cart);
    updatePopover(cart)
}