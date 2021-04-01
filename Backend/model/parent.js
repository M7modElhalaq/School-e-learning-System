const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentschema = Schema({
    
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
const parent_model = mongoose.model('parent_model', parentschema);
exports.parent_model = parent_model
exports.parentschema = parentschema;
