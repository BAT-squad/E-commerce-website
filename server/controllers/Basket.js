const{addToCart,removeFromCart}=require('../models/Basket.js')
module.exports={

    add:  (req, res) => {
    try {
      const { users_userID
        , products_productID } = req.body;

      const result =   addToCart(users_userID
        , products_productID);
        res.status(200)
        .json({ message: "Item added to cart successfully", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  remove:  (req, res) => {
    try {
      const { products_productID } = req.params;


      
       removeFromCart(products_productID);

      
      res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

}
