import React from 'react';
import AnatomySection from '../components/AnatomySection';
import DashboardOverview from '../components/DashboardOverview';
import HealthStatusCards from '../components/HealthStatusCards';
import CalendarView from '../components/CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/dashboard.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-body">
        <div className="left-panel">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="right-panel">
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
