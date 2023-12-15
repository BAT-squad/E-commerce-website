const mysql=require('mysql2')
const connection=require('./index.js')
module.exports={
addToCart:async(products_productID, users_userID)=> {
    const sql="INSERT INTO basket (users_userID, products_productID) VALUES (?, ?)"
    return connection.query(sql,[users_userID,products_productID])
    },
    removeFromCart: async (products_productID) => {
        const sql = "DELETE FROM basket WHERE products_productID=?";
    
      return   connection.query(sql, [products_productID]);
    },
}
