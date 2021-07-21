updatecheckout()
function updatecheckout() {
    if (localStorage.getItem('cart') == null) {
        var cart = {};
    } else {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    console.log(cart);
    var sum = 0;
    var total = 0;
    if ($.isEmptyObject(cart)) {
        // If object is empty
        mystr = "<p>Your cart is empty, please add some items before checking out ! </p>"
        document.getElementById('items_in_your_checkout2').innerHTML = mystr
        /*$('#items_in_your_checkout').change( mystr); */
    }

    for (item in cart) {

        let name = cart[item][1];
        let qty = cart[item][0];
        let price = cart[item][2]*qty;
        sum = sum +qty;
        total = total + price;
        mystr = `        <li class="list-group-item d-flex justify-content-between align-items-center">
                   ${name}
                    <span class="badge badge-primary badge-pill" style="text-align-last: center">${qty}</span>
                    <span class="badge badge-primary badge-pill">${price}</span>
                </li>`
        $('#items_in_your_checkout').append(mystr);
        document.getElementById('final_qty_total').innerHTML = "Total Items = "+sum + " Total Payable =  " + total;
    }
    /*document.getElementById('cart').innerHTML = sum; */

}

$('#itemsJson').val(JSON.stringify(cart));
localStorage.clear();


