import React, { useState, useEffect } from 'react';
import CipherChallenge from './hike/CipherChallenge';
import PatrolReport from './PatrolReport';
import Leaderboard from './Leaderboard';
import { generateGameLevels } from '../data/GameData';

const HikeGameEngine = ({ patrol }) => {
  const [levels, setLevels] = useState([]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0); 
  const [startTime] = useState(Date.now());
  const [gameFinished, setGameFinished] = useState(false);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    // Generate 10 randomized levels on mount
    const newLevels = generateGameLevels();
    setLevels(newLevels);
  }, []);

  const handleNext = (success = true) => {
    const currentPoints = levels[currentLevelIndex].points;
    if (success) {
      setScore(s => s + currentPoints);
    }
    
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      finishGame(success, currentPoints);
    }
  };

  const finishGame = (lastSuccess, lastPoints) => {
    if (lastSuccess) setScore(s => s + lastPoints); // Add last level points if won
    setEndTime(Date.now());
    setGameFinished(true);
  };

  if (levels.length === 0) return <div>جاري تجهيز المسارات...</div>;

  const currentLevel = levels[currentLevelIndex];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', maxHeight: '80vh', padding: '10px' }}>
      
      {!gameFinished ? (
        <>
          <div style={{ 
            background: 'rgba(255,255,255,0.9)', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px',
            marginBottom: '1rem',
            fontWeight: 'bold',
            color: '#3e2723',
            display: 'flex',
            gap: '1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            direction: 'rtl'
          }}>
            <span>📌 مرحلة: {currentLevel.index} / {levels.length}</span>
            <span>⭐ الصعوبة: {currentLevel.difficulty === 'easy' ? 'سهل' : currentLevel.difficulty === 'medium' ? 'وسط' : 'صعب'}</span>
            <span>⚜️ نقاطي: {score}</span>
          </div>

          {/* Currently we only have Cipher logic fully dynamic. 
              In full version we would switch(currentLevel.type) to render Sign/Tool components.
              For now, all generic questions map to CipherChallenge for text/code input. */}
          
          <CipherChallenge 
            key={currentLevel.id + currentLevel.index} // Force re-render on new question
            data={currentLevel} 
            onCorrect={handleNext} 
          />
        </>
      ) : (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PatrolReport patrol={patrol} score={score} timeTaken={Math.floor((endTime - startTime) / 1000) + " ثانية"} />
          <Leaderboard currentEntry={{
            patrolName: patrol.patrolName,
            raedName: patrol.raedName,
            score: score,
            time: Math.floor((endTime - startTime) / 1000) + " ثانية",
            timestamp: startTime
          }} />
        </div>
      )}
    </div>
  );
};

export default HikeGameEngine;
