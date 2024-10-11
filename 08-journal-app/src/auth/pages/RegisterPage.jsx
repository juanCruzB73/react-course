import { Button, Grid, TextField,Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { statCreatingUserWithEmailAndPassword } from "../../store/auth"
//import { Google } from "@mui/icons-material"

const formValidations={
  fullName:[(value)=>value.length>3,"el nombre no puede tener menos de 4 caracteres"],
  email:[(value)=>value.includes('@'),'el email debe lleva @'],
  password:[(value)=>value.length>=6,'la contraseña debe tener minimo6 digitos'],
}


export const RegisterPage = () => {
  
  const dispatch=useDispatch();

  const [formSubmitted,setFormSubmitted]=useState(false)
  
  const {status,errorMessage}=useSelector(state=>state.auth);
  const isCheckingAuthentication=useMemo(()=>status==="checking",[status]);

  const {fullName,email,password,onInputChange,isValidForm,fullNameValid,emailValid,passwordValid}=useForm({
    fullName:'',
    email:'',
    password:'',
  },formValidations)
  
  const onSubmit=(event)=>{
    event.preventDefault()
    
    setFormSubmitted(true);

    if(!isValidForm) return;
    dispatch(statCreatingUserWithEmailAndPassword({displayName:fullName,email,password}));
  }
  
  return (
        <AuthLayout title="Register">
          <h1>formValue: {isValidForm? " valido":" invalido"}</h1>
            <form onSubmit={onSubmit}>
              <Grid container>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField  name="fullName" value={fullName} onChange={onInputChange} label="nombre completo"
                  type="text" placeholder="Nombre completo" fullWidth
                  error={!!fullNameValid && formSubmitted}
                  helperText={fullNameValid}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField name="email" value={email} onChange={onInputChange} label="Correo"
                  type="email" placeholder="Correo" fullWidth
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField name="password" value={password} onChange={onInputChange}
                  label="Contraseña" type="password" fullWidth
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                  />
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}} >

                <Grid item xs={12} sx={{mb:2,mt:1}} display={!!errorMessage ? "" : "none"} >
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>

                  <Grid item xs={12} sx={{mb:2,mt:1}} >
                    <Button disabled={isCheckingAuthentication} variant="contained" fullWidth type="submit" >Sing Up</Button>
                  </Grid>
                
                  <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to="/auth/login">Inicial Sesión</Link>
                  </Grid>

                </Grid>
              </Grid>
          </form>
        </AuthLayout>
  )
}
