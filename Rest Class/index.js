// REST - Representation State Transfer
// REST  is  an architectural style that defines a set of constraints to be used for creating web services.
/*
CRUD Operations

GET retrieves resources.
POST submits new data to the server.
PUT updates existing data
PATCH updates existing data partially
DELETE removes data

*/

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        // id:"1a",
        id: uuidv4(),
        username: "gunjan",
        content: "I love conding!",
    },
    {
        // id:"2b",
        id: uuidv4(),
        username: "sudhir",
        content: "Hard work is important to achieve success",
    },
    {
        // id:"3c",
        id: uuidv4(),
        username: "sudhirsingh",
        content: "I got selected for my 1st internship!",
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let {id} =  req.params;
    let post = posts.find((p )=> id === p.id);
    
    res.render("show.ejs", {post})
});

app.patch("/posts/:id",  (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p )=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } =  req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post})
});

app.delete("/posts/:id", (req, res) => {c
    let {id} =  req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});