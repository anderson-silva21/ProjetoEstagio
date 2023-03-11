import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './VacationCalendar.css'

const localizer = momentLocalizer(moment);

const VacationCalendar = ({ events, setEvents }) => {

  const handleSelect = ({ start, end }, title) => {
    if (title) {
      const newEvent = {
        title,
        start,
        end,
        allDay: true
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={handleSelect}
      style={{ height: '70vh' }}
    />
  );
};

export default VacationCalendar;