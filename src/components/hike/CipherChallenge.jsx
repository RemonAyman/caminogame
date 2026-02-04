import React, { useState } from 'react';

const CipherChallenge = ({ data, onCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkAnswer = () => {
    if (answer.trim() === data.answer || answer.trim() === data.correctAnswer) { 
      setFeedback('correct');
      setSuccess(true);
      setCompleted(true);
      // Wait removed, show explanation immediately
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 2) {
        setFeedback('failed');
        setSuccess(false);
        setCompleted(true);
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
      
      {!completed && (
        <>
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
        </>
      )}

      {/* Feedback & Explanation Section */}
      {completed && (
        <div style={{ marginTop: '2rem', animation: 'fadeIn 0.5s' }}>
           {success ? (
             <div style={{ color: 'green', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>✅ إجابة صحيحة!</div>
           ) : (
             <div style={{ color: 'darkred', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>❌ انتهت المحاولات!</div>
           )}

           <div style={{ 
             background: 'rgba(255,255,255,0.8)', 
             padding: '1rem', 
             borderRadius: '8px', 
             borderRight: '4px solid var(--primary)',
             textAlign: 'right',
             marginBottom: '1.5rem'
           }}>
             <h4>📖 التفسير:</h4>
             <p>{data.explanation || "الإجابة هي: " + data.answer}</p>
           </div>

           <button className="btn-primary" onClick={() => onCorrect(success)}>
             المحطة التالية ⬅️
           </button>
        </div>
      )}

      {!completed && feedback === 'wrong' && <p style={{ color: 'red', marginTop: '1rem' }}>خطأ! باقي لك {2 - attempts} محاولة.</p>}
    </div>
  );
};

export default CipherChallenge;
