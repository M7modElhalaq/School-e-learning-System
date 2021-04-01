const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const School = Schema({
    school_Name :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    ministry :{
        type: String,
        required: true
    },
    managerId :{
        type: ObjectID,
        required: true
    },
    phone_number :{
        type: Number,
        required: true
    }
}, { timestamps: true })
const Schoolmode = mongoose.model('School', School);
exports.Schoolmode = Schoolmode
exports.Schoolschema = School;
