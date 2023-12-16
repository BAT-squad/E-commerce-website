const mysql = require('mysql2');
const connection = require('./index.js');

module.exports = {
  addToCart: async (users_userID,products_productID,) => {
    try {
      const sql = "INSERT INTO basket (users_userID, products_productID) VALUES (?, ?)";
      const [rows, fields] = await connection.promise().query(sql, [users_userID,products_productID]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  removeFromCart: async (products_productID) => {
    try {
      const sql = "DELETE FROM basket WHERE products_productID=?";
      const [rows, fields] = await connection.promise().query(sql, [products_productID]);
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  },
  removeAllCart:async (users_userID)=>{
    const sql="DELETE FROM basket WHERE users_userID=?"
    return connection.promise().query(sql,[users_userID])
},


getAllFromCart:async (users_userID)=>{
  try{
  const sql=`select * from ecommerce.products INNER JOIN ecommerce.basket 
  on ecommerce.products.productID =ecommerce.basket.products_productID INNER JOIN ecommerce.users 
  on ecommerce.basket.users_userID = ecommerce.users.userID where ecommerce.basket.users_userID=?`
  const[rows,fields]= await connection.promise().query(sql,[users_userID])
  return rows;
} catch (error) {
  throw error;
}
},
};
