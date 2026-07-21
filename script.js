/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Hello teacher!")
console.log("My name is Thinh")

// This is a single line comment

//Variables
let total = 0;

const prices = {
  "Caramel Latte": 4.5,
  "Iced Coffee": 3.9,
  "Cappuccino": 4.2,
  "Americano": 3.5,
  "New York Cheesecake": 4.8,
  "Chocolate Cake": 4.5,
  "Lemon Tart": 4.3,
  "Blueberry Muffin": 3.2,
  "Nuggets & Fries": 6.9
};

//Functions
function customerName() {

  let name = document.getElementById("customerName").value;

  if (name.trim() == "") {
    document.getElementById("output").innerHTML = "Please enter your name.";
    return;
  }

  document.getElementById("output").innerHTML =
    "Hello " + name + "! You are ready to order.";
}

function addOrder() {

  let item = document.getElementById("item").value;
  let amount = Number(document.getElementById("amount").value);

  let cost = prices[item] * amount;

  total += cost;

  document.getElementById("checklist").innerHTML +=
    "<li>" + amount + " x " + item + "</li>";

  document.getElementById("total").innerHTML =
    "$" + total.toFixed(2);
}
function placeOrder() {
 let name= document.getElementById("output").innerHTML
 let money= document.getElementById("total").innerHTML

 if (name.trim() == " ") {
   document.getElementById("output").innerHTML = "Please enter your name.";
    return;
  }
  }

