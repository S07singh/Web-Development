const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
    .then(() => {
     console.log('Connected to MongoDB');
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
/*
let chat1  = new Chat({
    sender: 'John',
    receiver: 'Alice',
    message: 'Hi Alice!, how are you doing ?',
    createdAt: new Date()

});

chat1.save().then((res) => {
    console.log('Message saved successfully', res);
});
*/
// index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New route

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create route

app.post("/chats",  (req, res) => {
    let{sender, receiver, message} = req.body;
    let newChat = new Chat({
        sender,
        receiver,
        message,
        createdAt: new Date()
    });
     newChat.save().then((res) => { // this is async function use of await or then have 
        console.log('Message saved successfully');
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
});
// edit route

app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// Update route

app.put("/chats/:id", async (req, res) => {
    let {sender, receiver, message} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(req.params.id, {sender, receiver, message}, {new: true, runValidators: true});
    res.redirect("/chats");
});

// Delete route

app.delete("/chats/:id", async (req, res) => {
   let deletedChat = await Chat.findByIdAndDelete(req.params.id);
   console.log(deletedChat);
    res.redirect("/chats");
});
app.get("/", (req, res) => {
    res.send('Hello, World!');
})

app.listen(8080, () => {
    console.log('Server listening on port 8080');
})