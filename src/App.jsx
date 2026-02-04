import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import PatrolPrep from './components/PatrolPrep';
import HikeGameEngine from './components/HikeGameEngine';

function App() {
  const [scene, setScene] = useState('welcome'); // welcome, prep, game
  const [patrolData, setPatrolData] = useState(null);

  const handleStart = () => setScene('prep');

  const handlePatrolReady = (data) => {
    setPatrolData(data);
    setScene('game');
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="game-container"
        >
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
