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

// INDEXOF

let cars = ["audi", "bmw", "xuv", "maruti",];
console.log(cars.indexOf("bmw")); // 1
console.log(cars.indexOf("XUV")); // -1

// INCLUDES

let primary = ["red", "yellow", "blue"];
console.log(primary.includes("re")); // false
console.log(primary.includes("red")); // true
console.log(primary.includes("green")); // false

// CONCATENATION
 
let secondary = ["orange", "green", "white"];

console.log(primary.concat(secondary)); // concat will not change the value of original primary and secondary

// REVERSE 

console.log(primary.reverse()); // it will reverse the order of the primary and reverse methods will also change the original order like this
console.log(primary); // ['blue', 'yellow', 'red'] , if we reverse again original state will come 

// SLICE

let tertiary = ['red', 'green', 'blue', 'orange', 'yellow']

console.log(tertiary.slice()); // ['red', 'green', 'blue', 'orange', 'yellow']
console.log(tertiary.slice(2)); // ['blue', 'orange', 'yellow'] 2 means start,
console.log(tertiary.slice(2,3)); // ['blue',] start from 2 to go all the way to 3 but exclude three
console.log(tertiary.slice(-2)); // ['orange', 'yellow'] two from end
console.log(tertiary.slice(6)); // [] unavailable index return empty array

 // SPLICE

 // splice --> removes/replace/add elements in place splice(start, deleteCount, itemO...itemN) splice takes multiple arguments

console.log(tertiary.splice(4)); // here splice work like slice
console.log(tertiary.splice(0,2)); // start from index 0 and remove 2 element

console.log(tertiary);
console.log(tertiary.splice(0,1,"black","grey")); // it will first remove one element and then add black and grey

// if we have to insert an element at index 1 then tertiary.splice(1,0,"pink")

 // sort: sorts an array

let car = ['toyota', 'gwagon', 'xuv', 'maruti', 'bmw', 'ferrari'];

console.log(car.sort()); // ['bmw', 'gwagon' , 'ferrari', 'maruti','toyota' , 'xuv']

let chars = ['b','d', 'c','a'];
console.log(chars.sort());  // ['a', 'b', 'c', 'd'] sort works here as we wish (in string), but for number it will not work as we wish
let marks = [99, 45, 89, 100, 10];

console.log(marks.sort()); // [10, 100, 45, 89, 99] here sort methods convert the number first into string then sort it , sort methods is good for string and character only.

// Question 
 let month = ["january", "july", "march", "august"]
console.log(month.splice(0,2, "july", "june"));
console.log(month); // ['july', 'june', 'march', 'august']

// Question 
 let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
 console.log(lang.reverse().indexOf("javascript")); // 4 

// ARRAY REFERENCES
/*
"name" == "name" // true (string)
"name" === "name" // true (string)

[1] == [1] // array false
[1] === [1] // array false
[] == [] // array it will return false
[] === [] // array false 
 because in array memory is allocated in different address for every array we created and here address is compare that's why it will return false
 */ 
let arr = ['a', 'b', 'c']; // whenever we take square bracket it means new array is create.

let arrCopy = arr;
console.log(arrCopy); 
console.log(arrCopy == arr); // true
arr.push('d'); // we push a element in arr and it will also reflect in  arrCopy bcz both have address
console.log(arr); // ['a', 'b', 'c', 'd']
console.log(arrCopy); // ['a', 'b', 'c', 'd']

// now if we compare arr and arrCopy it will return true, here what we do is we equal the address of both the array.

let arr1 = ['a', 'b', 'c', 'd'];

let arrCopy1 = ['a', 'b', 'c', 'd'];

arr1 == arrCopy1 
console.log(arr1 == arrCopy1); // false
console.log(arr1 === arrCopy1); // false
 // both will return false,bcz both are different array they have different address, if we push another element in arr1 it will not reflect in arrCopy1

 // CONSTANT ARRAY

const arr2 = [1,2,3];
 arr.push(4);
 arr.pop();

// arr2 = [1,2,3]; // error , we can not another bca address of arr2 is assigned as const, but we can push and pop element ,it doesn't affect the address. 

 // NESTED ARRAY

 let nums = [[2, 4], [3, 6], [4, 8]];

// 3 rows and 2 col
// nums[0][0] = 2
// nums[0][1] = 4
// nums[1][0] = 3
// nums[1][1] = 6
// nums[2][0] = 4
// nums[2][1] = 8

// Question 

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] = "O";
console.log(game);





