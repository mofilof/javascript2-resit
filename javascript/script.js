//Link to git repository: https://github.com/mofilof/javascript2-resit

let tas = document.getElementById('flavour');

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
  showCart();
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
  let totalcost = 0;
  for (let i = 0; i < cost.length; i++) {
    totalcost += cost[i];
  }
  document.getElementById('cost').innerHTML = totalcost;
  localStorage.setItem('thecost', totalcost.value)
}


function payPrice() {
  document.getElementById('total').innerHTML += localStorage.getItem('thecost');
}

//Collect and show cart content:
let cartContent = document.getElementById('addToCart');
function addCartContent() {
  sessionStorage.setItem('cartContent', cartContent)
};

function checkout() {
  console.log(tas)
  sessionStorage.getItem('cartContent')
  dosument.getElementById('order').innerHTML += cartContent;
  console.log(cartContent);
  payPrice();
}

//Make the results appear on the checkout page:
function placeOrder() {
  console.log('order placed');
  sessionStorage.getItem(cartContent);
  document.getElementById('order').innerHTML += cartContent;
}

//Show the cart once ice is added to cart
function showCart() {
  var show = document.getElementById('theCart');
  show.style.display = 'block';
}

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