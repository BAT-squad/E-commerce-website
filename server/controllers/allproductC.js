const {AllProductsM,filtercategory} = require('../models/allproductM.js')


const AllProducts = (req,res) => {
    AllProductsM((err, results) => {
        if (err) {
            console.error(err, "Error fetching products")
        } else {
            res.json(results)
        }
    })
}
const category=(req,res)=>{
    filtercategory((err,results)=>{
        if (err) {
            console.error(err,"Error filtring by category products");
        }else{
            res.json(results)
        }
    })
}

module.exports.AllProducts = AllProducts
module.exports.category = category