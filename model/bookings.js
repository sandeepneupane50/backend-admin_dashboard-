const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const bookingSchema = new mongoose.Schema({
    client: {
        type: String,
        required:true
    },
    contact: {
        type: Number,
        required:true
    },
    province: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    futsalname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Futsal',
        required:true
    },
    bookdate: {
        type:String,
        required:true
    },
    slots: {
        type: Array,
        required:true
    },
    ground: {
        type:String,
        required:true
    },
    paymentmethod: {
        type:String,
        required:true
    },
    status: {
        type:Number,
        required:true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }

})
bookingSchema.plugin(mongoosePaginate);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking