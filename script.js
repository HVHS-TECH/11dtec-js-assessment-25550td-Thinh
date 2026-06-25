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
function customerName(){
    const name = document.getElementById("customerName").value;
   Output("<p>Hello " + name + "!You are ready to order.</p>");
   if (name === "") {
    Output("<p>Please enter your name.</p>");
    document.getElementById("output").style.color = "red";
   }
}

function Output(outputText){
    document.getElementById("output").innerHTML = outputText;
}  