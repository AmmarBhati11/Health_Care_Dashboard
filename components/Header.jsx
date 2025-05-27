import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-right">
        <span className="icon">🔔</span>
        <img src="/assets/avatar.avif" alt="User" className="avatar" />
        <span className="username">Ammar</span>
        <button className="add-btn">+</button>
      </div>
    </header>
  );
};

export default Header;
