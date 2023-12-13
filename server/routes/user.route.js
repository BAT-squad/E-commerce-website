const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

router.put('/update/:id', userController.updateUserController);
router.put('/update/cover-pic/:id', userController.updateUserCoverPicController);

module.exports = router;