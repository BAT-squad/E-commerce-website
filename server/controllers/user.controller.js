const userModel = require('../models/user.model.js');
const bcrypt = require("bcryptjs")

const updateUserController = (req, res) => {
    const userId = req.params.id; 
    const newData = req.body;

    userModel.updateUser(userId, newData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'User updated successfully', result });
        }
    });
};

const updateUserCoverPicController = (req, res) => {
    const userId = req.params.id; 
    console.log(userId)
    const newCoverPic = req.body.coverUrl;
    userModel.updateUserCoverPic(userId, newCoverPic,(err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Cover picture updated successfully', result });
        }
    })
}

const updateUserProfilePicController = (req, res) => {
    const userId = req.params.id; 
    console.log(userId)
    const newProfilePic = req.body.profilePicture;
    userModel.updateUserProfilePic(userId, newProfilePic,(err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Profile picture updated successfully', result });
        }
    })
}

module.exports = {
    updateUserController,
    updateUserCoverPicController,
    updateUserProfilePicController,
    addUser: function(req,res){
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        userModel.addUser(req.body.email,req.body.userName,req.body.birthday,hash,req.body.coverUrl,req.body.bio,req.body.profilePicture,function(error,results){
            if(error) console.log(error)
           else res.json("added")
        })
    }
};