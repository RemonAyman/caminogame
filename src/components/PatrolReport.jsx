import React from 'react';

const PatrolReport = ({ patrol, score, timeTaken }) => {
  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'right' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem' }}>
        📝 تقرير الرحلة الخلوية
      </h2>
      
      <div style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p><strong>اسم الطليعة:</strong> {patrol.patrolName}</p>
        <p><strong>قائد الرحلة (الرائد):</strong> {patrol.raedName}</p>
        <hr style={{ margin: '1rem 0', borderColor: 'rgba(139, 69, 19, 0.2)' }} />
        
        <p><strong>الحالة العامة:</strong> <span style={{ color: 'green' }}>ممتازة</span> (وصل الجميع بسلام)</p>
        <p><strong>النقاط المحققة:</strong> {score}</p>
        <p><strong>المدة الزمنية:</strong> {timeTaken || "قياسي"}</p>
        
        <div className="hint-box" style={{ background: '#d4edda', borderColor: '#c3e6cb', color: '#155724' }}>
          🌟 <strong>ملاحظة القيادة:</strong> أظهرت الطليعة تعاوناً رائعاً وروحاً كشفية عالية.
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>توقيع القائد: {patrol.raedName}</p>
        <br />
        <button className="btn-primary" onClick={() => window.location.reload()}>
          بدء رحلة جديدة 🔄
        </button>
      </div>
    </div>
  );
};

export default PatrolReport;
