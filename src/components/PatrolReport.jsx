import React from 'react';

const PatrolReport = ({ patrol, score, timeTaken }) => {
  const getStatus = (s) => {
    if (s > 15) return { text: "ممتازة", color: "#2d7a10", note: "أظهرت الرهط تعاوناً رائعاً وروحاً كشفية عالية." };
    if (s >= 10) return { text: "جيدة جداً", color: "#27ae60", note: "أداء جيد جداً، مع بعض الملاحظات البسيطة في الدقة." };
    if (s >= 5) return { text: "مقبولة", color: "#e67e22", note: "تحتاج الرهط لمزيد من التركيز والتدريب على المهارات الكشفية." };
    return { text: "ضعيفة (تحتاج تدريب)", color: "#c0392b", note: "يجب مراجعة المنهج الكشفي والتدريب جيداً قبل الرحلة القادمة." };
  };

  const status = getStatus(score);

  return (
    <div className="glass-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'right' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem' }}>
        📝 تقرير Camino Journey
      </h2>
      
      <div style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p><strong>اسم الرهط:</strong> {patrol.patrolName}</p>
        <hr style={{ margin: '1rem 0', borderColor: 'rgba(139, 69, 19, 0.2)' }} />
        
        <p><strong>الحالة العامة:</strong> <span style={{ color: status.color, fontWeight: 'bold' }}>{status.text}</span></p>
        <p><strong>النقاط المحققة:</strong> {score}</p>
        <p><strong>المدة الزمنية:</strong> {timeTaken || "قياسي"}</p>
        
        <div className="hint-box" style={{ 
          background: status.text === 'ممتازة' ? '#d4edda' : status.text === 'جيدة جداً' ? '#e8f5e9' : status.text === 'مقبولة' ? '#fff3e0' : '#ffebee',
          borderColor: status.color, 
          color: '#333' 
        }}>
          🌟 <strong>ملاحظة القيادة:</strong> {status.note}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          بدء رحلة جديدة 🔄
        </button>
      </div>
    </div>
  );
};

export default PatrolReport;
