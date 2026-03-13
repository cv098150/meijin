/**
 * useRandomQuote Hook
 * 
 * 管理隨機金句狀態，支援點擊與空白鍵事件
 */

import { useState, useEffect, useCallback } from 'react';
import { Quote, getRandomQuote } from '@/lib/quotes';

export function useRandomQuote() {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    // 淡出動畫時間（300ms）
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        nextQuote();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextQuote]);

  return { quote, nextQuote, isAnimating };
}
