const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

router.put('/users/:id', userController.updateUserController);

module.exports = router;