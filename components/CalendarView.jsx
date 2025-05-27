import React from 'react';
import { calendarAppointments } from '../data/calendarAppointment';
import '../styles/calendar.css';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {calendarAppointments.map((day, i) => (
          <div className="calendar-day" key={i}>
            <strong>{day.date}</strong>
            <div className="times">
              {day.times.map((time, j) => (
                <span key={j}>{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
