/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Hello teacher!");
console.log("My name is Thinh");

// Variables
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

// Functions
function submitName() {
  let name = document.getElementById("customerName").value;
  if (name.trim() === "") {
    document.getElementById("output").innerHTML = "Please enter your name.";
    return;
  }
  document.getElementById("output").innerHTML = "Hello " + name + "! You are ready to order.";
}

function addOrder() {
  let item = document.getElementById("item").value;
  let amount = Number(document.getElementById("amount").value);
  let cost = prices[item] * amount;
  
  total += cost;
  document.getElementById("checklist").innerHTML += "<li>" + amount + " x " + item + "</li>";
  
  updateTotalDisplay();
}

function updateTotalDisplay() {
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function placeOrder() {
  let name = document.getElementById("customerName").value;
  let money = Number(document.getElementById("money").value);
  
  if (name.trim() === "") {
    document.getElementById("output").innerHTML = "Please enter your name.";
    return;
  }
  
  if (money < total) {
    document.getElementById("message").innerHTML = "You don't have enough money.";
    return;
  }
  
  let change = money - total;
  document.getElementById("change").innerHTML = "$" + change.toFixed(2);
  document.getElementById("message").innerHTML = "Thank you, " + name + "!";
  
  generateReceipt(name, money, change);
}

function generateReceipt(customerName, cashGiven, moneyChange) {
  document.getElementById("receipt").innerHTML = 
    "Customer: " + customerName + "<br>" +
    "Total: $" + total.toFixed(2) + "<br>" +
    "Money: $" + cashGiven.toFixed(2) + "<br>" +
    "Change: $" + moneyChange.toFixed(2);
}

function resetOrder() {
  total = 0;
  document.getElementById("checklist").innerHTML = "";
  document.getElementById("total").innerHTML = "$0.00";
  document.getElementById("change").innerHTML = "$0.00";
  document.getElementById("receipt").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("customerName").value = "";
  document.getElementById("money").value = "";
  document.getElementById("amount").value = 1;
}
