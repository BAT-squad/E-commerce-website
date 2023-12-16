import React from "react";

const CreatePost = ({currentUser}) => {
  return (
    <div class="mb-10 mt-[15rem]">
      <div class="bg-gray-500 bg-opacity-10 p-20 text-white max-w-full border border-gray-700 mx-auto rounded-lg py-1">
        <div class="px-3 py-3 flex justify-center items-center border-b border-gray-700 relative">
          <h2 class="text-xl font-bold text-center">Create Post</h2>
        </div>

        <div class="px-3 py-3">
          <div class="flex space-x-3 justify-start items-center">
            <div class="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
              <a href="https://facebook.com/ShibbirAhmedRaihan">
                <img
                  class="w-full"
                  src={currentUser.profilePicture}
                  alt="MD. Shibbir Ahmed"
                />
              </a>
            </div>

            <div class="flex flex-col space-y-0.5 items-start">
              <h2 class="font-semibold text-sm">{currentUser.userName}</h2>

              <div class="bg-gray-700 rounded-md px-1 flex space-x-0.5 py-1 items-center cursor-pointer">
                <div>
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

                <span class="font-semibold text-xs">Public</span>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="my-4">
            <textarea
              rows="3"
              placeholder={`What's on your mind, ${currentUser.userName}?`}
              class="w-full  bg-transparent resize-none text-2xl text-white outline-none placeholder-gray-400 focus:placeholder-gray-500"
            ></textarea>
          </div>

          <div class="flex justify-between items-center">
            <div class="w-8 h-8 border-2 border-white rounded-lg font-semibold flex justify-center items-center cursor-pointer">
              Aa
            </div>
            <div class="text-gray-600 hover:text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=""
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <div class="border border-gray-700 rounded-full mt-5 px-3 py-2.5 flex justify-between items-center">
            <div class="font-semibold cursor-pointer"></div>
            <div class="flex space-x-0.5">
              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-red-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-gray-500"
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
              </div>
            </div>
          </div>

          <button class="w-full bg-violet-500 mt-3 rounded-full py-4 text-gray-400 font-bold text-xl">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
