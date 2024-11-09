const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
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
    try{
        let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
    }
    catch(err) {
        next(err);
    }
});

// New route

app.get("/chats/new", (req, res) => {
    throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

// Create route

app.post("/chats",  async (req, res, next) => {
    try{
        let{sender, receiver, message} = req.body;
    let newChat = new Chat({
        sender,
        receiver,
        message,
        createdAt: new Date()
    });
    await newChat.save();
    
    //  newChat.save().then((res) => { // this is async function use of await or then have 
    //     console.log('Message saved successfully');
    // }).catch((err) => {
    //     console.log(err);
    // })
    res.redirect("/chats");
    }
    catch(err){
        next(err);
    }
});

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
};
}
//New Show route

app.get("/chats/:id", asyncWrap(async (req, res, next) => {
  
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next( new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", {chat});
 
}));
// edit route

app.get("/chats/:id/edit", async (req, res) => {
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }
    catch (err) {
        next(err);
    }
   
});

// Update route

app.put("/chats/:id", async (req, res) => {
    try {
        let {sender, receiver, message} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(req.params.id, {sender, receiver, message}, {new: true, runValidators: true});
        res.redirect("/chats");
    }
    catch (err) {
        next(err);
    }
});

// Delete route

app.delete("/chats/:id", async (req, res) => {
   try {
    let deletedChat = await Chat.findByIdAndDelete(req.params.id);
   console.log(deletedChat);
    res.redirect("/chats");
   }
   catch (err) {
       next(err);
   }
});
app.get("/", (req, res) => {
    res.send('Hello, World!');
})
// Error handling middleware
// app.use( (err, req, res) => {
//     let {status = 500, message = "Some error occurred"} = err; 
//     res.status(status).send(message);   
// })

const handleValidationErr = (err) => {
    console.log("This was a Validation error. Please follow rules");
    console.log(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
     err = handleValidationErr(err);
    }
    next(err);
})
app.listen(8080, () => {
    console.log('Server listening on port 8080');
})