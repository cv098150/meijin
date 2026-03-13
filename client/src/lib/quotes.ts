/**
 * 每金 - 金句資料庫
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 每則金句不超過50字
 * - 古文類別附白話文解釋
 * - 五大類別：幽默、正經、論語、莊子、老子
 */

export type QuoteCategory = 'humor' | 'serious' | 'lunyu' | 'zhuangzi' | 'laozi';

export interface Quote {
  id: number;
  text: string;
  category: QuoteCategory;
  explanation?: string;
  author?: string;
}

export const quotes: Quote[] = [
  // ============ 幽默類 ============
  {
    id: 1,
    text: '人生如戲，全靠演技。',
    category: 'humor',
  },
  {
    id: 2,
    text: '我不是在浪費時間，我是在思考人生。',
    category: 'humor',
  },
  {
    id: 3,
    text: '別人的成功故事，都是別人的故事。',
    category: 'humor',
  },
  {
    id: 4,
    text: '失敗乃成功之母，但我媽沒生我這麼多次。',
    category: 'humor',
  },
  {
    id: 5,
    text: '人生就像騎自行車，為了保持平衡，你必須不斷前進。',
    category: 'humor',
  },

  // ============ 正經類 ============
  {
    id: 6,
    text: '每一次跌倒，都是為了學會更好地站起來。',
    category: 'serious',
  },
  {
    id: 7,
    text: '改變不了過去，但能塑造未來。',
    category: 'serious',
  },
  {
    id: 8,
    text: '你的努力，會在某個時刻閃閃發光。',
    category: 'serious',
  },
  {
    id: 9,
    text: '不是所有的堅持都有結果，但放棄一定沒有。',
    category: 'serious',
  },
  {
    id: 10,
    text: '生活的意義，在於你如何度過每一個平凡的日子。',
    category: 'serious',
  },

  // ============ 論語類 ============
  {
    id: 11,
    text: '學而時習之，不亦說乎？',
    category: 'lunyu',
    explanation: '學習知識後，經常溫習練習，不是很快樂嗎？',
    author: '孔子',
  },
  {
    id: 12,
    text: '知之為知之，不知為不知，是知也。',
    category: 'lunyu',
    explanation: '知道就是知道，不知道就是不知道，這才是真正的智慧。',
    author: '孔子',
  },
  {
    id: 13,
    text: '己所不欲，勿施於人。',
    category: 'lunyu',
    explanation: '自己不想要的東西，不要強加給別人。',
    author: '孔子',
  },
  {
    id: 14,
    text: '三人行，必有我師焉。',
    category: 'lunyu',
    explanation: '三個人一起走路，其中必然有我的老師。',
    author: '孔子',
  },
  {
    id: 15,
    text: '發奮圖強，不舍晝夜。',
    category: 'lunyu',
    explanation: '要努力向上，不分白天黑夜地去追求進步。',
    author: '孔子',
  },

  // ============ 莊子類 ============
  {
    id: 16,
    text: '逍遙遊，無為而無不為。',
    category: 'zhuangzi',
    explanation: '自由自在地生活，不刻意去做，反而一切都能自然完成。',
    author: '莊子',
  },
  {
    id: 17,
    text: '相濡以沫，不如相忘於江湖。',
    category: 'zhuangzi',
    explanation: '互相幫助度過困難，不如各自獨立地生活。',
    author: '莊子',
  },
  {
    id: 18,
    text: '至人無己，神人無功，聖人無名。',
    category: 'zhuangzi',
    explanation: '最高境界的人沒有自我執著，神仙般的人不計功績，聖人不追求名聲。',
    author: '莊子',
  },
  {
    id: 19,
    text: '庖丁解牛，遊刃有餘。',
    category: 'zhuangzi',
    explanation: '做事要找到規律和竅門，才能事半功倍。',
    author: '莊子',
  },
  {
    id: 20,
    text: '莊周夢蝶，不知是蝶夢莊周。',
    category: 'zhuangzi',
    explanation: '莊周夢見自己變成蝴蝶，醒後不知是莊周夢蝶，還是蝴蝶夢莊周。',
    author: '莊子',
  },

  // ============ 老子類 ============
  {
    id: 21,
    text: '道可道，非常道。名可名，非常名。',
    category: 'laozi',
    explanation: '能用言語說出來的道理，就不是永恆不變的道。',
    author: '老子',
  },
  {
    id: 22,
    text: '無為而無不為。',
    category: 'laozi',
    explanation: '不刻意去做，反而能成就一切。',
    author: '老子',
  },
  {
    id: 23,
    text: '上善若水，水善利萬物而不爭。',
    category: 'laozi',
    explanation: '最高的善就像水一樣，滋潤萬物卻不與之爭奪。',
    author: '老子',
  },
  {
    id: 24,
    text: '知人者智，自知者明。',
    category: 'laozi',
    explanation: '了解別人是聰慧，了解自己才是真正的聰慧。',
    author: '老子',
  },
  {
    id: 25,
    text: '禍兮福之所倚，福兮禍之所伏。',
    category: 'laozi',
    explanation: '禍與福相互依存，禍中可能隱藏著福，福中也可能隱藏著禍。',
    author: '老子',
  },
];

/**
 * 取得隨機金句
 */
export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * 根據類別取得隨機金句
 */
export function getRandomQuoteByCategory(category: QuoteCategory): Quote {
  const filtered = quotes.filter((q) => q.category === category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

/**
 * 取得所有類別
 */
export function getCategories(): QuoteCategory[] {
  return ['humor', 'serious', 'lunyu', 'zhuangzi', 'laozi'];
}

/**
 * 類別顯示名稱
 */
export const categoryNames: Record<QuoteCategory, string> = {
  humor: '幽默',
  serious: '正經',
  lunyu: '論語',
  zhuangzi: '莊子',
  laozi: '老子',
};
