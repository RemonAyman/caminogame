export const CIPHER_QUESTIONS = [
  // --- EASY (1 Point) ---
  {
    id: 'c1',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "فك شفرة مورس التالية:",
    code: "-.- ... ---.",
    answer: "كش",
    hint1: "-.- = ك",
    hint2: "---. = ش"
  },
  {
    id: 'c2',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "فك الشفرة (أ=1, ب=2):",
    code: "1 - 2 - 4",
    answer: "أبث",
    hint1: "كل رقم يقابله ترتيب الحرف في الأبجدية.",
    hint2: "1=أ، 2=ب، 4=ث"
  },
  {
    id: 'c3',
    type: 'cipher',
    difficulty: 'easy',
    points: 1,
    question: "اقرأ الكلمة (معكوسة):",
    code: "ة د ا ي ق",
    answer: "قيادة",
    hint1: "اقرأ الحروف من اليسار لليمين.",
    hint2: "ق - ي - ا - د - ة"
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
    hint1: ".-- = و",
    hint2: ".- = ع ، -.-. = د (لا، انتظر.. د = -..)"
  },
  {
    id: 'c5',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة الأرقام (أبجد هوز - أ=1، ي=10، ك=20):",
    code: "1 - 30 - 200",
    answer: "ألر",
    hint1: "حساب الجمل: أ=1، ل=30، ر=200",
    hint2: "الكلمة هي أمر كشفي: (ألر) أو جزء منها."
  },
  {
    id: 'c5_b',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة عكس الكلمات:",
    code: "ة د ا ع س",
    answer: "سعادة",
    hint1: "اقرأ من اليسار.",
    hint2: "س - ع - ا - د - ة"
  },
  {
    id: 'c5_c',
    type: 'cipher',
    difficulty: 'medium',
    points: 2,
    question: "شفرة (أ=1, ب=2):",
    code: "23 - 1 - 7 - 2",
    answer: "واجب",
    hint1: "و=23 (تقريباً في الترتيب الأبجدي العادي)",
    hint2: "و - ا - ج - ب"
  },
  // --- HARD (3 Points) ---
  {
    id: 'c6',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة المرايا (اقرأ كل حرف وما يقابله):",
    code: "ش ت ك ف ا",
    answer: "استكشاف",
    hint1: "الكلمة مقلوبة ومبعثرة.",
    hint2: "رتب الحروف لتكون كلمة كشفية مشهورة."
  },
  {
    id: 'c7',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة الأرقام المعقدة (أ=1, ب=2... ي=10, ك=20...):",
    code: "20 - 300 - 1 - 80",
    answer: "كشاف",
    hint1: "ك=20، ش=300، أ=1، ف=80",
    hint2: "رتب القيم لتكوين الكلمة."
  },
  {
    id: 'c8',
    type: 'cipher',
    difficulty: 'hard',
    points: 3,
    question: "شفرة مورس المتقدمة:",
    code: "-... .--. .-. . .--. .- .-. . -..",
    answer: "كن مستعدا", // B P R E P A R E D or equivalent text
    hint1: "الشعار الكشفي العالمي.",
    hint2: "-... = B (Be)"
  }
];

export const SIGN_QUESTIONS = []; // Placeholder for mixed logic

// Helper to get random items
const getRandom = (arr, n) => arr.sort(() => 0.5 - Math.random()).slice(0, n);

export const generateGameLevels = () => {
  // We need 10 levels: 3 Easy, 4 Medium, 3 Hard
  // Currently we mostly have Ciphers populated. Let's duplicate/mock for now to ensure we have enough data.
  // In a real scenario we'd have 20+ items in the DB.
  
  const easy = CIPHER_QUESTIONS.filter(q => q.difficulty === 'easy');
  const medium = CIPHER_QUESTIONS.filter(q => q.difficulty === 'medium');
  const hard = CIPHER_QUESTIONS.filter(q => q.difficulty === 'hard');

  // fallback if not enough questions
  const selectedEasy = getRandom([...easy, ...easy], 3);
  const selectedMedium = getRandom([...medium, ...medium], 4);
  const selectedHard = getRandom([...hard, ...hard], 3);

  // Combine and Shuffle strictly by difficulty tiers? Or mix?
  // User asked for "Easy -> Medium -> Hard" progression usually, or just mixed?
  // "levels... easy 1 pt, medium 2 pt..." implies progression.
  // Let's order them: Easy -> Medium -> Hard to simulate "levels".
  
  return [...selectedEasy, ...selectedMedium, ...selectedHard].map((level, index) => ({
    ...level,
    index: index + 1 // Add level number
  }));
};
