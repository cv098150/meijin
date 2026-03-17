/*
 * 每金 - serious 類別金句
 */

export type QuoteCategory = 'humor' | 'serious';

export interface Quote {
  id: number;
  text: string;
  category: QuoteCategory;
  explanation?: string;
  author?: string;
}

export const seriousQuotes: Quote[] = [
  {
    id: 1,
    text: '真正的夢來自於戲。',
    category: 'serious',
  },
  {
    id: 2,
    text: '前進不是目的，改變才是。',
    category: 'serious',
  },
  {
    id: 3,
    text: '當你改變時，旅程就會堅持。',
    category: 'serious',
  },
  {
    id: 4,
    text: '成功的秘訣是山河和時光。',
    category: 'serious',
  },
  {
    id: 5,
    text: '人生最重要的是時光，而非心靈。',
    category: 'serious',
  },
  {
    id: 6,
    text: '真正的心靈來自於靈魂。',
    category: 'serious',
  },
  {
    id: 7,
    text: '放棄不是目的，開始才是。',
    category: 'serious',
  },
  {
    id: 8,
    text: '當你開始時，道路就會結束。',
    category: 'serious',
  },
  {
    id: 9,
    text: '成功的秘訣是目標和希望。',
    category: 'serious',
  },
  {
    id: 10,
    text: '人生最重要的是希望，而非愛。',
    category: 'serious',
  },
  {
    id: 11,
    text: '真正的愛來自於夢想。',
    category: 'serious',
  },
  {
    id: 12,
    text: '逃離不是目的，擁抱才是。',
    category: 'serious',
  },
  {
    id: 13,
    text: '當你擁抱時，勇氣就會放手。',
    category: 'serious',
  },
  {
    id: 14,
    text: '成功的秘訣是智慧和力量。',
    category: 'serious',
  },
  {
    id: 15,
    text: '人生最重要的是力量，而非光芒。',
    category: 'serious',
  },
  {
    id: 16,
    text: '真正的光芒來自於聲音。',
    category: 'serious',
  },
  {
    id: 17,
    text: '得到不是目的，給予才是。',
    category: 'serious',
  },
  {
    id: 18,
    text: '當你給予時，故事就會接受。',
    category: 'serious',
  },
  {
    id: 19,
    text: '成功的秘訣是記憶和未來。',
    category: 'serious',
  },
  {
    id: 20,
    text: '人生最重要的是未來，而非夢。',
    category: 'serious',
  },
  {
    id: 21,
    text: '成長不是目的地，而是一場永不停止的旅程。',
    category: 'serious',
  },
  {
    id: 22,
    text: '真正的成長來自於接受自己的不完美。',
    category: 'serious',
  },
  {
    id: 23,
    text: '每一次失敗都是成長的階梯，關鍵是你是否願意往上走。',
    category: 'serious',
  },
  {
    id: 24,
    text: '自我提升的第一步是承認自己的局限。',
    category: 'serious',
  },
  {
    id: 25,
    text: '成長需要勇氣面對內心的恐懼。',
    category: 'serious',
  },
  {
    id: 26,
    text: '你無法改變過去，但可以塑造未來的自己。',
    category: 'serious',
  },
  {
    id: 27,
    text: '真正的進步來自於對自己的誠實反思。',
    category: 'serious',
  },
  {
    id: 28,
    text: '成長的過程中，孤獨是必要的修行。',
    category: 'serious',
  },
  {
    id: 29,
    text: '改變自己比改變世界更需要勇氣。',
    category: 'serious',
  },
  {
    id: 30,
    text: '自我成長的關鍵在於持續的自我對話。',
    category: 'serious',
  },
  {
    id: 31,
    text: '每一個挫折都是打磨靈魂的工具。',
    category: 'serious',
  },
  {
    id: 32,
    text: '成長意味著不斷拓展自己的舒適圈。',
    category: 'serious',
  },
  {
    id: 33,
    text: '真正的強大來自於內心的平靜。',
    category: 'serious',
  },
  {
    id: 34,
    text: '自我提升不是為了超越他人，而是超越昨天的自己。',
    category: 'serious',
  },
  {
    id: 35,
    text: '成長的代價是放棄某些舊的習慣和信念。',
    category: 'serious',
  },
  {
    id: 36,
    text: '你的限制往往來自於你對自己的定義。',
    category: 'serious',
  },
  {
    id: 37,
    text: '真正的成熟是學會與自己和平相處。',
    category: 'serious',
  },
  {
    id: 38,
    text: '成長需要時間，但也需要行動。',
    category: 'serious',
  },
  {
    id: 39,
    text: '自我反思是成長的鏡子。',
    category: 'serious',
  },
  {
    id: 40,
    text: '每一次選擇都是對自己的投資或透支。',
    category: 'serious',
  },
  {
    id: 41,
    text: '成長的人生是不斷學習的人生。',
    category: 'serious',
  },
  {
    id: 42,
    text: '真正的進步是無聲的，只有結果會說話。',
    category: 'serious',
  },
  {
    id: 43,
    text: '自我超越的過程中，堅持比天賦更重要。',
    category: 'serious',
  },
  {
    id: 44,
    text: '成長意味著承擔更多的責任。',
    category: 'serious',
  },
  {
    id: 45,
    text: '你的過去不等於你的未來。',
    category: 'serious',
  },
  {
    id: 46,
    text: '真正的改變始於改變你的思維方式。',
    category: 'serious',
  },
  {
    id: 47,
    text: '成長的路上，自律是最好的朋友。',
    category: 'serious',
  },
  {
    id: 48,
    text: '自我提升是一場與自己的對話。',
    category: 'serious',
  },
  {
    id: 49,
    text: '每一個挑戰都是展現自己潛力的機會。',
    category: 'serious',
  },
  {
    id: 50,
    text: '成長需要放下對完美的執著。',
    category: 'serious',
  },
  {
    id: 51,
    text: '真正的力量來自於內心的確定。',
    category: 'serious',
  },
  {
    id: 52,
    text: '自我成長的終極目標是找到自己的聲音。',
    category: 'serious',
  },
  {
    id: 53,
    text: '成長的人懂得感恩過去的教訓。',
    category: 'serious',
  },
  {
    id: 54,
    text: '改變自己需要的不是一瞬間的決心，而是每天的堅持。',
    category: 'serious',
  },
  {
    id: 55,
    text: '真正的成熟是學會接納自己的陰影面。',
    category: 'serious',
  },
  {
    id: 56,
    text: '成長意味著不斷重新定義自己。',
    category: 'serious',
  },
  {
    id: 57,
    text: '自我提升的路上，耐心是必需品。',
    category: 'serious',
  },
  {
    id: 58,
    text: '每一次突破都源於對現狀的不滿。',
    category: 'serious',
  },
  {
    id: 59,
    text: '成長的人生充滿了未知的可能。',
    category: 'serious',
  },
  {
    id: 60,
    text: '真正的進步是看不見的，直到某一刻你突然發現自己變了。',
    category: 'serious',
  },
  {
    id: 61,
    text: '真正的友誼是在沉默中也能感到舒適。',
    category: 'serious',
  },
  {
    id: 62,
    text: '人際關係的基礎是真誠，而非虛偽的禮貌。',
    category: 'serious',
  },
  {
    id: 63,
    text: '傾聽比說話更能拉近人與人之間的距離。',
    category: 'serious',
  },
  {
    id: 64,
    text: '真正的朋友是在你失敗時仍然相信你的人。',
    category: 'serious',
  },
  {
    id: 65,
    text: '關係中最重要的不是時間的長度，而是質量的深度。',
    category: 'serious',
  },
  {
    id: 66,
    text: '理解他人的第一步是放下自己的判斷。',
    category: 'serious',
  },
  {
    id: 67,
    text: '人際關係中，誠實往往比舒適更重要。',
    category: 'serious',
  },
  {
    id: 68,
    text: '真正的連結來自於彼此的脆弱。',
    category: 'serious',
  },
  {
    id: 69,
    text: '好的關係需要雙方都願意付出努力。',
    category: 'serious',
  },
  {
    id: 70,
    text: '在人際交往中，邊界是尊重的表現。',
    category: 'serious',
  },
  {
    id: 71,
    text: '真正的陪伴是在沉默中也能傳遞溫暖。',
    category: 'serious',
  },
  {
    id: 72,
    text: '人際關係的衝突往往源於溝通的缺失。',
    category: 'serious',
  },
  {
    id: 73,
    text: '原諒他人是為了解放自己。',
    category: 'serious',
  },
  {
    id: 74,
    text: '真正的愛是看見對方的全部，包括缺點。',
    category: 'serious',
  },
  {
    id: 75,
    text: '人與人之間的信任需要時間和一致性來建立。',
    category: 'serious',
  },
  {
    id: 76,
    text: '關係中的退讓有時比堅持更需要勇氣。',
    category: 'serious',
  },
  {
    id: 77,
    text: '真正的朋友會在你最低谷時伸出手。',
    category: 'serious',
  },
  {
    id: 78,
    text: '人際關係中，同理心是最強大的工具。',
    category: 'serious',
  },
  {
    id: 79,
    text: '好的溝通不是贏得辯論，而是理解彼此。',
    category: 'serious',
  },
  {
    id: 80,
    text: '真正的連結超越了語言和時間。',
    category: 'serious',
  },
  {
    id: 81,
    text: '人與人之間的距離由心決定，而非地理位置。',
    category: 'serious',
  },
  {
    id: 82,
    text: '關係中的衝突是成長的機會，而非終點。',
    category: 'serious',
  },
  {
    id: 83,
    text: '真正的陪伴是在困難中也不離不棄。',
    category: 'serious',
  },
  {
    id: 84,
    text: '人際關係需要定期的維護和滋養。',
    category: 'serious',
  },
  {
    id: 85,
    text: '原諒不是遺忘，而是選擇不再被傷害所困。',
    category: 'serious',
  },
  {
    id: 86,
    text: '真正的朋友是那些讓你成為更好版本的人。',
    category: 'serious',
  },
  {
    id: 87,
    text: '人與人之間的理解來自於真誠的對話。',
    category: 'serious',
  },
  {
    id: 88,
    text: '關係中最珍貴的是被完全接納的感受。',
    category: 'serious',
  },
  {
    id: 89,
    text: '真正的愛是無條件的，但不是無原則的。',
    category: 'serious',
  },
  {
    id: 90,
    text: '人際交往中，尊重差異是和諧的基礎。',
    category: 'serious',
  },
  {
    id: 91,
    text: '好的關係能夠承受沉默和距離。',
    category: 'serious',
  },
  {
    id: 92,
    text: '真正的朋友會為你的成功感到高興。',
    category: 'serious',
  },
  {
    id: 93,
    text: '人與人之間的信任一旦破裂，需要加倍的努力才能修復。',
    category: 'serious',
  },
  {
    id: 94,
    text: '關係中的付出應該是自願的，而非被迫的。',
    category: 'serious',
  },
  {
    id: 95,
    text: '真正的陪伴是在你不需要說話時也能理解你。',
    category: 'serious',
  },
  {
    id: 96,
    text: '人際關係的深度取決於你願意展露的脆弱程度。',
    category: 'serious',
  },
  {
    id: 97,
    text: '好的溝通是傾聽，而非等待輪到自己說話。',
    category: 'serious',
  },
  {
    id: 98,
    text: '真正的連結來自於共同的價值觀和相互的尊重。',
    category: 'serious',
  },
  {
    id: 99,
    text: '人與人之間的距離由理解決定。',
    category: 'serious',
  },
  {
    id: 100,
    text: '關係中的衝突如果處理得當，會讓感情更堅固。',
    category: 'serious',
  },
];