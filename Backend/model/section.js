const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Section = Schema({
    
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
const Section_model = mongoose.model('Section_model', Section);
exports.Section_model = Section_model
exports.Sectionschema = Section;
