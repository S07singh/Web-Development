const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

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
    } 
    throw new ExpressError(401,"ACCESS_DENIED!")
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
app.get("/err", (req, res) => {
    abcd = abcd 
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
    })

app.use((err, req, res, next) => {
   let {status = 500, message = "some error occurred"} = err;
   res.status(status).send({message});
});

// app.use((req, res) => {
//     res.status(404).send('Page not found!');
// });

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});