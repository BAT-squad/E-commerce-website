import { MdFacebook } from "react-icons/md";
import {auth} from "../../../firebase.js"
import { signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import axios from "axios"
const Facebook = ()=>{

    const [emailValue, setEmailValue] = useState("")
    
    const handleClick = ()=>{
        const facebookProvider = new FacebookAuthProvider()
        signInWithPopup(auth,facebookProvider).then((data)=>{
            setEmailValue(data.user.email)

        })
    }


    return(
        <div>
            <button onClick={handleClick} className=" text-[100%] bg-facebook   flex items-center gap-2 text-white  rounded-full px-[14%] mx-auto py-3 mt-4  whitespace-nowrap"> <MdFacebook   className="text-2xl"/> Continue With Facebook</button>
        </div>
    )
}
export default Facebook;    