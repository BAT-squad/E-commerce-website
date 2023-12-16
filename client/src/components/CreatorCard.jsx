import React from "react";
import { MdVerified } from "react-icons/md";

const CreatorCard = () => {
  return (
    <div className="mt-10">
      <div class=" flex space-x-2 w-full rounded-lg overflow-hidden mx-auto justify-between px-20">
        <div class="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div class="w-full card__media">
            <img
              src="https://images2.alphacoders.com/109/thumb-1920-1099401.jpg"
              class="h-48 w-96 rounded-lg"
            />
          </div>
          <div class="  card__media--aside "></div>
          <div class="flex items-center p-4">
            <div class="relative flex flex-col items-center w-full">
              <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  class="h-24 w-24 md rounded-full relative"
                  src="https://www.arabianbusiness.com/cloud/2022/09/26/Kanye-West.jpg"
                  alt=""
                />
                <div class="absolute"></div>
              </div>
              <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span class="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  Kanye west <MdVerified className="text-blue-500"/>
                </span>
                <p class="text-sm text-gray-400">
                Style is a way to say who you are without having to speak
                </p>
                <div class=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button class="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                    <span class="mr-2"></span>+ FOLLOW<span class="ml-2"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div class="w-full card__media">
            <img
              src="https://wallpapercave.com/wp/wp5746868.jpg"
              class="h-48 w-96 rounded-lg"
            />
          </div>
          <div class="  card__media--aside "></div>
          <div class="flex items-center p-4">
            <div class="relative flex flex-col items-center w-full">
              <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  class="h-24 w-24 md rounded-full relative"
                  src="https://www.hawtcelebs.com/wp-content/uploads/2019/03/madison-beer-at-iheartradio-music-awards-2019-in-los-angeles-03-14-2019-5.jpg"
                  alt=""
                />
                <div class="absolute"></div>
              </div>
              <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span class="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  Madison Beer <MdVerified className="text-blue-500"/>
                </span>
                <p class="text-sm text-gray-400">
                Elegance in every stitch, style in every step
                </p>
                <div class=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button class="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                    <span class="mr-2"></span>+ FOLLOW<span class="ml-2"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div class="w-full card__media">
            <img
              src="https://images.hdqwalls.com/wallpapers/john-wick-art-l3.jpg"
              class="h-48 w-96 rounded-lg"
            />
          </div>
          <div class="  card__media--aside "></div>
          <div class="flex items-center p-4">
            <div class="relative flex flex-col items-center w-full">
              <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  class="h-24 w-24 md rounded-full relative"
                  src="https://i1.wp.com/www.bulletproofaction.com/wp-content/uploads/2015/09/john-wick.jpg"
                  alt=""
                />
                <div class="absolute"></div>
              </div>
              <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span class="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  John Wick <MdVerified className="text-blue-500"/>
                </span>
                <p class="text-sm text-gray-400">
                Fashion is the armor to survive the reality of everyday life
                </p>
                <div class=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button class="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                    <span class="mr-2"></span>+ FOLLOW<span class="ml-2"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
