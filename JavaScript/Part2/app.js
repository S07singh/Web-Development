// call stack

// single threads in javascript


// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("violet", 1000);
//                 });
//             });
//         });
//     });
// });

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        h1.style.color = color; 
        resolve("color changed!");
    }, delay);
});
}

// changeColor("red", 1000)
// .then (() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000)   
// })
// .then (() => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000)   
// })
// .then (() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000)   
// })
// .then (() => {
//     console.log("blue color was completed"); 
// });


// we can do same thing with async function 

async function demo () {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  changeColor("blue", 1000);
}

// here what we do extra is if promise is rejected then what will happen it will not print next element for that we can do 
//  use try and catch put await in try and then 
// catch (err) {
// console.log("error caught")
// console.log(err)
//} 

// callback hell -> callback nesting

// for avoiding it we use promises and async and await
/*
function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  // if(internetSpeed > 4){
  //     console.log("your data was saved", data);
  // } else {
  //     console.log("weak connection. data not saved");

  // }
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Apna college",
  () => {
    console.log("success : your data was saved");
    savetoDb(
      "hello world",
      () => {
        console.log("success2: data2 saved");
        savetoDb(
          "hello world2",
          () => {
            console.log("success3: data3 saved");
          },
          () => {
            console.log("failure3 : weak connection. data not saved");
          }
        );
      },
      () => {
        console.log("failure2 : weak connection. data not saved");
      }
    );
  },
  () => {
    console.log("failure : weak connection. data not saved");
  }
);
*/

// Promises-> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promises is object (resolve and reject)

// function savetoDb(data) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
//           } else {
//             reject("failure : weak connection");
//           }
//     })
// }   

// savetoDb("apna college");

// in promises there is methods then() ans catch()
// then is used after fulfilled and reject is used after rejected.

// let request = savetoDb("apna college"); // req = promise object
// request
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });

// savetoDb("apna college") 
//     .then(() => {
//         console.log("promise was resolved");     
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

// promises chaining

// savetoDb("apna college") 
//     .then(() => {
//         console.log("data1 saved.");     
//         savetoDb("helloworld").then(() => {
//             console.log("data2 saved");
//         });
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

// This is promises chaining

// savetoDb("apna college") 
//     .then(() => {
//         console.log("data1 saved.");     
//         return savetoDb("helloworld");
//     })
//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("sudhir");
//     })
//     .then(() => {
//         console.log("data3 saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

// this above promise code preform same thing which call back is preforming




/*
function savetoDb(data) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
          } else {
            reject("failure : weak connection");
          }
    })
} 

savetoDb("apna college") 
    .then((result) => {
        console.log("data1 saved.");
        console.log("result of promise:",result);     
        return savetoDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise:",result); 
        return savetoDb("sudhir");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise:",result); 
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise:",error); 
    });

*/

/*
async function greet() {
  throw "404 page not found";
  return "hello";
}
// just write async keyword to make normal function a promise
greet()
  .then ((result) => {
      console.log("promise was resolved");
      console.log("result was : ", result);
  })
  .catch((err) => {
      console.log("promise was rejected with err : ", err);
  })

let demo = async () => {
  return 5;
};

// Await keyword -> pause the execution of its surrounding async function until the promise is settled (resolved or rejected)


function getNum () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let num  = Math.floor(Math.random() * 10) + 1;
          console.log(num);
      }, 1000);
  })
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

*/

