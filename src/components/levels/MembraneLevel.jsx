import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MembraneLevel = ({ onComplete, addScore, addInfo }) => {
  const [verified, setVerified] = useState(false);

  return (
    <div className="glass-card" style={{ 
      width: '80%', 
      backgroundImage: "url('/cell_membrane_bg_1770051722219.png')",
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0,0,0,0.4)',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ color: 'var(--secondary)' }}>المستوى 1: غشاء الخلية</h3>
      <p>أنت الآن عند بوابة الخلية! الغشاء يحمي الخلية ويسمح بمرور المواد المفيدة فقط.</p>
      
      <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>التحدي: اختر الجزيء الذي يسمح له الغشاء بالمرور:</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-primary" style={{ background: '#4ade80' }} onClick={() => {
            addScore(10);
            addInfo();
            setVerified(true);
          }}>جزيء أكسجين (O2)</button>
          <button className="btn-primary" style={{ background: '#ef4444' }} onClick={() => alert("خطأ! الفيروسات لا تدخل!")}>فيروس عملاق</button>
        </div>
      </div>

      {verified && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p style={{ color: '#4ade80', marginBottom: '1rem' }}>✅ أحسنت! الغشاء يسمح بمرور الأكسجين بسهولة.</p>
          <button className="btn-primary" onClick={onComplete}>انتقل للسيتوبلازم</button>
        </motion.div>
      )}
    </div>
  );
};

export default MembraneLevel;
