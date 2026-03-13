/**
 * 每金 - 主頁面
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 充足的負空間
 * - 點擊或按空白鍵換句
 * - Google AI 自動生成金句
 */

import { useGoogleAIQuote } from '@/hooks/useGoogleAIQuote';
import { QuoteCard } from '@/components/QuoteCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Quote } from '@/lib/quotes';

export default function Home() {
  const { generateQuote, isLoading: isGenerating, error: aiError } = useGoogleAIQuote();
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // 初始化時生成第一則金句
  useEffect(() => {
    const initializeQuote = async () => {
      setIsInitializing(true);
      const quote = await generateQuote();
      if (quote) {
        setCurrentQuote(quote);
      }
      setIsInitializing(false);
    };

    initializeQuote();
  }, [generateQuote]);

  const handleNextQuote = async () => {
    const quote = await generateQuote();
    if (quote) {
      setCurrentQuote(quote);
    }
  };

  // 如果還在初始化或沒有金句，顯示載入狀態
  if (isInitializing || !currentQuote) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-white to-blue-50 opacity-50" />
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles size={32} className="text-lake-blue" />
            </motion.div>
          </div>
          <p className="text-gray-600">正在生成今日金句...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      {/* 背景裝飾 - 微妙的漸變 */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-white to-blue-50 opacity-50" />

      {/* 品牌標題區 */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="brand-title text-slate-800 mb-2">每金</h1>
        <p className="text-gray-600 text-sm md:text-base font-light">
          每天一句金句，點燃卡住的人生
        </p>
      </motion.div>

      {/* 金句卡片 */}
      <QuoteCard
        quote={currentQuote}
        isAnimating={isGenerating}
        onClick={handleNextQuote}
      />

      {/* AI 狀態提示 */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 text-sm text-lake-blue">
          <Sparkles size={16} />
          <span>使用 Google AI 生成金句</span>
        </div>
      </motion.div>

      {/* 錯誤提示 */}
      {aiError && (
        <motion.div
          className="mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⚠️ {aiError}
        </motion.div>
      )}

      {/* 底部提示 */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-xs md:text-sm text-gray-500">
          💡 點擊卡片或按空白鍵獲取新金句
        </p>
      </motion.div>
    </div>
  );
}
