const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const passport = require("passport");

const authentication = passport.authenticate("jwt", { session: false });
console.log("authentication", authentication);

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)

router.get("/all", authentication, userController.getAllUsers);
router.get("/:id", authentication, userController.getUserById);
router.post("/", authentication, userController.createUser); // post method and send body in x-www-unlencoded
router.put("/:id", authentication, userController.updateUser);
router.delete("/:id", authentication, userController.deleteUser);

module.exports = router;