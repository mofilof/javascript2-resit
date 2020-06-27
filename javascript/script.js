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

function test() {
  console.log('Test values');
  localStorage.setItem('tas', tas)
};

let cartContent = document.getElementById('addToCart');
function addCartContent() {
  console.log('Cart values');
  localStorage.setItem('cartContent', cartContent)

};

function checkout() {
  console.log(tas)
  console.log(cartContent);
}

function chocolatebtn() {
  console.log('Chocolate btn pressed')
  document.getElementById("flavour").innerHTML = "Chocolate";
}

function vanillabtn() {
  console.log('Vanilla btn pressed')
  document.getElementById("flavour").innerHTML = "Vanilla";
}

function sizebtn() {
  console.log('Size selected')
  if (value = "5 kg") {
    document.getElementById("size").innerHTML = "5 kg";
  }
  else if (value = "2.5 kg") {
    document.getElementById("size").innerHTML = "2.5 kg";
  }
  else {
    document.getElementById("size").innerHTML = "1 kg";
  }
}



/**
 * function flavour(){
  if(vanilla = clicked){
    clear.chocolate
  }
}
 */

// When a product is added to cart use inner html to place it in a list. 
//Make it possible to delete, perhaps by adding a button with innerHTML, two birds one stone.

//Make an object out of each order?
