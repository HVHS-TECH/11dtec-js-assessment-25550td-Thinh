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
    outputElement.innerHTML = "<p>Please enter your name.</p>";
    outputElement.style.color = "red";
  } else {
    outputElement.innerHTML = "<p>Hello " + name + "! You are ready to order.</p>";
    outputElement.style.color = "green";
  }
}


function Output(outputText){
    document.getElementById("output").innerHTML = outputText;
}

