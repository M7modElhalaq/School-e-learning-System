const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subject = Schema({
    
    subjectName :{
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    level :{
        type: String,
        required: true
    },
   
}, { timestamps: true })
const Subject_model = mongoose.model('Subject_model', Subject);
module.exports = Subject_model;