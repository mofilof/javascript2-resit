/*
let vanilla = document.getElementById('vanilla');
let chocolate = document.getElementById('chocolate');

function storevalues() {
  sessionStorage.setItem('vanilla', 'vanillaFlavour')
  sessionStorage.setItem('chocolate', 'chocolateFlavour')
}

function getvalues() {
  sessionStorage.getItem('vanilla')
  sessionStorage.getItem('chocolate')
}

var ice = [];

localStorage.setItem('iceOrder', JSON.stringify(ice));

var addNewStudent = function (flavour, size, additions) {

  var students = JSON.parse(localStorage.getItem('iceOrder') || [];

  students.push({ flavour: flavour, size: size, additions: additions });

  localStorage.setItem('iceOrder', JSON.stringify(ice));
}
*/
// id's flavour, size, additions, cost

let tas = document.getElementById('flavour');

var sprinkleCost = '';
var rasberryCost = '';
var cookieCost = '';
var fudgeCost = '';



var letters = /a-z/;

function make() {

  var testValues = document.getElementById('flavour').value;
  if (testValues == letters) {
    console.log('Tasty treats')
  }
  console.log('Test values');
  localStorage.setItem('tas', tas)
  sizebtn();
  addCartContent();
  addSprinkles();
  addRasberryRipple();
  addChocChipCookie();
  addFudge();
  price();

};

//Radio buttons Chocolate or Vanilla:
function chocolatebtn() {
  console.log('Chocolate btn pressed')
  document.getElementById("flavour").innerHTML = "Chocolate.";
}
function vanillabtn() {
  console.log('Vanilla btn pressed')
  document.getElementById("flavour").innerHTML = "Vanilla.";
}

//Select x kilos of icecream:
var sizes = document.getElementById('sizes');

function sizebtn() {
  if (sizes.value === "5 kg") {
    document.getElementById("size").innerHTML = "5 kg.";
    cost.push(35)
  }
  else if (sizes.value === "2.5 kg") {
    document.getElementById("size").innerHTML = "2.5 kg.";
    cost.push(20)
  }
  else {
    document.getElementById("size").innerHTML = "1 kg.";
    cost.push(10)
  }
}

//Checkboxes with additions:
var checkSprinkles = document.getElementById("sprinkles");
var checkRasberry = document.getElementById("rasberryripple");
var checkCookie = document.getElementById("chocchipcookie");
var checkFudge = document.getElementById("fudge");

function addSprinkles() {
  if (checkSprinkles.checked === true) {
    console.log('sprinkles');
    document.getElementById('additions').innerHTML += "Sprinkles. ";
    cost.push(5)
  }
}
function addRasberryRipple() {
  if (checkRasberry.checked === true) {
    console.log('rasberryripple');
    document.getElementById('additions').innerHTML += "Rasberry Ripple. ";
    cost.push(5)
  }
}
function addChocChipCookie() {
  if (checkCookie.checked === true) {
    console.log('chocChipCookie');
    document.getElementById('additions').innerHTML += "Choc Chip Cookie. ";
    cost.push(5)
  }
}
function addFudge() {
  if (checkFudge.checked === true) {
    console.log('fudge');
    document.getElementById('additions').innerHTML += "Fudge. ";
    cost.push(5)
  }
}



//add all the costs:
var cost = [];

function price() {
  var i;
  for (i = 0; i < cost.length; i++) {
    document.getElementById('cost').innerHTML = cost[i] + cost[i] + cost[i] +
      cost[i] + cost[i] + '$';
  }
}

//Collect and show cart content:
let cartContent = document.getElementById('addToCart');
function addCartContent() {
  sessionStorage.setItem('cartContent', cartContent)
};

function checkout() {
  console.log(tas)
  sessionStorage.getItem('cartContent')
  console.log(cartContent);
  placeOrder();
}

//Make the results appear on the checkout page:
function placeOrder() {
  console.log('order placed');
  sessionStorage.getItem(cartContent);
  document.getElementById('order').innerHTML += cartContent;

}


// When a product is added to cart use inner html to place it in a list. 
//Make it possible to delete, perhaps by adding a button with innerHTML, two birds one stone.

//Make an object out of each order?


//Form validation:
/**
 
var tryName = document.getElementById('name');

function tryValues() {
  if (tryName.value = null) {
    document.getElementById('error').innerHTML += 'We need your name';
  }
  else {
    console.log('nop')
  }
}
 */

//Form Validation:

var letter = /a-z/;
//var letter = /\a-z\A-Z/;
//var email = [/a-z\+@\/a-z/]; or [/@+/] (my regex)
//regex borrowed from javascript1 lesson 4
var email = /\S+@\S+\.\S+/;

function tryName() {
  var theName = document.getElementById('name').inputValue;
  if (theName == letter) {
    console.log('great name')
  }
  else {
    document.getElementById('error').innerHTML += 'Please type your name. ';
  }
}

function tryEmail() {
  var theEmail = document.getElementById('email').value;
  if (theEmail != email) {
    document.getElementById('error').innerHTML += 'Please type your email. ';
  }
}

function tryValues() {
  tryName();
  tryEmail();
}