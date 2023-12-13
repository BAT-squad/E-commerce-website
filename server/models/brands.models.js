const mysql = require('mysql2');
const connection = require("./index.js")


const postBrandM=( data,callback)=>{
    const query = 'INSERT INTO brands (brandName,imageUrl) VALUES (?,?)';
    
    const values = [data.brandName,data.imageUrl];
    return connection.query(query, values, callback);
}
module.exports = postBrandM