import React from 'react';
import { healthIndicators } from '../data/healthIndicators';
import '../styles/anatomy.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src="/assets/anatomy.avif" alt="Anatomy" className="anatomy-img" />
      <div className="indicators">
        {healthIndicators.map((item, i) => (
          <div key={i} className={`indicator ${item.status.toLowerCase()}`}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
