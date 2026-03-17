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
];