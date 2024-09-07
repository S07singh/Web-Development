// Question 1
let num = 20; 

if (num%10 == 0){
        console.log("good");
    }else{
        console.log("bad");
    }

// Question 2

// let name = prompt("Please enter your name");
// let age = prompt("Please enter your age");

// alert(`${name} is ${age} years old.`);

// Question 3
let quarter = 1;

switch(quarter) {
    case 1 :console.log("January, February, March");
            break;
    case 2 :console.log("April, May, June");
            break;
    case 3 :console.log("July, August, September");
            break;
    case 4 :console.log("October,November, December");
            break;
    default : console.log("Not A QUARTER!");
}

// Question 4
let str = "Apples";

if ((str[0] == 'a' || str[0] == 'A') && (str.length>5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}

// Question 5

let a = 5; 
let b = 18;
let c = 13;

if (a>b) {
    if(a>c) {
        console.log(a, "is largest")
    } else {
        console.log(c, "is largest")
    }
}else {
    if(b>c) {
        console.log(b, "is largest")
    } else {
        console.log(c, "is largest")
    }
}

// Question6

let num1 = 32 ;
let num2 = 47852;

if((num1%10) == (num2%10)) {
    console.log("numbers have the same last digit which is ", num1%10);

} else {
    console.log("numbers don't have the same last digit which is ");
} 
