require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));;

const client = require('./config/database');
const { signUp,login} = require('./controllers/authenticationController.js')
const {getProvinces, getDistricts, getCities} = require('./controllers/locationsController');
const futsalImg = require('./middleware/uploadFutsalImage')
const {futsalCreate, getFutsals, deleteFutsal, updateFutsal, getAvailableFutsals} = require('./controllers/futsalController');
const {bookingCreate, getBookedSlots, getBookings, bookingUpdate, deleteBooking} = require('./controllers/bookingController');

// database
const databaseConnect = async() => {
    console.log('establishing connection...');
    try {
      await mongoose.connect(process.env.MONGO_URI);      
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("futsal_mgt").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

databaseConnect().catch(err => console.log(err));

// Authentication endpoint for login
app.post('/login', login );

// signUp for admin user
app.post('/register', signUp );

// locations fetching
app.get('/provinces', getProvinces);
app.get('/districts/', getDistricts);
app.get('/cities', getCities);

// futsal
app.get('/futsals', getFutsals)
app.post('/futsals/create', futsalImg.single('file'), futsalCreate);
app.delete('/futsals/:id', deleteFutsal);
app.patch('/futsals/:id', futsalImg.single('file'), updateFutsal);

// booking
app.post('/bookings/form', bookingCreate);
app.get(`/bookings/form/futsals`, getAvailableFutsals);
app.get('/bookings/form/bookedSlots', getBookedSlots)
app.get('/bookings', getBookings);
app.patch('/bookings/:id', bookingUpdate);
app.delete('/bookings/:id', deleteBooking);


app.listen(5000, () => {
    console.log('server is listening port 5000...')
})