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
    accepted: ["نهر", "فرع مائي", "مجرى مائي", "ماء"],
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
    accepted: ["وادي", "منخفض", "منخفض ارضي"],
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
    accepted: ["أحجار", "علامة أحجار", "حجارة", "حجر", "طوب"],
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
    accepted: ["أعبر الطريق", "عبور", "عدي", "معدي", "انتقل", "اعبر"],
    hint1: "سهم يقطعه خط.",
    hint2: "انتقال للجهة الأخرى.",
    explanation: "سهم يقطعه خطان يعني: أعبر الطريق.",
    key: "اعبر"
  },
  {
    id: 's5', type: 'sign', difficulty: 'medium', points: 2,
    question: "علامة بداية:",
    signId: 'start',
    answer: "نقطة البداية",
    accepted: ["نقطة البداية", "بداية", "انطلاق", "نقطة الانطلاق", "بدايه", "ابدا"],
    hint1: "دائرة وسهم.",
    hint2: "من هنا نبدأ.",
    explanation: "دائرة بها نقطة وسهم تعني: نقطة البداية.",
    key: "بداية"
  },
  {
    id: 's6', type: 'sign', difficulty: 'medium', points: 2,
    question: "مكان عام:",
    signId: 'airport',
    answer: "مطار مدني",
    accepted: ["مطار", "طيارة", "طيارات", "مكان طيران", "جو"],
    hint1: "طائرات.",
    hint2: "دائرة وتقاطع.",
    explanation: "الدائرة التي يخرج منها خطوط متقاطعة تعني: مطار مدني.",
    key: "مطار"
  },
  {
    id: 's7', type: 'sign', difficulty: 'hard', points: 3,
    question: "تعليمات:",
    signId: 'split_groups',
    answer: "انقسموا الى مجموعتين",
    accepted: [
      "انقسام", 
      "تفرقوا", 
      "مجموعتين", 
      "انقسموا", 
      "قسمين", 
      "انقسام الى مجموعتين",
      "انقسام مجموعتين",
      "فريقين",
      "مجموعتان"
    ],
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
    accepted: ["خطر", "تحذير", "انتبه", "احذر", "تنبيه"],
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
    accepted: ["كهرباء", "صاعقة", "ماس", "كهربا", "خطر كهربائي"],
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
    accepted: ["نقطة النهاية", "نهاية", "وصلنا", "خلصنا", "نهايه", "الوصول"],
    hint1: "دائرة ونقطتين.",
    hint2: "واحدة بالداخل والأخرى بالخارج.",
    explanation: "الدائرة التي بها نقطة داخلية ونقطة خارجية تعني: نقطة النهاية.",
    key: "نهاية"
  },
  {
    id: 's17', type: 'sign', difficulty: 'medium', points: 2,
    question: "حالة المعسكر:",
    signId: 'arrived_camp',
    answer: "وصلنا الى المعسكر بسلام",
    accepted: ["وصلنا", "وصلنا المعسكر", "وصلنا بسلام", "داخل المعسكر", "متواجدين"],
    hint1: "دائرة ونقطة.",
    hint2: "النقطة بالداخل.",
    explanation: "دائرة وبداخلها نقطة تعني: وصلنا إلى المعسكر بسلام.",
    key: "وصلنا"
  },
    {
    id: 's18', type: 'sign', difficulty: 'medium', points: 2,
    question: "مغادرة:",
    signId: 'left_camp',
    answer: "خرجنا من المعسكر بسلام",
    accepted: ["خرجنا", "خرجنا من المعسكر", "غادرنا", "مشينا", "تركنا المعسكر"],
    hint1: "دائرة فارغة ونقطة.",
    hint2: "النقطة بالخارج.",
    explanation: "دائرة وبجوارها نقطة خارجية تعني: خرجنا من المعسكر بسلام.",
    key: "خرجنا"
  },
  {
    id: 's15', type: 'sign', difficulty: 'medium', points: 2,
    question: "طبيعة السكان:",
    signId: 'uncooperative',
    answer: "الاهالي في هذه المنطقة غير متعاونين",
    accepted: ["غير متعاونين", "لا تخالط", "اعداء", "ناس وحشة", "غير طيبين", "الاهالي غير متعاونين", "غير متعاونون"],
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
    accepted: ["متعاونين", "ناس طيبين", "اصدقاء", "تعاون", "خير", "كويسين", "متعاونون", "اهل المنطقة متعاونون"],
    hint1: "دوائر متداخلة.",
    hint2: "اتحاد وترابط.",
    explanation: "الثلاث دوائر المتداخلة تعني: أهل المنطقة متعاونين.",
    key: "متعاونين"
  },
  {
    id: 's19', type: 'sign', difficulty: 'easy', points: 1,
    question: "حالة الطريق:",
    signId: 'safe_way',
    answer: "الطريق امان",
    accepted: ["امان", "طريق امان", "سليم", "الطريق سليم", "امن"],
    hint1: "سهم وعلامات.",
    hint2: "لا يوجد خطر.",
    explanation: "السهم الذي يحوي علامتي (>) يعني: الطريق أمان.",
    key: "امان"
  },
  {
    id: 's20', type: 'sign', difficulty: 'medium', points: 2,
    question: "طبيعة الارض:",
    signId: 'sand_dunes',
    answer: "كثبان رملية",
    accepted: ["رمل", "رملة", "جبال رمل", "كثبان"],
    hint1: "تجمعات رملية.",
    hint2: "شكل موجي.",
    explanation: "الشكل الموجي المنقط يعني: كثبان رملية.",
    key: "كثبان"
  },
  {
    id: 's21', type: 'sign', difficulty: 'easy', points: 1,
    question: "ماذا يعني هذا الرمز؟",
    signId: 'windmill',
    answer: "طاحونة هواء",
    accepted: ["طاحونة", "هواء", "طاحونه"],
    hint1: "تستخدم الرياح.",
    hint2: "عمود عليه شكل X.",
    explanation: "العمود الذي يعلوه حرف X يعني: طاحونة هواء.",
    key: "طاحونة"
  },
  {
    id: 's22', type: 'sign', difficulty: 'easy', points: 1,
    question: "مكان عبادة:",
    signId: 'church',
    answer: "كنيسة",
    accepted: ["كنيسه", "بيت الله"],
    hint1: "يعلوها صليب.",
    explanation: "المبنى الذي يعلوه صليب هو: كنيسة.",
    key: "كنيسة"
  },
  {
    id: 's23', type: 'sign', difficulty: 'easy', points: 1,
    question: "مكان عبادة:",
    signId: 'mosque',
    answer: "مسجد",
    accepted: ["جامع", "بيت الله"],
    hint1: "يعلوه هلال.",
    explanation: "المبنى الذي يعلوه هلال هو: مسجد.",
    key: "مسجد"
  },
  {
    id: 's24', type: 'sign', difficulty: 'easy', points: 1,
    question: "نوع من الاشجار:",
    signId: 'palm',
    answer: "نخيل",
    accepted: ["نخل", "نخلة", "نخله"],
    hint1: "شجر البلح.",
    explanation: "الرمز الذي يشبه الريش المفرود يعني: نخيل.",
    key: "نخيل"
  },
  {
    id: 's25', type: 'sign', difficulty: 'medium', points: 2,
    question: "حالة المياه:",
    signId: 'stagnant_water',
    answer: "ماء راكد",
    accepted: ["مياه راكدة", "مياه ملوثة", "مياه غير جارية", "راكد"],
    hint1: "غير جاري.",
    explanation: "البيضاوي الذي به خطوط عرضية يعني: ماء راكد.",
    key: "راكد"
  },
  {
    id: 's26', type: 'sign', difficulty: 'medium', points: 2,
    question: "تعليمات:",
    signId: 'stop_wait',
    answer: "قف وانتظر",
    accepted: ["انتظر", "توقف وانتظر", "قف"],
    hint1: "مستطيل داخل مستطيل.",
    explanation: "المستطيلان المتداخلان يعنيان: قف وانتظر.",
    key: "انتظر"
  },
  {
    id: 's27', type: 'sign', difficulty: 'medium', points: 2,
    question: "ماذا يوجد هنا؟",
    signId: 'bridge',
    answer: "كوبري",
    accepted: ["جسر", "قنطرة"],
    hint1: "فوق الماء.",
    explanation: "الخطوط المتوازية التي تنتهي بأقواس تعني: كوبري.",
    key: "كوبري"
  },
  {
    id: 's28', type: 'sign', difficulty: 'medium', points: 2,
    question: "تعليمات:",
    signId: 'water_way',
    answer: "الطريق الى المياه",
    accepted: ["طريق الماء", "المياه", "البحث عن ماء"],
    explanation: "خط متعرج مع سهم يعني: الطريق إلى المياه.",
    key: "المياه"
  },
  {
    id: 's29', type: 'sign', difficulty: 'hard', points: 3,
    question: "الدلالة:",
    signId: 'war',
    answer: "الدلالة على الحرب",
    accepted: ["حرب", "اشارة حرب", "خطر حرب"],
    explanation: "الخطوط المتقاطعة بهذا الشكل تعني: الدلالة على الحرب.",
    key: "حرب"
  },
  {
    id: 's30', type: 'sign', difficulty: 'hard', points: 3,
    question: "الدلالة:",
    signId: 'peace',
    answer: "الدلالة على السلم",
    accepted: ["سلم", "سلام", "امان"],
    explanation: "العلامات المتكررة (>>) تعني: الدلالة على السلم (السلام).",
    key: "سلم"
  },
  {
    id: 's31', type: 'sign', difficulty: 'medium', points: 2,
    question: "تجمع:",
    signId: 'assembly',
    answer: "نقطة تجمع",
    accepted: ["تجمع", "مكان تجمع"],
    explanation: "الأسهم المتقابلة نحو نقطة واحدة تعني: نقطة تجمع.",
    key: "تجمع"
  },
  {
    id: 'c1', type: 'cipher', difficulty: 'easy', points: 1,
    question: "فك شفرة مورس التالية:",
    code: "-.-",
    answer: "ك",
    hint1: "حرف واحد.",
    hint2: "بداية كلمة كشافة.",
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
    code: "-.- ---- .- ..-.", // "كشاف"
    answer: "كشاف",
    accepted: ["الكشاف"],
    hint1: "شخص ينتمي للحركة.",
    hint2: "تبدأ بكاف.",
    explanation: "الرموز تترجم إلى: ك - ش - ا - ف (كشاف).",
    key: "كشاف"
  },
  {
    id: 'c4', type: 'cipher', difficulty: 'hard', points: 3,
    question: "نداء:",
    code: ".- ... - .-.- -..", // "استعد"
    answer: "استعد",
    accepted: ["أستعد", "استعداد"],
    hint1: "فعل أمر.",
    hint2: "شعار الكشاف.",
    explanation: "الرموز تعني: ا - س - ت - ع - د.",
    key: "استعد"
  },
  {
    id: 'c6', type: 'cipher', difficulty: 'hard', points: 3,
    question: "قيمة:",
    code: ".-- ..- -.", // "وطن"
    answer: "وطن",
    accepted: ["الوطن", "بلادي"],
    hint1: "الأرض التي نعيش عليها.",
    hint2: "ثلاثة حروف.",
    explanation: "الرموز (و - ط - ن) تعني: وطن.",
    key: "وطن"
  },
  {
    id: 'c7', type: 'cipher', difficulty: 'medium', points: 2,
    question: "أساس النجاح:",
    code: ".-.- -- .-..", // "عمل"
    answer: "عمل",
    accepted: ["العمل", "شغل"],
    hint1: "الجهد والنشاط.",
    hint2: "عين ميم لام.",
    explanation: "الرموز (ع - م - ل) تعني: عمل.",
    key: "عمل"
  },
  {
    id: 'c8', type: 'cipher', difficulty: 'easy', points: 1,
    question: "أساس الحياة:",
    code: "-.. .. -.", // "دين"
    answer: "دين",
    accepted: ["الدين", "اسلام"],
    hint1: "معتقد.",
    hint2: "دال ياء نون.",
    explanation: "الرموز (د - ي - ن) تعني: دين.",
    key: "دين"
  }
];

export const generateGameLevels = () => {
  // Separate questions by type
  const signQuestions = QUESTION_BANK.filter(q => q.type === 'sign');
  const cipherQuestions = QUESTION_BANK.filter(q => q.type === 'cipher');
  
  // Shuffle both arrays
  const shuffledSigns = signQuestions.sort(() => 0.5 - Math.random());
  const shuffledCiphers = cipherQuestions.sort(() => 0.5 - Math.random());
  
  // Pick 5 signs and 5 ciphers (or as many as available)
  const selectedSigns = shuffledSigns.slice(0, 5);
  const selectedCiphers = shuffledCiphers.slice(0, 5);
  
  // Combine and shuffle final list
  const gameLevels = [...selectedSigns, ...selectedCiphers].sort(() => 0.5 - Math.random());
  
  return gameLevels.map((q, i) => ({ ...q, index: i + 1 }));
};
