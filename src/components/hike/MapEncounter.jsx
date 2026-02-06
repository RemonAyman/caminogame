import React, { useState } from 'react';
import { NotThisWaySign, DangerSign } from './TrackingSigns';

const MapEncounter = ({ onComplete }) => {
  const [path, setPath] = useState(null);

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h3>مفترق طرق</h3>
      <p>وصلت الرهط إلى منطقة غابات كثيفة. النظير الأيمن يخبرك أنه رأى علامات غريبة.</p>
      
      <div className="hint-box">
        🗣️ <strong>النظير الأيمن:</strong> "يا رائد! في علامة (X) كبيرة على الطريق اليمين، وعلامة مثلث شكلها خطر على الطريق الشمال!"
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', margin: 'auto', color: '#c0392b' }}>
            <DangerSign />
          </div>
          <button className="btn-primary" style={{ marginTop: '1rem', background: '#7f8c8d' }} onClick={() => alert("فخ! هذا الطريق يؤدي لمنطقة لصوص!")}>
            الطريق الأيسر
          </button>
        </div>

        <div style={{ textAlign: 'center' }}>
           {/* Center path - safe but hidden? Let's say user must choose logic. Actually simple logic: X means closed. Triangle means danger. */}
           {/* Let's adjust options. The prompt says "scout signs logic". */}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', margin: 'auto', color: '#e67e22' }}>
            <NotThisWaySign />
          </div>
          <button className="btn-primary" style={{ marginTop: '1rem', background: '#7f8c8d' }} onClick={() => alert("الطريق مسدود! العلامة تقول (ليس من هذا الطريق)")}>
            الطريق الأيمن
          </button>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem', borderTop: '2px dashed #8B4513', paddingTop: '1rem' }}>
        <p>ماذا تفعل؟</p>
        <button className="btn-primary" onClick={onComplete}>
          ابحث عن مسار ثالث (الوسط)
        </button>
      </div>
    </div>
  );
};

export default MapEncounter;
