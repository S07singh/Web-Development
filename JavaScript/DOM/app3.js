/*
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked"); 
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked"); 
});

for(li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation(); // it will not trigger parent which happen earlier.
        console.log("li was clicked");
    })
};// what happens here is that when we click li its parent also get trigger in console div and ul also get print.
// for stopping that we have to use (stop propagation)

*/

                        /* ACTIVITY */

let btn = document.querySelector("button");                        
let ul = document.querySelector("ul");                        
let inp = document.querySelector("input"); 

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
 
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };

// above delete methods do apply for new add item ,it will not delete that new add item
// for deleting that item we have to use (event delegation)

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

