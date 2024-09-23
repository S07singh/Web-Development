// Selecting Element by id

// getElementById

// Returns the Element as an object or null(if not found)

// document.getElementById(id) // id in string means double quote
// if we put wrong in id it will show null

// getElementByClassName

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i <smallImages.length; i++ ) {
//     console.dir(smallImages[i].src);
// }

// for(let i = 0; i <smallImages.length; i++ ) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.dir(`value of image no. ${i} is changed`);
// } // we can change src also

// when we use getElementByClassName and put wrong it will not show null
// it will give html collection in which length will zero

//  getElementByTagName
// document.getElementsByTagName("p")[1].innerText = "abc"

// Query Selectors
// // some like css 
// document.querySelector('p'); // Select first p element
// document.querySelector('#myId'); // Select first element with id = myId
// document.querySelector('.myClass'); // Select first element with class = myClass
// document.querySelectorAll("p"); // Select all p elements

// console.dir(document.querySelector('div a'));

// Using  Properties & Methods

// inner Text 
// Shows the visible text contained in a node, take it from screen 

// textContent
// Shows all the full markup ,take it from file

// innerHMTL
// Shows the full markup, show all tag ,anchor

// Manipulating Attributes

// Object.getAttribute(arr)
// Object.setAttribute(arr)

//getter and setter

// Changing style using js
// let  links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "purple"; // inline
// }

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "purple";
// }


// Manipulating style

// using classList
// Object.classList

// let img = document.querySelector("img");
// img.classList;// we get list of class in img tag

// we can add class 

// let heading = document.querySelector('h1');
// heading.classList.add("green"); // it add class name as green
// heading.classList.remove("green"); // it remove
// heading.classList.contains() to check if class exists
// heading.classList.toggle() to toggle between add & remove

// we can also add class by setAttribute('class', 'green')
//but we dont use it bcz it will set every class to single class

// let box = document.querySelector(".box");
// console.dir(box);
// console.dir(box.classList);
// console.dir(box.classList.add("yellowBg"));

// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);
// console.dir(h4.parentElement);
// let box = document.querySelector('.box');
// console.dir(h4.children);

// let ul = document.querySelector('ul');


// Object.previousElementSibling;
// Object.nextElementSibling;

// for creating element
// document.createElement('p');

// appendChild(element)
// append(element)
// prepend(element)
// insertAdjacentElement(where, element)

// removeChild()
// remove()


// Question 

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText= "I'm in a div";
para2.innerText = " ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);