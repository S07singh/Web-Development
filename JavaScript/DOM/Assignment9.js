// Question 1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Question 2

button.setAttribute("id", "btn");
input.setAttribute("placeholder", 'username');

// Question 3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Question 4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

// Question 5

let p = document.createElement("p");
p.innerHTML = "Apna college <b>Delta</b> Practice";
document.querySelector("body").append(p);