const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/", (req,res) => {
    res.render("employee/addOrEdit", {
        viewTemplate: "Insert Employee",
    });
})
router.post("/", (req, res) => {
    insertRecord(req,res);
})

function insertRecord(req, res) {
    let employee = new Employee(req.body);
    console.log(req.body);
    employee.save()
        .then(() => {
            res.redirect('employee/list');
        })
        .catch((err) => {
            console.log("Data not saved" + err);
        })
}

router.get("/list",(req,res) => {
    Employee.find()
    .then((data) => {
        res.render("employee/list", { list: data});
    })
    .catch((err) => {
        console.log('Error in retrieving employee list :' + err);
    })
});

module.exports = router;