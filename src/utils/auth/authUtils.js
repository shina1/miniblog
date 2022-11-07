import { auth, provider } from "../../store/firebas-config";
import {signInWithPopup} from 'firebase/auth';
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";



export const authSigninWithGoogle = (e,setIsLogIn, navigate) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
    .then((result) => {
        localStorage.setItem('isLogIn', 'true');
        setIsLogIn(true)
        navigate("/");
    })
}