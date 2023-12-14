import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/products.jsx";

const Basket = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState("");
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/get/${params.productID}`);
        const data = await response.json();
        // console.log(response,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        setProduct(data);
        
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    
    fetchData();
  }, [productID]);
  
  console.log(product,"ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
  return (
    <div>
      {product.map(Products =>{
        <div>

        <h1>{Products.productName}</h1>
        <h1>{Products.price}</h1>
        </div>
      })}
     <h1>baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasket</h1>
    </div>
  );
};

export default Basket;
