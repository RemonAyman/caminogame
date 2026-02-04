export const QUESTION_BANK = [
  // --- EASY (Sign Recognition) ---
  {
    id: 's1', type: 'sign', difficulty: 'easy', points: 1,
    question: "ماذا تعني هذه العلامة؟",
    signId: 'mosque',
    answer: "مسجد",
    hint1: "مكان للعبادة.",
    hint2: "يتميز بقبة وهلال.",
    explanation: "هذه العلامة تدل على وجود مسجد."
  },
  {
    id: 's2', type: 'sign', difficulty: 'easy', points: 1,
    question: "علامة طريق:",
    signId: 'arrow',
    answer: "هذا الطريق",
    accepted: ["الطريق الذي يجب ان نسلكه", "اتبع هذا الطريق", "طريق صحيح", "يمين"],
    hint1: "اتبع اتجاه السهم.",
    hint2: "الطريق الصحيح.",
    explanation: "سهم برأس عادي وجذع مخطط يعني: الطريق الذي يجب أن نسلكه."
  },
  {
    id: 's3', type: 'sign', difficulty: 'easy', points: 1,
    question: "تحذير!",
    signId: 'danger',
    answer: "خطر",
    accepted: ["تحذير", "احذر"],
    hint1: "شكل مثلث.",
    hint2: "انتبه!",
    explanation: "المثلت يعني وجود خطر."
  },
  {
    id: 's4', type: 'sign', difficulty: 'easy', points: 1,
    question: "علامة نهاية:",
    signId: 'gone_home',
    answer: "خرجنا",
    accepted: ["خرجنا من المعسكر بسلام", "ذهاب", "نهاية", "خرجت"],
    hint1: "دائرة ونقطة.",
    hint2: "تعني المغادرة بسلام.",
    explanation: "دائرة وبداخلها نقطة تعني: خرجنا من المعسكر بسلام."
  },
  
  // --- MEDIUM (Interpretation) ---
  {
    id: 's5', type: 'sign', difficulty: 'medium', points: 2,
    question: "ما معنى هذه العلامة؟",
    signId: 'message_3',
    answer: "رسالة",
    accepted: ["توجد رسالة", "رسالة بعد 3 خطوات", "ابحث عن رسالة"],
    hint1: "مستطيل وسهم.",
    hint2: "الرقم 3 يدل على المسافة.",
    explanation: "تعني: توجد رسالة مخبأة بعد 3 خطوات (أو أمتار) في اتجاه السهم."
  },
  {
    id: 's6', type: 'sign', difficulty: 'medium', points: 2,
    question: "مكان هام:",
    signId: 'church',
    answer: "كنيسة",
    hint1: "مكان عبادة.",
    hint2: "يتميز بصليب.",
    explanation: "هذه العلامة تدل على وجود كنيسة."
  },
  {
    id: 's7', type: 'sign', difficulty: 'medium', points: 2,
    question: "علامة جغرافية:",
    signId: 'river',
    answer: "نهر",
    accepted: ["مجرى مائي", "مياه"],
    hint1: "ماء جاري.",
    hint2: "يتفرع.",
    explanation: "خطوط متعرجة تتفرع تعني وجود نهر."
  },
  {
    id: 's8', type: 'sign', difficulty: 'medium', points: 2,
    question: "احذر من:",
    signId: 'electric',
    answer: "كهرباء",
    accepted: ["خطر كهرباء", "ضغط عالي"],
    hint1: "شكل صاعقة.",
    hint2: "طاقة خطرة.",
    explanation: "السهم المتعرج يعني خطر الكهرباء."
  },

  // --- HARD (Complex Signs) ---
  {
    id: 's9', type: 'sign', difficulty: 'hard', points: 3,
    question: "ماذا تعني هذه العلامة؟",
    signId: 'not_this_way',
    answer: "خطأ",
    accepted: ["لا تسلك هذا الطريق", "طريق خطأ", "ممنوع المرور", "غلط"],
    hint1: "علامة المنع.",
    hint2: "عكس السهم.",
    explanation: "تعني: لا تسلك هذا الطريق (أو الطريق مغلق/خطأ)."
  },
  {
    id: 's10', type: 'sign', difficulty: 'hard', points: 3,
    question: "معلم في الطريق:",
    signId: 'windmill',
    answer: "طاحونة",
    accepted: ["طاحونة هواء"],
    hint1: "تستخدم الهواء.",
    hint2: "لطحن الحبوب.",
    explanation: "الشكل يرمز لطاحونة هواء."
  },
  {
    id: 's11', type: 'sign', difficulty: 'hard', points: 3,
    question: "هيكل:",
    signId: 'bridge',
    answer: "كوبري",
    accepted: ["جسر"],
    hint1: "نعبر عليه.",
    hint2: "فوق الماء أو الطريق.",
    explanation: "الخطان المتوازيان مع منحنى يعني كوبري (جسر)."
  },
  {
    id: 's12', type: 'sign', difficulty: 'hard', points: 3,
    question: "علامة التجمع:",
    signId: 'stones',
    answer: "احجار",
    accepted: ["رجم", "أحجار", "علامة احجار", "كومة احجار"],
    hint1: "أشياء صلبة مكدسة.",
    hint2: "علامة طبيعية.",
    explanation: "ترتيب الأحجار بهذا الشكل يستخدم كعلامة طريق."
  }
];

// Re-export as functions expected by Engine
// We only need one main export now since all are uniform
export const generateGameLevels = () => {
  // Shuffle all and pick 10
  const shuffled = QUESTION_BANK.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).map((q, i) => ({ ...q, index: i + 1 }));
};
