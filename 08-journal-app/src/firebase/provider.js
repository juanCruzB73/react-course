import { signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider=new GoogleAuthProvider();

export const signInWithGoogle= async()=>{
    try{
        const result=await signInWithPopup(FirebaseAuth,googleProvider);
        //const credentials=GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid}=result.user;
        return{
            ok:true,displayName,email,photoURL,uid,
        }
        
    }catch(error){
        return{
            ok:false,
            errorMessage:error,
        }
    }
}

export const loginWithEmailAndPassword=async({email,password})=>{
    //singInWithEmailAndPassword
    try{
        const result=await signInWithEmailAndPassword(FirebaseAuth,email,password)
        const {displayName,photoURL,uid}=result.user;
        return{
            ok:true,displayName,email,photoURL,uid,
        }
    }catch(error){
        return{
            ok:false,
            errorMessage:error.message
        }
    }
}

export const registerUserWithEmailPassword = async({email,password,displayName})=>{
    try{
        console.log("from provider ",displayName,email,password)
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const{uid,photoURL}=resp.user
        updateProfile(FirebaseAuth.currentUser,{displayName})
        return{
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
        
    }catch(error){
        return{
            ok:false,
            errorMessage:error.message
        } 
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};