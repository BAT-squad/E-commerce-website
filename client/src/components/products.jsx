import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:5001/api/products/get";
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleBuyNow = (productID) => {
    const updatedProducts = products.map((product) => {
      if (product.productID === productID) {
        return { ...product, like: !product.like };
      }
      return product;
    });

    const product = updatedProducts.find(
      (product) => product.productID === productID
    );

    setSelectedProduct(product);
    setProducts(updatedProducts);

    console.log(`Buy Now clicked for product ID: ${productID}`);
  };

  return (
    <>
      <div className=" flex justify-around mt-[10rem]">
        <button className="bg-violet-700 text-white font-semibold p-2 rounded-lg  px-8">All Collections</button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">Verified Brands</button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">Verified Artists</button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">New Drops</button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">Live Shows</button>
      </div>
      <div className="flex flex-wrap justify-center gap-8 ">
        {products.map((product) => (
          <div className="w-80 h-80 ">
            <div
              key={product.productID}
              className="mt-12 p-4 hover:scale-105 transition-transform bg-opacity-10 bg-white rounded-lg shadow w-80 h-80"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-50 h-40 object-cover mb-4"
              />
              <div className="text-white">
                <h2 className="text-xl font-bold mb-2">
                  {product.productName}
                </h2>
                <div className="w-full flex flex-row justify-between">
                <p className="text-white flex items-stretch">
                  ${product.price}
                </p>
                <h3 className="flex items-stretch">{product.category}</h3>
                </div>
                <div className="flex items-center mt-2">
                  <div className=" container mr-2 flex justify-between items-center">
                    <input type="checkbox" className="hidden" />
                    <svg
                      id="Layer_1"
                      version="1.0"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className={`w-6 h-6 transition-transform fill-current text-gray-600 hover:scale-110 ${
                        product.like ? "text-red-500" : ""
                      }`}
                      onClick={() => handleBuyNow(product.productID)}
                    >
                      <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
                    </svg>
                <Link
                  to="/basket"
                  className="text-white bg-violet-600 rounded-full w-[190px] p-2"
                >
                  Buy Now
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
