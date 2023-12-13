const express = require('express')
const router = express.Router()

const {getAllProductsC,postproductsC}= require("../controllers/products.home.controller")

router.get('/get', getAllProductsC)
router.post('/post', postproductsC)

module.exports = router