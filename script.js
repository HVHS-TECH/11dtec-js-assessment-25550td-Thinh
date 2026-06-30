/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Hello teacher!")
console.log("My name is Thinh")

// This is a single line comment

//Variables
let menu = [
  "Caramel Latte",
  "Iced Coffee",
  "Cappuccino",
  "Americano",
  "New York Cheesecake",
  "Chocolate Cake",
  "Lemon Tart",
  "Blueberry Muffin",
  "Nuggets & Fries",
];

let prices = [4.5, 3.9, 4.2, 3.5, 4.8, 4.5, 4.3, 3.2, 6.9];
let total = 0;
let quantity = 0;


//Main code



//Functions
function customerName() {
  const name = document.getElementById("customerName").value.trim();
  const outputElement = document.getElementById("output");
  if (name === "") {
    outputElement.innerHTML = "<p>Please enter your name.</p>";
    outputElement.style.color = "red";
    return;
  } else {
    outputElement.innerHTML = "<p>Hello " + name + "! You are ready to order.</p>";
    outputElement.style.color = "green";
  }
}

function Output(outputText) {
  document.getElementById("output").innerHTML = outputText;
}

function addOrder() {
  const itemSelect = document.getElementById("item");
  const amountInput = document.getElementById("amount");
  const checklist = document.getElementById("checklist");
  const totalElement = document.getElementById("total");
  const messageElement = document.getElementById("message");
  const outputElement = document.getElementById("output");

  const selectedItem = itemSelect.value;
  const amount = parseInt(amountInput.value, 10);

  if (!selectedItem) {
    messageElement.textContent = "Please choose an item to add.";
    messageElement.style.color = "red";
    return;
  }

  if (isNaN(amount) || amount < 1) {
    messageElement.textContent = "Please enter a valid amount (1 or more).";
    messageElement.style.color = "red";
    return;
  }

  const itemIndex = menu.indexOf(selectedItem);
  if (itemIndex === -1) {
    messageElement.textContent = "Selected item is not recognized.";
    messageElement.style.color = "red";
    return;
  }

  const itemPrice = prices[itemIndex];
  const itemTotal = itemPrice * amount;
  total += itemTotal;
  quantity += amount;

  const listItem = document.createElement("li");
  listItem.textContent = `${selectedItem} × ${amount} = $${itemTotal.toFixed(2)}`;
  checklist.appendChild(listItem);

  totalElement.textContent = `$${total.toFixed(2)}`;
  messageElement.textContent = `${amount} ${selectedItem}${amount > 1 ? "s" : ""} added to order.`;
  messageElement.style.color = "green";
  outputElement.textContent = "";
}


