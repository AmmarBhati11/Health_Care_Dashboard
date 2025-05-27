import React from 'react';
import '../styles/appointment.css';


const HealthStatusCards = () => {
  const cards = [
    { title: 'Lungs', status: 'Bad',date: 'May 25' },
    { title: 'Teeth', status: 'Good', date: 'May 24' },
    { title: 'Bone', status: 'Good', date: 'May 22' },
  ];

  return (
    <div className="card-list">
      {cards.map((card, i) => (
        <div className="status-card" key={i}>
          <h3>{card.title}</h3>
          <p>Status: {card.status}</p>
          <span>Date: {card.date}</span>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
