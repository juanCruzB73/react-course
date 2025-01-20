import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import calendarApi from "../api/calendarApi"
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";
export const useCalendarStore = () => {
  
    const {events,activeEvent}=useSelector(state => state.calendar);
    const {user} = useSelector(state=>state.auth);
    
    const dispath=useDispatch();

    const setActiveEvent=(calendarEvent)=>{
        dispath(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent=async(calendarEvent)=>{
        
        try {
            if( calendarEvent.id ){
                await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent)
                dispath(onUpdateEvent({...calendarEvent,user}))
                return;
            }
            const {data}= await calendarApi.post("/events",calendarEvent);
            dispath(onAddNewEvent({...calendarEvent,id:data.event.id,user}))
            
        } catch (error) {
            console.log("error uploading event", error);
            Swal.fire("Erro uploading", error.response.data.msg,"error");
            
        }
    }
    const startdeletiEvent=async()=>{
        try {
            await calendarApi.delete(`/events/${activeEvent.id}`)
            dispath(onDeleteEvent());
        } catch (error) {
            console.log("Error deleting event",error);
            Swal.fire("Erro uploading", error.response.data.msg,"error");

        }
        
    }

    const startLoadingEvents=async()=>{
        try {
            const {data}= await calendarApi.get('/events')
            const events=convertEventsToDateEvents(data.events);
            console.log(events);
            dispath(onLoadEvents(events))
            
        } catch (error) {
            console.log("Error cargando eventos",error);
            
        }
    }

    return {
        //properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //methods
        setActiveEvent,
        startSavingEvent,
        startdeletiEvent,
        startLoadingEvents,
    }
}
