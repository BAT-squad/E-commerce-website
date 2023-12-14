import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/products";

const Basket = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState("");
  console.log(product,"ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/get/1`);
        const data = await response.json();
        console.log(response,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        console.log(typeof data)
        setProduct(data);

      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [productID]);

  return (
    <div>
      {[1,2,3].map(Products =>{
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
