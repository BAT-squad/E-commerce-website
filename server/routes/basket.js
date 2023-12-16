const express = require('express')
const router = express.Router()
const{add, remove,removeCart,bringAll}=require('../controllers/Basket')

router.post('/add',add )
router.delete('/remove/:products_productID',remove)
router.delete('/removeall/:users_userID',removeCart);
router.get('/get/all/:users_userID', bringAll);
module.exports = router