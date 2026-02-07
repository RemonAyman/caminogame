import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import WelcomeScreen from './components/WelcomeScreen';
import PatrolPrep from './components/PatrolPrep';
import HikeGameEngine from './components/HikeGameEngine';

import IntroVideo from './components/IntroVideo';

function App() {
  const [scene, setScene] = useState('intro'); // intro, welcome, prep, game
  const [patrolData, setPatrolData] = useState(null);

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef(null);

  const handleStart = () => {
    setScene('prep');
    // Attempt to play music on first interaction
    if (audioRef.current) {
        audioRef.current.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    }
  };

  const handlePatrolReady = (data) => {
    setPatrolData(data);
    setScene('game');
  };

  const toggleMute = () => {
    if (audioRef.current) {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }
  };

  return (
    <div className="App">
      <Analytics />
      <audio ref={audioRef} src="/scout_music.mp3" loop />
      
      {scene !== 'intro' && (
        <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}>
          <button 
              onClick={toggleMute}
              style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid var(--primary)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              title={isMuted ? "تسغيل الصوت" : "كتم الصوت"}
          >
              {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
  key={scene}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className={scene === 'intro' ? "" : "game-container"}
>
  {scene === 'intro' && <IntroVideo onFinish={() => setScene('welcome')} />}
  {scene === 'welcome' && <WelcomeScreen onStart={handleStart} />}
  {scene === 'prep' && <PatrolPrep onReady={handlePatrolReady} />}
  {scene === 'game' && <HikeGameEngine patrol={patrolData} />}
</motion.div>
      </AnimatePresence>

      <footer className="footer">
        مجموعة جنود المسيح الكشفية 2026 - رحلة خلوية
      </footer>
    </div>
  );
}

export default App;
