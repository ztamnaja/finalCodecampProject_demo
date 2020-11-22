const express = require('express')
const router = express.Router();
const carController = require('../controllers/car')
// const passport = require("passport");

// const authentication = passport.authenticate("jwt", { session: false });
// console.log("authentication", authentication);

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.post("/", carController.createCar); // post method and send body in x-www-unlencoded
router.put("/:id",  carController.updateCar);
router.delete("/:id",  carController.deleteCar);
  
  

module.exports = router;
