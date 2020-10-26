require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars");
// const bodyparser = require('body-parser');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const employeeController = require("./controllers/employeeController");


const app = express();
const port = 3000;


// app.use(bodyparser.urlencoded({
//     extended: true
// }));
// app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }))
app.use("/employee", employeeController);

app.set("views", path.join(__dirname, "views"));
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "hbs");


app.listen(port, (req,res) => {
    console.log(`Server is start in localhost:${port}`);
})

