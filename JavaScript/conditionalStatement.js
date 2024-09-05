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

 