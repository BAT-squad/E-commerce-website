import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Posts from "../components/Posts.jsx";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase.js";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate("/edit-profile");
  const coverPicRef = useRef(null);
  const profilePicRef = useRef(null);
  const [coverPic, setCoverPic] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const uploadCoverPic = (file) => {
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
          setCoverPic(downloadURL);
        });
      }
    );
  };

  const handleCoverPicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadCoverPic(file);
    }
  };

  const handleUpdateCoverPicClick = () => {
    axios
      .put("http://localhost:5001/api/user/update/cover-pic/1", {
        coverUrl: coverPic,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="p-9">
      <div className="relative block h-[500px] rounded-lg">
        <div>
          <input
            type="file"
            className="hidden"
            id="coverUrl"
            ref={coverPicRef}
            onChange={handleCoverPicChange}
          />
          <img
            onClick={() => coverPicRef.current.click()}
            alt="..."
            className="cursor-pointer absolute top-0 w-full h-full object-cover rounded-lg"
            src={
              coverPic ||
              "https://www.pearlizumi.com/cdn/shop/collections/BG_page_BG_Pattern-01_da3751ed-c5ad-4b19-9bbd-8300661fec90_1440x@2x.png?v=1691763757"
            }
          />
          <div  className="absolute bottom-[-15%] h-[120px] w-full  flex items-center justify-center">
            <div className="bg-white w-[120px] h-[120px] rounded-full p-1 ">
              <img
                src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                alt="Profile"
                className="mx-auto my-auto rounded-full w-full h-full"
              />
              <button className="bg-violet-700 w-6 h-6 rounded-full flex absolute left-[52%] top-[70%] justify-center items-center">
                <FaCamera className="text-white h-3" />
              </button>
              <h1 className="text-white text-center text-xl mt-5 whitespace-nowrap font-semibold">
                Bilel Bourgou
              </h1>
            <button
              onClick={() => handleUpdateCoverPicClick()}
              className="rounded-full md:h-9 md:w-9  bg-violet-700 p-3  items-center justify-center absolute md:bottom-[70%] md:left-[97%] "
            >
              <MdEdit className="text-white" />
            </button>
            <button
              onClick={() => {
                navigate("/edit-profile");
              }}
              className="bg-violet-700 p-2 text-white text-sm rounded-full flex gap-2 justify-center items-center absolute bottom-[10%] left-[92%]"
            >
              <MdEdit className="text-white w-6" />
              Edit profile
            </button>
            </div>
          </div>
          <div className="text-gray-300 text-center md:w-[800px] md:mt-2 md:mx-auto  md:absolute md:bottom-[-55%] md:left-[23%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            facere unde minus omnis debitis culpa excepturi vel laborum ea
            fugiat ipsam quidem consequuntur, voluptatem a quasi provident
            corporis exercitationem non!
          </div>
        </div>
      </div>
      <Posts />
    </main>
  );
};

export default Profile;
