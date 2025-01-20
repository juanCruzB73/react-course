import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { getEnvVarialbles } from "../helpers"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"


export const AppRouter = () => {
  
  const {status,checkAuthToken}=useAuthStore();

  useEffect(()=>{
    checkAuthToken()
  },[status])

    return (
    <Routes>

        {
            (status === "not-authenticated") ? 
            (<>
              <Route path="/auth/*" element={ <LoginPage/> }/>
              <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
            </>) : 
            (
              <>
              <Route path="/" element={ <CalendarPage/> }/>
              <Route path="/*" element={ <Navigate to="/"/> }/>
              </>
            )
        }
        
        
    </Routes>
  )
}
