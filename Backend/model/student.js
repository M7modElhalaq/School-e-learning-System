const mongoose = require('mongoose');
const { ObjectID } = require('bson');
const parent = require('./parent').parentschema
const classschema = require('./class').Classschema

const Schema = mongoose.Schema;

const Studentschema = Schema({
    identification_number :{
        type: Number,
        required: true
    },
    parent :{
        type:  parent,
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
        require:true
    },
    classforignkey:{
        type: classschema,
    },
    address :{
        type: String,
        require : true
    },
    nationality:{
        type : String
    },
    religion:{
        type : String
    }

}, { timestamps: true })

const Studentmode = mongoose.model('Studentmode', Studentschema);
exports.Studentmode = Studentmode
exports.Studentschema = Studentschema;
