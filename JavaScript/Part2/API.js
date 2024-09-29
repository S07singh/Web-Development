/*
 some random apis

 https://catfact.ninja/fact  (sends random cat facts)

 https://www.boredapi.com/api/activity (sends an activity to do when bored)

 https://dog.ceo/api/breeds/image/random (send cute dog pictures)
 */
// JSON 

// Accessing Data form JSON

// JSON.parse(data) Method
// To parse a string data into a object

// JSON.stringify(json) Method
// To parse a JS object data into JSON
/* 
let jsonRes = 
    // '{"fact":"Approximately 1/3 of cat owner think their pets are able to read minds.","length":78}';
    '{"fact":"Cats hate the water because their fur does not insulate well when it\u2019s wet. The Turkish Van, however, is one cat that likes swimming. Bred in central Asia, its coat has a unique texture that makes it water resistant.","length":216}'

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
console.log(validRes.length);

let student = {
    name: "sudhir",
    marks: 95
};
*/
// Testing API requests
// tools -> hoppscoth, postman

// Ajax -> Asynchronous javascript and XML 
// here xml means json

// javascript sends request to api asynchronously then response comes vai xml(json) to javascript


// get, post , delete these are  http verbs 

// status codes 
/*
 200 -ok
 404 - not found
 400 - bad request 
 500 - internal server error
*/

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then ((response) => {
//     // console.log(response);
//     return response.json();
// })
// .then((data) => {
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((response) => {
//     return response.json();
// })
// .then ((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch ((err) => {
//     console.log("ERROR - ", err);
// })

// these are api call which asynchronous means javascript do not wait for them if print something here it will print first then in backend api 

// console.log("hello world");

/*
async function getFacts() {
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    } catch (e) {
        console.log("error - ", e);
    }

    console.log("bye");
}
*/

// let btn = document.querySelector("button");

// btn.addEventListener("click",  async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// async function getFacts() {
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         return "NO fact found"
//     }
// }

/*
let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",  async () => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link)
});

async function getImage() {
    try{
    let res = await axios.get(url2);
    return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "/";
    }
}
*/

/*
const url = "https://icanhazdadjoke.com/";

async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}

*/

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button")

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let collegeArr = await getColleges(country);
    show(collegeArr);
});

function show(collegeArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collegeArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}


// do the homework as find for state
