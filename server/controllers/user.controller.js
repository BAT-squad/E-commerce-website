const userModel = require('../models/user.model.js');

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

module.exports = {
    updateUserController,
    updateUserCoverPicController
};