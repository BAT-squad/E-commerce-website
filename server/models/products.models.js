const mysql = require('mysql2');
const connection = require("./index.js")


const getAllProductsM = (callback) => {
  const query = "SELECT * FROM products"
  return connection.query(query, callback);
}
const postproductsM = (productData, callback) => {
  const query = 'INSERT INTO products (productName, price, category, `like`, imageUrl,brands_brandID) VALUES (?, ?, ?, ?, ?,?)';
  
  const values = [productData.productName, productData.price,productData.category, productData.like, productData.imageUrl, productData.brands_brandID];

  return connection.query(query, values, callback);
}



module.exports = { getAllProductsM, postproductsM }

