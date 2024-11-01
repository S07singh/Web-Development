const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('Connection successful');
        })
    .catch(error => {
        console.error(error);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
    },
    author: {
        type: String,
        
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['Fiction', 'Non-Fiction'],
    },
    genre: [String]
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book ({
    title: "Marvel Comics V4",
    price:  600,
    genre: ["comics", "superhero", "fiction"]

});
book1.save().then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});

Book.findByIdAndUpdate("671e83bbf376a00f07d07cbf", { price: -100 },
    {runValidators: true}
)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err.errors.price.properties.message);
    });