// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  nomHotel: { 
            type: String,
            required: true },
  adressHotel: {
            type: String,
            required: true },
  codePostal: { type: Number,
              required: true },
  telHotel: { type: String, 
             required: true },
 
},{
  timestamps: true,
  collection: 'hotels',
});

module.exports = mongoose.model('Hotel', hotelSchema);