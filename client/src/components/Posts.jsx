import React from "react";

const Posts = ({ currentUser }) => {
  return (
    <>
      <div class=" h-[35rem] w-[60rem] float-right mt-10">
        <div class="bg-gray-500 bg-opacity-10 max-w-full max-h-full mx-auto text-gray-100 rounded-md overflow-hidden">
          <div class="p-3 flex justify-between items-center">
            <a
              href="https://facebook.com/shibbirweb"
              class="relative w-11 h-11 rounded-full overflow-hidden"
            >
              <img
                class="w-full h-full"
                src={currentUser.profilePicture}
                alt="..."
              />
              <div class="bg-gray-100 opacity-0 hover:opacity-10 absolute top-0 left-0 w-full h-full transition-opacity"></div>
            </a>

            <div class="mx-2 flex-1 flex flex-col">
              <h4 class="font-semibold">
                <a
                  class="hover:underline"
                  href="https://facebook.com/shibbirweb"
                  target="_blank"
                >
                  {currentUser.userName}
                </a>
              </h4>
              <div class="flex font-thin text-xs items-center">
                <div>
                  <a href="#" class="hover:underline">
                    April 10
                  </a>
                </div>
                <span class="ml-1">&middot;</span>
                <div class="p-0.5 rounded-full hover:bg-gray-600 flex justify-center items-center cursor-pointer transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="h-9 w-9 rounded-full p-1.5 bg-transparent hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>

          <div>
            <div class="px-3">
              <p class="text-sm">
                The greatest glory in living lies not in never falling, but in
                rising every time we fall. -Nelson Mandela
              </p>
            </div>
            <div class="mt-2">
              <img
                class="w-full"
                src="https://emc2rrspvpp.exactdn.com/wp-content/uploads/2017/01/footwear-bg.jpg"
                alt="Image thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
