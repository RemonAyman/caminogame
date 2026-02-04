import React, { useState } from 'react';

const CipherChallenge = ({ data, onCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const checkAnswer = () => {
    if (answer.trim() === data.answer || answer.trim() === data.correctAnswer) { // handle both prop names if needed
      setFeedback('correct');
      setTimeout(() => onCorrect(true), 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 2) {
        setFeedback('failed');
        setTimeout(() => onCorrect(false), 3000);
      } else {
        setFeedback('wrong');
      }
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ background: '#e67e22', padding: '2px 8px', borderRadius: '4px', color: 'white', fontSize: '0.8rem' }}>
          {data.points} نقطة
        </span>
        <span style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>{data.difficulty === 'easy' ? 'سهل' : data.difficulty === 'medium' ? 'متوسط' : 'صعب'}</span>
      </div>

      <h3>تحدي الشفرات</h3>
      <p>{data.question}</p>
      
      <div style={{ 
        background: '#3e2723', 
        color: '#f1c40f', 
        padding: '1.5rem', 
        fontSize: '2rem', 
        fontFamily: 'monospace',
        borderRadius: '10px',
        margin: '2rem 0',
        letterSpacing: '5px'
      }}>
        {data.code}
      </div>

      <div className="hint-box">
        💡 <strong>تلميح 1:</strong> {data.hint1}
        {attempts >= 1 && (
          <div style={{ marginTop: '0.5rem', borderTop: '1px dashed #fab005', paddingTop: '0.5rem' }}>
             🔑 <strong>تلميح 2:</strong> {data.hint2}
          </div>
        )}
      </div>

      <input 
        type="text" 
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="اكتب فك الشفرة هنا.."
        style={{ 
          padding: '0.8rem', 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          width: '80%', 
          borderRadius: '5px',
          border: '2px solid var(--primary)',
          marginBottom: '1rem'
        }}
      />
      
      <br/>
      <button className="btn-primary" onClick={checkAnswer}>فك الشفرة 🔓</button>

      {feedback === 'correct' && <p style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>إجابة صحيحة!</p>}
      {feedback === 'wrong' && <p style={{ color: 'red', marginTop: '1rem' }}>خطأ! باقي لك {2 - attempts} محاولة.</p>}
      {feedback === 'failed' && <p style={{ color: 'darkred', marginTop: '1rem', fontWeight: 'bold' }}>للأسف انتهت المحاولات! الإجابة هي: {data.answer}</p>}
    </div>
  );
};

export default CipherChallenge;
