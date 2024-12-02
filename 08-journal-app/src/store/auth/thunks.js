import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider"
import { clearNotesLogOut } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentications=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage))
        
        dispatch(login(result))
    }
}

export const startAcountSignIn=({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result=await loginWithEmailAndPassword({email,password});
        
        if (!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}

export const statCreatingUserWithEmailAndPassword=({displayName,email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const {uid,ok,photoURL,errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) {
            // Dispatch logout with the error message if registration fails
            return dispatch(logout({errorMessage}));
        }
        dispatch(login({uid,photoURL,displayName,email}))
    }
}

export const startLogoutFirebase=()=>{
    return async(dispatch)=>{
        await logoutFirebase();

        dispatch(clearNotesLogOut())

        dispatch(logout({}));
    }
}