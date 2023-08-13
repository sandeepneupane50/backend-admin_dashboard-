const mongoose = require('mongoose');

const futsalSchema = new mongoose.Schema({
    futsalname: {
        type: String,
        require: true,
        unique: true
    },
    owner: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contact: {
        type: Number,
        require: true
    },
    province: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    street: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    },
    ground: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required:true
    },
    timeSlots: {
        type: Array
    },
    createdAt: { 
        type: Date, 
        default: Date.now }
});

const Futsal = mongoose.model('Futsal', futsalSchema);

module.exports = Futsal