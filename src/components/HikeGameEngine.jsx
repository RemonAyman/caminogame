import React, { useState, useEffect } from 'react';
import CipherChallenge from './hike/CipherChallenge';
import PatrolReport from './PatrolReport';
import Leaderboard from './Leaderboard';
import { generateGameLevels } from '../data/GameData';
import { updatePatrolScore } from '../services/scoreService';
import { GAME_CONFIG } from '../constants';

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
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openPdf = () => {
    window.open('https://drive.google.com/file/d/1zyHEGE7yxplEAz8yNbrE8qhEG76Ui8o-/view?usp=sharing', '_blank');
  };

  const useHelpBook = () => {
    if (hintRevealed) return;
    setShowConfirmModal(true);
  };

  const confirmHelp = () => {
    setShowConfirmModal(false);
    setScore(s => s - GAME_CONFIG.HELP_PENALTY);
    setHintRevealed(true);
    setPenaltyMessage(`تم خصم ${GAME_CONFIG.HELP_PENALTY} نقاط لاستخدام المساعدة ⚠️`);
    setTimeout(() => setPenaltyMessage(null), 3000);
  };

  useEffect(() => {
    // Generate 10 randomized levels on mount
    const newLevels = generateGameLevels();
    setLevels(newLevels);
  }, []);

  const handleNext = (success = true) => {
    const currentPoints = levels[currentLevelIndex].points;
    let newScore = score;
    if (success) {
      setScore(s => {
          newScore = s + currentPoints;
          return newScore;
      });
    } else {
      setScore(s => {
          newScore = s - currentPoints;
          return newScore;
      });
    }
    
    // Reset hint state for next level
    setHintRevealed(false);

    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      // Must pass the latest score
      finishGame(newScore);
    }
  };

  const finishGame = (finalScore) => {
    setEndTime(Date.now());
    setGameFinished(true);
    // Send score to Firebase
    if (patrol?.patrolName) {
        updatePatrolScore(patrol.patrolName, finalScore);
    }
  };

  if (levels.length === 0) return <div>جاري تجهيز المسارات...</div>;

  const currentLevel = levels[currentLevelIndex];

  return (
    <div className="game-content">
        
      {!gameFinished ? (
        <>
          <div className="stats-bar">
            <span>📌 مرحلة: {currentLevel.index} / {levels.length}</span>
            <span>⭐ الصعوبة: {currentLevel.difficulty === 'easy' ? 'سهل' : currentLevel.difficulty === 'medium' ? 'وسط' : 'صعب'}</span>
            <span style={{ color: score < 0 ? 'red' : 'inherit' }}>⚜️ نقاطي: {score}</span>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={openPdf}
                className="btn-icon-round"
                title='فتح ملف PDF للمراجعة'
              >
                ?
              </button>

              <button 
                onClick={useHelpBook}
                disabled={hintRevealed}
                className="btn-help"
                title="استخدام المساعدة (-5 نقاط)"
              >
                📖 {hintRevealed ? "تم الكشف" : "مساعدة (-5)"}
              </button>

              {/* Minified Group Logo */}
              <img 
                src="/المجموعة.png" 
                alt="Group Logo" 
                className="mini-logo" 
              />
            </div>
          </div>

          {penaltyMessage && (
            <div className="penalty-msg">
              {penaltyMessage}
            </div>
          )}

          {hintRevealed && (
            <div className="hint-box hint-box-revealed">
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
          <Leaderboard />
        </div>
      )}

      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>هل أنت متأكد؟</h3>
            <p>هل تريد استخدام كتاب المساعدة؟ سيتم خصم <strong>{GAME_CONFIG.HELP_PENALTY} نقاط</strong> من رصيدك!</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowConfirmModal(false)}>تراجع</button>
              <button className="btn-confirm" onClick={confirmHelp}>نعم، استخدم المساعدة</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HikeGameEngine;
