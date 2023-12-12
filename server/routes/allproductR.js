const express=require("express")
const router = express.Router()

const AllProductsR = require("../controllers/allproductC")
router.get("/getall",AllProductsR)


module.exports= router