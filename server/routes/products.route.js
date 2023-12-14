const express = require('express')
const router = express.Router()

const getAllProductsC= require("../controllers/products.home.controller")

router.get('/get', getAllProductsC)

module.exports = router