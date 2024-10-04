import { useContext } from "react"
import { UserContext } from "./context/userContext";

export const LoginPage = () => {

    const {user,setNewUser}=useContext(UserContext);
    
    

  return (
    <>
      <h1>Loggin</h1>
      
      <button className="btn btn-primary" onClick={()=>setNewUser({id:"2",name:"mr.robot",lastname:""})}>change user</button>
    </>
  )
}