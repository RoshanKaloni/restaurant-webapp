function reservation_validate() {
    let username = document.reservation_form.uname.value;
    let reg_name = /^[a-zA-Z\s]+$/;
    let mobile_number = document.reservation_form.MobileNumber.value;
    let visitors = document.reservation_form.Numberofvisitor.value;
    let eid = document.reservation_form.email.value;
    let Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    let Reference = document.reservation_form.reference_id.value;
    let datetime = document.reservation_form.datetime.value;
    let date = new Date();
    let min = date.getMinutes()
    if (min < 10){
        min = '0' + min
    }
    let now_date = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + "T" + date.getHours() + ":" + min
    let dataPreview = `You've entered the following details: 
    Full Name: ${username}
    Mobile Number: ${mobile_number}
    Number of Visitors: ${visitors}
    Email Address: ${eid}
    Reference ID: ${Reference}
    Date : ${datetime}`;

    if(reg_name.test(username) === "") {
        document.getElementById("nameErr").innerHTML = 'Enter Valid Name';
        return false;
    }

    if(mobile_number.length !== 10) {
        document.getElementById("Mobile_error").innerHTML = 'Please Enter a valid Mobile number';
        return false;
    }

    if(visitors >= 11) {
        document.getElementById("visitor_error").innerHTML = 'We can serve Maximum of 10 people on a table. Sorry!!!';
        return false;
    }

    if(Email.test(eid) === false) {
        document.getElementById("eid_error").innerHTML = 'Enter Valid Email Id';
        return false;
    }

    if(Reference < 10) {
        document.getElementById("ref_error").innerHTML = 'Enter Valid Reference ID!!!';
        return false;
    }

    if(datetime < now_date) {
        document.getElementById("datetime_error").innerHTML = 'You cannot choose a past time';
        return false;
    }

    alert(dataPreview);
    return true;
}

function new_func_open() {
    document.getElementById('id01').style.display='block';
}

function new_func_close() {
    document.getElementById('id01').style.display='none';
}

function new_func_open2() {
    document.getElementById('id02').style.display='block';
    }