import React from 'react';

const TutorialScreen = ({ team, onStart }) => {
  return (
    <div className="glass-card" style={{ maxWidth: '600px' }}>
      <h2>كيف تلعب؟</h2>
      <div style={{ textAlign: 'right', margin: '2rem 0', lineHeight: '1.8' }}>
        <p>👋 أهلاً بك يا {team === 'captain' ? 'كابتن' : `بطل الرهط رقم ${team}`}!</p>
        <p>أنت الآن في رحلة داخل الخلية الحية. هدفك هو:</p>
        <ul style={{ paddingRight: '1.5rem', marginTop: '1rem' }}>
          <li>🚀 <strong>التحرك:</strong> استخدم الماوس أو اللمس للتفاعل.</li>
          <li>💎 <strong>جمع المعلومات:</strong> ابحث عن بروتينات المعلومات لتتعلم أكثر.</li>
          <li>🛡️ <strong>تجاوز العقبات:</strong> تجنب الفيروسات والعوائق لتصل إلى النواة.</li>
          <li>🏆 <strong>الفوز:</strong> اجمع النقاط وعدي المستويات الأربعة!</li>
        </ul>
      </div>
      <button className="btn-primary" onClick={onStart}>
        أنا مستعد، لنبدأ!
      </button>
    </div>
  );
};

export default TutorialScreen;
