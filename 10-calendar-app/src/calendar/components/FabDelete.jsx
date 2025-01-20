import { useUiStore } from "../../hooks"
import { useCalendarStore } from "../../hooks/useCalendarStore"

export const FabDelete = () => {
  
    const {startdeletiEvent,hasEventSelected,}= useCalendarStore()
    const {isDateModalOpen}=useUiStore();
    const handleDelete=()=>{
        startdeletiEvent()
    }

    return (
    <button className="btn btn-danger fab-danger"
    onClick={handleDelete}
    style={{
      display: (hasEventSelected && !isDateModalOpen) ? "" : "none"
    }}
    ><i className="fas fa-trash-alt"></i></button>
  )
}
