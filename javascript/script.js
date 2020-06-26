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

function test() {
  console.log('Test values');

};

const flavour = document.getElementById('flavour');

function chocolatebtn() {
  console.log('chocolate btn pressed')
  element.innerHTML == 

}

function vanillabtn() {
  console.log('vanilla btn pressed')
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
