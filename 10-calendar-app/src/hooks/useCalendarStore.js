import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  
    const {events,activeEvent}=useSelector(state => state.calendar);
    const dispath=useDispatch();

    const setActiveEvent=(calendarEvent)=>{
        dispath(onSetActiveEvent(calendarEvent))
    }
    const startSavingEvent=async(calendarEvent)=>{
        
        if( calendarEvent._id ){
            dispath(onUpdateEvent(calendarEvent))

        }else{
            dispath(onAddNewEvent({...calendarEvent,_id:new Date().getTime()}))
        }
    }
    const StartdeletiEvent=async()=>{
        dispath(onDeleteEvent());
    }

    return {
        //properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //methods
        setActiveEvent,
        startSavingEvent,
        StartdeletiEvent,
    }
}
