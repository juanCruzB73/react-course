import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeleteNote, startLoadingFiles, startSaveNote } from "../../store/journal/thunks"

export const NoteViews = () => {

  const dispatch=useDispatch();

  const {active:note, savedMessagge,isSaving }=useSelector(state=>state.journal)
  const {body,title,date,onInputChange,formState}=useForm(note)

  const dateString=useMemo(()=>{
    const newDate=new Date(date);
    return newDate.toUTCString();
  },[date])

  const onFireInputChange = ({target})=>{
    if(target.files===0)return;
    
    dispatch(startLoadingFiles(target.files));
  }

  const fileInputRef=useRef();

  useEffect(()=>{
    dispatch(setActiveNote(formState))
  },[formState])

  useEffect(()=>{
    if(savedMessagge.length>0){
      Swal.fire('nota actualizada, ',savedMessagge, 'success')
    }
  },[savedMessagge])

  const onSaveNote=()=>{
    dispatch(startSaveNote())
  }

  const onDelete=()=>{
    dispatch(startDeleteNote());
  }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
      <Grid>
        <Typography fontSize={36}fontWeight='light'>{dateString}</Typography>
      </Grid>
      <Grid>
      <IconButton onClick={()=>fileInputRef.current.click()} color="primary" disabled={isSaving}>
        <UploadOutlined/>
      </IconButton>
        <input ref={fileInputRef} style={{display:"none"}}  type="file" multiple onChange={onFireInputChange}/>

        <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{padding:2}}>
            <SaveOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
        </Button>
      </Grid>
      <Grid container>
            <TextField name="title" value={title} onChange={onInputChange} type="text" variant="filled" fullWidth placeholder="ingrese un titulo" label="Titulo" sx={{border:'none',mb:1}} />
            <TextField name="body"  value={body}  onChange={onInputChange} type="text" variant="filled" fullWidth multiline placeholder="Descripcion" minRows={5} sx={{border:'none',mb:1}} />
      </Grid>
      <Grid container justifyContent="end" >
        <Button onClick={onDelete} color="error">
          <DeleteOutline/> Borrar
        </Button>
      </Grid>
      <ImageGalery images={note.imagesUrls}/>
    </Grid>
  )
}