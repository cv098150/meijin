/**
 * QuoteCard 組件
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 輕微陰影與圓角
 * - 淡入淡出動畫
 * - 點擊與懸停反饋
 * - 複製金句功能
 */

import { Quote } from '@/lib/quotes';
import { CategoryBadge } from './CategoryBadge';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
  isAnimating: boolean;
  onClick: () => void;
}

export function QuoteCard({ quote, isAnimating, onClick }: QuoteCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // 組合複製文本：金句 + 解釋（如有）
    let textToCopy = quote.text;
    if (quote.explanation) {
      textToCopy += `\n\n${quote.explanation}`;
      if (quote.author) {
        textToCopy += `\n— ${quote.author}`;
      }
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

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

        {/* 複製按鈕與互動提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          {/* 複製按鈕 */}
          <motion.button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-lake-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isCopied ? (
              <>
                <Check size={16} />
                已複製
              </>
            ) : (
              <>
                <Copy size={16} />
                複製金句
              </>
            )}
          </motion.button>

          {/* 互動提示 */}
          <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            點擊或按空白鍵獲取新金句
          </p>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
