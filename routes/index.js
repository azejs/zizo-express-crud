/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

 
const Hotel = require("../controllers/hotel_controllers");
 const Chambre = require("../controllers/chambre_controllers ")
 

// Render all tasks
// router.get("/", renderTasks);
//*********  crud hotel **********************
router.post("/hotel", Hotel.createHotel);
router.get("/hotel", Hotel.listeHotel);
router.put("/hotel/:id", Hotel.updateHotel);
router.delete("/hotel/:id", Hotel.deleteHotel);
//*********  crud chambre **********************
router.post("/chambre", Chambre.createChambre);
router.get("/chambre", Chambre.listeChambre);
router.put("/chambre/:id", Chambre.updateChambre);
router.delete("/chambre/:id", Chambre.deleteChambre);

// router.get("/tasks/:id/delete", deleteTask);

module.exports = router;
