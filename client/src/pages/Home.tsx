/**
 * 每金 - 主頁面
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 充足的負空間
 * - 點擊或按空白鍵換句
 * - 純靜態金句庫（2500 則）
 */

import { useRandomQuote } from '@/hooks/useRandomQuote';
import { QuoteCard } from '@/components/QuoteCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote } from '@/lib/quotes';

export default function Home() {
  const { quote, nextQuote } = useRandomQuote();
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // 初始化時設定第一則金句
  useEffect(() => {
    if (quote) {
      setCurrentQuote(quote);
      setIsInitializing(false);
    }
  }, [quote]);

  // 監聽金句變化
  useEffect(() => {
    if (quote && !isInitializing) {
      setCurrentQuote(quote);
    }
  }, [quote, isInitializing]);

  // 如果還在初始化或沒有金句，顯示載入狀態
  if (isInitializing || !currentQuote) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-white to-blue-50 opacity-50" />
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gray-400 text-lg">正在載入今日金句...</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-white to-blue-50 opacity-50" />

      {/* 頁面標題 */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-2 font-serif">每金</h1>
        <p className="text-gray-500 text-lg">每天一句金句，點燃卡住的人生</p>
      </motion.div>

      {/* 金句卡片 */}
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <QuoteCard quote={currentQuote} isAnimating={false} onClick={nextQuote} />
      </motion.div>

      {/* 互動提示 */}
      <motion.div
        className="mt-12 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>💡 點擊卡片或按空白鍵獲取新金句</p>
      </motion.div>
    </div>
  );
}
