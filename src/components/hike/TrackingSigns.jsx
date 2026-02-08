import React from 'react';

// SVGs based on "The Scout Hike" (الرحلة الخلوية) PDF images

// 1. River (نهر) - Solid wavy lines
export const RiverSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    {/* Solid uneven lines */}
    <path d="M10 25 C30 15, 50 35, 90 25" />
    <path d="M50 28 C70 18, 80 15, 90 5" />
  </svg>
);

// 2. Valley (وادي) - Distinct Dotted lines
export const ValleySign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    {/* Dotted paths */}
    <path d="M10 25 Q30 25 50 25" strokeDasharray="1,5" strokeLinecap="round" />
    <path d="M50 25 L90 10" strokeDasharray="1,5" strokeLinecap="round" />
    <path d="M50 25 L90 40" strokeDasharray="1,5" strokeLinecap="round" />
  </svg>
);

// 3. Stones (أحجار) - Stack of 4 ovals/rectangles
export const StonesSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    {/* PDF Page 71: 4 ovals in a slanted arrangement */}
    <ellipse cx="30" cy="30" rx="8" ry="12" transform="rotate(-15 30 30)" />
    <ellipse cx="45" cy="45" rx="8" ry="12" transform="rotate(-15 45 45)" />
    <ellipse cx="60" cy="60" rx="8" ry="12" transform="rotate(-15 60 60)" />
    <ellipse cx="75" cy="75" rx="8" ry="12" transform="rotate(-15 75 75)" />
  </svg>
);

// 4. Cross Road (أعبر الطريق) - Arrow with two cross bars
export const CrossRoadSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="25" x2="90" y2="25" markerEnd="url(#arrow)" />
    <line x1="30" y1="15" x2="40" y2="35" />
    <line x1="45" y1="15" x2="55" y2="35" />
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

// 5. Start Point (نقطة البداية) - Dot in circle with arrow
export const StartPointSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="20" cy="50" r="15" />
    <circle cx="20" cy="50" r="3" fill="currentColor" />
    <line x1="35" y1="50" x2="90" y2="50" markerEnd="url(#arrow)" />
  </svg>
);

// 6. Civil Airport (مطار مدني) - Circle with cross extending
export const AirportSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="50" cy="50" r="20" />
    <line x1="10" y1="50" x2="90" y2="50" />
    <line x1="50" y1="10" x2="50" y2="90" />
  </svg>
);

// 7. Camp Direction (المخيم في هذا الاتجاه) - Arrow with triangle
export const CampDirectionSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="40" x2="90" y2="40" markerEnd="url(#arrow)" />
    <path d="M60 40 L70 20 L80 40" />
  </svg>
);

// 8. Split Groups 1:2 (انقسموا الى مجموعتين بنسبة 1:2)
// 8. Split Groups 1:2 (انقسموا الى مجموعتين بنسبة 1:2)
export const SplitGroupsRatioSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    {/* Fork shape: Line splits into two */}
    <path d="M10 30 L50 30" />
    <path d="M50 30 L90 10" markerEnd="url(#arrow)" />
    <path d="M50 30 L90 50" markerEnd="url(#arrow)" />
    
    {/* Ratio marks on lower branch */}
    <line x1="65" y1="35" x2="75" y2="45" strokeWidth="2" />
    <line x1="75" y1="40" x2="85" y2="50" strokeWidth="2" />
  </svg>
);

// 9. Split Groups (انقسموا الى مجموعتين) - Fork with arrows
export const SplitGroupsSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="4">
     {/* Distinct Fork with Arrowheads */}
     <path d="M10 30 L50 30" /> {/* Stem */}
     <path d="M50 30 L85 10" markerEnd="url(#arrow)" /> {/* Top Branch */}
     <path d="M50 30 L85 50" markerEnd="url(#arrow)" /> {/* Bottom Branch */}
  </svg>
);

// 10. Danger (خطر) - Triangle
export const DangerSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M50 15 L90 85 H10 Z" />
  </svg>
);

// 11. Message 3m (رسالة على بعد 3 متر) - Rectangle with flag 3
export const Message3mSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="50" x2="90" y2="50" markerEnd="url(#arrow)" />
    <rect x="50" y="20" width="20" height="30" />
    <text x="60" y="40" fontSize="15" textAnchor="middle" stroke="none" fill="currentColor">3</text>
  </svg>
);

// 12. Message 3km (رسالة على بعد 3 كم) - Angle with 3 inside
export const Message3kmSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="50" x2="90" y2="50" markerEnd="url(#arrow)" />
    <path d="M70 50 L80 30 L90 50" /> {/* Triangle on line */}
    <text x="80" y="45" fontSize="12" textAnchor="middle" stroke="none" fill="currentColor">3</text>
  </svg>
);

// 13. Friends meet (الذين سوف تقابلهم اصدقاء) - Chevron arrows facing in
export const FriendsMeetSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M20 10 L40 25 L20 40" />
    <path d="M80 10 L60 25 L80 40" />
  </svg>
);

// 14. Enemies meet (الذين سوف تقابلهم اعداء) - Chevon arrows facing out? (Image check: arrows facing out < >)
export const EnemiesMeetSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M40 10 L20 25 L40 40" />
    <path d="M60 10 L80 25 L60 40" />
  </svg>
);

// 15. Electric Danger (خطر كهرباء) - Zigzag arrow
// 15. Electric Danger (خطر كهرباء) - Zigzag arrow in Triangle
export const ElectricDangerSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <path d="M50 10 L90 90 H10 Z" /> {/* Triangle container */}
    <path d="M55 25 L65 25 L45 55 L70 55 L50 85" strokeWidth="3" /> {/* Lightning inside */}
  </svg>
);

// 16. End Point (نقطة النهاية) - Circle with dot inside AND dot outside
export const EndPointSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <circle cx="40" cy="50" r="25" />
    <circle cx="40" cy="50" r="4" fill="currentColor" /> {/* Inside */}
    <circle cx="80" cy="30" r="5" fill="currentColor" /> {/* Outside (Top Right) */}
  </svg>
);

// New: Arrived Camp (وصلنا المعسكر) - Circle with dot inside only
export const ArrivedCampSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

// New: Left Camp (خرجنا من المعسكر) - Empty circle with dot outside
export const LeftCampSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
     <circle cx="40" cy="50" r="25" />
     <circle cx="80" cy="30" r="5" fill="currentColor" /> {/* Outside (Top Right) */}
  </svg>
);

// 17. Uncooperative People (الاهالي غير متعاونين) - Rectangle with diagonal
export const UncooperativeSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
     <rect x="20" y="20" width="60" height="30" transform="skewX(-20)" />
     <path d="M20 50 L40 20 H80 L60 50 Z" />
  </svg>
);

// 18. Cooperative People (اهل المنطقة متعاونين) - 3 Intersecting Circles
export const CooperativeSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="35" cy="40" r="20" />
    <circle cx="65" cy="40" r="20" />
    <circle cx="50" cy="65" r="20" />
  </svg>
);

// --- Page 2 / Others from prompt ---

// 19. Safe Way (الطريق أمان) - Arrow with > >
export const SafeWaySign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="25" x2="90" y2="25" markerEnd="url(#arrow)" />
    <path d="M30 15 L40 25 L30 35" />
    <path d="M50 15 L60 25 L50 35" />
  </svg>
);

// 20. Sand Dunes (كثبان رملية) - Cloud shape? (Image: "كثبان رملية" Text with shape)
export const SandDunesSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M20 40 Q30 20 50 30 T80 40" fill="currentColor" opacity="0.5" />
    <path d="M20 40 Q30 20 50 30 T80 40" fill="none" />
  </svg>
);

// 21. Windmill (طاحونة هواء)
export const WindmillSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="4">
     {/* PDF Page 70: Vertical pole with X on top */}
     <line x1="50" y1="90" x2="50" y2="40" />
     <line x1="30" y1="20" x2="70" y2="60" />
     <line x1="70" y1="20" x2="30" y2="60" />
  </svg>
);

// 22. Gone Home (خرجنا من المعسكر بسلام / وصلنا الى المعسكر بسلام) - Circle with dot
// (Reusing ArrivedCampSign logic logic)
export const GoneHomeSign = ArrivedCampSign;

// 23. Church (كنيسة)
export const ChurchSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <rect x="30" y="50" width="40" height="40" />
    <line x1="50" y1="50" x2="50" y2="20" />
    <line x1="40" y1="30" x2="60" y2="30" />
  </svg>
);

// 24. Mosque (مسجد)
export const MosqueSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <rect x="30" y="50" width="40" height="40" />
    <path d="M30 50 Q50 20 70 50" />
    <line x1="80" y1="80" x2="80" y2="30" />
    <path d="M75 30 Q80 20 85 30" />
    <text x="80" y="25" fontSize="10" textAnchor="middle" stroke="none" fill="currentColor">☾</text>
  </svg>
);

// 25. Palm (نخيل)
export const PalmTreeSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
     <line x1="50" y1="90" x2="50" y2="50" strokeWidth="5" />
     <path d="M50 50 Q20 20 10 40" />
     <path d="M50 50 Q80 20 90 40" />
     <path d="M50 50 Q35 15 50 10" />
     <path d="M50 50 Q65 15 50 10" />
  </svg>
);

// 26. Christian Graves (مقابر مسيحيين) - Crosses
export const ChristianGravesSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="2">
     {/* PDF Page 70: Box with grid of pluses */}
     <rect x="10" y="10" width="80" height="40" strokeWidth="3" />
     <path d="M25 20 V30 M20 25 H30" />
     <path d="M40 20 V30 M35 25 H45" />
     <path d="M55 20 V30 M50 25 H60" />
     <path d="M70 20 V30 M65 25 H75" />
     <path d="M25 35 V45 M20 40 H30" />
     <path d="M40 35 V45 M35 40 H45" />
     <path d="M55 35 V45 M50 40 H60" />
     <path d="M70 35 V45 M65 40 H75" />
  </svg>
);

// 27. Stagnant Water (ماء راكد) - Oval with dashes?
export const StagnantWaterSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <ellipse cx="50" cy="30" rx="40" ry="15" />
    <line x1="30" y1="30" x2="70" y2="30" strokeDasharray="5,5" />
  </svg>
);

// 28. Stop and Wait (قف وانتظر) - Rectangle inside rectangle
export const StopWaitSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <rect x="10" y="10" width="80" height="40" />
    <rect x="30" y="20" width="40" height="20" />
  </svg>
);

// 29. Thieves and Road Block (لصوص وقطاع طريق) - Spinning circle?
export const ThievesSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="50" cy="50" r="30" strokeDasharray="10,5" />
    <circle cx="50" cy="50" r="10" />
    {/* Arrows rotating? */}
    <path d="M80 50 Q85 30 70 20" markerEnd="url(#arrow)" /> 
  </svg>
);

// 30. Trees (أشجار) - Multiple ovals
export const TreesSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
     <ellipse cx="30" cy="30" rx="15" ry="25" />
     <ellipse cx="70" cy="30" rx="15" ry="25" />
     <ellipse cx="50" cy="30" rx="15" ry="25" />
  </svg>
);

// 31. Muslim Graves (مقابر مسلمين) - Crescents or Dashes? Image: Dashes in rect?
// Image shows: "مقابر مسلمين" -> Dashed lines in a box? Or just dashes?
// Looking at image: It looks like a rectangle with dashes inside.
export const MuslimGravesSign = ({ className }) => (
   <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="2">
     {/* PDF Page 70: Box with dashed lines grid */}
     <rect x="10" y="10" width="80" height="40" strokeWidth="3" />
     <line x1="15" y1="25" x2="30" y2="25" strokeDasharray="3,3" />
     <line x1="35" y1="25" x2="50" y2="25" strokeDasharray="3,3" />
     <line x1="55" y1="25" x2="70" y2="25" strokeDasharray="3,3" />
     <line x1="15" y1="40" x2="30" y2="40" strokeDasharray="3,3" />
     <line x1="35" y1="40" x2="50" y2="40" strokeDasharray="3,3" />
     <line x1="55" y1="40" x2="70" y2="40" strokeDasharray="3,3" />
   </svg>
);

// 32. Ambulance Point (نقطة إسعاف) - Crescent in rectangle?
export const AmbulanceSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <rect x="20" y="10" width="60" height="40" />
    <path d="M50 20 A 10 10 0 0 0 50 40" /> 
    <path d="M45 20 A 12 12 0 0 0 45 40" /> {/* Crescent moon shape roughly */}
  </svg>
);

// 33. Tunnel (نفق) - Bridge with curve over?
export const TunnelSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M10 40 Q50 0 90 40" />
    <line x1="10" y1="45" x2="90" y2="45" />
    <line x1="10" y1="35" x2="90" y2="35" opacity="0.5" />
  </svg>
);

// 34. Not This Way (لا تسلك هذا الطريق) - Cross on Arrow
export const NotThisWaySign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="30" x2="90" y2="30" markerEnd="url(#arrow)" />
    <line x1="20" y1="10" x2="40" y2="50" strokeWidth="5" />
    <line x1="40" y1="10" x2="20" y2="50" strokeWidth="5" />
  </svg>
);

// 35. Danger All Directions (خطر من كل ناحية) - Circle? or arrows?
// Image trace: "خطر من كل ناحية" -> Circle?
export const DangerAllDirectionsSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="50" cy="50" r="40" />
  </svg>
);

// 36. Bridge (كوبري)
export const BridgeSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    {/* PDF Page 70: )---( style */}
    <line x1="20" y1="20" x2="80" y2="20" />
    <line x1="20" y1="35" x2="80" y2="35" />
    <path d="M20 15 Q10 27.5 20 40" />
    <path d="M80 15 Q90 27.5 80 40" />
  </svg>
);

// 37. Train Line (خط سكة حديد)
export const TrainLineSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="10" y1="25" x2="90" y2="25" />
    <line x1="20" y1="15" x2="30" y2="35" />
    <line x1="40" y1="15" x2="50" y2="35" />
    <line x1="60" y1="15" x2="70" y2="35" />
    <line x1="80" y1="15" x2="90" y2="35" />
  </svg>
);

// 38. Drinking Water (مياه صالحة للشرب) - Wavy lines with arrow?
export const DrinkableWaterSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M10 20 Q30 30 50 20 T90 20" />
    <path d="M10 30 Q30 40 50 30 T90 30" />
    <path d="M80 25 L60 25" markerEnd="url(#arrow)" /> {/* Arrow pointing to it? */}
  </svg>
);

// 39. Not Drinkable Water (مياه غير صالحة للشرب)
export const NotDrinkableWaterSign = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M10 20 Q30 30 50 20 T90 20" />
    <path d="M10 30 Q30 40 50 30 T90 30" />
    <path d="M40 10 L60 40" stroke="red" strokeWidth="4" />
    <path d="M60 10 L40 40" stroke="red" strokeWidth="4" />
  </svg>
);

// 40. Telephone (تليفون)
export const TelephoneSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <line x1="50" y1="90" x2="50" y2="20" />
    <line x1="30" y1="20" x2="70" y2="20" />
  </svg>
);

// 41. Go To Water (الطريق إلى المياه) - Arrow to waves
export const GoToWaterSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <path d="M70 20 Q80 10 90 20 T110 20" transform="translate(-20, 0)" /> 
    <path d="M70 30 Q80 20 90 30 T110 30" transform="translate(-20, 0)" />
    <line x1="10" y1="25" x2="60" y2="25" markerEnd="url(#arrow)" />
  </svg>
);

// 42. Split due to Thieves (تفرقنا بسبب اللصوص) - Circle with outward arrows
export const SplitThievesSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <circle cx="50" cy="50" r="15" />
    <line x1="50" y1="35" x2="50" y2="10" markerEnd="url(#arrow)" />
    <line x1="50" y1="65" x2="50" y2="90" markerEnd="url(#arrow)" />
    <line x1="65" y1="50" x2="90" y2="50" markerEnd="url(#arrow)" />
    <line x1="35" y1="50" x2="10" y2="50" markerEnd="url(#arrow)" />
  </svg>
);

// 43. Message 3 Steps (رسالة بعد 3 خطوات) - Rectangle with number 3 and arrow
export const Message3StepsSign = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} stroke="currentColor" fill="none" strokeWidth="3">
    <rect x="10" y="15" width="30" height="30" />
    <text x="25" y="35" fontSize="15" textAnchor="middle" stroke="none" fill="currentColor">3</text>
    <line x1="45" y1="30" x2="90" y2="30" markerEnd="url(#arrow)" />
  </svg>
);

// 44. War (حرب) - Big X
export const WarSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <line x1="20" y1="20" x2="80" y2="80" />
    <line x1="80" y1="20" x2="20" y2="80" />
  </svg>
);

// 45. Peace (سلم) - V shape
export const PeaceSign = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" fill="none" strokeWidth="5">
    <polyline points="20,20 50,80 80,20" />
  </svg>
);


export const SignsMap = {
  river: RiverSign,
  valley: ValleySign,
  stones: StonesSign,
  cross_road: CrossRoadSign,
  start: StartPointSign,
  airport: AirportSign,
  camp_direction: CampDirectionSign,
  split_groups_ratio: SplitGroupsRatioSign,
  split_groups: SplitGroupsSign,
  danger: DangerSign,
  message_3m: Message3mSign,
  message_3km: Message3kmSign,
  friends: FriendsMeetSign,
  enemies: EnemiesMeetSign,
  electric: ElectricDangerSign,
  end: EndPointSign,
  arrived_camp: ArrivedCampSign,
  left_camp: LeftCampSign,
  uncooperative: UncooperativeSign,
  cooperative: CooperativeSign,
  safe_way: SafeWaySign,
  sand_dunes: SandDunesSign,
  windmill: WindmillSign,
  gone_home: GoneHomeSign,
  church: ChurchSign,
  mosque: MosqueSign,
  palm: PalmTreeSign,
  christian_graves: ChristianGravesSign,
  muslim_graves: MuslimGravesSign,
  stagnant_water: StagnantWaterSign,
  stop_wait: StopWaitSign,
  thieves: ThievesSign,
  trees: TreesSign,
  ambulance: AmbulanceSign,
  tunnel: TunnelSign,
  not_this_way: NotThisWaySign,
  danger_all: DangerAllDirectionsSign,
  bridge: BridgeSign,
  
  // Mapped to match GameData.js IDs
  railway: TrainLineSign,        // GameData: railway
  train: TrainLineSign,          // Keep fallback
  
  good_water: DrinkableWaterSign, // GameData: good_water
  drinkable: DrinkableWaterSign,  // Keep fallback
  
  bad_water: NotDrinkableWaterSign, // GameData: bad_water
  not_drinkable: NotDrinkableWaterSign, // Keep fallback
  
  telephone: TelephoneSign,
  
  // New added signs
  go_to_water: GoToWaterSign,
  split_thieves: SplitThievesSign,
  message_3_steps: Message3StepsSign,
  war: WarSign,
  peace: PeaceSign,
  
  // Alias for similar meaning/structure if needed
  message_3_steps_hidden: Message3StepsSign 
};
