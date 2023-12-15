import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const EditProfile = () => {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const userID = currentUser.userID
  console.log(currentUser);
  console.log(userID);
  const navigate = useNavigate() 
  const [formData,setFormData] = useState({})


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
    console.log(formData,"aaa");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    currentUser = formData
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    axios
    .put(`http://localhost:5001/api/user/update/${userID}`, formData)
    .then((res) => {
      console.log(res)
      navigate('/profile')
    })
    .catch((err) => console.log(err));
    // console.log(formData);
  }

  return (
    <div className="p-3 max-w-3xl mx-auto mb-20">
      <h1 className="text-white text-3xl text-center mt-20 uppercase">
        Edit Profile
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-10">
        <input
          id="userName"
          className="p-3 rounded-full bg-transparent border text-white "
          type="text"
          placeholder="Username"
          onChange={handleChange}
          defaultValue={currentUser.userName}
        />
        <input
          id="password"
          className="p-3 rounded-full bg-transparent border text-white"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          defaultValue={currentUser.password}
        />
        <input
          id="email"
          className="p-3 rounded-full bg-transparent border text-white"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
          defaultValue={currentUser.email}
        />
        <input
          className="p-3 rounded-full bg-transparent border text-white"
          type="date"
          id="birthday"
          onChange={handleChange}
          defaultValue={currentUser.birthday}
        />

        <textarea
          id="bio"
          className="p-3 rounded-full bg-transparent border text-white"
          placeholder="Bio"
          onChange={handleChange}
          defaultValue={currentUser.bio}
        ></textarea>

        <button 
        className="p-3 rounded-full bg-violet-500 text-white uppercase">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
