const mysql = require('mysql2');
const connection = require("./index.js")

const getAllProductsM = (callback) => {
  const query = "SELECT * FROM products"
  return connection.query(query, callback);
}
const postproductsM = (productData, callback) => {
  const query = 'INSERT INTO products (productName, price, category, `like`, imageUrl) VALUES (?, ?, ?, ?, ?)';
  
  const values = [productData.productName, productData.price,productData.category, productData.like, productData.imageUrl];

  return connection.query(query, values, callback);
}



module.exports = { getAllProductsM, postproductsM }