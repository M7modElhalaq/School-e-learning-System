const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subject = Schema({
    
    subjectName :{
        type: String,
        required: true
    },
    subject: {
        type: Buffer
    },
    level :{
        type: String,
        required: true
    },
   
}, { timestamps: true })
const Subject_model = mongoose.model('Subject_model', Subject);
exports.Subject_model = Subject_model
exports.Subjectschema = Subject;
