import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState:{
        isSaving:false,
        savedMessagge:"",
        notes:[],
        active:null,
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

    },
    setNotes:(state,action)=>{
        state.notes=action.payload
    },
    setSaving:(state)=>{

    },
    updateNote:(state,action)=>{

    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNote,isSavingNote } = journalSlice.actions

//export default counterSlice.reducer