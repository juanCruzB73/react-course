import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteViews = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
      <Grid>
        <Typography fontSize={36}fontWeight='light'>17 de septiembre,2023</Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{padding:2}}>
            <SaveOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
        </Button>
      </Grid>
      <Grid container>
            <TextField type="text" variant="filled" fullWidth placeholder="ingrese un titulo" label="Titulo" sx={{border:'none',mb:1}} />
            <TextField type="text" variant="filled" fullWidth multiline placeholder="Descripcion" minRows={5} sx={{border:'none',mb:1}} />
      </Grid>
      <ImageGalery/>
    </Grid>
  )
}