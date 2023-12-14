const express = require('express')
const router = express.Router()

const {getAllProductsC,postproductsC,filterbycategory, filterbyPrice, filterB,getOneProductC}= require("../controllers/products.home.controller")

router.get('/get', getAllProductsC)
router.post('/post', postproductsC)
router.get('/category/:category',filterbycategory)
<<<<<<< HEAD
router.get('/:minPrice/:maxPrice',filterbyPrice)
router.get('/brand/:id',filterB)
router.get('/getOne/prod/:id', getOneProductC)
module.exports = router
=======
router.get('/price/:minPrice/:maxPrice',filterbyPrice)
router.get('/brand/:brandName',filterB)
router.get('/get/:id', getOneProductC)
module.exports = router
>>>>>>> 1c062971553362d24d02f125b393b884482cc109
