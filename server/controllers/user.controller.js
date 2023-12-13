const userModel = require('../models/user.model.js');

const updateUserController = (req, res) => {
    const userId = req.params.userId; 
    const newData = req.body;

    userModel.updateUser(userId, newData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'User updated successfully', result });
        }
    });
};

module.exports = {
    updateUserController
};