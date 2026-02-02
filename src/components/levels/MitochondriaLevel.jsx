import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MitochondriaLevel = ({ onComplete, addScore, addInfo }) => {
  const [energy, setEnergy] = useState(0);

  const collectEnergy = () => {
    setEnergy(e => e + 20);
    addScore(20);
    if (energy === 40) {
      addInfo();
    }
  };

  return (
    <div className="glass-card" style={{ 
      width: '80%',
      backgroundImage: "url('/mitochondria_bg_1770051707375.png')",
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0,0,0,0.5)',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ color: 'var(--secondary)' }}>المستوى 3: الميتوكندريا</h3>
      <p>هنا "بيت الطاقة"! الميتوكندريا تحول الغذاء إلى طاقة (ATP).</p>
      
      <div style={{ margin: '2rem 0' }}>
        <p>التحدي: اضغط على جزيئات الغذاء لتحويلها إلى طاقة:</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          {energy < 100 ? (
            <motion.div 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={collectEnergy}
              style={{ 
                width: '60px', height: '60px', background: 'gold', 
                borderRadius: '50%', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center', color: 'black',
                fontWeight: 'bold' 
              }}
            >
              غذاء
            </motion.div>
          ) : (
            <div>
              <p style={{ color: '#4ade80', marginBottom: '1rem' }}>⚡ الخلية الآن تمتلئ بالطاقة!</p>
              <button className="btn-primary" onClick={onComplete}>انتقل للمهمة الأخيرة</button>
            </div>
          )}
        </div>
      </div>
      <div style={{ width: '100%', height: '10px', background: '#334155', borderRadius: '5px' }}>
        <div style={{ width: `${energy}%`, height: '100%', background: 'gold', borderRadius: '5px', transition: 'width 0.3s' }}></div>
      </div>
      <p>مستوى الطاقة: {energy}%</p>
    </div>
  );
};

export default MitochondriaLevel;
