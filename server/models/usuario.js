const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    career: {
        type: Number,
        required: [true, 'Career is required']
    },
    semester: {
        type: Number,
        required: [true, 'Semester is required']
    },
    gender: {
        type: Number,
        required: [true, 'Gender is required']
    },

});

module.exports = mongoose.model('Usuario', usuarioSchema);