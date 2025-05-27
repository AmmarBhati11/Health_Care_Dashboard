import React from 'react';
import { upcomingAppointments } from '../data/upcomingAppointment';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div>
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, i) => (
        <div key={i}>
          <h4>{group.day}</h4>
          {group.appointments.map((apt, j) => (
            <SimpleAppointmentCard key={j} {...apt} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
