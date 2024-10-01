export const TodoItem = ({todo,handleRemoveTodo,onToogleTodo}) => {
    return (
         <>
            <li className="list-group-item d-flex justify-content-between aling-items-center">
                <span onClick={()=>onToogleTodo(todo.id)} className={`align-self-center ${todo.done ? "text-decoration-line-through" : ''}`}>{todo.description}</span>
                <button onClick={()=>handleRemoveTodo(todo.id)} className="btn btn-danger" >borrar</button>
            </li> 
         </>
    )
}