import { Calendar } from 'react-big-calendar'
import { addHours} from 'date-fns'
import { localizer,getMessagesES } from '../../helpers'
import { NavBar,CalendarEvent, CalendarModal } from "../"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const events=[{
  title:"take down e-corp",
  notes:"load the script",
  start:new Date(),
  end:addHours(new Date(),2 ),
  bgColor: "#fafafa",
  user:{
    _id:"1",
    name:"Elliot"
  }
}]

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

const onDoubleClick=(event)=>{
  console.log({doubleClick:event});
  
}


const oneClick=(event)=>{
  console.log({oneClick: event});
  
}

const onViewChange=(event)=>{
  localStorage.setItem("lastView",event)
}

export const CalendarPage = () => {

  const [lastView,setLastState] = useState(localStorage.getItem("lastView") || "week")



  return (
    <>
      <NavBar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
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
    </>
  )
}
