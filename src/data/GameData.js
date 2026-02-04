export const MORSE_ARABIC = {
  'ا': '.-', 
  'ب': '-...', 
  'ت': '-', 
  'ث': '-.-.', 
  'ج': '.---', 
  'ح': '....', 
  'خ': '---', 
  'د': '-..', 
  'ذ': '--..', 
  'ر': '.-.', 
  'ز': '--.', 
  'س': '...', 
  'ش': '----', 
  'ص': '-..-', 
  'ض': '...-', 
  'ط': '..-', 
  'ظ': '-.--', 
  'ع': '.-.-', 
  'غ': '--.', 
  'ف': '..-.', 
  'ق': '--.-', 
  'ك': '-.-', 
  'ل': '.-..', 
  'م': '--', 
  'ن': '-.', 
  'ه': '..-..',
  'و': '.--',
  'ي': '..',
  'ى': '..',
  'ء': '.',
  'ئ': '.',
  'ؤ': '.',
  'ة': '..-..' 
};

export const QUESTION_BANK = [
  // --- SIGNS (Reflecting provided Images) ---
  {
    id: 's1', type: 'sign', difficulty: 'easy', points: 1,
    question: "ماذا تعني هذه العلامة؟",
    signId: 'river',
    answer: "نهر",
    hint1: "مجرى مائي.",
    hint2: "يتفرع.",
    explanation: "خط متعرج يتفرع منه خط آخر يعني: نهر.",
    key: "نهر" 
  },
  {
    id: 's2', type: 'sign', difficulty: 'easy', points: 1,
    question: "ما معنى هذا الرمز؟",
    signId: 'valley',
    answer: "وادي",
    hint1: "منخفض أرضي.",
    hint2: "خط منقط.",
    explanation: "الخطوط المنقطة المتفرعة تعني: وادي.",
    key: "وادي"
  },
  {
    id: 's3', type: 'sign', difficulty: 'easy', points: 1,
    question: "علامة طريق:",
    signId: 'stones',
    answer: "احجار",
    accepted: ["أحجار", "علامة أحجار"],
    hint1: "أشياء صلبة.",
    hint2: "مرتبة بشكل معين.",
    explanation: "ترتيب الأحجار بهذا الشكل (مجموعة صغيرة وكبيرة) هو علامة طريق.",
    key: "احجار"
  },
  {
    id: 's4', type: 'sign', difficulty: 'easy', points: 1,
    question: "ماذا أفعل هنا؟",
    signId: 'cross_road',
    answer: "اعبر الطريق",
    accepted: ["أعبر الطريق", "عبور"],
    hint1: "سهم يقطعه خط.",
    hint2: "انتقل للجهة الأخرى.",
    explanation: "سهم يقطعه خطان يعني: أعبر الطريق.",
    key: "اعبر الطريق"
  },
  {
    id: 's5', type: 'sign', difficulty: 'medium', points: 2,
    question: "علامة بداية:",
    signId: 'start',
    answer: "نقطة البداية",
    hint1: "دائرة وسهم.",
    hint2: "من هنا نبدأ.",
    explanation: "دائرة بها نقطة وسهم تعني: نقطة البداية.",
    key: "نقطة البداية"
  },
  {
    id: 's6', type: 'sign', difficulty: 'medium', points: 2,
    question: "مكان عام:",
    signId: 'airport',
    answer: "مطار مدني",
    accepted: ["مطار"],
    hint1: "طائرات.",
    hint2: "دائرة وتقاطع.",
    explanation: "الدائرة التي يخرج منها خطوط متقاطعة تعني: مطار مدني.",
    key: "مطار مدني"
  },
  {
    id: 's7', type: 'sign', difficulty: 'hard', points: 3,
    question: "تعليمات:",
    signId: 'split_groups',
    answer: "انقسموا الى مجموعتين",
    hint1: "تفرقوا.",
    hint2: "سهم يتفرع.",
    explanation: "السهم الذي ينقسم لاتجاهين يعني: انقسموا إلى مجموعتين.",
    key: "انقسموا"
  },
   {
    id: 's8', type: 'sign', difficulty: 'hard', points: 3,
    question: "تعليمات محددة:",
    signId: 'split_groups_ratio',
    answer: "انقسموا الى مجموعتين بنسبة 1:2",
    accepted: ["1:2", "بنسبة 1:2"],
    hint1: "تفرقوا بنسبة.",
    hint2: "خطوط تقطع الفرع.",
    explanation: "العلامة تعني: انقسموا إلى مجموعتين بنسبة 1 : 2.",
    key: "1:2"
  },
  {
    id: 's9', type: 'sign', difficulty: 'easy', points: 1,
    question: "تحذير:",
    signId: 'danger',
    answer: "خطر",
    hint1: "شكل هندسي ثلاثي.",
    hint2: "انتبه.",
    explanation: "المثلث يعني: خطر.",
    key: "خطر"
  },
  {
    id: 's10', type: 'sign', difficulty: 'medium', points: 2,
    question: "رسالة مخفية:",
    signId: 'message_3m',
    answer: "توجد رسالة على بعد 3 متر",
    accepted: ["رسالة بعد 3 متر", "3 متر", "ثلاثة متر"],
    hint1: "مستطيل ورقم.",
    hint2: "وحدة قياس صغيرة.",
    explanation: "مستطيل به رقم 3 وسهم يعني: توجد رسالة على بعد 3 متر.",
    key: "3 متر"
  },
  {
    id: 's11', type: 'sign', difficulty: 'medium', points: 2,
    question: "مسافة طويلة:",
    signId: 'message_3km',
    answer: "توجد رسالة على بعد 3 كيلو متر",
    accepted: ["رسالة بعد 3 كيلو", "3 كم", "3 كيلو"],
    hint1: "زاوية ورقم.",
    hint2: "مسافة بعيدة.",
    explanation: "زاوية بها رقم 3 وسهم تعني: توجد رسالة على بعد 3 كيلو متر.",
    key: "3 كم"
  },
  {
    id: 's12', type: 'sign', difficulty: 'hard', points: 3,
    question: "من سنقابل؟",
    signId: 'friends',
    answer: "الذين سوف تقابلهم اصدقاء",
    accepted: ["اصدقاء", "أصدقاء لنا"],
    hint1: "أسهم متقاربة.",
    hint2: "ناس طيبين.",
    explanation: "رؤوس الأسهم المتقابلة للداخل تعني: الذين سوف تقابلهم أصدقاء لنا.",
    key: "أصدقاء"
  },
   {
    id: 's13', type: 'sign', difficulty: 'hard', points: 3,
    question: "تحذير كهربائي:",
    signId: 'electric',
    answer: "خطر كهرباء",
    hint1: "صاعقة.",
    hint2: "طاقة.",
    explanation: "السهم المتعرج (صاعقة) يعني: خطر كهرباء.",
    key: "كهرباء"
  },
  {
    id: 's14', type: 'sign', difficulty: 'easy', points: 1,
    question: "نهاية:",
    signId: 'end',
    answer: "نقطة النهاية",
    hint1: "دائرة.",
    hint2: "نقطة في المركز.",
    explanation: "دائرة بداخلها نقطة تعني: نقطة النهاية.",
    key: "نهاية"
  },
  {
    id: 's15', type: 'sign', difficulty: 'medium', points: 2,
    question: "طبيعة السكان:",
    signId: 'uncooperative',
    answer: "الاهالي في هذه المنطقة غير متعاونين",
    accepted: ["غير متعاونين", "لا تخالط"],
    hint1: "شكل رباعي مائل.",
    hint2: "تحذير اجتماعي.",
    explanation: "الشكل يعني: الأهالي في هذه المنطقة غير متعاونين (لا تخالط أهل هذا البلد).",
    key: "غير متعاونين"
  },
  {
    id: 's16', type: 'sign', difficulty: 'medium', points: 2,
    question: "طبيعة المنطقة:",
    signId: 'cooperative',
    answer: "اهل المنطقة متعاونين",
    accepted: ["متعاونين"],
    hint1: "دوائر متداخلة.",
    hint2: "اتحاد وترابط.",
    explanation: "الثلاث دوائر المتداخلة تعني: أهل المنطقة متعاونين.",
    key: "متعاونين"
  },
  // --- CIPHER QUESTIONS (ARABIC MORSE) ---
  {
    id: 'c1', type: 'cipher', difficulty: 'easy', points: 1,
    question: "فك شفرة مورس التالية:",
    code: "-.-",
    answer: "ك",
    hint1: "حرف واحد.",
    hint2: "بسيط.",
    explanation: "الكود (-.-) يقابل حرف الكاف (ك).",
    key: "ك"
  },
  {
    id: 'c2', type: 'cipher', difficulty: 'easy', points: 1,
    question: "فك الشفرة:",
    code: "----",
    answer: "ش",
    hint1: "اربع شرطات.",
    hint2: "شين.",
    explanation: "الكود (----) يقابل حرف الشين (ش).",
    key: "ش"
  },
  {
    id: 'c3', type: 'cipher', difficulty: 'medium', points: 2,
    question: "كلمة كشفية:",
    code: "-.- ... .... .----.", // "كشفية"
    answer: "كشفية",
    hint1: "صفة لنا.",
    hint2: "تبدأ بكاف.",
    explanation: "الرموز تترجم إلى: ك - ش - ف - ي - ة.",
    key: "كشفية"
  },
  {
    id: 'c4', type: 'cipher', difficulty: 'hard', points: 3,
    question: "نداء:",
    code: ".- ... - .-.- -..", // "استعد"
    answer: "استعد",
    accepted: ["أستعد", "استعداد"],
    hint1: "فعل أمر.",
    hint2: "تجهيز.",
    explanation: "الرموز تعني: ا - س - ت - ع - د.",
    key: "استعد"
  }
];

export const generateGameLevels = () => {
  // Shuffle questions
  const shuffled = QUESTION_BANK.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).map((q, i) => ({ ...q, index: i + 1 }));
};
