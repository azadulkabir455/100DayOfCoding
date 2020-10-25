require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars");
// const bodyparser = require('body-parser');
const employeeController = require("./controllers/employeeController");


const app = express();
const port = 3000;


// app.use(bodyparser.urlencoded({
//     extended: true
// }));
// app.use(bodyparser.json());
app.use(express.urlencoded())
app.use("/employee", employeeController);

app.set("views", path.join(__dirname, "views"));
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"

}));
app.set("view engine", "hbs");


app.listen(port, (req,res) => {
    console.log(`Server is start in localhost:${port}`);
})

