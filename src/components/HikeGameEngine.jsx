import React, { useState } from 'react';
import SignInterpretation from './hike/SignInterpretation';
import MapEncounter from './hike/MapEncounter';
import { GoneHomeSign } from './hike/TrackingSigns';

const HikeGameEngine = ({ patrol }) => {
  const [station, setStation] = useState(1);
  
  const nextStation = () => setStation(s => s + 1);

  const renderStation = () => {
    switch (station) {
      case 1:
        return (
          <SignInterpretation 
            onCorrect={nextStation} 
            hints={`القائد ${patrol.raedName}: ابحث عن علامة تحدد مسار الرحلة.`}
          />
        );
      case 2:
        return <MapEncounter onComplete={nextStation} />;
      case 3:
        return (
          <div className="glass-card">
            <h3>نهاية الرحلة</h3>
            <div style={{ width: '100px', height: '100px', margin: '2rem auto', color: '#27ae60' }}>
              <GoneHomeSign />
            </div>
            <p>لقد وصلت الطليعة بسلام إلى أرض المخيم!</p>
            <p>أحسنت قيادة {patrol.patrolName} يا رائد {patrol.raedName}.</p>
            <p className="hint-box">رسالة: "خرجنا من المعسكر بسلام - وعدنا بسلام"</p>
            <button className="btn-primary" onClick={() => window.location.reload()}>رحلة جديدة</button>
          </div>
        );
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        background: 'rgba(255,255,255,0.9)', 
        padding: '0.5rem 1rem', 
        borderRadius: '20px',
        marginBottom: '1rem',
        fontWeight: 'bold',
        color: '#3e2723',
        display: 'flex',
        gap: '2rem'
      }}>
        <span>📌 المحطة: {station} / 3</span>
        <span>⚜️ الطليعة: {patrol.patrolName}</span>
        <span>رائد: {patrol.raedName}</span>
      </div>
      
      {renderStation()}
    </div>
  );
};

export default HikeGameEngine;
