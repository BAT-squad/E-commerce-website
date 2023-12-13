const getAllProductsM = require('../models/products.models.js')


const getAllProductsC = (req,res) => {
    getAllProductsM((err, results) => {
        if (err) {
            console.error(err, "Error fetching products")
        } else {
            res.json(results)
        }
    })
}
module.exports = getAllProductsC