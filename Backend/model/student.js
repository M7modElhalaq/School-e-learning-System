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
    phone_number :{
        type: Number,
        required: true
    },
    birthday_date :{
        type: Date,
        required: true
    },
    gender:{
        type: String,
    },
    class_id:{
        type: ObjectID,
        required: true
    }
}, { timestamps: true })

const Studentmode = mongoose.model('Studentmode', Student);
module.exports = Studentmode;