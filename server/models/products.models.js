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



const getOneProduct = (id,callback)=>{
  const query = 'SELECT * FROM products WHERE productID =?';
  const values = [id];
  return connection.query(query, values, callback);
}

const getNewTredings = (callback)=>{
  const query = 'SELECT * FROM products WHERE new = 1'
  return connection.query(query,callback);
}



const filterCategory = (category, callback) => {
  const query = "SELECT * FROM products WHERE category=?";
  return connection.query(query, [category], callback);
};


const filterPrice=(minPrice,maxPrice,callback)=>{
  const query="SELECT * FROM products WHERE price >=? AND price<=?"
  return connection.query(query,[minPrice,maxPrice],callback)
}


const filterbrand=(brand,callback)=>{
  const query=`SELECT products.productID , products.imageUrl , products.price , products.category ,brands.brandName FROM ecommerce.products inner join ecommerce.brands on ecommerce.products.brands_brandID=ecommerce.brands.brandID where brandName=?;`
  return connection.query(query,[brand],callback)
}



module.exports = { getAllProductsM, postproductsM ,filterCategory,filterPrice,filterbrand ,getOneProduct,getNewTredings}

