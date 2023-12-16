const { addToCart, removeFromCart,removeAllCart,getAllFromCart } = require('../models/Basket.js');

module.exports = {
  add: async (req, res) => {
    try {
      const { users_userID, products_productID } = req.body;
      const result = await addToCart(users_userID, products_productID);
      res.status(200).json({ message: 'Item added to cart successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  remove: async (req, res) => {
    try {
      const { products_productID } = req.params;
      await removeFromCart(products_productID);
      res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  removeCart:async(req,res)=>{
    const { users_userID } = req.params;
  try{
    const result=await removeAllCart(users_userID)
    res.status(200).json({ message: 'All Items deleted',result });
  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  },
  bringAll:async(req,res)=>{
    const {users_userID}= req.params
  
  
    try{
      const result=await getAllFromCart(users_userID)
      
      
      res.json(result)
  console.log(result);
    }catch(error){
  console.log(error);
  res.status(500).json(error)
    }
  },


};
