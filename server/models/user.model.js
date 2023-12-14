const db = require('./index.js')


const updateUser = (id, newData, callback) => {
    const query = 'UPDATE users SET userName = ?, bio = ?, password = ?, email = ?, birthday = ? WHERE userID = ?';
    const values = [newData.userName, newData.bio, newData.password, newData.email, newData.birthday,id];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const updateUserCoverPic = (id,newCoverPic,callback)=>{
    const query = 'UPDATE users SET coverUrl = ? WHERE userID = ?'
    const values = [newCoverPic,id]
    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

module.exports = {
    updateUser,
    updateUserCoverPic,
    addUser: function(email,userName,birthday,password,coverUrl,bio,profilePicture,callback){
        const sql = `insert into users (email,userName,birthday,password,coverUrl,bio,profilePicture) values(?,?,?,?,?,?,?)`
        db.query(sql,[email,userName,birthday,password,coverUrl,bio,profilePicture],function(error,results){
            callback(error,results)
        })
    }
};