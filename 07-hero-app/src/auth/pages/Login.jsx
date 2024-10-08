import { useContext } from "react"
import { replace, useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const Login = () => {

    const {login}=useContext(AuthContext)
    const navigate=useNavigate()

    const onLogin=()=>{

        const lastPath=localStorage.getItem('lastPath')||"/marvel"

        login('Elliot')
        navigate(lastPath,{
          replace:true
        });
    }

    return (
      <div className="cointainer mt-5">
        <h1>Loggin</h1>
        <hr />
  
        <button className="btn btn-primary" onClick={onLogin}>Login</button>
      </div>
    )
  }
  