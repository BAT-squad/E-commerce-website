const express = require('express')
const router = express.Router()
const{add, remove}=require('../controllers/Basket')

router.post('/add',add )
router.delete('/remove/:products_productID',remove)

module.exports = router