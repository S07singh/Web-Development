function hello () {
    console.log("hello");
}

function printName(){
    console.log("apna college");
    console.log("sudhir singh");
}

function print1to5() {
    for (let i = 0; i <=5; i++) {
        console.log(i);
    }
}

function isAdult() {
    // let age = 18;
    let age = 13;
    if (age>=18) {
        console.log("Adult");
    } else {
        console.log("not adult");
    }
}

// printName();
// print1to5();
isAdult();

// Question 1

function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how i wonder what you are");
}

printPoem();

// Question 2

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();

// function with Arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
 // keep in mind order of arguments , javaScript does not know which 
 // is string and integer that's why it takes 14 as name
printInfo("sudhir", 19); // sudhir's age is 19
printInfo("rahul"); // rahul's age is undefined
printInfo(14); // 14's age is undefined
/*
function sum(a,b) {
    console.log(a+b);
}

sum(7, 8); // 15
sum(4, 5); // 9
sum(1, 2); // 3 */

// Question 3
function calculateAverage(a, b, c) {
    console.log((a+b+c)/3);
}

calculateAverage(2,4,6); //4
calculateAverage(3,3,3); //3

// Question 4

function table(a) {
    for (let i = 1; i < 11; i++) {
        console.log(`${a} X ${i} = ${a*i} `);  
    }
}

table(20);

// Return -> return keyword is used to return some value from the function.
/*
function sum(a,b) {
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello2");
    console.log("hello2"); // both will not print because its after return 
}

console.log(sum(1,2));

function isAdult(age) {
    if (age>=18) {
        return "adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(34));
*/
// Question 5

function sum1ton(n) {
    let sum1 = 0;
    for (let i = 1; i <= n; i++) {
         sum1 = sum1 + i; 
    } 
    return sum1;  
}

sum1ton(10); // this will not print anything for print we have to use console.log
console.log(sum1ton(10));

// Question 6
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for (let i = 0; i <str.length; i++) {
        result += str[i];
    }
    return result;   
}

console.log(concat(str));

// Scope

// Function Scope -> Variables defined inside a function are not
// accessible (visible) from outside the function.

let sum = 54; // Global Scope

function calSum(a, b) {
    let sum = a+b; // Function Scope
    console.log(sum); // Function Scope is used
}
// if both global and function scope define then function scope takes precedence over global scope
//if function scope not define then global scope is used for both them .

calSum(1,2);
console.log(sum); // Global Scope is used 

// Block Scope -> Variables declared inside a {} block cannot be accessed from outside the block.
{
    let a =25;
    var b =25;
    const c =25;
}

// console.log(a); 
// we cannot use able to use a and c because a and c are defined by using keyword let and const                
console.log(b);
// console.log(c);// in loop there is block {}

// Lexical Scope 
// a variable defined outside a function can be accessible inside 
// another function defined after the variable declaration.
// The opposite is NOT true.  
// function outerFunc () {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }

// Question 7
/*
let greet = "hello"; // global scope 

function changeGreet() {
    let greet = "namaste"; // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); // lexical scope
    }
}
console.log(greet); // only two output hello and namaste, innerfunc is never call.
changeGreet(); */

// Function Expression 
/*
let name = "sudhir"
let sum2 = function (a,b) { // here  sum2 is variable name not function name 
    // but we can call function by variable name also 
    return a + b;
}

let hello = function () {
    console.log("hello");
}
*/
// function passed in function as arguments 
 function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func(); 
    }
 }

 let greet = function (){
    console.log("hello");
    
 }

 multipleGreet(greet, 3); /// do not pass it like this greet()
 

 // Higher oder function

//  let odd = function(n) {
//     console.log(!(n%2 == 0)); 
//  }


//  let even = function(n) {
//     console.log(n%2 == 0); 
//  }

 function oddOrEvenFactory(request) {
    if(request == "odd" ){
        let odd = function(n) {
            console.log(!(n%2 == 0)); 
         }
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0); 
         }

         return even;
    } else {
        console.log("wrong request");
        

    }
 }

 let request = "odd";


// methods

const calculator = {
    num: 55,
    add : function(a, b) {
        return a + b;
    }, 
    sub : function(a, b) {
        return a - b;
    }, 
    mul : function(a, b) {
        return a * b;
    } 
    
}
// objects one variable and three function 
// we can access

calculator.num;
calculator.add(3,4);
calculator.sub(3,4);
calculator.mul(3,4); // in console

// Math.PI;
// Math.random;
// Math.random();
// Math.pop();
// what we understand from this, Math is inbuilt object,it has some variable like
// PI which has some value and some methods like random and etc.

// string and array from javaScript is also internally object
// if we type in console typeof[] it will return object 

// Shorthand of object

// const calculator = {
//     add(a, b) {
//         return a + b;
//     },

//     sub(a, b) {
//         return a-b;
//     }
// };

// this keyword 

// "This" keyword refers to an object that is executing the current piece of code.

const student = {
    name : "sudhir",
    age: 19,
    eng: 87,
    math: 99, 
    phy: 98,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/ 3; // here this keyword makes use of parameter.
        console.log(`${this.name} got avg marks = ${avg}`);        
    }
}

function getAvg() {
    console.log(this);
    // this will print window object which has some function like alert(), close(),etc.
    
}