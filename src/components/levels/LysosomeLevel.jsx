import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LysosomeLevel = ({ onComplete, addScore, addInfo }) => {
  const [wasteCount, setWasteCount] = useState(3);

  const cleanup = () => {
    setWasteCount(w => w - 1);
    addScore(30);
    if (wasteCount === 1) {
      addInfo();
    }
  };

  return (
    <div className="glass-card" style={{ width: '80%' }}>
      <h3 style={{ color: 'var(--secondary)' }}>المستوى 4: الليزوزوم</h3>
      <p>الليزوزوم هو جهاز التنظيف في الخلية، يكسر الفضلات والأجزاء القديمة.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <p>المهمة الأخيرة: تخلص من الفضلات لتنظيف الخلية:</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {wasteCount > 0 ? (
            Array.from({ length: wasteCount }).map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                onClick={cleanup}
                style={{ 
                  padding: '1rem', background: '#475569', borderRadius: '10px',
                  cursor: 'pointer', border: '2px dashed #94a3b8'
                }}
              >
                🗑️ فضلات
              </motion.div>
            ))
          ) : (
            <div>
              <p style={{ color: '#4ade80', marginBottom: '1rem' }}>🌟 الخلية نظيفة وآمنة تماماً بفضل مجهودك!</p>
              <p style={{ marginBottom: '1.5rem' }}>أنت الآن كابتن خبير في عالم الخلية!</p>
              <button className="btn-primary" onClick={onComplete}>عرض النتيجة النهائية</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LysosomeLevel;
