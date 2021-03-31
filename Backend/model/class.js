const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = Schema({
    level :{
        type: String,
        required: true
    },
    branch :{
        type: String,
        required: true
    },
    grade :{
        type: Number,
        required: true
    }
}, { timestamps: true })
const Class_model = mongoose.model('Class_model', Class);
module.exports = Class_model;