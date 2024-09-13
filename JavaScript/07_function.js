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

function sum(a,b) {
    console.log(a+b);
}

sum(7, 8); // 15
sum(4, 5); // 9
sum(1, 2); // 3

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
