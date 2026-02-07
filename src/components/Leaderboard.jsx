import React, { useEffect, useState } from 'react';
import { subscribeToLeaderboard } from '../services/scoreService';

const Leaderboard = () => {
  const [patrolScores, setPatrolScores] = useState({});

  useEffect(() => {
    // Subscribe to live score updates
    const unsubscribe = subscribeToLeaderboard((data) => {
        if (data) {
            setPatrolScores(data);
        }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ marginTop: '2rem', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.9)', borderRadius: '10px', direction: 'rtl' }}>
      <h3 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', color: '#2c3e50' }}>🏆 ترتيب الرهوط (النقاط التراكمية)</h3>
      <p style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>* يتم تجميع نقاط كل رهط بناءً على مشاركات جميع الكشافة</p>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {(() => {
          // Convert to array and sort
          const sortedPatrols = Object.entries(patrolScores)
            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

          if (sortedPatrols.length === 0) return <li style={{textAlign:'center'}}>جاري تحميل النتائج...</li>;

          return sortedPatrols.map(([name, totalScore], i) => (
             <li key={name} style={{ 
               display: 'flex', justifyContent: 'space-between', 
               padding: '1rem', 
               marginBottom: '0.5rem',
               background: i === 0 ? 'linear-gradient(45deg, #f1c40f, #f39c12)' : '#fff',
               border: '1px solid #ddd',
               borderRadius: '8px',
               fontWeight: 'bold',
               color: i === 0 ? 'white' : '#2c3e50',
               boxShadow: i === 0 ? '0 4px 10px rgba(243, 156, 18, 0.4)' : 'none'
             }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ 
                   background: i === 0 ? 'white' : '#ecf0f1', 
                   color: i === 0 ? '#f39c12' : '#7f8c8d',
                   width: '25px', height: '25px', borderRadius: '50%', 
                   display: 'flex', alignItems: 'center', justifyContent: 'center',
                   fontSize: '0.9rem'
                 }}>{i+1}</span>
                 {name}
               </span>
               <span>{totalScore} نقطة</span>
             </li>
          ));
        })()}
      </ul>
    </div>
  );
};

export default Leaderboard;
