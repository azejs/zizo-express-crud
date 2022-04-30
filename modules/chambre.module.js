// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const { Schema } = mongoose;
const ChambreSchema = Schema({
  numChambre: { 
            type: Number,
            required: true },
  telChambre: {
            type: String,
            required: true },
   nomHotel : { type: Schema.Types.ObjectId},
 
},{
  timestamps: true,
  collection: 'chambres',
});

module.exports = mongoose.model('Chambre', ChambreSchema);