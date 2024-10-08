import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/types"

const initialState={
    logged:false,
}
export const AuthProvider = ({children}) => {
    
    const init=()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        return{
            logged:!!user,
            user,
        }
    }

    const [authState,dispatch]=useReducer(authReducer,initialState,init);

    const login = (name="")=>{
        const user={id:Date.now(),name}

        const action={type:types.login,payload:user}

        localStorage.setItem('user',JSON.stringify(user));
        
        dispatch(action);
    }
    const logout=()=>{
        localStorage.removeItem('user')
        const action={type:types.logout};
        dispatch(action)
    }

  return (
    <AuthContext.Provider value={{...authState,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
