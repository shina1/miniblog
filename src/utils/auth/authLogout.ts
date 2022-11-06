import {signOut} from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { auth, provider } from "../../store/firebas-config";

export const logOut = (setIsLogIn: Dispatch<SetStateAction<boolean>>, navigate: NavigateFunction) => {
    signOut(auth).then(()=>{
        localStorage.clear()
        setIsLogIn(false)
        navigate('/')
    })
}