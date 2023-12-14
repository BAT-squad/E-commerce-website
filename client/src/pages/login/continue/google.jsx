import { FcGoogle } from "react-icons/fc";
import  {googleProvider,auth} from "../../../firebase"
import   {signInWithPopup} from "firebase/auth"
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Google = ()=>{
    const [emailValue, setEmailValue] = useState("")
    const[profilePicture,setProfilePicture]= useState("")
    const[username,setUsername] = useState("")
    const navigate = useNavigate()
    const handleClick = ()=>{
        
        signInWithPopup(auth,googleProvider).then((data)=>{
            setEmailValue(data.user.email)
            
            setUsername(data.user.displayName)
            setProfilePicture(data.user.photoURL)
            axios.post("http://localhost:5001/api/user/createUser",{userName: username,profilePicture,email: emailValue,password: "haha"}).then((response)=>{
                console.log(response.data,'fffff')
            })
            localStorage.setItem("currentUser", JSON.stringify({
                email: data.user.email,
                profilePicture: data.user.photoURL,
                username: data.user.displayName
              }));
              var storedData = JSON.parse(localStorage.getItem("currentUser"));
            console.log(data.user)
            navigate("/")
        })

    }
    console.log(emailValue)
    return(
        <div>
            <button onClick={handleClick} className=" text-[100%]  flex items-center gap-2 text-white  rounded-full px-[16%] mx-auto py-3 mt-2 border-[0.1px] whitespace-nowrap"> <FcGoogle  className="text-2xl"/> Continue With Google</button>
        </div>
    )
}
export default Google;