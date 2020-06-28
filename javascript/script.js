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

const { check } = require("yargs");

let tas = document.getElementById('flavour');

function test() {
  console.log('Test values');
  localStorage.setItem('tas', tas)
  sizebtn();
  addCartContent();
  document.getElementById('cost').innerHTML + '$';
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
var volume = ['1kg', '2.5kg', '5kg'];
var sizes = document.getElementById('sizes');

function sizebtn() {
  if (sizes.value === "5 kg") {
    document.getElementById("size").innerHTML = "5 kg.";
    document.getElementById('cost').innerHTML += 35;
  }
  else if (sizes.value === "2.5 kg") {
    document.getElementById("size").innerHTML = "2.5 kg.";
    document.getElementById('cost').innerHTML += 20;
  }
  else {
    document.getElementById("size").innerHTML = "1 kg.";
    document.getElementById('cost').innerHTML += 10;
  }
}

//Checkboxes with additions:
function addSprinkles() {
  console.log('sprinkles');
  document.getElementById('additions').innerHTML += "Sprinkles. ";
  document.getElementById('cost').innerHTML += 5;
}
function addRasberryRipple() {
  console.log('rasberryripple');
  document.getElementById('additions').innerHTML += "Rasberry Ripple. ";
  document.getElementById('cost').innerHTML += 5;
}
function addChocChipCookie() {
  console.log('chocChipCookie');
  document.getElementById('additions').innerHTML += "Choc Chip Cookie. ";
  document.getElementById('cost').innerHTML += 5;
}
function addFudge() {
  console.log('fudge');
  document.getElementById('additions').innerHTML += "Fudge. ";
  document.getElementById('cost').innerHTML += 5;
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
}

//Make the results appear on the checkout page:
function placeOrder() {
  console.log('order placed');
  sessionStorage.getItem('cartContent')
  document.getElementById('order').innerHTML += cartContent;
}


// When a product is added to cart use inner html to place it in a list. 
//Make it possible to delete, perhaps by adding a button with innerHTML, two birds one stone.

//Make an object out of each order?
