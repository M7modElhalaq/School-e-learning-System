const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sub_material = Schema({
    
    teacherID :{
        type: ObjectID,
        required: true
    },
    sectionID :{
        type: ObjectID,
        required: true
    },
    material :{
        type: String,
        required: true
    },
    levelId :{
        type: ObjectID,
        
    },
   
})
const sub_material_model = mongoose.model('sub_material_model', material);
module.exports= sub_material_model;