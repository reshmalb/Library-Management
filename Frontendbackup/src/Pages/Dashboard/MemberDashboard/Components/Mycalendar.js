import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "./Events";
import axios from 'axios';
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function Mycalendar() {
  const [eventsData, setEventsData] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;


  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  useEffect(()=>{
    const fetchEvents= async()=>{
      try{
       const response = await axios.get(API_URL+"api/calender/getcalenderdata");
       console.log("calenderdata",response.data);
       setEventsData(response.data)

      }
      catch(error){
        console.log(error);
      }

    }
    fetchEvents();
  },[])
  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
