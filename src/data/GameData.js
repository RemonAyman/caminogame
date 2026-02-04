export const CIPHER_QUESTIONS = [
  // --- EASY (1 Point) ---
  {
    id: 'c1',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "فك شفرة مورس التالية:",
    code: ".-. ... --",
    answer: "رسم",
    hint1: "تتكون من 3 حروف.",
    hint2: ".-. = ر",
    explanation: "الحروف هي: ر (.-.)، س (...)، م (--)."
  },
  {
    id: 'c2',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "فك الشفرة (أ=1, ب=2):",
    code: "1 - 2",
    answer: "أب",
    hint1: "أرقام تدل على ترتيب الحروف.",
    hint2: "الكلمة تعني الوالد.",
    explanation: "1=أ، 2=ب. الكلمة هي (أب)."
  },
  {
    id: 'c3',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "اقرأ الكلمة (معكوسة):",
    code: "ة د ا ي ق",
    answer: "قيادة",
    hint1: "ابدأ القراءة من اليسار.",
    hint2: "صفة يجب أن يتحلى بها الرائد.",
    explanation: "عند عكس الحروف تظهر كلمة (قيادة)."
  },
  // --- MEDIUM (2 Points) ---
  {
    id: 'c4',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "فك شفرة مورس:",
    code: ".-- .- -.-. -..",
    answer: "وعد",
    hint1: "أول كلمة نحفظها في الكشافة.",
    hint2: "تبدأ بحرف الواو (.--).",
    explanation: "تشير إلى (الوعد) الكشفي."
  },
  {
    id: 'c5',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة الأرقام (أبجد هوز):",
    code: "1 - 4 - 2",
    answer: "أدب",
    hint1: "حساب الجمل (أ=1، ب=2، ج=3، د=4).",
    hint2: "صفة حميدة.",
    explanation: "1(أ) - 4(د) - 2(ب) = أدب."
  },
  {
    id: 'c5_b',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة عكس الكلمات:",
    code: "ل م ع",
    answer: "عمل",
    hint1: "اقرأ بالمقلوب.",
    hint2: "ضد الكسل.",
    explanation: "عكس (ل م ع) هو (عمل)."
  },
  {
    id: 'c5_c',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة الترتيب (أ=1, ي=10):",
    code: "27 - 1 - 4 - 10",
    answer: "وادي",
    hint1: "مكان نمشي فيه في الرحلة الخلوية.",
    hint2: "يبدأ بحرف الواو (رقم 27).",
    explanation: "و(27) ا(1) د(8) ي(28) - تقريباً حسب الترتيب الأبجدي، الكلمة هي وادي."
  },
  // --- HARD (3 Points) ---
  {
    id: 'c6',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة المرايا (رتب الحروف):",
    code: "ب ي ر د ت",
    answer: "تدريب",
    hint1: "اقرأ من اليسار لليمين.",
    hint2: "شيء نفعله لنتعلم المهارات.",
    explanation: "الكلمة المعكوسة هي (تدريب)."
  },
  {
    id: 'c7',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة الأرقام الكبرى (جمل):",
    code: "9 - 200 - 10 - 100",
    answer: "طريق",
    hint1: "نمشي عليه.",
    hint2: "ط=9، ق=100.",
    explanation: "بحساب الجمل: ط(9)+ر(200)+ي(10)+ق(100) = طريق."
  },
  {
    id: 'c8',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة مورس:",
    code: "... .- -.-. -..",
    answer: "ساعد",
    hint1: "فعل أمر للكشف.",
    hint2: "سـ... عـ...",
    explanation: "تترجم الشفرة إلى كلمة (ساعد)."
  },
  {
    id: 'c9',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة الإزاحة (+1):",
    code: "ح - ت - م",
    answer: "جبل",
    hint1: "ارجع حرفاً واحداً للوراء.",
    hint2: "شيء مرتفع.",
    explanation: "عند إرجاع كل حرف خطوة للوراء في الترتيب الأبجدي: ح->ج، ت->ب، م->ل."
  },
  {
    id: 'c10',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "لغز: ما هو الشيء؟",
    code: "أخضر في الأرض، أسود في السوق، أحمر في البيت؟",
    answer: "الشاي",
    hint1: "مشروب مشهور.",
    hint2: "نغليه على النار.",
    explanation: "الشاي (ورقه أخضر، يباع مجفف أسود، ويصبح أحمر عند الغلي)."
  },
  // --- ADDITIONAL EASY TO FILL POOL ---
  {
    id: 'e_extra1', difficulty: 'easy', points: 1, type: 'cipher',
    question: "أكمل: الكشاف ...",
    code: "ص . د .",
    answer: "صادق",
    hint1: "من قانون الكشافة.",
    hint2: "الكلمة تنتهي بحرف القاف.",
    explanation: "الكشاف صادق (البند الأول من القانون)."
  },
  {
    id: 'e_extra2', difficulty: 'easy', points: 1, type: 'cipher',
    question: "رمز الزهرة:",
    code: "ز _ ب _ ة",
    answer: "زنبقة",
    hint1: "شعار الكشافة.",
    hint2: "نوع من الزهور.",
    explanation: "الزنبقة."
  }
];

export const SIGN_QUESTIONS = [];

// Helper to get random items WITHOUT duplication from source
// arr: Source array
// n: Number of items needed
const getRandom = (arr, n) => {
  // If we don't have enough UNIQUE items, return all of them shuffled
  if (arr.length <= n) {
    return arr.sort(() => 0.5 - Math.random());
  }
  // Otherwise pick n unique random items
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
};

export const generateGameLevels = () => {
  // We need 10 levels: 3 Easy, 4 Medium, 3 Hard
  
  const easy = CIPHER_QUESTIONS.filter(q => q.difficulty === 'easy');
  const medium = CIPHER_QUESTIONS.filter(q => q.difficulty === 'medium');
  const hard = CIPHER_QUESTIONS.filter(q => q.difficulty === 'hard');

  // Select randomly from the available Unique pools
  // We DO NOT spread [...easy, ...easy] anymore to prevent duplicates.
  const selectedEasy = getRandom(easy, 3);
  const selectedMedium = getRandom(medium, 4);
  const selectedHard = getRandom(hard, 3);

  return [...selectedEasy, ...selectedMedium, ...selectedHard].map((level, index) => ({
    ...level,
    index: index + 1
  }));
};
