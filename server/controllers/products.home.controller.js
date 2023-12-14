
const { getAllProductsM, postproductsM, getOneProduct,filterCategory,filterPrice,filterbrand} = require('../models/products.models.js')



const getAllProductsC = (req, res) => {
    getAllProductsM((err, results) => {
        if (err) {
            console.error(err, "Error fetching products")
        } else {
            res.json(results)
        }
    })
}
const postproductsC = (req, res) => {
    const productData = req.body;  
    postproductsM(productData, (err, results) => {
      if (err) {
        console.error(err, "Error posting products");
        res.status(500).json('Error posting products');
      } else {
        res.json(results);
      }
    });
  };
  
const getOneProductC = (req, res) => {
  const id = req.params.productID;
  getOneProduct(id, (err, results) => {
    if (err){
      console.error(err, "Error getting one product")
      res.status(500).json('Error getting one product');
    }
    else{
      res.json(results)
    }

  });
}

  const filterbycategory = (req, res) => {
    const category = req.params.category;
    filterCategory(category, (err, results) => {
      if (err) {
        console.error(err, "Error filtering by category");
        res.status(500).json('Error filtering by category');
      } else {
        res.json(results);
      }
    });
  };

const filterbyPrice=(req,res)=>{
  console.log(req.params.minPrice);
  console.log(req.params.maxPrice);
  const minPrice= req.params.minPrice||0
  const maxPrice=req.params.maxPrice||Number.MAX_SAFE_INTEGER
  filterPrice(minPrice,maxPrice,(err,results)=>{
    if (err) {
      console.error(err,"Error filtring by price ");
      res.status(500).json('error price')
    }else{
      res.json(results)
    }
  })
}

const filterB = (req,res)=>{
  const id = req.params.id
  console.log(id)
  filterbrand(id,(err,results)=>{
    if (err) {
      console.error(err,"filter brand");
      res.status(500).json('error brand')
    }else{
      res.json(results)
    }
  })

}
module.exports = { getAllProductsC, postproductsC,filterbycategory,filterbyPrice,filterB,getOneProductC }
