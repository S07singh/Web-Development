// const student = {
//     name: "sudhir",
//     age: 19,
//     marks: 96.4
// };

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
}

const post = {
    username: "@sukisaige",
    content: "This is my #firstpost",
    likes:150,
    reposts: 5,
    tags: ["@apnacollege", "@shradhakhapra"]
};

// GET VALUES OF OBJECT
// 1. object_name[keys_name as string means in a ""]
// 2. using dot operator
console.log(post["username"]);
console.log(post.username); // we generally use dot operator
// but in some case like
let prop = "reposts";
console.log(post[prop]); // we can do like this 
console.log(post.prop); // but we can not do like this, it will show undefined.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}; // here we have use keyword as key of object literals and assigns some value
// compiler and javaScript does not show any error bcz it takes as string
// we can print them 
console.log(obj[1]);  // console.log(obj.1);
console.log(obj[2]); // we cannot use them 
// here obj[1],obj[2] is not array index keep in mind it is string
console.log(obj[true]); console.log(obj.true);
console.log(obj[null]);  console.log(obj.null);
console.log(obj[undefined]); console.log(obj.undefined);
// everything which goes inside square bracket convert fist into string then boj use them.

const student = {
    name: "sudhir",
    age: 19,
    marks: 96.4,
    city: "pune"
};
// we want to change the city
console.log(student.city = "gopalganj");
console.log(student);
// insert gender key as value male
console.log(student.gender = "male");
console.log(student);
// change value of marks from number to string
console.log(student.marks = "A");
console.log(student);
// if we want delete keys from obj use delete keyword
delete student.marks;
console.log(student);

// nested object

// const classInfo = {
//     sudhir: { 
//         grade: 'A',
//         city : "pune"
//     },
//     divya: {
//         grade: "O",
//         city: "pune",
//     },
//     gunjan: {
//         grade : "A+",
//         city: "Gopalganj"
//     }
// };
// console.log(classInfo);

// classInfo.sudhir.city = "Gopalganj"; // dot operator chaining
// console.log(classInfo);

// object inside array
 const classInfo = [
    {
        name : "sudhir",
        grade: "A",
        city: "pune"
    },
    {
        name: "Divya",
        grade: "O",
        city: "pune"
    },
    {
        name: "gunjan",
        grade: "A+",
        city: "gopalganj"
    }
 ]; 
 console.log(classInfo[0].name);
 classInfo[1].gender = "female";

//  Math object 
/*
Math.abs(n); // give absolute value by removing + and -
Math.pow(a, b); // give power of a^b
Math.floor(n); // rounded off to nearest or smallest int value (5.99999999=5)
Math.ceil(n); // rounded off to largest  int value (5.99999999=6 and 5.0000001 = 6)
Math.random(); //it give random number between 0 to 1
*/
// Random integer from 1 to 10
// let random = Math.floor(Math.random() * 10) + 1;
// Math.random() will give any random number b/t 0 to 1(1 excluded)
// then by multiply with 10 we will change it into b/t 0 to 10(10 excluded)
// after applying Math.floor() random number will change to integer b/t 0 to 9
// then + 1 we can change it into 1 to 10

// Question 
// let random = Math.floor(Math.random() * 100) + 1;
// Question 
// let random = Math.floor(Math.random() * 100) + 1;


// GAME guessing

let max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit")
    {
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! Congrats!! Random number was", random);
        break;
    }else if(guess < random) {
        guess = prompt("Hint : your guess was too small. please try again ");
    } else {
        guess = prompt("Hint : your guess was too large. please try again")
    }
}



