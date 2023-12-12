import React from 'react'

const AllProducts = () => {
  return (
   

   
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://via.placeholder.com/300" alt="Secret Rare" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Secret Rare</div>
            <p className="text-gray-700 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Mi</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
     );
    };
    


export default AllProducts