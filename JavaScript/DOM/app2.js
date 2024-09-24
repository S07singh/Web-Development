// FOR SINGLE BUTTON
// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function () {
// //     console.log("button was clicked");
// //     // alert("button was clicked");
// // }

// function sayHello () {
//     alert("Hello");
// }

// btn.onclick = sayHello;

// FOR MULTIPLE BUTTON 
/*
let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = sayHello; // don't use () in sayHello function, bcz when you want use fo second time it will not
    btn.onmouseenter = function () {
        console.log("you entered a button!");
        
    }
    console.dir(btn);
}

function sayHello () {
        alert("Hello");
     }
function sayName () {
        alert("Apna college");
     }
*/
// onclick will only take one function either sayHello or sayName that'a why 'EVENT LISTENER' have to use 
/*
let btns = document.querySelectorAll("button");

for (btn of btns) {

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
        
    } );
    
    console.dir(btn);
}

function sayHello () {
    alert("Hello");
}
function sayName () {
   alert("Apna college");
} 
// bcz of eventListener both the function execute which is not possible in onclick or onmouseenter.  
*/

                                // ACTIVITY 
/*
let btn = document.querySelector("button");  

btn.addEventListener("click", function () {
    // console.log("generate random color");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText =  randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
    
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue} )`;
    return color;
}
*/

/*
let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para was clicked");
    
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("mouse inside box");
    
})
    */
/*
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


function changeColor () {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

*/

/*
let btn = document.querySelector("button");

// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("button clicked");
// });

btn.addEventListener("dblclick", function (event){
    console.log(event);
    console.log("button clicked");
});
*/

/*
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("key = ", event.key);
    console.log("code = ",event.code);
    console.log("key was pressed");
});

// inp.addEventListener("keyup", function () {
//     console.log("key was released");
// });

*/

/*
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("code = ",event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code =="KeyW" ){
        console.log("character moves up");
    } else if(event.code =="KeyS" ){
        console.log("character moves down");
    } else if (event.code =="KeyA" ){
        console.log("character moves left");
    }else if(event.code =="KeyD" ){
        console.log("character moves right");
    } 
});
*/
/*
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);
    
    // let inp = document.querySelector("input");
    // console.log(inp);
    // console.dir(inp);
    // console.log(inp.value); // inp.innerText it will not give input for that we have to use .value
    
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    let user = this.elements[0]; // form.elements[0]
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
    
}); */


/*
//change event 
// The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements.)


let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);

});
let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("changed event");
    console.log("final value = ", this.value);
});

// input event 
// The input event first when the value of an <input>, <select>, or <textarea> element has been changed.

user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value = ", this.value);
});

*/

let inp = document.querySelector("#text");

let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;
})
