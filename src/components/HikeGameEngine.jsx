import React, { useState } from 'react';
import SignInterpretation from './hike/SignInterpretation';
import MapEncounter from './hike/MapEncounter';
import CipherChallenge from './hike/CipherChallenge';
import ToolUsage from './hike/ToolUsage';
import ObservationStage from './hike/ObservationStage';
import PatrolReport from './PatrolReport';
import Leaderboard from './Leaderboard';

const HikeGameEngine = ({ patrol }) => {
  const [station, setStation] = useState(1);
  const [score, setScore] = useState(0); 
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);

  const nextStation = (success = true) => {
    if (success) setScore(s => s + 10);
    setStation(s => s + 1);
  };

  const finishGame = (success = true) => {
    if (success) setScore(s => s + 10);
    setEndTime(Date.now());
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
        return <CipherChallenge onCorrect={nextStation} />;
      case 3:
        return <MapEncounter onComplete={nextStation} />;
      case 4:
        return <ToolUsage onCorrect={nextStation} />;
      case 5:
        return <ObservationStage onCorrect={finishGame} />;
      case 6:
        const timeTaken = Math.floor((endTime - startTime) / 1000) + " ثانية";
        const entry = {
          patrolName: patrol.patrolName,
          raedName: patrol.raedName,
          score: score,
          time: timeTaken,
          timestamp: startTime
        };
        return (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PatrolReport patrol={patrol} score={score} timeTaken={timeTaken} />
            <Leaderboard currentEntry={entry} />
          </div>
        );
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', maxHeight: '80vh', padding: '10px' }}>
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
        <span>📌 المحطة: {station > 5 ? 'النهاية' : `${station} / 5`}</span>
        <span>⚜️ النقاط: {score}</span>
      </div>
      
      {renderStation()}
    </div>
  );
};

export default HikeGameEngine;
