import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

export const useAppRouter = () => {
  
    const {status}=useSelector(state=>state.auth);
    const dispatch=useDispatch()
  
    useEffect(()=>{
      onAuthStateChanged(FirebaseAuth,async(user)=>{
        if(!user)return dispatch(logout());
  
        dispatch(login(user));
      });
    },[])
  
  
    

    return {status}
}