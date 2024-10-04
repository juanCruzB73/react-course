
import { useState } from "react";
import { UserContext } from "./userContext"


export const UserProvider = ({children}) => {

    const [user,setNewUser]=useState({
        id:"123",
        name:"elliot",
        lastname:"alderson",
    });

  return (
    <UserContext.Provider value={{user,setNewUser}}>
        {children}
    </UserContext.Provider>
  )
}