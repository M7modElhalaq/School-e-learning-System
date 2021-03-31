const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parent = Schema({
    
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
    Job :{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
   
})
const parent_model = mongoose.model('parent_model', parent);
module.exports = parent_model;
