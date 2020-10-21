const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use("/public",express.static("public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    res.status(200).render("index.pug");
})
app.get("/contact", (req,res) => {
    res.status(200).render("contact.pug");
})
app.get('*',(req,res) => {
    res.status(404).send("404 not found");
})



app.listen(port, () => {
    console.log(`App is successfully starting at localhost:${port}`)
})