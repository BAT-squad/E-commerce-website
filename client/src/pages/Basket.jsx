import React from "react";
import BasketItem from "../components/BasketItem";
import { useState, useEffect } from "react";
import axios from "axios";
import BasketList from "./basket/basketList";

const Basket = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const storedObject = JSON.parse(localStorage.getItem("currentUser"));
  function getItems() {
    axios
      .get(`http://localhost:5001/api/basket/get/all/${id}`)
      .then((response) => {
        setData(response.data);
      });
  }
  function removeAll(){
    axios.delete(`http://localhost:5001/api/basket/removeall/${id}`)
    getItems()
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/user/get/${storedObject.email}`
        );
        setId(response.data[0].userID);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (id !== null) {
      getItems(); // Call getItems only when id is available
    }
  }, [id]);

  return (
    <div className="h-screen  pt-20">
      <h1 className="mb-10 text-center text-white text-3xl font-bold">
        Basket Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <BasketList data={data} getItems={getItems} />

          {/* <BasketItem
            imageUrl="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Nike Air Max 2019"
            details="36EU - 4US"
            quantity={2}
            price="259.000 ₭"
          />
          <BasketItem
            imageUrl="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
            name="Nike Air Max 2019"
            details="36EU - 4US"
            quantity={2}
            price="259.000 ₭"
          /> */}
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
              <p className="mb-1 text-lg font-bold text-white">$134.98 USD</p>
            </div>
          </div>
          <button onClick={removeAll} className="mt-6 w-full rounded-md bg-violet-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Clear Basket
          </button>
          <button className="mt-6 w-full rounded-md bg-violet-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Basket;
