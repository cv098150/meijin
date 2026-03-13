/**
 * QuoteCard 組件
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 輕微陰影與圓角
 * - 淡入淡出動畫
 * - 點擊與懸停反饋
 */

import { Quote } from '@/lib/quotes';
import { CategoryBadge } from './CategoryBadge';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  quote: Quote;
  isAnimating: boolean;
  onClick: () => void;
}

export function QuoteCard({ quote, isAnimating, onClick }: QuoteCardProps) {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={onClick}
        disabled={isAnimating}
        className="w-full p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* 類別標籤 */}
        <div className="mb-6 flex justify-center">
          <CategoryBadge category={quote.category} />
        </div>

        {/* 金句主文本 */}
        <motion.div
          key={`text-${quote.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl font-normal text-slate-800 leading-relaxed">
            {quote.text}
          </p>
        </motion.div>

        {/* 白話文解釋（古文類別） */}
        {quote.explanation && (
          <motion.div
            key={`explanation-${quote.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-4 pt-6 border-t border-gray-200"
          >
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {quote.explanation}
            </p>
            {quote.author && (
              <p className="text-xs text-gray-500 mt-2">— {quote.author}</p>
            )}
          </motion.div>
        )}

        {/* 互動提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
        >
          點擊或按空白鍵獲取新金句
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
