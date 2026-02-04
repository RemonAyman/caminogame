import React, { useEffect, useState } from 'react';

const Leaderboard = ({ currentEntry }) => {
  useEffect(() => {
    // Load existing scores
    const savedScores = JSON.parse(localStorage.getItem('scout_scores')) || [];
    
    // Check if we already saved this specific timestamp to avoid duplicates on re-render
    const exists = savedScores.some(s => s.timestamp === currentEntry.timestamp);
    
    if (!exists && currentEntry) {
      const newScores = [...savedScores, currentEntry];
      localStorage.setItem('scout_scores', JSON.stringify(newScores));
    }
  }, [currentEntry]);

  return (
    <div style={{ marginTop: '2rem', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '10px' }}>
      <h3 style={{ borderBottom: '2px solid var(--primary)' }}>🏆 لوحة الشرف (المتصدرون)</h3>
      <p style={{ fontSize: '0.8rem' }}>* محفوظة على هذا الجهاز</p>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {JSON.parse(localStorage.getItem('scout_scores') || '[]')
          .sort((a, b) => b.score - a.score) // Sort desc
          .slice(0, 5) // Top 5
          .map((s, i) => (
            <li key={i} style={{ 
              display: 'flex', justifyContent: 'space-between', 
              padding: '0.5rem', borderBottom: '1px dashed #ccc',
              fontWeight: s.timestamp === currentEntry?.timestamp ? 'bold' : 'normal',
              color: s.timestamp === currentEntry?.timestamp ? 'var(--secondary)' : 'inherit'
            }}>
              <span>{i+1}. {s.patrolName} ({s.raedName})</span>
              <span>{s.score} نقطة</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Leaderboard;
