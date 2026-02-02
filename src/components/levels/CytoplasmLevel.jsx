import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CytoplasmLevel = ({ onComplete, addScore, addInfo }) => {
  const [sorted, setSorted] = useState(0);

  const proteins = [
    { id: 1, type: 'هيكل', name: 'بروتين هيكلي' },
    { id: 2, type: 'إنزيم', name: 'إنزيم هضمي' },
    { id: 3, type: 'هيكل', name: 'أنابيب دقيقة' },
  ];

  const handleSort = (type) => {
    if (type === 'هيكل') {
      setSorted(s => s + 1);
      addScore(5);
      if (sorted + 1 === 2) {
        addInfo();
      }
    } else {
      alert("هذا الإنزيم يحتاج للذهاب لليازوزوم لاحقاً!");
    }
  };

  return (
    <div className="glass-card" style={{ width: '80%' }}>
      <h3 style={{ color: 'var(--secondary)' }}>المستوى 2: السيتوبلازم</h3>
      <p>شغل السيتوبلازم هو تدعيم أعضاء الخلية ونقل المواد.</p>
      <p>التحدي: رتب 2 من البروتينات الهيكلية لتدعيم الخلية:</p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
        {sorted < 2 ? (
          <>
            <button className="btn-primary" onClick={() => handleSort('هيكل')}>بروتين هيكل</button>
            <button className="btn-primary" onClick={() => handleSort('إنزيم')}>إنزيم</button>
          </>
        ) : (
          <div>
            <p style={{ color: '#4ade80', marginBottom: '1rem' }}>🎉 الخلية الآن قوية ومتماسكة!</p>
            <button className="btn-primary" onClick={onComplete}>انتقل للميتوكندريا</button>
          </div>
        )}
      </div>
      <p>البروتينات المرتبة: {sorted} / 2</p>
    </div>
  );
};

export default CytoplasmLevel;
