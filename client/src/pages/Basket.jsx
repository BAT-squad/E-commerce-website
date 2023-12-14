import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Basket = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/get/${productID}`);
        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [productID]);

  return (
    <div>
      <h1>Selected Product in Basket</h1>
      {product ? (
        <div>
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Basket;
