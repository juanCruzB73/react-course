import { collection, deleteDoc, doc,setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, setActiveNote, setFotosToActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = ()=>{
    return async( dispatch,getState )=>{

        console.log("strat new note");

        const { uid } = getState().auth

        const newNote={
            tittle:'',
            body:'',
            date:new Date().getTime(),
            imagesUrls:[]
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

export const startSaveNote=()=>{
    return async(dispatch,getState)=>{

        dispatch(setSaving());

        //id del usuario
        const { uid } = getState().auth
        if(!uid)throw new Error('el uid no se cargo');
        const { active:note } = getState().journal
        if(!note)throw new Error('la nota no se cargo');

        //borrar id para que firestore no lo cree de nuevo
        const noteToFireStore={...note};
        delete noteToFireStore.id;


        //cambiar la base de datos
        const docRef=doc(FirebaseDB,`${uid}/journal/notes/${note.id}`)
        await setDoc(docRef,noteToFireStore,{merge:true})
        
        //cambiar el redux
        dispatch(updateNote(note));
    }
    
}
export const startLoadingFiles=(files=[])=>{
    return async(dispatch)=>{

        dispatch(setSaving());
        
        const fileUploadPromises=[];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosURL = await Promise.all(fileUploadPromises);

        dispatch(setFotosToActiveNote(photosURL));

    }
}

export const startDeleteNote=()=>{
    return async(dispatch,getState)=>{

        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        
        const docRef=doc(FirebaseDB,`${uid}/journal/notes/${note.id}`);

        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));

    }
}