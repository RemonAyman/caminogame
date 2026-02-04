import React from 'react';

// SVGs based on the user's uploaded images for Scout Signs

export const ArrowSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M10 25 H90 M70 10 L90 25 L70 40" />
  </svg>
);

export const NotThisWaySign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M20 100 L50 60 L80 100 M20 100 L50 0 M80 100 L50 0" /> {/* Tent shape approximation or X */}
    {/* Actually "Not this way" is often crossed sticks or X */}
    <path d="M20 20 L80 80 M80 20 L20 80" />
  </svg>
);

export const WaterSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M10 10 Q25 25 40 10 T70 10 T100 10" />
    <path d="M10 25 Q25 40 40 25 T70 25 T100 25" />
    <path d="M10 40 Q25 55 40 40 T70 40 T100 40" />
  </svg>
);

export const GoneHomeSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <circle cx="50" cy="50" r="40" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const MessageNearbySign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <rect x="20" y="30" width="40" height="40" />
    <path d="M60 50 L90 50 M80 40 L90 50 L80 60" /> {/* Arrow pointing away */}
    <text x="70" y="80" fontSize="20" stroke="none" fill="currentColor">3m</text>
  </svg>
);

export const DangerSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M50 10 L90 90 H10 Z" />
    <text x="45" y="70" fontSize="40" stroke="none" fill="currentColor">!</text>
  </svg>
);
