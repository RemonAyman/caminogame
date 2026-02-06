import React, { useState } from 'react';
import { RiverSign, MosqueSign, ChurchSign } from './TrackingSigns';

const ObservationStage = ({ onCorrect }) => {
  const [selected, setSelected] = useState(null);
  
  // Simple "Spotting" game
  const target = { id: 'mosque', name: 'مسجد', component: <MosqueSign className="w-24 h-24 text-blue-800" /> };
  
  const options = [
    { id: 'river', component: <RiverSign className="w-24 h-24 text-blue-500" /> },
    { id: 'mosque', component: <MosqueSign className="w-24 h-24 text-green-700" /> },
    { id: 'church', component: <ChurchSign className="w-24 h-24 text-amber-700" /> },
  ];

  const [attempts, setAttempts] = useState(0);

  const handleSelect = (id) => {
    setSelected(id);
    if (id === target.id) {
      setTimeout(() => onCorrect(true), 1000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 2) {
        setTimeout(() => {
           alert("انتهت المحاولات! المعلم الصحيح هو المسجد.");
           onCorrect(false);
        }, 500);
      }
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h3>قوة الملاحظة</h3>
      <p>الرائد يطلب من الرهط تحديد المعالم الظاهرة على الخريطة.</p>
      
      <div className="hint-box">
        🔭 <strong>مهمة:</strong> حدد رمز "المسجد" لتسجيله في تقرير الرحلة.
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        {options.map(opt => (
          <div 
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            style={{ 
              cursor: 'pointer', 
              padding: '1rem', 
              border: selected === opt.id ? '3px solid var(--accent)' : '1px solid transparent',
              borderRadius: '10px',
              background: '#fff'
            }}
          >
            <div style={{ width: '80px', height: '80px' }}>
              {opt.component}
            </div>
          </div>
        ))}
      </div>
      
      {selected === target.id && <p style={{ color: 'green', fontWeight: 'bold' }}>رصد دقيق! ✅</p>}
      {selected && selected !== target.id && <p style={{ color: 'red' }}>تركيز يا شباب! باقي {2 - attempts} محاولة.</p>}
    </div>
  );
};

export default ObservationStage;
