/*
 * 每金 - 金句資料庫主索引
 */

import { humorQuotes } from './quotes_humor';
import { seriousQuotes } from './quotes_serious';

export type QuoteCategory = 'humor' | 'serious';

export interface Quote {
  id: number;
  text: string;
  category: QuoteCategory;
  explanation?: string;
  author?: string;
}

export const quotes = [
  ...humorQuotes,
  ...seriousQuotes,
];

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function getQuotesByCategory(category: QuoteCategory): Quote[] {
  return quotes.filter(q => q.category === category);
}
