import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import TeamSelection from './components/TeamSelection';
import TutorialScreen from './components/TutorialScreen';
import GameEngine from './components/GameEngine';

function App() {
  const [scene, setScene] = useState('welcome'); // welcome, selection, tutorial, game
  const [team, setTeam] = useState(null);
  const [score, setScore] = useState(0);
  const [infoBits, setInfoBits] = useState(0);

  const handleStart = () => setScene('selection');
  
  const handleSelectTeam = (selectedTeam) => {
    setTeam(selectedTeam);
    setScene('tutorial');
  };

  const handleStartGame = () => setScene('game');

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.4 }}
          className="game-container"
        >
          {scene === 'welcome' && <WelcomeScreen onStart={handleStart} />}
          {scene === 'selection' && <TeamSelection onSelect={handleSelectTeam} />}
          {scene === 'tutorial' && <TutorialScreen team={team} onStart={handleStartGame} />}
          {scene === 'game' && (
            <GameEngine 
              team={team} 
              score={score} 
              setScore={setScore} 
              infoBits={infoBits} 
              setInfoBits={setInfoBits} 
            />
          )}
        </motion.div>
      </AnimatePresence>

      <footer className="footer">
        مجموعة جنود المسيح الكشفية 2026
      </footer>
    </div>
  );
}

export default App;
