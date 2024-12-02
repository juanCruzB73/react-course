import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography,Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentications, startAcountSignIn, startGoogleSingIn } from "../../store/auth"
import { useMemo } from "react"

const formData={
  email:'',
  password:'',
}


export const LoginPage = () => {

  const dispatch=useDispatch();

  const {status,errorMessage} = useSelector(state=>state.auth);
  

  const {email,password,onInputChange}=useForm(formData)

  const isAuthenticating=useMemo(()=>status=='checking',[status])

  const onSubmit=(event)=>{
    event.preventDefault();
    //despachar otro metodo
    dispatch(checkingAuthentications())
    dispatch(startAcountSignIn({email,password}));

  }

  const onGoogleSingIn=()=>{
    dispatch(startGoogleSingIn())
  }

  return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
              <Grid container>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField name="email" onChange={onInputChange} value={email} label="Correo" type="email" placeholder="example@gmail.com" fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField name="password" onChange={onInputChange} value={password} label="Contraseña" type="password" fullWidth/>
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}} >

                  <Grid item xs={12} sm={6} >
                    <Button  type="submit" variant="contained" fullWidth disabled={isAuthenticating}>Login</Button>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                    <Button variant="contained" fullWidth onClick={onGoogleSingIn} disabled={isAuthenticating}>
                      <Google/>
                      <Typography sx={{ml:1}} >Google</Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{mb:2,mt:1}} display={!!errorMessage ? "" : "none"} >
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>

                  <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to="/auth/register">Crear una cuenta</Link>
                  </Grid>

                </Grid>
              </Grid>
          </form>
        </AuthLayout>
  )
}
