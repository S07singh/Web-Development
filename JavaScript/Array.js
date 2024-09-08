/* 
let marks = [99, 85, 93, 76, 62];
let names = ["adam", "bob", "catlyn"];
let info = ["aman", 23, 5.1]; // mixed array 

console.log(marks);
console.log(names);
console.log(info);

// empty array
let newArr = []; 

console.log(info.length);

// Array are mutable 

let fruits = ["mango", "apple", "grapes"];

console.log(fruits);

fruits[0] = "pineapple";
fruits[1] = "banana";

console.log(fruits);

fruits[10] = "papaya";
console.log(fruits.length); // now length become 11 
console.log(fruits); // 7 empty index

let cars = ["audi", "bmw", "xuv", "maruti",];
cars.push("toyota"); // insert another element at the end
console.log(cars);
console.log(cars.length);

// cars.pop(); // it will extract an element from end and return it
console.log(cars.pop());
console.log(cars);

cars.unshift("ferrari"); // insert another element at the start
console.log(cars);

// cars.shift();
console.log(cars.shift()); // it will extract an element from start and return it
console.log(cars);

// Question 


let arr = ["january", "july", "march", "august"];
arr.shift();
arr.shift();
arr.unshift("june");
arr.unshift("july");
console.log(arr); // ['july', 'june', 'march', 'august']; */

// indexOf

let cars = ["audi", "bmw", "xuv", "maruti",];
console.log(cars.indexOf("bmw")); // 1
console.log(cars.indexOf("XUV")); // -1

// includes

let primary = ["red", "yellow", "blue"];
console.log(primary.includes("red")); // true
console.log(primary.includes("green")); // false

// 