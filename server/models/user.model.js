const db = require('./index.js');


const updateUser = (id, newData, callback) => {
    const query = `UPDATE users SET userName = ?, bio=? , password = ?,email=?, birthday=? ,coverUrl=? WHERE id = ${id}`;
    const values = [newData.userName, newData.bio, newData.password, newData.email, newData.birthday,newData.coverUrl]
    db.query(query,values,(err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = {
    updateUser
};