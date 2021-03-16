const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subject = Schema({
    
    subjectName :{
        type: String,
        required: true
    },
    grade :{
        type: Number,
        required: true
    },
    levelId :{
        type: ObjectID,
        required: true
    },
    created_Date :{
        type: Date,
        required: true
    },
   
})
const Subject_model = mongoose.model('Subject_model', Subject);
module.exports = Subject_model;