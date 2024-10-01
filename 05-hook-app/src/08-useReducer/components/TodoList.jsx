import { TodoItem } from "./TodoItem"

export const TodoList = ({todos,handleRemoveTodo,onToogleTodo}) => {
  return (
    <>
        <ul className="list-group">
            {/*TODO ITEM */}
            {
            todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} onToogleTodo={onToogleTodo} />
            ))
            }
        </ul>
    </>
  )
}
