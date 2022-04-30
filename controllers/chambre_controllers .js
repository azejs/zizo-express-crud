/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

// models
// const Chambre = mongoose.model('Chambre');
const Chambre = require('../modules/chambre.module');
// creation module hotel 
exports.createChambre = async function createChambrel(req, res, next) {
    const { body } = req;
    const { numChambre } = body;
    const hotelExist = await Chambre.find({ numChambre });
  
    try {
      if (hotelExist.length > 0) {
        return res.status(401).json({ message: 'chambre existe déjà !' });
      }
      await new Chambre({
        ...body,
      }).save();
      // req.$query = Categorie.find({});
      return res.status(200).json({ message: 'chambre a été créé avec succès  !' });
    } catch (e) {
      return next(e);
    }
  };
  // liste  des  hotel 
  exports.listeChambre = async function listeChambre(req, res, next) {
    try {
      const { $top } = req.query;
      if ($top === '-1') {
        const hott = await Chambre.find({});
        return res.status(200).json(hott);
      }
      req.$query = Chambre.find({});
      return next();
    } catch (err) {
      return  next(err);
    }
  };
  // modification liste d'hôtel
  exports.updateChambre = async function updateChambre(req, res, next) {
  const { body  } = req;
  const {numChambre} = req.body;
  try {
    const ChambreExist_ = await Chambre.find({numChambre});
     
        if (ChambreExist_.length > 0) {
          return res.status(401).json({ message: 'le Chambre  existe déjà !' });
        }
    const m = await Chambre.findOneAndUpdate({ _id: req.params.id }, body);
        
    return res.status(200).json(m);

  } catch (error) {
    next(error);
  }
    };
 
    exports.deleteChambre = async function deleteChambre(req, res, next) {
      try {
        const chamdelt = await  Chambre.findByIdAndDelete({ _id: req.params.id }) 
        res.status(200).json(chamdelt);
      } catch (error) {
        next(error);
      }
 
    };