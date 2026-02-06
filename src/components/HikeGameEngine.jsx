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
  
  // Hint System State
  const [hintRevealed, setHintRevealed] = useState(false);
  const [penaltyMessage, setPenaltyMessage] = useState(null);

  const openPdf = () => {
    window.open('https://drive.google.com/file/d/1zyHEGE7yxplEAz8yNbrE8qhEG76Ui8o-/view?usp=sharing', '_blank');
  };

  const useHelpBook = () => {
    if (hintRevealed) return;
    
    if (window.confirm("هل تريد استخدام كتاب المساعدة؟ سيتم خصم 5 نقاط من رصيدك!")) {
      setScore(s => s - 5);
      setHintRevealed(true);
      setPenaltyMessage("تم خصم 5 نقاط لاستخدام المساعدة ⚠️");
      setTimeout(() => setPenaltyMessage(null), 3000);
    }
  };

  useEffect(() => {
    // Generate 10 randomized levels on mount
    const newLevels = generateGameLevels();
    setLevels(newLevels);
  }, []);

  const handleNext = (success = true) => {
    const currentPoints = levels[currentLevelIndex].points;
    if (success) {
      setScore(s => s + currentPoints);
    } else {
      setScore(s => s - currentPoints);
    }
    
    // Reset hint state for next level
    setHintRevealed(false);

    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      finishGame();
    }
  };

  const finishGame = () => {
    setEndTime(Date.now());
    setGameFinished(true);
  };

  if (levels.length === 0) return <div>جاري تجهيز المسارات...</div>;

  const currentLevel = levels[currentLevelIndex];

  return (
    <div className="game-content">
      
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
            direction: 'rtl',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span>📌 مرحلة: {currentLevel.index} / {levels.length}</span>
            <span>⭐ الصعوبة: {currentLevel.difficulty === 'easy' ? 'سهل' : currentLevel.difficulty === 'medium' ? 'وسط' : 'صعب'}</span>
            <span style={{ color: score < 0 ? 'red' : 'inherit' }}>⚜️ نقاطي: {score}</span>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={openPdf}
                style={{
                  background: '#e67e22',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  title: 'فتح ملف PDF للمراجعة'
                }}
              >
                ?
              </button>

              <button 
                onClick={useHelpBook}
                disabled={hintRevealed}
                style={{
                  background: hintRevealed ? '#ccc' : '#d35400',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '15px',
                  cursor: hintRevealed ? 'default' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                title="استخدام المساعدة (-5 نقاط)"
              >
                📖 {hintRevealed ? "تم الكشف" : "مساعدة (-5)"}
              </button>

              {/* Minified Group Logo */}
              <img 
                src="/المجموعة.png" 
                alt="Group Logo" 
                style={{ 
                  height: '40px', 
                  width: 'auto', 
                  marginLeft: '0.5rem',
                  filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))'
                }} 
              />
            </div>
          </div>

          {penaltyMessage && (
            <div style={{ 
              background: '#ffdddd', color: 'red', padding: '0.5rem', borderRadius: '5px', marginBottom: '1rem', animation: 'fadeIn 0.5s' 
            }}>
              {penaltyMessage}
            </div>
          )}

          {hintRevealed && (
            <div className="hint-box" style={{ background: '#e3f2fd', borderRight: '4px solid #2196f3', marginBottom: '1rem' }}>
              ℹ️ <strong>مساعدة:</strong> مفتاح الإجابة هو: <span style={{ fontWeight: 'bold', color: '#d35400' }}>{currentLevel.key || currentLevel.answer}</span>
            </div>
          )}
          
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
