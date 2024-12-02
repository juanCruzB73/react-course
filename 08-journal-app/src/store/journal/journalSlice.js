import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState:{
        isSaving:false,
        savedMessagge:"",
        active:"",
        notes:[],
},
  reducers: {
    isSavingNote:(state)=>{
        state.isSaving=true
    },
    addNewEmptyNote:(state,action)=>{
        state.notes.push(action.payload);
        state.isSaving=false;
    },
    setActiveNote:(state,action)=>{
        state.active=action.payload;
        state.savedMessagge=""
    },
    setNotes:(state,action)=>{
        state.notes=action.payload
    },
    setSaving:(state)=>{
        state.isSaving=true;
    },
    updateNote:(state,action)=>{
        state.isSaving=true
        state.savedMessagge=""
        state.isSaving=false;
        state.notes=state.notes.map(note=>{
            if(  note.id == action.payload.id  ){
                return action.payload
            }
            return note
        })
        state.savedMessagge=`${action.payload.title}, actualizada correctamente`
    },
    setFotosToActiveNote:(state,action)=>{
        state.active.imagesUrls = [...state.active.imagesUrls,...action.payload];
        state.isSaving=false;
    },
    clearNotesLogOut:(state)=>{
        state.isSaving=false;
        state.savedMessagge="";
        state.notes=[];
        state.active=null;
    },
    deleteNoteById:(state,action)=>{
        state.active=null
        state.savedMessagge=""
        state.notes=state.notes.filter(note=>note.id !== action.payload)
        state.savedMessagge=`${action.payload.title}, borrada correctamente`
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNote,isSavingNote,setFotosToActiveNote,clearNotesLogOut,deleteNoteById } = journalSlice.actions

//export default counterSlice.reducer