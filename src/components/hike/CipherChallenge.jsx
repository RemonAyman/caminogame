import React, { useState } from 'react';
import { SignsMap } from './TrackingSigns';
import { normalizeArabic } from '../../utils/textUtils';

const CipherChallenge = ({ data, onCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkAnswer = () => {
    const userAns = normalizeArabic(answer);
    const correctAns = normalizeArabic(data.answer);
    const key = data.key ? normalizeArabic(data.key) : null;
    
    // 1. Exact match (normalized)
    let isMatch = userAns === correctAns;

    // 2. Check accepted variants
    if (!isMatch && data.accepted) {
      isMatch = data.accepted.some(a => normalizeArabic(a) === userAns);
    }

    // 3. Substring/Keyword match (if a key is provided or for longer answers)
    if (!isMatch && key) {
      isMatch = userAns.includes(key);
    }

    // 4. Fallback: if user answers with a long sentence containing the core answer
    if (!isMatch && userAns.length > correctAns.length) {
      isMatch = userAns.includes(correctAns);
    }

    if (isMatch) { 
      setFeedback('correct');
      setSuccess(true);
      setCompleted(true);
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

  const SignComponent = data.signId ? SignsMap[data.signId] : null;

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ background: '#e67e22', padding: '2px 8px', borderRadius: '4px', color: 'white', fontSize: '0.8rem' }}>
          {data.points} نقطة
        </span>
        <span style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>{data.difficulty === 'easy' ? 'سهل' : data.difficulty === 'medium' ? 'متوسط' : 'صعب'}</span>
      </div>

      <h3>{data.type === 'sign' ? 'ماذا تعني هذه العلامة؟' : 'تحدي الشفرات'}</h3>
      <p>{data.question}</p>
      
      {!completed && (
        <>
          <div style={{ 
            background: '#fff8dc', 
            color: '#3e2723', 
            padding: '1.5rem', 
            borderRadius: '10px',
            margin: '2rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '150px'
          }}>
            {data.type === 'sign' && SignComponent ? (
              <SignComponent className="w-32 h-32 text-brown-800" style={{ width: '120px', height: '120px', stroke: '#5d4037' }} />
            ) : (
              <div style={{ fontSize: '2rem', fontFamily: 'monospace', letterSpacing: '5px' }}>
                {data.code}
              </div>
            )}
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
            placeholder={data.type === 'sign' ? "اكتب اسم العلامة..." : "اكتب فك الشفرة هنا.."}
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
          <button className="btn-primary" onClick={checkAnswer}>
            {data.type === 'sign' ? 'تحقق من العلامة' : 'فك الشفرة 🔓'}
          </button>
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
             background: 'rgba(255,255,255,0.95)', 
             padding: '1rem', 
             borderRadius: '8px', 
             borderRight: '5px solid var(--primary)',
             textAlign: 'right',
             marginBottom: '1.5rem',
             color: '#2c3e50'
           }}>
             <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
               📖 التوضيح:
             </h4>
             <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#27ae60' }}>
               الإجابة الصحيحة: {data.answer}
             </p>
             <p style={{ lineHeight: '1.6' }}>
               {data.explanation}
             </p>
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
