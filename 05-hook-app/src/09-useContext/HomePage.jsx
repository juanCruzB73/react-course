import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const HomePage = () => {
    const {user}=useContext(UserContext);
  return (
    <div>
      <h1>home</h1>
      <pre>{JSON.stringify(user,null,3)}</pre>
    </div>
  )
}
