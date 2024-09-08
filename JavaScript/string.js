// let msg = "    he   llo    "
// let password = prompt("set your password");
// console.log(password.trim());
// console.log(password); // trim is methods which trim whitespace from left and right from the words not from the middle
// let newPass = password.trim();
// console.log(newPass); // string return new string by changing the string its means string is immutable in javaScript 

// 
// let str = "Random";

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());



// METHODS WITH ARGUMENTS indexOf
// indexOf--> Returns the first of occurrence of some value in string. Or gives -1 if not found.
// let str1 = "iloveCoding";

// str1.indexOf("love");
// str1.indexOf("j");
// str1.indexOf("o");
// console.log(str1);
// console.log(str1.indexOf("love"));
// console.log(str1.indexOf("j"));
// console.log(str1.indexOf("o"));

// METHODS CHAINING
// let msg = "   hello   ";

// let newMsg = msg.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase :", newMsg)

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg)


// STRING SLICING

// let msg = "Sudhir";

// console.log(msg.slice(1))
// console.log(msg.slice(1,4))
// console.log(msg.slice(1, msg.length))
// console.log(msg.slice(-2)) // msg.length -2 = 4
// console.log(msg.slice(4)) 


// REPLACE 

let msg = "Ilovecoding";

console.log(msg.replace("love", "do"));
console.log(msg.replace("o", "x")); // only first occurrences will change like Ilxvecoding.

// REPEAT 
let str = "Ilovecoding";
console.log(msg.repeat(2)); // IlovecodingIlovecoding

// Question

let msg1 = "hello!";
console.log(msg1.trim().toUpperCase()); /// HELLO!

// Question 
let name1 = "ApnaCollege";
console.log(name1.slice(4,9)); // Colle
console.log(name1.indexOf("na")); // 2
console.log(name1.replace("Apna","Our")); // Ourcollege

// Question
console.log(name1.slice(4).replace('l','t')); // Cotlege
console.log(name1.slice(4).replace('l','t').replace('l','t')); // Cottege

