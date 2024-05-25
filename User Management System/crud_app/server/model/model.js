const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Registration_No : {
        type : String,
        required: true
    },
    Full_Name : {
        type : String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },  
    Branch : {
        type: String,
        required: true
    },
    CGPA : {
        type : String,
        required: true
    },
    gender : String
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;