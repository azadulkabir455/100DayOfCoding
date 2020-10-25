const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
const port = 8000;

// Database Defination
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    comment: String
});

const Contact = mongoose.model('Contact', contactSchema);




app.use("/public",express.static("public"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    res.status(200).render("index.pug");
})

app.get("/contact", (req,res) => {
    res.status(200).render("contact.pug");
})

app.post("/contact", (req,res) => {
    let userData = new Contact(req.body);
    console.log();
    userData.save()
        .then(() => {
            res.send("Data has been succesfully seved")
        })
        .catch(() => {
            res.status(400).res.send("Data is not saved")
        });
    // res.status(200).render("contact.pug");
})

app.get('*',(req,res) => {
    res.status(404).render("404.pug");
})



app.listen(port, () => {
    console.log(`App is successfully starting at localhost:${port}`)
})