const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

router.put('/update/:id', userController.updateUserController);
router.get('/get/:email', userController.getUserController);
router.put('/update/cover-pic/:id', userController.updateUserCoverPicController);
router.put('/update/profile-pic/:id', userController.updateUserProfilePicController);
router.post("/createUser",userController.addUser)
router.post("/login",userController.login)


module.exports = router;