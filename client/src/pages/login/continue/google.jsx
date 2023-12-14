import { FcGoogle } from "react-icons/fc";
import { googleProvider, auth } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const [emailValue, setEmailValue] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data.user);

      // Assign values here within the .then() block
      const userEmail = data.user.email;
      const userDisplayName = data.user.displayName;
      const userPhotoURL = data.user.photoURL;

      // Make the API call using async/await
      const response = await axios.post("http://localhost:5001/api/user/createUser", {
        userName: userDisplayName,
        profilePicture: userPhotoURL,
        email: userEmail,
        password: "haha",
      });

      console.log(response.data, "fffff");

      setEmailValue(userEmail);
      setUsername(userDisplayName);
      setProfilePicture(userPhotoURL);

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: userEmail,
          profilePicture: userPhotoURL,
          username: userDisplayName,
        })
      );

      var storedData = JSON.parse(localStorage.getItem("currentUser"));
      console.log(data.user);
      navigate("/");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      // Handle error as needed
    }
  };

  console.log(emailValue);

  return (
    <div>
      <button
        onClick={handleClick}
        className="text-[100%] flex items-center gap-2 text-white rounded-full px-[16%] mx-auto py-3 mt-2 border-[0.1px] whitespace-nowrap"
      >
        <FcGoogle className="text-2xl" /> Continue With Google
      </button>
    </div>
  );
};

export default Google;
