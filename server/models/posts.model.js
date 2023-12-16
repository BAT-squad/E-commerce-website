const db = require('./index.js')

const createPost = (userId,image,content,callback)=>{
    const sql = `insert into posts (users_userID,imageUrl,content) values(?,?,?)`
    db.query(sql, [userId,image,content], function (error, results) {
        callback(error, results)
    })
}

const getAllPosts = (userId,callback)=>{
    const sql = `select * from posts where users_userID = ? `
    db.query(sql,[userId], function (error, results) {
        callback(error, results)
    })
}

module.exports = {
    createPost,
    getAllPosts
};