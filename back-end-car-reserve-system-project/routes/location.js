const express = require('express')
const router = express.Router();
const locationController = require('../controllers/location')
// const passport = require("passport");

// const authentication = passport.authenticate("jwt", { session: false });
// console.log("authentication", authentication);

router.get('/', locationController.getAllLocations);
router.get("/:id", locationController.getLocationById);
router.post("/", locationController.createLocation); // post method and send body in x-www-unlencoded
router.put("/:id", locationController.updateLocation);
router.delete("/:id", locationController.deleteLocation);

module.exports = router;