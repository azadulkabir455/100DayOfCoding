const express = require("express");
const path = require('path');
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.use('./static', express.static("public"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    res.status(200).render("index.pug")
})

app.listen(port, hostname, () => {
    console.log(`This is succesfully open at ${hostname}:${port}`);
})