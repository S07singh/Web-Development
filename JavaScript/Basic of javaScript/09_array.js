// FOR EACH FUNCTION
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach( function (el) {
//     console.log(el);
// });

// let print = function (el) {
//         console.log(el);
// };

// arr.forEach(print)

let student = [
    {
    name: "sudhir",
    marks: 98,
 },
 {
    name: "divya",
    marks: 97,
 },
 {
    name: "rajat",
    marks: 95,
 },
];

// arr.forEach((student) => {
//     console.log(student.marks); 
// });

// MAP FUNCTION - it will return an array

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    // return el * 2;
    return el * el;
});

let gpa = student.map((el) => {
    return el.marks / 10;
});

// Filter  it will return an array by filtering something

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

// let ans = nums.filter((el) => {
//     // return el % 2 == 0;
//     // return el % 2 != 0;
//     return el < 5;
// })

// Every 
// Returns true if every element of array gives true for some function. Else returns false.

let all = [2, 4, 6].every((el) => el % 2 == 0); // true
let all2 = [1, 3, 5].every((el) => el % 2 != 0); // true
let all3 = [2, 4, 6, 5].every((el) => el % 2 == 0); // false
console.log(all);
console.log(all2);
console.log(all3);

// SOME
// Return true if some elements of array give true for some function. Else returns false.

let sm = [1, 3, 5].some((el) => el % 2 == 0); // false
let sm2 = [2, 4, 6, 5].some((el) => el % 2 == 0); // true
console.log(sm);
console.log(sm2);

// Reduce

// let nums = [1, 2, 3,, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//      return res + el;
// });
// console.log(finalVal); // 10

// (res, el)
// (0, 1) = 1
// (1, 2) = 3
// (2, 3) = 6
// (3, 4) = 10


// Find max number using reduce methods

let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i = 0; i < arr.length; i++) {
//     if(max < arr[i]) {
//       max = arr[i];  
//     }
// }

// console.log(max);

// we can do this with reduce function 

let max = arr.reduce((max, el) => {
    if(max < el ) {
        return el;
    } else {
        return max;
    }
});

console.log(max);


// Question 

// let nums = [10, 20, 30, 40, 5];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);

// Question

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

let nums = [10, 20, 30, 40, 5];


// Default Parameters

// giving a default value to the arguments

function sum(a, b =2) {
    return a + b;
}

sum (1, 3); // 4
sum(1); // 3

// Spread 
// Expand an  iterable into multiple values
// syntax  function func (...arr) {
// do something 
//  }
console.log(Math.min (1, 2, 4, 1, 0, 5));
console.log(...nums);
console.log(..."sudhirsingh"); 

// spread with  Array literals

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...even, ...odd];

// Spread with object literals
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

// const dataCopy = { ...data}; // it will spread element of the object
const dataCopy = { ...data, id: 123, country: "india"}; 

let arr1 = [1, 2, 3, 4, 5];
let obj = { ...arr1}; // it will convert into object index will become key and value will be value
let obj1 = { ..."hello"};// same will happen here also

// REST -> just opposite of spread

// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args) {
    // arguments
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);        
    }
}

// function min(){
//     console.log(arguments); // it will act like array, if pass arguments in min it will print array with index
// } // but if we apply array methods on it, it will not work for that we have to use rest

function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}

function min(msg, ...args) { /// rest is used for collect arguments
    console.log(msg); // we can also pass msg in it, if we dont pass msg only passes args than first args will be msg.    
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
}

// Destructing 
// Storing values of array into multiple variables

let names = ["tony", "bruce", "peter", "steve", "abc"];

let [winter, runnerup, ...others] = names;

const student1 = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
    city: "pune" // this will take preference(use place keyword for print city)
};

// let username = student.username;
let { username: user, password: secret, city: place = "gopalganj" } = student1;


