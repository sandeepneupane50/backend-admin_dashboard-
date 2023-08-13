// fetch_provinces.js
const { Province, District, City } = require('../model/locations')
const getProvinces = async (req, res) => {
    try {
      const provinces = await Province.find({});
      res.json(provinces);
      // console.log(provinces);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const getDistricts = async (req, res) => {
    // console.log(req.query.province_id);
    const province_id = req.query.province_id;
    try {
        
        const districts = await District.find({province_id: { $eq: province_id} });
        res.json(districts);
        // console.log(districts);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    const getCities = async (req, res) => {
      // console.log(req.query.district_id);
      const district_id = req.query.district_id;
      try {     
          const cities = await City.find({district_id: { $eq: district_id} });
          res.json(cities);
          // console.log(cities);
        } catch (error) {
          console.error('Error fetching provinces:', error);
        }
      };

module.exports = { getProvinces, getDistricts, getCities};
