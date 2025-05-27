import React from 'react';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="simple-card">
      <strong>{title}</strong>
      <p>{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
