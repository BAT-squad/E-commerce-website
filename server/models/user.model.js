const db = require('./index.js');


const updateUser = (id, newData, callback) => {
    const query = `UPDATE users SET userName = ?, password = ?,email=?, birthday=? WHERE id = ${id}`;
    
    db.query(query, (err, result) => {
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