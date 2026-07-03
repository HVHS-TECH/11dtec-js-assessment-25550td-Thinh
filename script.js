/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Hello teacher!")
console.log("My name is Thinh")

// This is a single line comment

//Variables
let menu= [ "Caramel Latte",
            "Iced Coffee",
            "Cappuccino",
            "Americano",
            "New York Cheesecake",
            "Chocolate Cake",
            "Lemon Tart",
            "Blueberry Muffin",
            "Nuggets & Fries",
];
let price = 5;
let total= 0;
let quantity= 0;


//Main code



//Functions
function customerName() {
  const name = document.getElementById("customerName").value.trim();
  const outputElement = document.getElementById("output");
  if (name === "") {
    outputElement.innerHTML = "<p>⚠️Please enter your name.</p>";
    outputElement.style.color = "red";
    return;
  } else {
    outputElement.innerHTML = "<p>✅Hello " + name + "! You are ready to order.</p>";
    outputElement.style.color = "green";
  }
}

function Output(outputText){
    document.getElementById("output").innerHTML = outputText;
}

function addOrder() {
  const selectedItem = document.getElementById("item").value;
  const amountInput = document.getElementById("amount");
  const quantity = parseInt(amountInput.value, 10) || 1;
  const checklist = document.getElementById("checklist");
  const totalElement = document.getElementById("total");
  const messageElement = document.getElementById("message");
  const outputElement = document.getElementById("output");

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

  outputElement.innerHTML = "☕You have ordered " + quantity + " " + selectedItem;
  outputElement.style.color = "green";
}

function totalPrice() {
  


