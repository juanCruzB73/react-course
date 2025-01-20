import { Calendar } from 'react-big-calendar'
import { localizer,getMessagesES } from '../../helpers'
import { NavBar,CalendarEvent, CalendarModal,FabAddNew,FabDelete } from "../"
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useUiStore} from "../../hooks/useUiStore"
import { useEffect, useState } from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore'
import { useAuthStore } from '../../hooks'


export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const [lastView,setLastState] = useState(localStorage.getItem("lastView") || "week")
  const {events,setActiveEvent,startLoadingEvents}=useCalendarStore();


  const eventStyleGetter = (event)=>{
  
    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );
  
    const style={
      backgroundColor: isMyEvent ? "#347CF7" : '#465660',
      borderRadius:"0px",
      opacity:"0.8",
      color:"white"
    }
    return{
      style
    }
    
  } 

  useEffect(()=>{
    startLoadingEvents()
  },[])

  const onDoubleClick=()=>{
    openDateModal();
  }  
  
  const oneClick=(event)=>{
    //console.log({oneClick: event});
    setActiveEvent(event)
  }
  
  const onViewChange=(event)=>{
    localStorage.setItem("lastView",event)
    setLastState( event )
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
