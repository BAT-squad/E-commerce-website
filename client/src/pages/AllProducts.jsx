import React, { useState, useEffect } from "react";
import FilterBar from "../components/AllProducts/FilterBar";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser.userID;

  const AddToBasket = (productId) => {
    const obj = { users_userID: userId, products_productID: productId };
    console.log(obj, "testttttt");
    axios
      .post("http://localhost:5001/api/basket/add", obj)
      .then(() => console.log("done"))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchItemsUnderPrice = async (sliderValue) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/products/price/1/${sliderValue}`
      );
      const newData = await response.json();
      setProducts(newData);
      console.log("Items under the price:", newData);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleBrand = async (brand) => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/products/brand/${brand}`
      );
      setProducts(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategory = async (category) => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/products/category/${category}`
      );
      setProducts(res.data, "ddddddddddddddddd");
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="flex justify-evenly">
      <div className="mt-[0px]  w-[300px] rounded-lg bg-white bg-opacity-5">
        <FilterBar
          handleBrand={handleBrand}
          handleCategory={handleCategory}
          fetchItemsUnderPrice={fetchItemsUnderPrice}
        />
      </div>
      <div className="ml-[0px] mt-[0px]">
        <div className="flex flex-wrap justify-center gap-8 ">
          {products.map((product) => (
            <div
              key={product.productID}
              className="border p-4 hover:scale-105 transition-transform"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-[400px] h-[450px]  object-cover mb-2"
              />
              <div className="text-white">
                <h2 className="text-xl font-bold mb-2">
                  {product.productName}
                </h2>
                <p className="text-white">{product.price}$</p>
                <div className="flex items-center mt-2">
                  <label className="container mr-2">
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
                  </label>
                  <button
                    onClick={() => {
                      AddToBasket(product.productID);
                    }}
                    to="/basket"
                    className=" bg-violet-600 rounded-full w-[190px] p-2 text-center hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce "
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
