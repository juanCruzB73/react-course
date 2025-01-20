import { useEffect } from "react"
import { useForm,useAuthStore } from "../../hooks"
import "./LoginPage.css"
import Swal from "sweetalert2"

const loginFormFields = {
    loginEmail:"",
    loginPassword:""
}
const resgisterFormFields = {
    registerName:"",
    resgisterEmail:"",
    resgisterPassword:"",
    resgisterPassword2:""
}

export const LoginPage = () => {
    
    const {startLogin,startRegister,errorMessage}=useAuthStore()

    const {loginEmail,loginPassword,onInputChange:onLoginInputChange} = useForm(loginFormFields);
    const {registerName,resgisterEmail,resgisterPassword,resgisterPassword2,onInputChange:onRegisterInputChange} = useForm(resgisterFormFields)

    const loginSubmit=(event)=>{
        event.preventDefault();
        
        startLogin({email:loginEmail,password:loginPassword})
    }
    const registerSubmit=(event)=>{
        event.preventDefault();

        if(resgisterPassword !== resgisterPassword2){
            Swal.fire("the passwords doesn't match",'please check them','error')
            return;
        }
        if(registerName.length < 2){
            Swal.fire("Invalid name",'It must contain at least 2 characters','error')
            return;
        }
        if(resgisterEmail.length < 2){
            Swal.fire("Invalid Email",'Enter a real email','error')
            return;
        }
        
        startRegister({email:resgisterEmail,name:registerName,password:resgisterPassword});
    }

    useEffect(()=>{
        if(errorMessage !== undefined){
            Swal.fire('Error in authentication ',errorMessage, 'error')
        }
    },[errorMessage])

  return (
    <div className="container login-container">
        <div className="row">
            <div className="col-md-6 login-form-1">
                <h3>Ingreso</h3>
                <form onSubmit={loginSubmit}>
                    <div className="form-group mb-2">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Correo"
                            name="loginEmail"
                            value={loginEmail}
                            onChange={onLoginInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="loginPassword"
                            value={loginPassword}
                            onChange={onLoginInputChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Login"
                        />
                    </div>
                </form>
            </div>

            <div className="col-md-6 login-form-2">
                <h3>Registro</h3>
                <form onSubmit={registerSubmit}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="registerName"
                            value={registerName}
                            onChange={onRegisterInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo"
                            name="resgisterEmail"
                            value={resgisterEmail}
                            onChange={onRegisterInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="resgisterPassword"
                            value={resgisterPassword}
                            onChange={onRegisterInputChange}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repita la contraseña"
                            name="resgisterPassword2"
                            value={resgisterPassword2}
                            onChange={onRegisterInputChange}
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <input 
                            type="submit" 
                            className="btnSubmit" 
                            value="Crear cuenta" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}