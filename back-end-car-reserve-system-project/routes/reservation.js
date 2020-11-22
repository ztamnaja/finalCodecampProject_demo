const express = require('express')
const router = express.Router();
const reservationController = require('../controllers/reservation')
const passport = require("passport");

const authentication = passport.authenticate("jwt", { session: false });
console.log("authentication", authentication);


router.get("/", authentication, reservationController.getAllReservations);
router.get("/:id", authentication, reservationController.getReserveById);
router.post("/", authentication, reservationController.createReserve); // post method and send body in x-www-unlencoded
router.put("/:id", authentication, reservationController.updateReserve);
router.delete("/:id", authentication, reservationController.deleteReserve);

module.exports = router;