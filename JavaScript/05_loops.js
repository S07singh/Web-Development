// For odd number
// for (let i = 1; i<=15; i=i+2) {
//     console.log(i);
// }
// console.log("Backward");

// for (let i = 19; i>=1; i=i-2) {
//     console.log(i);
// }
// console.log("even");

// for( let i = 2; i <= 10; i=i+2) {
//     console.log(i);
// } 
// console.log("Backward");
// for( let i = 10; i >= 2; i=i-2) {
//     console.log(i);
// }

/*
infinite loop (DANGER)
for (let i=1; i>=0; i++){
} 

for (let i=1; i<=5; i--){
}

for(let i=1; ; i++){
}
 
*/

// Table 

// let n = prompt("write your number");
// n = parseInt(n); // what it will do is it convert string input into integer.

// for (let i=n; i<=n*10; i = i+n) {
//     console.log(i);    
// }

// nested loop

// for (let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
    
//     for(let j=1; j<=3; j++){
//         console.log(j);
        
//     }
// }

// while loop

// let i = 5;
// while (i>=1) {
//     console.log(i);
//     i--;
// }

// let i = 0;
// while (i<=20) {
//     console.log(i);
//     i= i+2; // even
// }

// GAME

// const favMovie = "avatar";

// let guess = prompt ("guess my favorite movie");

// while ( (guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess, please try again");
// }
// if (guess == favMovie) {
//     console.log("congrats!!");
    
// } else {
// console.log("you quit");
// }

// USE OF KEYWORD BREAK
// const favMovie = "avatar";

// let guess = prompt ("guess my favorite movie");

// while  (guess != favMovie) {
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess, please try again");
// }
// if (guess == favMovie) {
//     console.log("congrats!!");
    
// } 

// ARRAY WITH LOOPS

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ];

// for(let i =0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j= 0; j<heroes[i].length; j++){
//         console.log(`j= ${j}, ${heroes[i][j]}`); 
//     }
// }

// let student = [ ["sudhir", 98], ["rahul", 87], ["anuj", 80] ];

// for (let i = 0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for (let j = 0; j<student.length; j++) {
//         console.log(student[i][j]);        
//     }
// }

//  // fro-of loop

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (fruit of fruits){
//     console.log(fruit);
// }

// for(char of "sudhir singh") {
//     console.log(char);
// }

// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"]];
// // nested for-of loop
// for(list of heroes) {
//     for(name of list) {
//         console.log(name);
        
//     }
// }


let todo = [];

let req = prompt("please enter your request");

while (true) {
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list") {
        console.log("-----------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);            
        }
        console.log("-----------");
    }else if (req == "add") {
        let task = prompt("please enter the task you want to add")
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt ("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");        
    } else {
        console.log("wrong request");
        
    }
    req = prompt("please enter your request");
}


