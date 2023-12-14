const db = require('./index.js')

const getUser = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email =?';
    const values = [email];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    })
}
const updateUser = (id, newData, callback) => {
    const query = 'UPDATE users SET userName = ?, bio = ?, password = ?, email = ?, birthday = ? WHERE userID = ?';
    const values = [newData.userName, newData.bio, newData.password, newData.email, newData.birthday, id];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const updateUserCoverPic = (id, newCoverPic, callback) => {
    const query = 'UPDATE users SET coverUrl = ? WHERE userID = ?'
    const values = [newCoverPic, id]
    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

const updateUserProfilePic = (id, newProfilePic, callback) => {
    const query = 'UPDATE users SET profilePicture =? WHERE userID =?'
    const values = [newProfilePic, id]
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
    getUser,
    updateUser,
    updateUserCoverPic,
    updateUserProfilePic,
    addUser: function (email, userName, birthday, password, coverUrl, bio, profilePicture, callback) {
        const sql = `insert into users (email,userName,birthday,password,coverUrl,bio,profilePicture) values(?,?,?,?,?,?,?)`
        db.query(sql, [email, userName, birthday, password, 'https://trusteid.mioa.gov.mk/wp-content/plugins/uix-page-builder/uixpb_templates/images/UixPageBuilderTmpl/default-cover-4.jpg', bio, "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"], function (error, results) {
            callback(error, results)
        })
    }
};