const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use("/public",express.static("public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    res.status(200).render("index.pug");
})
app.get("/about", (req,res) => {
    res.status(200).render("about.pug");
})
app.get('*',(req,res) => {
    res.status(404).send("404 not found");
})
app.get('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })


app.listen(port, () => {
    console.log(`App is successfully starting at localhost:${port}`)
})