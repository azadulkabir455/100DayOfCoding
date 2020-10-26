const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/", (req,res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee",
    });
})
//Create Or Update
router.post("/", (req, res) => {
    
    if(req.body._id == ""){
        insertRecord(req,res);
    }else {
        updateRecord(req,res);
    }
})

//Save Data
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

//Update Data 

function updateRecord(req, res) {
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
    .then(() => {
        res.redirect('/employee/list');
    }).catch((err) => {
        console.log(`Upadated failed for ${err}`);
    })
}

//Find Data
router.get("/list",(req,res) => {
    Employee.find()
    .then((data) => {
        res.render("employee/list", { list: data});
    })
    .catch((err) => {
        console.log('Error in retrieving employee list :' + err);
    })
});

//Find Data By their specific ID
router.get("/:id", (req,res) => {
    Employee.findById(req.params.id)
    .then((data) => {
        res.render("employee/addOrEdit", {
            viewTitle: "Update Employee",
            employee: data
            
        });
    }).catch((err) => {
        console.log(`Error to updated ${err}`);
    })
})

router.get("/delete/:id", (req,res) => {
    Employee.findOneAndRemove(req.params.id)
    .then(()=> {
        res.redirect("/employee/list");
    }).catch((err) => {
        console.log(`Delete is failed for ${err}`);
    })
})

module.exports = router;