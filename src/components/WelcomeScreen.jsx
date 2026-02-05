import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="glass-card" style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Camino Journey</h1>
      
      <div style={{ 
        width: '180px', 
        height: '180px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
        border: '4px solid var(--primary)',
        margin: '0 auto 1.5rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
      }}>
        <img 
          src="/baden_powell_sketch_1770170420634.png" 
          alt="Lord Baden Powell" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <p style={{ fontSize: '1.2rem', marginBottom: '1rem', fontStyle: 'italic', fontWeight: 'bold' }}>
        "حياة الخلاء هي المدرسة الحقيقية للكشافة."
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
        أهلاً بك أيها الكشاف! استعد لقيادة طليعتك في رحلة مثيرة مليئة بالألغاز والعلامات السرية.
        هل أنت مستعد لاكتشاف الطريق وتجاوز العقبات؟
      </p>

      <button className="btn-primary" onClick={onStart}>
        استعد للرحلة ⚜️
      </button>
    </div>
  );
};

export default WelcomeScreen;
