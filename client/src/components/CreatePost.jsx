import React, { useRef, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase.js";
import axios from 'axios'

const CreatePost = ({ currentUser }) => {
  const imageRef = useRef(null);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const uploadImage = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      uploadImage(image);
    }
  };

  const handlePostClick = () => {
    const post = {
      content: content,
      image: image,
      userId: currentUser.userID,
    };
    axios.post("http://localhost:5001/api/posts/createPost", post)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    window.location.reload();
  };

  return (
    <div className="mb-10 mt-[15rem]">
      <div className="bg-gray-500 bg-opacity-10 p-20 text-white max-w-full border border-gray-700 mx-auto rounded-lg py-1">
        <div className="px-3 py-3 flex justify-center items-center border-b border-gray-700 relative">
          <h2 className="text-xl font-bold text-center">Create Post</h2>
        </div>

        <div className="px-3 py-3">
          <div className="flex space-x-3 justify-start items-center">
            <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
              <a href="https://facebook.com/ShibbirAhmedRaihan">
                <img
                  className="w-full"
                  src={currentUser.profilePicture}
                  alt="MD. Shibbir Ahmed"
                />
              </a>
            </div>

            <div className="flex flex-col space-y-0.5 items-start">
              <h2 className="font-semibold text-sm">{currentUser.userName}</h2>

              <div className="bg-gray-700 rounded-md px-1 flex space-x-0.5 py-1 items-center cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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

                <span className="font-semibold text-xs">Public</span>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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

          <div className="my-4">
            <textarea
              id="content"
              rows="3"
              placeholder={`What's on your mind, ${currentUser.userName}?`}
              className="w-full  bg-transparent resize-none text-2xl text-white outline-none placeholder-gray-400 focus:placeholder-gray-500"
              onChange={(e) => {
                setContent(e.target.value);
                console.log(content);
              }}
            ></textarea>
            <img src={image} className="w-[20rem] rounded-lg" alt="" />
          </div>

          <div className="flex justify-between items-center">
            <div className="w-8 h-8 border-2 border-white rounded-lg font-semibold flex justify-center items-center cursor-pointer">
              Aa
            </div>
            <div className="text-gray-600 hover:text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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

          <div className="border border-gray-700 rounded-full mt-5 px-3 py-2.5 flex justify-between items-center">
            <div className="font-semibold cursor-pointer"></div>
            <div className="flex space-x-0.5">
              <div className="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                <input
                  ref={imageRef}
                  onChange={handleImageChange}
                  type="file"
                  id="imageUrl"
                  className="hidden"
                />
                <svg
                  onClick={() => imageRef.current.click()}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-500"
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

         

         

           

       

            </div>
          </div>

          <button
            onClick={() => {
              handlePostClick();
            }}
            className="w-full bg-violet-500 mt-3 rounded-full py-4 text-white font-bold text-xl"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
