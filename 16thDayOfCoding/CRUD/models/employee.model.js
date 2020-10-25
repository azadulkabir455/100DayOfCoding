const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fullname   : String,
    email      : String,
    mobile     : String,
    city       : String
});

mongoose.model("Employee", employeeSchema);