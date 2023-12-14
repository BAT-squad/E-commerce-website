const express = require('express')
const router = express.Router()

const {getAllProductsC,postproductsC, getOneProductC}= require("../controllers/products.home.controller")

router.get('/get', getAllProductsC)
router.post('/post', postproductsC)
router.get('/get/:id', getOneProductC)
module.exports = router