import React, { useState } from 'react';

const PatrolPrep = ({ onReady }) => {
  const [patrolName, setPatrolName] = useState('');
  const [scoutCount, setScoutCount] = useState(5);
  const [raedName, setRaedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patrolName && raedName) {
      onReady({ patrolName, scoutCount, raedName });
    } else {
      alert("الرجال تأكد من تعبئة اسم الطليعة واسم الرائد!");
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '500px', width: '100%' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>تجهيز الطليعة</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'right' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>اسم الطليعة:</label>
          <input 
            type="text" 
            value={patrolName}
            onChange={(e) => setPatrolName(e.target.value)}
            placeholder="مثال: طليعة النسور"
            style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>اسم الرائد (أنت):</label>
          <input 
            type="text" 
            value={raedName}
            onChange={(e) => setRaedName(e.target.value)}
            placeholder="اكتب اسمك يا بطل"
            style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>عدد أفراد الطليعة بالرحلة:</label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input 
              type="range" 
              min="3" 
              max="8" 
              value={scoutCount}
              onChange={(e) => setScoutCount(e.target.value)}
              style={{ flex: 1 }}
            />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--secondary)' }}>{scoutCount}</span>
          </div>
        </div>

        <div className="hint-box">
          💡 <strong>نصيحة:</strong> تأكد من توزيع الأدوار (نظير أيمن، نظير أيسر، مسعف) ذهنياً قبل الانطلاق!
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
          انطلاق نحو المجهول! 🏕️
        </button>
      </form>
    </div>
  );
};

export default PatrolPrep;
