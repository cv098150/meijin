/**
 * 每金 - 主頁面
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 充足的負空間
 * - 點擊或按空白鍵換句
 */

import { useRandomQuote } from '@/hooks/useRandomQuote';
import { QuoteCard } from '@/components/QuoteCard';
import { motion } from 'framer-motion';

export default function Home() {
  const { quote, nextQuote, isAnimating } = useRandomQuote();

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
        quote={quote}
        isAnimating={isAnimating}
        onClick={nextQuote}
      />

      {/* 底部提示 - 響應式 */}
      <motion.div
        className="mt-16 text-center text-xs md:text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="hidden md:block">💡 提示：點擊卡片或按空白鍵獲取新金句</p>
        <p className="md:hidden">💡 點擊卡片或按空白鍵獲取新金句</p>
      </motion.div>
    </div>
  );
}
