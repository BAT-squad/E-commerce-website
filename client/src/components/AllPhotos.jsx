import React from "react";

const AllPhotos = () => {
  return (
    <div className="mr-12 mt-10 float-left">
      <div className="p-4 shadow rounded-lg bg-gray-500 bg-opacity-10 w-80" id="intro">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="font-bold text-white text-xl">Photos</h1>
          <a
            className="text-lg text-violet-700 hover:bg-blue-200"
          >
            See All Photos
          </a>
        </div>
        {/* List */}
        <div className="">
          <p className="text-base text-gray-400">100 Photo</p>
          <div className="grid grid-cols-3 gap-1">
            <div className="p-0.5">
              <img
                src="https://i.pinimg.com/236x/9b/b0/34/9bb034dda743125e1f81f47109ede10a.jpg"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />
            </div>
            <div className=" p-0.5">
              <img
                src="https://images.meesho.com/images/products/206291239/ng2ck_512.webp"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />

            </div>
            <div className=" p-0.5">
              <img
                src="https://i.pinimg.com/originals/db/97/10/db9710875345eb9f7f16c5988566aee5.jpg"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />
  
            </div>
            <div className="p-0.5">
              <img
                src="https://i.pinimg.com/236x/a8/11/e6/a811e657954901922387ed6b2f5300cc.jpg"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />
  
            </div>
            <div className="p-0.5">
              <img
                src="https://st3.depositphotos.com/11272048/34268/i/1600/depositphotos_342685536-stock-photo-new-beautiful-colorful-nice-nike.jpg"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />

            </div>
            <div className=" p-0.5">
              <img
                src="https://pictures-ghana.jijistatic.com/33378812_NjIwLTQ2NS0wMDQwZWUyMWYy.webp"
                className="w-24 h-24 rounded-md mt-2 cursor-pointer"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhotos;
