import React, { useEffect, useRef, useState } from "react";
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
import CreatePost from "../components/CreatePost.jsx";
import AllPhotos from "../components/AllPhotos.jsx";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate("/edit-profile");
  const coverPicRef = useRef(null);
  const profilePicRef = useRef(null);
  const [coverPic, setCoverPic] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/user/get/${currentUser.email}`)
      .then((res) => {
        const currentUserData = JSON.stringify(res.data[0]);
        localStorage.setItem("currentUser", currentUserData);
        setCoverPic(res.data[0].coverUrl);
        setProfilePic(res.data[0].profilePicture);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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
    const coverPic = e.target.files[0];
    if (coverPic) {
      uploadCoverPic(coverPic);
    }
  };

  const handleUpdateCoverPicClick = () => {
    axios
      .put(
        `http://localhost:5001/api/user/update/cover-pic/${currentUser.userID}`,
        {
          coverUrl: coverPic,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const uploadProfilePic = (file) => {
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
          setProfilePic(downloadURL);
          currentUser.profilePicture = profilePic;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
        });
      }
    );
  };

  const handleProfilePicChange = (e) => {
    const profilePic = e.target.files[0];
    if (profilePic) {
      uploadProfilePic(profilePic);
    }
  };

  const handleUpdateProfilePicClick = () => {
    axios
      .put(
        `http://localhost:5001/api/user/update/profile-pic/${currentUser.userID}`,
        {
          profilePicture: profilePic,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <main className="p-[8rem]">
      <div className="relative block h-[300px] rounded-lg">
        <div>
          <input
            type="file"
            className="hidden"
            id="coverUrl"
            ref={coverPicRef}
            onChange={handleCoverPicChange}
          />
          <input
            type="file"
            className="hidden"
            id="coverUrl"
            ref={profilePicRef}
            onChange={handleProfilePicChange}
          />
          <img
            onClick={() => coverPicRef.current.click()}
            alt="..."
            className="cursor-pointer absolute top-0 w-full h-full object-cover rounded-lg"
            src={coverPic}
          />
          <div className="absolute bottom-[-15%] h-[120px] w-full  flex items-center justify-center">
            <div className="bg-white w-[120px] h-[120px] rounded-full p-1 ">
              <img
                onClick={() => profilePicRef.current.click()}
                src={profilePic}
                alt="Profile"
                className="mx-auto my-auto rounded-full w-full h-full cursor-pointer"
              />
              <button
                onClick={() => handleUpdateProfilePicClick()}
                className="bg-violet-700 w-6 h-6 rounded-full flex absolute left-[52%] top-[70%] justify-center items-center"
              >
                <FaCamera className="text-white h-3" />
              </button>
              <h1 className="text-white text-center text-xl mt-5 whitespace-nowrap font-semibold">
                {currentUser.userName}
              </h1>
              <button
                onClick={() => handleUpdateCoverPicClick()}
                className="rounded-full md:h-9 md:w-9  bg-violet-700 p-3  items-center justify-center absolute md:bottom-[50%] md:left-[96%] "
              >
                <MdEdit className="text-white" />
              </button>
              <button
                onClick={() => {
                  navigate("/edit-profile");
                }}
                className="bg-violet-700 p-2 whitespace-nowrap text-white text-sm rounded-full flex gap-2 justify-center items-center absolute bottom-[0] left-[71.6rem]"
              >
                <MdEdit className="text-white w-6" />
                Edit profile
              </button>
            </div>
          </div>
          <div className="text-gray-300 text-center md:w-[800px] md:mt-2 md:mx-auto  md:absolute md:bottom-[-55%] md:left-[19%]">
            {currentUser.bio}
          </div>
        </div>
      </div>
      <CreatePost currentUser={currentUser} />
      <AllPhotos />
      <Posts currentUser={currentUser} />
    </main>
  );
};

export default Profile;
