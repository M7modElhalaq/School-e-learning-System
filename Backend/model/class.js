const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Classschema = Schema({
    room :{
        type: String,
        required: true
    },
    branch :{
        type: String,
    },
    grade :{
        type: String,
        required: true
    }
}, { timestamps: true })
const Class_model = mongoose.model('Class_model', Classschema);
exports.Class_model = Class_model
exports.Classschema = Classschema;
