import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="glass-card">
      <h1>مغامرة الخلية</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        رهط 4 Camino يرحب بكم في لعبتنا مغامرة الخلية!
      </p>
      <button className="btn-primary" onClick={onStart}>
        ابدأ الرحلة 🚀
      </button>
    </div>
  );
};

export default WelcomeScreen;
