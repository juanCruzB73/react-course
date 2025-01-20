import { useAuthStore } from "../../hooks"

export const NavBar = () => {

  const {user,startLogOut}=useAuthStore()

  
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4" >
      <span className="navbar-brand"> <i className="fas fa-calendar-alt"></i> {user.name}</span>
      <button className="btn btn-outline-danger" onClick={startLogOut}> <i className="fas fa-sing-out-alt"></i> <span>Log Out</span> </button>
    </div>
  )
}