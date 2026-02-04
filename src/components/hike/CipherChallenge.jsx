import React, { useState } from 'react';

const CipherChallenge = ({ onCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Simple substitution cipher (A=1, B=2...) or "Morse" visual
  // Let's do a simple "Mirror" or "Reverse" or standard scout cipher (Rosary/Masonic if easy to render, but Morse is easier to type).
  // Problem: "S O S" -> ... --- ...
  
  const puzzle = {
    question: "فك شفرة مورس التالية:",
    code: ".--. .-. . .--. .- .-. . -..", // P R E P A R E D (Be Prepared - Kun Musta'idan) -> Let's do Arabic "K O N  M S T A D" or similar?
    // Let's use simpler: "S C O U T" -> ... -.-. --- ..- - 
    // Arabic: "ك ش ا ف" -> -.-  ---.  .-  ..-.
    correctAnswer: "كشاف",
    hint: "شفرة مورس: (-.-) هي الكاف، (---.) هي الشين..."
  };

  const checkAnswer = () => {
    if (answer.trim() === puzzle.correctAnswer) {
      setFeedback('correct');
      setTimeout(onCorrect, 1500);
    } else {
      setFeedback('wrong');
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h3>تحدي الشفرات</h3>
      <p>وجدنا رسالة مشفرة على جذع شجرة:</p>
      
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
        -.- ---. .- ..-.
      </div>

      <p className="hint-box">تلميح: هذه الكلمة هي هوية كل واحد فينا.</p>

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

      {feedback === 'correct' && <p style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>إجابة صحيحة! (كشاف)</p>}
      {feedback === 'wrong' && <p style={{ color: 'red', marginTop: '1rem' }}>خطأ! حاول مرة أخرى.</p>}
    </div>
  );
};

export default CipherChallenge;
