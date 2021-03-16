const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = Schema({
    identification_number :{
        type: Number,
        required: true
    },
    parent_id :{
        type: ObjectID,
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
    managerId :{
        type: ObjectID,
        required: true
    },
    PHONENUMBER :{
        type: Number,
        required: true
    },
    birthDay_Date :{
        type: Date,
        required: true
    },
    address:{
        type: String,
    },
    gender:{
        type: String,
    },
    level:{
        type: Number,
        required: true
    },
    grade:{
        type: Number,
        required: true
    },
    class_id:{
        type: String,
        required: true
    },
    created_at:{
        type:Date,
        required: true
    }
})
const Studentmode = mongoose.model('Studentmode', Student);
module.exports = Studentmode;