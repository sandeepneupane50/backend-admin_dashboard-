const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // district_id: { type: mongoose.Schema.Types.ObjectId, ref: 'District' }
  
});

const districtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  province_id: {type:mongoose.Schema.Types.ObjectId, required: true},
  district_id: { type: mongoose.Schema.Types.ObjectId, ref: 'District' }
  
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  district_id: {type:mongoose.Schema.Types.ObjectId, required: true},
  city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'District' }
  
});

const Province = mongoose.model('Province', provinceSchema);
const District = mongoose.model('District', districtSchema);
const City = mongoose.model('City', citySchema);

module.exports = { Province, District, City };




// controller code to import city

// const City = require('./model/city')
// const cities = [

//   {  "name": "Balaju", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Baluwatar", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Bansbari", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Budhanilkantha", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Chabahil", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Dillibazar", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Gauchar", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Kalimati", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Kirtipur", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Manmaiju", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Pashupati", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Pharping", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Sachibalaya", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Sankhu", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Sarbochcha Adalat", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Sundarijal", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Swayambhu", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Thankot", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Tokha Saraswati", "district_id": "64c8b66d319e81b1426ad8e5" },
//   {  "name": "Tribhuvan University", "district_id": "64c8b66d319e81b1426ad8e5" },

//   {  "name": "Dibyashwori", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Dubakot", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Gamcha", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Jorpati", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Kharipati", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Nagarkot", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Tathali", "district_id": "64c8b66d319e81b1426ad8e6" },
//   {  "name": "Thimi", "district_id": "64c8b66d319e81b1426ad8e6" },

//   {  "name": "Bhattedanda", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Chapagaun", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Darabartole", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Dhapakhel", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Godawari", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Gotikhel", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Imadol", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Lubhu", "district_id": "64c8b66d319e81b1426ad8e7" },
//   {  "name": "Pyutar", "district_id": "64c8b66d319e81b1426ad8e7" },

//   {  "name": "Jutpani", "district_id": "64c8b66d319e81b1426ad8e8" },
//   {  "name": "Khairahani", "district_id": "64c8b66d319e81b1426ad8e8" },
//   {  "name": "Meghauli", "district_id": "64c8b66d319e81b1426ad8e8" },
//   {  "name": "Patihani", "district_id": "64c8b66d319e81b1426ad8e8" },
//   {  "name": "Phulbari", "district_id": "64c8b66d319e81b1426ad8e8" },

//   {  "name": "Bhumisthan", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Gajuri", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Katunje", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Khanikhola", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Lapa", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Maidi", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Malekhu", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Phulkharka", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Sertung", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Sunaulabazar", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Sunkhani", "district_id": "64c8b66d319e81b1426ad8e9" },
//   {  "name": "Tripureshwor", "district_id": "64c8b66d319e81b1426ad8e9" },

//   {  "name": "Bhusapheda", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Chitre", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Japhekalapani", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Jiri", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Khahare", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Khopachangu", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Lamabagar", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Melung", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Namdu", "district_id": "64c8b66d319e81b1426ad8ea" },
//   {  "name": "Sunkhani", "district_id": "64c8b66d319e81b1426ad8ea" },

//   {  "name": "Banepa", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Dapcha", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Dolal Ghat", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Ghartichhap", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Mangaltar", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Panauti", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Panchkhal", "district_id": "64c8b66d319e81b1426ad8eb" },
//   {  "name": "Phalante", "district_id": "64c8b66d319e81b1426ad8eb" }
// ]
// await City.insertMany(cities);