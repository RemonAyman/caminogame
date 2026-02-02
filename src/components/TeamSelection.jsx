import React from 'react';

const TeamSelection = ({ onSelect }) => {
  const teams = [
    { id: 1, name: 'رهط 1' },
    { id: 2, name: 'رهط 2' },
    { id: 3, name: 'رهط 3' },
    { id: 4, name: 'رهط 4' },
    { id: 'captain', name: 'كابتن من خارج الرهط' }
  ];

  return (
    <div className="glass-card">
      <h2>اختر رهطك</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
        {teams.map((t) => (
          <button 
            key={t.id} 
            className="btn-primary" 
            style={{ fontSize: '0.9rem' }}
            onClick={() => onSelect(t.id)}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamSelection;
