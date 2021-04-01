const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = Schema({
    
    identification_number :{
        type: Number,
        required: true
    },
    full_name_ar :{
        type: String,
        required: true
    },
    full_name_en :{
        type: String,
        required: true
    },
    role_Id :{
        type: ObjectID,
     
    },
    job_Number :{
        type: Number,
        required: true
    },
    gender :{
        type: String,
        required: true
    },
    social_Status :{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    date_Of_birth :{
        type: Date,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    teaching_Subject :{
        type: String,
        required: true
    },

   
})
const employee_model = mongoose.model('employee_model', employee);
exports.employee_model = employee_model
exports.employeeschema = employee