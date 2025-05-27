import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        <div className="bar" style={{ height: '30px' }}></div>
        <div className="bar" style={{ height: '60px' }}></div>
        <div className="bar" style={{ height: '45px' }}></div>
        <div className="bar" style={{ height: '80px' }}></div>
      </div>
    </div>
  );
};

export default ActivityFeed;
