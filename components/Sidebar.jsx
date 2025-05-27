import React from 'react';
import { navigationLinks } from '../data/navigationLinks';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index} className="sidebar-link">
              <span className="sidebar-icon">{link.icon}</span>
              <span className="sidebar-text">{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
