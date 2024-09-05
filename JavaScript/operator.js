let pencilPrice = 10;
let eraserPrice = 5;
// let output  =  "The total price is : "+(pencilPrice + eraserPrice)+ "Rupees."
let output = `The total price is : ${pencilPrice + eraserPrice} Rupees.`;
console.log(output);


let a = 10;
let b = 5;
// Unary operator
console.log(a++); // 10
console.log(++a); // 12

// Arithmetic operators
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// Assignment operator
a=b; // assign/store value of b in a ,not comparison
console.log(b);
// (=, +=, -=, *=, /=, %=, etc)

// comparison operator
 let age = 18;
 console.log(age < 18); // false
 console.log(5==5) // true
// == only consider value, not type
console.log(5 == '5');// one is number and other one is string , but answer is true

// true | compare value, not type
// "123" == 123
// 1 == '1'
// 0 == '1'
// 0 == false
// null == undefined

// false | compare type and value
// "123" === 123
// 1 === '1'
// 0 === '1'
// 0 === false
// null === undefined

// Logical operators

// && logical AND  || Logical OR

