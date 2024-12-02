import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from "../../store/journal/journalSlice";

const SideBarItem = ({title="",body,id,date,imagesUrls}) => {
    const dispatch=useDispatch();
    const newTitle=useMemo(()=>{
        return title.length>17 ? title.substring(0,17)+"...":title
    },[title])

  return (
    <ListItem disablePadding onClick={()=>dispatch(setActiveNote ({title,body,id,date,imagesUrls}))}>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={body}/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}

export default SideBarItem
