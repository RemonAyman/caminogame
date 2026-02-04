import React from 'react';

// SVGs based on "The Scout Hike" (الرحلة الخلوية) PDF images

export const ArrowSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M10 25 H90 M70 10 L90 25 L70 40" />
  </svg>
);

export const NotThisWaySign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M20 20 L80 80 M80 20 L20 80" />
    <path d="M10 50 H30 M70 50 H90" /> {/* Arrow parts if cross arrow */}
    {/* Simple Cross */}
  </svg>
);

export const WaterSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M10 10 Q25 25 40 10 T70 10 T100 10" />
    <path d="M10 25 Q25 40 40 25 T70 25 T100 25" />
    <path d="M10 40 Q25 55 40 40 T70 40 T100 40" />
    <text x="50" y="-5" fontSize="10" textAnchor="middle" fill="currentColor">ماء</text>
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
    <rect x="20" y="30" width="60" height="40" />
    <path d="M80 50 L95 50 M90 45 L95 50 L90 55" /> 
    <text x="50" y="55" fontSize="20" textAnchor="middle" stroke="none" fill="currentColor">3</text>
  </svg>
);

export const DangerSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <path d="M50 10 L90 90 H10 Z" />
    <text x="50" y="70" fontSize="40" textAnchor="middle" stroke="none" fill="currentColor">!</text>
  </svg>
);

export const RiverSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M10 50 C 40 40, 60 60, 90 50" />
    <path d="M10 60 C 40 50, 60 70, 90 60" /> {/* Forking */}
    <path d="M10 55 H 30" />
  </svg>
);

export const MosqueSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <rect x="25" y="40" width="50" height="40" />
    <path d="M25 40 Q50 10 75 40" /> {/* Dome */}
    <line x1="85" y1="80" x2="85" y2="20" /> {/* Minaret */}
    <path d="M80 20 Q85 10 90 20" />
    <text x="85" y="15" fontSize="10" textAnchor="middle" stroke="none" fill="currentColor">☾</text>
  </svg>
);

export const ChurchSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <rect x="20" y="40" width="60" height="40" />
    <path d="M20 40 L50 10 L80 40" />
    <line x1="50" y1="10" x2="50" y2="0" />
    <line x1="45" y1="5" x2="55" y2="5" />
  </svg>
);

export const PalmTreeSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <line x1="50" y1="90" x2="50" y2="50" strokeWidth="6" />
    <path d="M50 50 Q20 20 10 40" />
    <path d="M50 50 Q80 20 90 40" />
    <path d="M50 50 Q30 10 50 5" />
    <path d="M50 50 Q70 10 50 5" />
  </svg>
);

export const WindmillSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <line x1="50" y1="90" x2="50" y2="50" />
    <line x1="20" y1="20" x2="80" y2="80" />
    <line x1="80" y1="20" x2="20" y2="80" />
  </svg>
);

export const ElectricDangerSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M40 10 L60 10 L30 50 L70 50 L40 90" /> {/* Lightning bolt */}
  </svg>
);

export const BridgeSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <line x1="10" y1="40" x2="90" y2="40" />
    <path d="M20 40 Q50 10 80 40" />
  </svg>
);

export const TunnelSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M10 40 Q50 0 90 40" />
    <line x1="10" y1="40" x2="90" y2="40" strokeDasharray="5,5" />
  </svg>
);

export const SandDunesSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M10 50 Q30 30 50 50 T90 50" />
    <path d="M20 40 Q40 20 60 40" />
  </svg>
);

export const StonesSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <circle cx="50" cy="80" r="15" />
    <circle cx="50" cy="55" r="12" />
    <circle cx="50" cy="35" r="10" />
  </svg>
);

export const StartPointSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <circle cx="30" cy="50" r="20" />
    <circle cx="30" cy="50" r="3" fill="currentColor" />
    <line x1="50" y1="50" x2="90" y2="50" strokeWidth="4" markerEnd="url(#arrow)" />
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

export const EndPointSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

// Map of components for dynamic rendering
export const SignsMap = {
  arrow: ArrowSign,
  not_this_way: NotThisWaySign,
  water: WaterSign,
  gone_home: GoneHomeSign,
  message_3: MessageNearbySign,
  danger: DangerSign,
  river: RiverSign,
  mosque: MosqueSign,
  church: ChurchSign,
  palm: PalmTreeSign,
  windmill: WindmillSign,
  electric: ElectricDangerSign,
  bridge: BridgeSign,
  tunnel: TunnelSign,
  sand: SandDunesSign,
  stones: StonesSign,
  start: StartPointSign,
  end: EndPointSign
};
