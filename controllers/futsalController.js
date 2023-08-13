const Futsal = require('../model/futsals');

const futsalCreate = async (req,res) => {
    const { futsalname, owner, email, contact, province, district, city, street, pan, openingTime, closingTime, ground, status, timeSlots } = req.body;
    try {
        let futsal = await Futsal.create({
            futsalname: futsalname,
            owner: owner,
            email: email,
            contact:contact,
            province: province,
            district: district,
            city: city,
            street: street,
            pan: pan,
            openingTime: openingTime,
            closingTime: closingTime,
            ground: ground,
            status: status,
            timeSlots: timeSlots,
            file: req.file.path
        
        })
        return res.status(200).send({
            status: "ok",
            message: "futsal created successfully"
          })
    }
    catch(err) {
        return res.status(400).send({
          status: "error",
          message: err.message
        })
      }

}

// get futsals in table
const getFutsals = async (req, res) => {
  const status = req.query.status
  const futsalname = req.query.futsalname
  console.log(status, futsalname);
  try {
    if(!status && !futsalname) {
      const futsals = await Futsal.find().sort({ createdAt: -1 }); // Retrieve all futsals from the MongoDB collection
      return res.json(futsals);
    } else if (status) {
      const futsals = await Futsal.find({status: {$eq: status}}).sort({ createdAt: -1 }); // Retrieve all futsals from the MongoDB collection
      return res.json(futsals);
    } else if (futsalname) {
      const futsals = await Futsal.find({futsalname: {$regex: '.*' + futsalname + '.*'}}).sort({ createdAt: -1 }); // Retrieve all futsals from the MongoDB collection
      return res.json(futsals);
    } 
  } catch (error) {
    console.error('Error fetching futsals:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// deleteFutsal from table
const deleteFutsal = async (req, res) => {
  try {
    const futsalId = req.params.id;
    const deletedFutsal = await Futsal.findByIdAndRemove(futsalId);

    if (!deletedFutsal) {
      return res.status(404).json({ error: 'Futsal not found' });
    }

    res.json({ message: 'Futsal deleted successfully' });
  } catch (error) {
    console.error('Error deleting futsal:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateFutsal =  async (req, res) => {
  const futsalId = req.params.id;
  const updateData = req.body;

  try {
    // Use Mongoose to find the futsal document by its ID and update its fields
    const updatedFutsal = await Futsal.findByIdAndUpdate(futsalId, updateData, { new: true });
    // console.log(futsalId, updateData, updatedFutsal);
    if (!updatedFutsal) {
      return res.status(404).json({ error: 'Futsal not found' });
    }
    res.json({message:'successfully updated'});
  } catch (error) {
    console.error('Error updating futsal:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// fetching active futsals for bookings
const getAvailableFutsals = async(req,res) => {
  const city_id = req.query.city;
  // console.log(city_id);
  try {
    const futsals = await Futsal.find({city: { $eq: city_id }, status: 1 });
    res.json(futsals);
  } catch(err) {
      console.error('Error fetching futsals:', err);
  }
}



module.exports = { futsalCreate, getFutsals, deleteFutsal, updateFutsal, getAvailableFutsals };