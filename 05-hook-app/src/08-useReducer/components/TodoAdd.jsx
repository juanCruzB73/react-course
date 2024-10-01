import { useForm } from "../../hooks/useForm"

export const TodoAdd = ({handleTodo}) => {
  
  const {description,onInputChange,onResetForm}=useForm({description:''})
  
  const onSubmitForm=(event)=>{
    event.preventDefault()
    if(description.length>1){
      const newTodo={
        id:Date.now(),
        description,
        done:false,
      }
      newTodo && handleTodo(newTodo);
      onResetForm()
  }
  }

  return (
        <>
            <form onSubmit={onSubmitForm}>
                <input onChange={onInputChange} type="text" name="description" placeholder="Ingresar tarea" className="form-control" value={description}/>
                <button onClick={onSubmitForm} type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
            </form>  
        </>
  )
}