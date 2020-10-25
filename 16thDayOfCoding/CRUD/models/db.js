const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employeeDB', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log("Database has been succesfully connected");
    }else {
        console.log(`Connecton error: ${err}`);
    }
});

require("./employee.model");