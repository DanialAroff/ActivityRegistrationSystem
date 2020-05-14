var registerButton = document.querySelectorAll(".register");
var registerButton = document.querySelectorAll(".registerr");
var registerButton = document.querySelectorAll(".registerrr");
var cancelButton = document.querySelectorAll(".cancel");
var cancelButton = document.querySelectorAll(".cancell");
var cancelButton = document.querySelectorAll(".cancelll");

var index = 0;

function setIndex(n) {
    index = n;
}

var registeredColor = "#393c83";
function register() {
    var cardButton = document.querySelectorAll(".carddd button");
    var x = document.getElementById("registered-label");
    x.style.display = "block";
    
        cardButton[index].innerHTML = "Registered";
        cardButton[index].style.color = "white";
        cardButton[index].style.backgroundColor = "#1D6796";
        cardButton[index].style.backgroundColor = registeredColor;
}
function registerr() {
    var cardButton = document.querySelectorAll(".carddd button");
    var y = document.getElementById("registered-labell");
    y.style.display = "block"; 
    
        cardButton[index].innerHTML = "Registered";
        cardButton[index].style.color = "white";
        cardButton[index].style.backgroundColor = "#1D6796";
        cardButton[index].style.backgroundColor = registeredColor;
}
function registerrr() {
    var cardButton = document.querySelectorAll(".carddd button");
    var z = document.getElementById("registered-labelll");
    z.style.display = "block"; 
    
        cardButton[index].innerHTML = "Registered";
        cardButton[index].style.color = "white";
        cardButton[index].style.backgroundColor = "#1D6796";
        cardButton[index].style.backgroundColor = registeredColor;
}

var notRegisteredColor = "#00C896";
function cancel(){
    var cardButton = document.querySelectorAll(".carddd button");
    var cancelCardButton = document.querySelectorAll(".carddd button");
    var x = document.getElementById("registered-label");

    if (cardButton[index].innerHTML=="Registered"){
        cancelCardButton[index].innerHTML = "View More";
        x.style.display = "none";
    }
    cardButton[index].style.backgroundColor = "#E49D22";
    cardButton[index].style.backgroundColor = notRegisteredColor;
}

function cancell(){
    var cardButton = document.querySelectorAll(".carddd button");
    var cancelCardButton = document.querySelectorAll(".carddd button");
    var x = document.getElementById("registered-labell");

    if (cardButton[index].innerHTML=="Registered"){
        cancelCardButton[index].innerHTML = "View More";
        x.style.display = "none";
    }
    cardButton[index].style.backgroundColor = "#E49D22";
    cardButton[index].style.backgroundColor = notRegisteredColor;
}

function cancelll(){
    var cardButton = document.querySelectorAll(".carddd button");
    var cancelCardButton = document.querySelectorAll(".carddd button");
    var x = document.getElementById("registered-labelll");

    if (cardButton[index].innerHTML=="Registered"){
        cancelCardButton[index].innerHTML = "View More";
        x.style.display = "none";
    }
    cardButton[index].style.backgroundColor = "#E49D22";
    cardButton[index].style.backgroundColor = notRegisteredColor;
}
