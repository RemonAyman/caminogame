import React, { useState } from 'react';
import MembraneLevel from './levels/MembraneLevel';
import CytoplasmLevel from './levels/CytoplasmLevel';
import MitochondriaLevel from './levels/MitochondriaLevel';
import LysosomeLevel from './levels/LysosomeLevel';

const GameEngine = ({ team, score, setScore, infoBits, setInfoBits }) => {
  const [level, setLevel] = useState(1); // 1 to 4

  const handleNextLevel = () => {
    if (level < 4) {
      setLevel(level + 1);
    } else {
      // Victory state handled here or in App.jsx
      alert("مبروك! لقد أتممت المهمة بنجاح واستكشفت الخلية!");
      window.location.reload();
    }
  };

  const levels = {
    1: { name: 'غشاء الخلية', component: MembraneLevel },
    2: { name: 'السيتوبلازم', component: CytoplasmLevel },
    3: { name: 'الميتوكندريا', component: MitochondriaLevel },
    4: { name: 'الليزوزوم', component: LysosomeLevel },
  };

  const CurrentLevelComponent = levels[level].component;

  return (
    <div className="transition-container">
      <div style={{ 
        position: 'absolute', 
        top: '-50px', 
        display: 'flex', 
        gap: '2rem', 
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'var(--secondary)'
      }}>
        <span>المستوى {level}: {levels[level].name}</span>
        <span>النقاط: {score}</span>
        <span>المعلومات: {infoBits}</span>
      </div>

      <CurrentLevelComponent 
        onComplete={handleNextLevel} 
        addScore={(p) => setScore(s => s + p)}
        addInfo={() => setInfoBits(i => i + 1)}
      />
    </div>
  );
};

export default GameEngine;
