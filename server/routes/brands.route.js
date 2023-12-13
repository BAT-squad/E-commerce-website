const express = require('express')
const router = express.Router()

const postBrandC = require("../controllers/brands.controller")

router.post('/post', postBrandC)


module.exports = router