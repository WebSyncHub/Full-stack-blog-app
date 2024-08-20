import React from 'react';
import './blogi.css';

const Blogi = ({ dashboard }) => {
  return (
    <div className="why-blogi-container">
      <div className="text-section">
        <h2>Why I started Blogi</h2>
        <p>My name is John Doe and I am the founder of Blogi. Blogi is my passion, which is why I’m so excited to launch this new product...</p>
        <div className="author-info">
          <img src="https://via.placeholder.com/50" alt="Author" className="author-image" />
          <div>
            <h4>Robert Fox</h4>
            <p>Feb 14, 2018</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={dashboard} alt="Blogi Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Blogi;
