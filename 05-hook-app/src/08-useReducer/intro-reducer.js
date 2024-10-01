const initialState=[{
    id:1,
    todo:"React",
    done:false,
}];

const todoReducer=(state=initialState,action={})=>{

    if(action.type=="[TODO] add todo"){
        return[...state,action.payload]
    }

    return state;
}

const newTodo={
    id:2,
    todo:"Comptia+",
    done:false,
};

const todoAction={
    type:"[TODO] add todo",
    payload:newTodo,
}



let todos=todoReducer(initialState,todoAction);
console.log({state:todos})