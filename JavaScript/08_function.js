// this keyword 

// "This" keyword refers to an object that is executing the current piece of code.

// const student = {
//     name : "sudhir",
//     age: 19,
//     eng: 87,
//     math: 99, 
//     phy: 98,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy)/ 3; // here this keyword makes use of parameter.
//         console.log(`${this.name} got avg marks = ${avg}`);        
//     }
// }

function getAvg() {
    console.log(this);
    // this will print window object which has some function like alert(), close(),etc.
    
}

// try & catch
/*
    The try statement allows you to define a block of code to be tested for errors while it
    is being executed.

    The catch statement allows you to define a block of code to be executed , if an error occurs in the block.
*/
console.log("Hello");
console.log("Hello");
 let a = 5; // catch statement will not execute because a is define
try {
    console.log(a);
} catch(err) {// we can print error by using function
    console.log("caught an error.. a is not defined");
    console.log(err)
} // if we do not use try and catch statement and there is an error 
// next statement will not execute bcz of error

console.log("Hello");
console.log("Hello");
console.log("Hello");

// Arrow function -> It has little bit compact syntax

// const sum = (a, b) => {
//     console.log(a+b);
// };


// const cube = (n) => {
//     return n*n*n;
// };

// const pow = (a, b) => {
//     return a ** b;
// };

// const hello = () => {
//     console.log("hello world");
// };

// Implicit return it will understand automatically
// explicit means alag se batana 

const sum = (a, b) => a+b;
   
// if return has single value then no need of use return keyword
// have a look on syntax of these function 

const cube = (n) => (n * n * n); 

const pow = (a, b) => (
    a ** b
);


const hello = () => {
    console.log("hello world");
};

const mul = (a, b) => a * b;

// Set Timeout
// setTimeout(function, timeout) in build function of window object, it has two arguments
// 
console.log("hi there!");

setTimeout(() => {
    console.log("apna college");
    
}, 4000); // timeout is milliseconds, 4000 means 4 seconds , apna college will be print after 4 seconds

console.log("welcome to");

//set Interval

// setInterval(function, timeout)

// setInterval(() => {
//     console.log("apna college");
// }, 2000);

// let id = setInterval(() => {
//         console.log("apna college");
//     }, 2000);
//     console.log(id);
    
    
// let id2 = setInterval(() => {
//         console.log("hello world");
//     }, 3000);
//     console.log(id2);
    
// for stop it type clearinterval(id) it will stop the loop    

// this with Arrow function
const student = {
    name : "sudhir",
    marks : 98,
    prop: this, // global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); // student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // window
        }, 2000);
    },
}   

// Question 1
