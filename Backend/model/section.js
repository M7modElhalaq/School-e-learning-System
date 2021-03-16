const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Section = Schema({
    
    studentID :{
        type: ObjectID,
        required: true
    },
    teacherID :{
        type: ObjectID,
        required: true
    },
    subjectID :{
        type: ObjectID,
        required: true
    },
    sectionName :{
        type: String,
        required: true
    },
    semester :{
        type: String,
        required: true
    },
    created_Date :{
        type: Date,
        required: true
    },
})
const Section_model = mongoose.model('Section_model', Section);
module.exports = Section_model;