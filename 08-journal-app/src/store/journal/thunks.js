import { collection, doc,setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = ()=>{
    return async( dispatch,getState )=>{

        console.log("strat new note");

        const { uid } = getState().auth

        const newNote={
            tittle:'',
            body:'',
            date:new Date().getTime(),
        }

        const newDoc=doc(collection(FirebaseDB,`${uid}/journal/notes`))
        const setDocRes = await setDoc(newDoc,newNote);
        
        newNote.id=newDoc.id

        //dispatchs
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newDoc));
        //dispatch newNotes
    }
}

export const startLoadingNotes=()=>{
    return async(dispatch,getState)=>{
        
        const { uid } = getState().auth
        if(!uid)throw new Error('el uid no se cargo');
        
        const loadedNotes=await loadNotes(uid);

        dispatch(setNotes(loadedNotes));

    
        

    }
}