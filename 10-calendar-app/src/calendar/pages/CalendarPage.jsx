import { Calendar } from 'react-big-calendar'
import { localizer,getMessagesES } from '../../helpers'
import { NavBar,CalendarEvent, CalendarModal,FabAddNew,FabDelete } from "../"
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useUiStore} from "../../hooks/useUiStore"
import { useState } from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore'



const eventStyleGetter = (event,start,end,isSelected)=>{
  
  const style={
    backgroundColor: "#347CF7",
    borderRadius:"0px",
    opacity:"0.8",
    color:"white"
  }
  return{
    style
  }
  
} 

export const CalendarPage = () => {

  const [lastView,setLastState] = useState(localStorage.getItem("lastView") || "week")
  const {openDateModal}=useUiStore();
  const {events,setActiveEvent}=useCalendarStore();

  const onDoubleClick=(event)=>{
    //console.log({doubleClick:event});
    openDateModal();
    
  }
  
  
  const oneClick=(event)=>{
    //console.log({oneClick: event});
    setActiveEvent(event)
  }
  
  const onViewChange=(event)=>{
    localStorage.setItem("lastView",event)
  }

  return (
    <>
      <NavBar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}//
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={oneClick}
        onView={onViewChange}
    />

    <CalendarModal />
    <FabAddNew/>
    <FabDelete/>
    </>
  )
}
