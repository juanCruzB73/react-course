import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate=useNavigate()

    const onLogin=()=>{
        navigate("/marvel")
    }

    return (
      <div className="cointainer mt-5">
        <h1>Loggin</h1>
        <hr />
  
        <button className="btn btn-primary" onClick={onLogin}>Login</button>
      </div>
    )
  }
  