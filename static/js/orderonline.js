/* function openPage(pageName,elmnt,color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    }
    // Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();


    // finding cart from local storage
    if(localStorage.getItem('cart') == null){
        cart = {};
    } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    updateCart(cart);
    }
    // If add to cart button is clicked, Increment the item
    $('.divpr').on( "click", "button.cartbutton", function(){
    let idstr = this.id.toString();
    if (cart[idstr] !== undefined){
        cart[idstr] = cart[idstr] + 1;
    } else {
        cart[idstr] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    updateCart(cart);
    });

    function updateCart(cart) {
    for (let item in cart){
        if (cart[item] !== 0) {
            console.log(cart[item])
            console.log(typeof(cart[item]))
        document.getElementById('div' + item).innerHTML = "<button id='minus" + item + "' class='btn btn-primary minus'>-</button> <span id='val" + item + "''>" + cart[item] + "</span> <button id='plus" + item + "' class='btn btn-primary plus'> + </button> ";
        updatePopover(cart)
        } else {
            document.getElementById('div' + item).innerHTML = '<button type="button" id="' + item + '" class="btn btn-outline-primary cartbutton">Add To Cart</button>'
            console.log('Value is zero')
            delete cart[item]
            updatePopover(cart)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;

    }

    $('.divpr').on("click", "button.minus", function() {
    let a = this.id.slice(7,);
        cart['pr' + a] = Math.max(0, (cart['pr' + a] - 1))
        document.getElementById('valpr' + a).innerHTML = cart['pr' + a];
        updateCart(cart);
    });
    $('.divpr').on("click", "button.plus", function() {
    let a = this.id.slice(6,);
    cart['pr' + a] = cart['pr' + a] + 1;
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a];
    updateCart(cart);
    });
 */

function openPage(pageName,elmnt,color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    }
    // Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();


    // finding cart from local storage
    if(localStorage.getItem('cart') == null){
        cart = {};
    } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    }
    updateCart(cart);
    // If add to cart button is clicked, Increment the item
    $('.divpr').on( "click", "button.cartbutton", function(){
        cart = JSON.parse(localStorage.getItem("cart"))
    let idstr = this.id.toString();
    if (cart[idstr] !== undefined){
        cart[idstr][0] = cart[idstr][0] + 1;
    } else {
        let qty = 1;
        let rs = document.getElementById('price'+idstr).innerHTML
        rs = rs.slice(4,);
        name =document.getElementById('name'+idstr).innerHTML
        cart[idstr] = [qty,name,rs];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    updateCart(cart);
    });

    function updateCart(cart) {
    for (let item in cart){
        if (cart[item][0] !== 0) {
            console.log(cart[item])
            console.log(typeof(cart[item]))
        document.getElementById('div' + item).innerHTML = "<button id='minus" + item + "' class='btn btn-primary minus'>-</button> <span id='val" + item + "''>" + cart[item][0] + "</span> <button id='plus" + item + "' class='btn btn-primary plus'> + </button> ";
        updatePopover(cart)
        } else {
            document.getElementById('div' + item).innerHTML = '<button type="button" id="' + item + '" class="btn btn-outline-primary cartbutton">Add To Cart</button>'
            console.log('Value is zero')
            delete cart[item]
            updatePopover(cart)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
    }

    $('.divpr').on("click", "button.minus", function() {
    let a = this.id.slice(7,);
        cart['pr' + a][0] = Math.max(0, (cart['pr' + a][0] - 1))
        document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
        updateCart(cart);
    });
    $('.divpr').on("click", "button.plus", function() {
    let a = this.id.slice(6,);
    cart['pr' + a][0] = cart['pr' + a][0] + 1;
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
    updateCart(cart);
    });
