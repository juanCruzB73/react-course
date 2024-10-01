import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "../hooks/index";

export const TodoApp = () => {
    
    //FUNCIONALIDAD DEL HOOK USETODO
    const {handleNewTodo, todos, handleRemoveTodo,onToogleTodo,unresolvedTodos}=useTodo();
    let unresolvedTodo=unresolvedTodos()
    return (
    <>
        <h1>TodoApp: {todos.length} <small>pendiente: {unresolvedTodo}</small></h1>
        <div className="row">
            <div className="col-7"> 
                <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} onToogleTodo={onToogleTodo}/> 
            </div>
            <div className="col-5">
                <h4>Agregar todo</h4>
                <hr/>
                <TodoAdd handleTodo={handleNewTodo}/>
            </div>
        </div> 
    </>
  )
}