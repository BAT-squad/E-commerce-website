const express = require('express')
const router = express.Router()

const {getAllProductsC,postproductsC,filterbycategory, filterbyPrice, filterB,getOneProductC,getNewTredingsC}= require("../controllers/products.home.controller")

router.get('/products',getNewTredingsC)

router.get('/get', getAllProductsC)
router.post('/post', postproductsC)
router.get('/category/:category',filterbycategory)
router.get('/price/:minPrice/:maxPrice',filterbyPrice)
router.get('/brand/:id',filterB)
router.get('/getOne/prod/:id', getOneProductC)
module.exports = router
