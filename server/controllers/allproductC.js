const AllProductsM = require('../models/allproductM.js')


const AllProducts = (req,res) => {
    AllProductsM((err, results) => {
        if (err) {
            console.error(err, "Error fetching products")
        } else {
            res.json(results)
        }
    })
}
module.exports = AllProducts