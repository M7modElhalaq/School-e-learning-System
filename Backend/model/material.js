const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const material = Schema({
    
    material :{
        type: String,
        required: true
    },
    subjectId :{
        type: ObjectID,
        
    },
   
})
const material_model = mongoose.model('material_model', material);
module.exports= material_model;