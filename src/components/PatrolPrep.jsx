import React, { useState } from 'react';
import { PATROLS, GAME_CONFIG } from '../constants';

const PatrolPrep = ({ onReady }) => {
  const [patrolName, setPatrolName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patrolName) {
      onReady({ patrolName, scoutCount: GAME_CONFIG.INITIAL_SCOUT_COUNT, raedName: 'القائد' });
    } else {
      alert("يا بطل اختر اسم الرهط!");
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>اختار رهطك</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div className="patrol-grid">
          {PATROLS.map((name) => (
            <div 
              key={name}
              onClick={() => setPatrolName(name)}
              className={`patrol-item ${patrolName === name ? 'selected' : ''}`}
            >
              {name}
            </div>
          ))}
        </div>

        <button type="submit" className="btn-primary" disabled={!patrolName}>
          انطلاق نحو المجهول! 🏕️
        </button>
      </form>
    </div>
  );
};

export default PatrolPrep;
