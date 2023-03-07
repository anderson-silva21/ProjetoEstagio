import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const vacationEvents = [
  {
    title: 'Férias do Funcionário',
    start: moment().add(7, 'days').toDate(),
    end: moment().add(14, 'days').toDate(),
    allDay: true
  }
];

const VacationCalendar = () => {
  const [events, setEvents] = useState(vacationEvents);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '70vh' }}
    />
  );
};

export default VacationCalendar;
