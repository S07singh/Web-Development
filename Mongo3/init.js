const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
     console.log('Connected to MongoDB');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats  = [
    {
        sender: 'John',
        receiver: 'jessica',
        message: 'Hello Jessica!',
        createdAt: new Date()
    },
    {
        sender: 'jessica',
        receiver: 'John',
        message: 'Hi John! How are you?',
        createdAt: new Date()
    },
    {
        sender: 'John',
        receiver: 'jessica',
        message: 'I am doing well! How about you?',
        createdAt: new Date()
    },
    {
        sender: 'jessica',
        receiver: 'John',
        message: 'I am also good. Thanks for asking!',
        createdAt: new Date()
    },
    {
        sender: 'John',
        receiver: 'jessica',
        message: 'How your day is going so far?',
        createdAt: new Date()
    }
];

Chat.insertMany(allchats);

