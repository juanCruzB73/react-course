import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography,Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
        <AuthLayout title="Register">
            <form >
              <Grid container>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField label="nombre completo" type="text" placeholder="Nombre completo" fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField label="Correo" type="email" placeholder="Correo" fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField label="Contraseña" type="password" fullWidth/>
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}} >

                  <Grid item xs={12} sx={{mb:2,mt:1}} >
                    <Button variant="contained" fullWidth>Sing Up</Button>
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
