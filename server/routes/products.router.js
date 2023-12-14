const express = require('express')
const router = express.Router()

const {getAllProductsC,postproductsC,filterbycategory, filterbyPrice, filterB}= require("../controllers/products.home.controller")

router.get('/get', getAllProductsC)
router.post('/post', postproductsC)
router.get('/products/:category',filterbycategory)
router.get('/products/:minPrice/:maxPrice',filterbyPrice)
router.get('/product/brand/:id',filterB)
module.exports = router