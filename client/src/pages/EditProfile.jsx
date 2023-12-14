import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const EditProfile = () => {

  const navigate = useNavigate() 
  const [formData,setFormData] = useState({})


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
    console.log(formData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
    .put("http://localhost:5001/api/user/update/1", formData)
    .then((res) => {
      console.log(res)
      navigate('/profile')
    })
    .catch((err) => console.log(err));
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
        />
        <input
          id="password"
          className="p-3 rounded-full bg-transparent border text-white"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          id="email"
          className="p-3 rounded-full bg-transparent border text-white"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-full bg-transparent border text-white"
          type="date"
          id="birthday"
          onChange={handleChange}
        />

        <textarea
          id="bio"
          className="p-3 rounded-full bg-transparent border text-white"
          placeholder="Bio"
          onChange={handleChange}
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
