import React from "react";
import BasketItem from "../components/BasketItem";
import { useState, useEffect } from "react";
import axios from "axios";

const Basket = () => {
  const [items, setItems] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/basket/get/all/${currentUser.userID}`)
      .then((response) => {
        setItems(response.data);
        setItemCount(response.data.length);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching data");
      });
  }, [currentUser.userID]);

  

  const removeProduct = (id) => {
    axios
      .delete(`http://localhost:5001/api/basket/remove/${id}`)
      .then(() => {
        console.log("Item removed from the cart");

        setItems(prevItems => prevItems.filter(item => item.iditems !== id));
        setItemCount(prevCount => prevCount - 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  return (
    <div className="h-screen  pt-20">
      <h1 className="mb-10 text-center text-white text-3xl font-bold">
        Basket Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {items.map((item) => {
            return (
              <BasketItem
                imageUrl={item.imageUrl}
                name={item.productName}
                details={item.category}
                price={item.price}
                id={item.productID}
                removeProduct={removeProduct}

              />
            );
          })}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white bg-opacity-10 p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-300">Subtotal</p>
            <p className="text-gray-300">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">Shipping</p>
            <p className="text-gray-300">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-white">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold text-white"> {getTotalPrice()} €</p>
            </div>
          </div>
          <button
            onClick={() => {
              remove();
            }}
            className="mt-6 w-full rounded-md bg-violet-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
