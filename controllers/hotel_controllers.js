/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

// models
// const Hotel = mongoose.model('Hotel');
const Hotel = require('../modules/hotel.module');
// creation module hotel 
exports.createHotel = async function createHotell(req, res, next) {
    const { body } = req;
    const { nomHotel } = body;
    const hotelExist = await Hotel.find({ nomHotel });
  
    try {
      if (hotelExist.length > 0) {
        return res.status(401).json({ message: 'hotel  existe déjà !' });
      }
      await new Hotel({
        ...body,
      }).save();
      // req.$query = Categorie.find({});
      return res.status(200).json({ message: 'hotel a été créé avec succès  !' });
    } catch (e) {
      return next(e);
    }
  };
  // liste  des  hotel 
  exports.listeHotel = async function listeHotel(req, res, next) {
    try {
      const { $top } = req.query;
      if ($top === '-1') {
        const hott = await Hotel.find({});
        return res.status(200).json(hott);
      }
      req.$query = Hotel.find({});
      return next();
    } catch (err) {
      return  next(err);
    }
  };
  // modification liste d'hôtel
  exports.updateHotel = async function updateHotel(req, res, next) {
  const { body  } = req;
  const {nomHotel} = req.body;
  try {
    const HotelExist_ = await Hotel.find({nomHotel});
     
        if (HotelExist_.length > 0) {
          return res.status(401).json({ message: 'le Hotel  existe déjà !' });
        }
    const m = await Hotel.findOneAndUpdate({ _id: req.params.id }, body);
        
    return res.status(200).json(m);

  } catch (error) {
    next(error);
  }
    };
 
    exports.deleteHotel = async function deleteHotel(req, res, next) {
      try {
        const hotldelt = await Hotel.findByIdAndDelete({ _id: req.params.id }) 
        res.status(200).json(hotldelt);
      } catch (error) {
        next(error);
      }
 
    };