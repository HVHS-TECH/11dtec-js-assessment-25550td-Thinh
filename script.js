/****************************
One More Sip Cafe Website
Author: Thinh Do

Customers can choose a menu item,
pay for it and receive a receipt.
****************************/
console.log("Hello teacher!")
console.log("My name is Thinh")

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
"Nuggets & Fries"
]

let price = 5

let customerName = ""
let chosenItem = ""
let totalCost = 0

//Main code

//Functions

function addOrder() {

```
customerName =
    document.getElementById("customerName").value

chosenItem =
    document.getElementById("item").value

let amount =
    Number(document.getElementById("amount").value)

totalCost = amount * price

let listItem = document.createElement("li")

listItem.textContent =
    chosenItem + " x" + amount

document.getElementById("checklist")
    .appendChild(listItem)

document.getElementById("total").textContent =
    "$" + totalCost.toFixed(2)

document.getElementById("message").textContent =
    "Order added."
```

}

function placeOrder() {

```
let money =
    Number(document.getElementById("money").value)

if (money < totalCost) {

    document.getElementById("message").textContent =
        "Not enough money."

    return
}

let change = money - totalCost

document.getElementById("change").textContent =
    "$" + change.toFixed(2)

document.getElementById("receipt").innerHTML =
    "<strong>Name:</strong> " + customerName +
    "<br><strong>Item:</strong> " + chosenItem +
    "<br><strong>Cost:</strong> $" + totalCost.toFixed(2) +
    "<br><strong>Money Given:</strong> $" + money.toFixed(2) +
    "<br><strong>Change:</strong> $" + change.toFixed(2)

document.getElementById("message").textContent =
    "Order placed successfully!"
```

}

function resetOrder() {

```
totalCost = 0
customerName = ""
chosenItem = ""

document.getElementById("customerName").value = ""
document.getElementById("amount").value = 1
document.getElementById("money").value = ""

document.getElementById("checklist").innerHTML = ""

document.getElementById("total").textContent = "$0.00"
document.getElementById("change").textContent = "$0.00"

document.getElementById("receipt").innerHTML = ""
document.getElementById("message").textContent =
    "Order reset."
```

}
