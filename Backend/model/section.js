const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassRoom = Schema({
    
    classID :{
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
}, { timestamps: true })
const ClassRoom_model = mongoose.model('ClassRoom', Section);
module.exports = ClassRoom_model;