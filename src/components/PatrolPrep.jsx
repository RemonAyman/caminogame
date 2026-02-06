import React, { useState } from 'react';

const PATROLS = [
  "سكة السلامة",
  "GPS",
  "مويت",
  "Camino"
];

const PatrolPrep = ({ onReady }) => {
  const [patrolName, setPatrolName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patrolName) {
      onReady({ patrolName, scoutCount: 5, raedName: 'القائد' });
    } else {
      alert("يا بطل اختر اسم الرهط!");
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>اختار رهطك</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {PATROLS.map((name) => (
            <div 
              key={name}
              onClick={() => setPatrolName(name)}
              style={{
                padding: '1.5rem',
                border: patrolName === name ? '3px solid var(--accent)' : '2px solid #ccc',
                borderRadius: '10px',
                cursor: 'pointer',
                background: patrolName === name ? 'rgba(230, 126, 34, 0.1)' : 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.2s'
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '2rem' }} disabled={!patrolName}>
          انطلاق نحو المجهول! 🏕️
        </button>
      </form>
    </div>
  );
};

export default PatrolPrep;
