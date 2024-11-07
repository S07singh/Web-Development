const express = require('express');
const app = express();

// app.use((res, req,  next) => {
//     console.log("Hi, I am first middleware");
//     next();
// });
// app.use((res, req,  next) => {
//     console.log("Hi, I am second middleware");
//     next();
// });

// middleware have to use before route 
// logger - morgon
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    } else {
        res.status(401).send("Access denied");
    }
}

app.use("/random", (req, res, next) => {
    console.log("I am only for random middleware");
    next();
});

app.get("/api", checkToken, (req, res) => {
    res.send("data")
});

app.get('/', (req, res) => {
    res.send('Hi, I am root!');

});

app.get("/random", (req, res) => {
    res.send("This is a random page!");
})

// error handling middleware

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});