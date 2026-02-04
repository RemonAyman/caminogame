import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowSign, NotThisWaySign, WaterSign, GoneHomeSign, MessageNearbySign, DangerSign } from './TrackingSigns';

const SignInterpretation = ({ onCorrect, hints }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // Randomize scenario slightly or fixed for prototype
  const scenario = {
    sign: <ArrowSign className="w-32 h-32 text-amber-800" />,
    correct: 'path',
    question: 'وجدت هذه العلامة على الأرض، ماذا تعني؟',
    options: [
      { id: 'path', text: 'الطريق الصحيح في هذا الاتجاه' },
      { id: 'stop', text: 'قف وانتظر' },
      { id: 'water', text: 'يوجد ماء في هذا الاتجاه' }
    ]
  };

  const handleCheck = (id) => {
    if (id === scenario.correct) {
      setFeedback('correct');
      setTimeout(onCorrect, 1500);
    } else {
      setFeedback('wrong');
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h3>تفسير العلامات</h3>
      <p>{hints || "راقب الأرض جيداً..."}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', color: '#5D4037' }}>
        {scenario.sign}
      </div>

      <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{scenario.question}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {scenario.options.map(opt => (
          <button 
            key={opt.id}
            className="btn-primary" 
            style={{ 
              background: feedback === 'wrong' && selected === opt.id ? '#e74c3c' : undefined,
              opacity: feedback === 'correct' && selected !== opt.id ? 0.5 : 1
            }}
            onClick={() => { setSelected(opt.id); handleCheck(opt.id); }}
            disabled={feedback === 'correct'}
          >
            {opt.text}
          </button>
        ))}
      </div>
      
      {feedback === 'correct' && <p style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>أحسنت! تفسير صحيح يا رائد.</p>}
      {feedback === 'wrong' && <p style={{ color: 'red', marginTop: '1rem' }}>تفسير خاطئ! حاول مرة أخرى.</p>}
    </div>
  );
};

export default SignInterpretation;
