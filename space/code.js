$(document).ready(function(){
    $(".navigation .navbar .logo-toggle-container .toggle-box").click(function(){
        $(".navigation .menu").stop().slideToggle();
    });
});
function formValidate() { // This starts the registration validation process.
    var x = document.forms["myForm"]["fName"].value; // This sets the variable for the first name.
    var y = document.forms["myForm"]["lName"].value; // This sets the variable for the last name.
    var z = document.forms["myForm"]["bNum"].value; // This sets the variable for the badge number.
    let n = x + ' ' + y;

    if(x == "") { // this validates the first name
        alert("Please enter first name");
        return false;
    }
    if(y == "") { // this validates the last name
        alert("Please enter last name");
        return false;
    }
    if(z == "") { // this validates the badge number
        alert("Please enter badge number");
        return false;
    }
    if(n.length > 20){ // this validates the length of the full name with space between
        alert("Please re-enter first and last name");
        return false;
    }
    else { // this dispays the string on the screen
        (span = document.getElementById("registrationDisplay"));
        span.innerHTML = n + ' ' + z;
        document.getElementById("myRegForm").style.display = "none";

    }
}
function startTheCountdown(){ //This starts the countdown process
    var countdown = 10;

    setInterval(function() {
        countdown--;
        if(countdown >= 0) {
            (span = document.getElementById("countdownDisplay")); 
            span.innerHTML = countdown;
        }
        if(countdown < 5) {
            (span = document.getElementById("halfwayDisplay"));
            span.innerHTML = "Warning! Less than 1/2 way to launch time left = ";
        }
    
        if(countdown === 0) {
            (span = document.getElementById("countdownDisplay"));
            span.innerHTML = "Blast Off!"
            clearInterval(countdown);
        }
    }, 1000);
}