import { auth, provider } from "../../store/firebas-config";
import {signInWithPopup} from 'firebase/auth';
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";



export const authSigninWithGoogle = (setIsLogIn: Dispatch<SetStateAction<boolean>>, navigate: NavigateFunction) => {
    signInWithPopup(auth, provider)
    .then((result) => {
        localStorage.setItem('isLogIn', 'true');
        setIsLogIn(true)
        navigate("/");
    })
}