// Conditional Statements
// if Statements
console.log("before my if statement");
let age = 23;
if (age >= 18) {
  console.log("you can vote");
}
if (age > 20) {
  console.log("you are in your 20s");
}
console.log("after my if statement");

let firstName = "sudhir";
if (firstName == "sudhir") {
  console.log(`Welcome ${firstName}`);
}

let color = "red";
if (color === "red") {
  console.log("stop! Light color is red");
}
if (color === "yellow") {
  console.log("slow down.Light color is yellow");
}
if (color === "green") {
  console.log("go. Light color is green");
}

// If else statement 

let age1 = 18;

if (age1 >=18 ){
    console.log ("you can vote!")
}else {
    console.log ("you cannot vote")
}

let marks = 9;

if (marks > 80){
    console.log("A+");
} else if (marks <= 80 && marks > 60){
    console.log("A");
}else if (marks <= 60 && marks > 40){
    console.log("B");
}else if (marks <= 60 && marks > 0){
    console.log("F");
}


// Question 1

let size = "D";

if (size === "XL"){
    console.log("price is Rs. 250")
} else if (size === "L"){
    console.log("price is Rs. 200")
} else if (size === "M"){
    console.log("price is Rs. 100")
} else if(size === "S") {
    console.log("price is Rs. 50")
} else {
    console.log("Not available! ")
}

 // nested if else statement

 let mark = 32;

 if (mark >= 33) {
    console.log("pass");
    if(mark>= 80){
        console.log("Grade : O");
    }else {
        console.log("Grade : A");
    }
 } else {
    console.log("Better luck next time!")
 }

 // Question 2

 let str = "apple"

 if (str[0] == "a" && str.length > 3){
    console.log("good string");
 }else {
    console.log("not a good string")
 }
// Question3
 let num = 12;

 if ((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("safe");
 }else {
    console.log("unsafe");
 }

 // in javascript falsy value--> false, 0, -0, On(Biglnt value), "", (empty string), null, undefined, NaN
 // Everything else is true

 let string = " ";

 if (string) {
    console.log ("string is not empty");
 }else {
    console.log ("string is empty")
 }

 let num1 = 0;
 
 if (num){
    console.log("num is not equal to 0");
 }else {
    console.log("num is equal to 0")
 }

 //switch statement

 let clr = "red";

 switch(clr) {
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go");
        break;
    default :
        console.log("light is broken");
        
 }

 // Question 4

 let day = 8;

 switch (day) {
    case 1:
        console.log("Monday");
        break;
 
    case 2:
        console.log("Tuesday");
        break;
 
    case 3:
        console.log("Wednesday");
        break;
 
    case 4:
        console.log("Thursday");
        break;
 
    case 5:
        console.log("Friday");
        break;
 
    case 6:
        console.log("Saturday");
        break;
 
    case 7:
        console.log("Sunday");
        break;
 
    default:
        console.log("Invalid day!")
 }

//  alert("This is an alert!");
 console.log("this is a simple log");
console.error("this is a error msg");
console.warn("this is a warning msg");

// let yourName = prompt("enter your name :");
// console.log(yourName)

let fName = prompt("enter your fname:")
let lName = prompt("enter your lname:")
console.log("welcome", fName, lName,"!")