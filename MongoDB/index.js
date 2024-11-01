const mongoose = require('mongoose');

// Connect to MongoDB
main()
    .then(() => {
        console.log('Connection successful');
        })
    .catch(error => {
        console.error(error);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Define schema for user

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Create model from schema

const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', userSchema);


// Create a new user
// const user1 =  new User({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30,
// });

// // Save the user to the database
// user1.save();
/*

const user2 =  new User({
    name: 'John',
    email: 'john@example.com',
    age: 33,
});

// Save the user to the database
user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

*/

/*
User.insertMany([
    { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
    { name: 'Jack', email: 'jack@example.com', age: 31 },
    { name: 'Emily Doe', email: 'emily.doe@example.com', age: 27 },
    { name: 'Emily', email: 'emily@example.com', age: 26 },
   
]).then((res) => {
    console.log(res);
});
*/

// Find all users

// User.find({age: { $gt: 27}})
// User.findOne({age: { $gt: 27}})
// User.findOne({ _id: "671ce2efec8b6006faab8585"})
// User.findById("671ce2efec8b6006faab8585")

//    .then((res) => {
//         console.log(res);
//     })
//    .catch((err) => {
//         console.error(err);
//     });

    // Update user
// User.updateOne({ name: 'John Doe' }, {age: 56})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// User.findOneAndUpdate({name: "John Doe"},  {age: 35}, {new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

// Delete user
User.deleteOne({name: "John Doe"}).then((res) => {
    console.log(res);
});