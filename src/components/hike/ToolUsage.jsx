import React, { useState } from 'react';

const ToolUsage = ({ onCorrect }) => {
  const [rotation, setRotation] = useState(0);
  const [solved, setSolved] = useState(false);

  // Compass puzzle: Point North to proceed
  // Randomize target direction? Let's say we need to head East (90 deg).

  const [attempts, setAttempts] = useState(0);

  const checkDirection = () => {
    // Check if rotation matches East (90) roughly
    if (rotation >= 80 && rotation <= 100) {
      setSolved(true);
      setTimeout(() => onCorrect(true), 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 2) {
        alert("انتهت المحاولات! الاتجاه الصحيح هو الشرق (90 درجة).");
        onCorrect(false);
      } else {
        alert(`اتجاه خاطئ! باقي لك ${2 - newAttempts} محاولة.`);
      }
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h3>استخدام الأدوات: البوصلة</h3>
      <p>القائد يطلب التوجه نحو <strong>الشرق (East)</strong>.</p>
      <p>اضبط البوصلة لتشير إلى الاتجاه الصحيح.</p>

      <div style={{ margin: '2rem auto', width: '200px', height: '200px', position: 'relative' }}>
        {/* Compass Body */}
        <div style={{ 
          width: '100%', height: '100%', borderRadius: '50%', 
          border: '10px solid #555', background: '#ecf0f1',
          position: 'relative', boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          {/* Labels */}
          <span style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>N</span>
          <span style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>S</span>
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold' }}>E</span>
          <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold' }}>W</span>
          
          {/* Needle */}
          <div style={{ 
            width: '10px', height: '140px', background: 'red', 
            position: 'absolute', top: '30px', left: 'calc(50% - 5px)',
            transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s',
            clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)'
          }}>
            <div style={{ width: '100%', height: '50%', background: 'red' }}></div>
            <div style={{ width: '100%', height: '50%', background: 'blue' }}></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
        <button className="btn-primary" onClick={() => setRotation(r => r - 45)}>↺ يسار</button>
        <button className="btn-primary" onClick={() => setRotation(r => r + 45)}>يمين ↻</button>
      </div>

      <button className="btn-primary" style={{ background: '#e67e22' }} onClick={checkDirection}>
        تثبيت الاتجاه والمشير
      </button>

      {solved && <p style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>اتجاه صحيح! لننطلق شرقاً.</p>}
    </div>
  );
};

export default ToolUsage;
