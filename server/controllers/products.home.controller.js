const { getAllProductsM, postproductsM } = require('../models/products.models.js')


const getAllProductsC = (req, res) => {
    getAllProductsM((err, results) => {
        if (err) {
            console.error(err, "Error fetching products")
        } else {
            res.json(results)
        }
    })
}
const postproductsC = (req, res) => {
    const productData = req.body;  
    postproductsM(productData, (err, results) => {
      if (err) {
        console.error(err, "Error posting products");
        res.status(500).json('Error posting products');
      } else {
        res.json(results);
      }
    });
  };
  



module.exports = { getAllProductsC, postproductsC }