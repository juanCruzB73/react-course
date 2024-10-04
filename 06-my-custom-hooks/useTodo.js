import {useEffect, useReducer} from 'react'
import {todoReducer} from "../08-useReducer/todoReducer"

export const useTodo = () => {
    let initialState=[]
    
    //CUANDO SE REFRESCA LA PAGINA TRAE DEL LOCAL STRAGE Y ALMACENA EN INIT
    const init=()=>{
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    //USE REDUCER 
    const [todos,dispatch]=useReducer(todoReducer,initialState,init);

    //ALMCENA EN EL LOCAL STORAGE CADA VEZ QUE CAMBIAN LOS TODO
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    //USE REDUCER PARA ALMACENAR NUEVA TAREA
    const handleNewTodo=(todo)=>{
        const action={
            type:"[TODO] add todo",
            payload:todo,
        }
        dispatch(action)
    }
    
    //USE REDUCER PARA ELIMIAR TAREA
    const handleRemoveTodo=(id)=>{
        const action={
            type:"[TODO] remove todo",
            payload:id,
        }
        dispatch(action);
    }

    //USE REDUCER PARA MARCAR TAREAS
    const onToogleTodo=(id)=>{
        const action={
            type:"[TODO] toogle todo",
            payload:id
        }
        dispatch(action)
    }
    //UNRESOLVER TODOS
    const unresolvedTodos=()=>{
        return todos.filter(todo=>!todo.done).length
    }
    

    return{todos,onToogleTodo,handleNewTodo,handleRemoveTodo,unresolvedTodos}
}

