const express = require('express');
const app = express();

// console.dir(app);

// Ports are tha logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// let port = 3000; 
let port = 8080; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // logs the port number on which the server is running
});

/*
app.use((req, res) => {
    // console.log(req);
    console.log("request received");
    // res.send("this is a basic request");
    // res.send({
    //     name: "apple",
    //     color: "red",
    //     type: "fruit"
    // });
    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
    res.send(code);
});

// http request is text based and express parse it into object.
*/

// Routing - It is process of selecting a path for traffic in a network or between or across multiple networks.
app.get("/", (req, res) => {
    res.send("hello, i am root");
});
// app.get("/apple", (req, res) => {
//     res.send("this is apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("this is orange path");
// });
// app.get("*", (req, res) => {
//     res.send("404 Not Found,this path does not exist");
// });
// app.post("/", (req, res) => {
//     res.send("you sent a post request to root page");
// });

// when i change something in code, i have to restart for routing or sending request, 
//to avoid that we have to download nodemon which automatically restart server with code changes.
// npm install -g nodemon

//Path Parameters- giving variables, where username will any name and id will be id of the person.  
app.get("/:username/:id", (req, res) => {
    let { username, id} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username}.</h1>`;
    res.send(htmlstr);
});


// query string - in url q= anything

app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});