const express = require ("express");
const router = express.Router();
const UserController = require("../app/controllers/userController");
//route user / register

router.post("/register", UserController.createUser);
module.exports= router;