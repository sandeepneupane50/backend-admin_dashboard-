const Booking = require('../model/bookings');
// const { PaginationParameters } = require('mongoose-paginate-v2');

const bookingCreate = async(req,res)=> {
    const {client, contact, province, district, city, futsalname, bookdate, slots, ground, paymentmethod, status} = req.body
    try {
        let booking = await Booking.create({
            client: client,
            contact:contact,
            province: province,
            district: district,
            city: city,
            futsalname: futsalname,
            bookdate: bookdate,
            slots: slots,
            ground: ground,
            paymentmethod: paymentmethod,
            status: status
        })
        return res.status(200).send({
            status: "ok",
            message: "booking successfully"
          })
    }
    catch(err) {
        return res.status(400).send({
          status: "error",
          message: err.message
        })
      }

}

// get booked slots
const getBookedSlots = async (req,res) => {
  const futsal_id = req.query.futsal;
  const bookdate = req.query.bookdate;
  console.log(futsal_id, bookdate);

  try{
    const bookedSlots = await Booking.find({futsalname: { $eq: futsal_id,}, bookdate: { $eq: bookdate}})
    res.json(bookedSlots);
    console.log(bookedSlots);

  } catch(err) {
    return res.status(400).send({
      status: "error",
      message: err.message
    })
  }
}

// get bookings in table
const getBookings = async(req,res) => {
  const status = req.query.status
  const client = req.query.client
  console.log(client);
  const page = req.query.page
  const limit = 2
  const query = { status: { $eq: status }}
  const query2 = { client: {$regex: '.*' + client + '.*'}}
  const options = {
    page: page,
    limit: limit,
    sort: { createdAt: -1 },
    populate: {
      path: 'futsalname'
    }
  }

  try{
    if(!status && !client) {
      const bookings = await Booking.paginate({}, options)
      // .sort({ createdAt: -1 })
      // .populate('futsalname');
      res.json(bookings);
    } else if (status){
      // const bookings = await Booking.find({status: {$eq: status}}).sort({ createdAt: -1 }).populate('futsalname');
      const bookings = await Booking.paginate( query, options );
      res.json(bookings);
    } else if(client) {
      const bookings = await Booking.paginate(query2, options);
      res.json(bookings);
    }
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// edit bookings
const bookingUpdate = async(req,res)=> {
const bookingId = req.params.id;
const updateData = req.body;
try {
  // Use Mongoose to find the futsal document by its ID and update its fields
  const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });

  // console.log(bookingId, updateData, updatedBooking);
  if (!updatedBooking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  res.json({message:'successfully updated'});
} catch (error) {
  console.error('Error updating Book:', error);
  res.status(500).json({ error: 'Server error' });
}
}

// deleteBooking from table
const deleteBooking = async(req,res)=> {
  try {
    const bookingId = req.params.id;
    const deletedBooked = await Booking.findByIdAndRemove(bookingId);
    if (!deletedBooked) {
      return res.status(404).json({ error: 'Booking not found' });
     }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting Booked:', error);
    res.status(500).json({ error: 'Server error' });
  }
}




module.exports= {bookingCreate, getBookedSlots, getBookings, bookingUpdate, deleteBooking}