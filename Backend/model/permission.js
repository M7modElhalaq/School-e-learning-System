const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissions = Schema({
    edit_employees: {
        type: Boolean,
        required: [true, 'Please set edit employees value'],
    },
    edit_students: {
        type: Boolean,
        required: [true, 'Please set edit stuednts value'],
    },
    edit_parents: {
        type: Boolean,
        required: [true, 'Please set edit parents value'],
    },
    edit_sections: {
        type: Boolean,
        required: [true, 'Please set edit sections value'],
    },
    edit_materials: {
        type: Boolean,
        required: [true, 'Please set edit materials value'],
    },
})
const permissions_model = mongoose.model('permissions_model', permissions);
module.exports = permissions_model;
