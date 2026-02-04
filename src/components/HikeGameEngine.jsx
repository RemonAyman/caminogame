import React, { useState } from 'react';
import SignInterpretation from './hike/SignInterpretation';
import MapEncounter from './hike/MapEncounter';
import ObservationStage from './hike/ObservationStage';
import PatrolReport from './PatrolReport';

const HikeGameEngine = ({ patrol }) => {
  const [station, setStation] = useState(1);
  const [score, setScore] = useState(0); // Track successful solves
  
  const nextStation = () => {
    setScore(s => s + 1);
    setStation(s => s + 1);
  };

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
        return <ObservationStage onCorrect={nextStation} />;
      case 4:
        return <PatrolReport patrol={patrol} score={score} />;
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
        gap: '2rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <span>📌 المحطة: {station > 3 ? 'النهاية' : `${station} / 3`}</span>
        <span>⚜️ الطليعة: {patrol.patrolName}</span>
      </div>
      
      {renderStation()}
    </div>
  );
};

export default HikeGameEngine;
