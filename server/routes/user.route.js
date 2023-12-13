const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

router.put('/update/:id', userController.updateUserController);

module.exports = router;