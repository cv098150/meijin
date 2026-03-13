/**
 * 每金 - 主頁面
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 充足的負空間
 * - 點擊或按空白鍵換句
 * - Google AI 生成金句 + 靜態金句備用
 */

import { useGoogleAIQuote } from '@/hooks/useGoogleAIQuote';
import { useRandomQuote } from '@/hooks/useRandomQuote';
import { QuoteCard } from '@/components/QuoteCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';
import { Quote } from '@/lib/quotes';

export default function Home() {
  const { generateQuote, isLoading: isGenerating, error: aiError } = useGoogleAIQuote();
  const { quote: staticQuote, nextQuote: nextStaticQuote } = useRandomQuote();
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [useAI, setUseAI] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  // 初始化時嘗試生成 AI 金句，失敗則使用靜態金句
  useEffect(() => {
    const initializeQuote = async () => {
      setIsInitializing(true);
      const aiQuote = await generateQuote();
      if (aiQuote) {
        setCurrentQuote(aiQuote);
        setUseAI(true);
        setShowFallback(false);
      } else {
        // AI 失敗，使用靜態金句
        setCurrentQuote(staticQuote);
        setUseAI(false);
        setShowFallback(true);
      }
      setIsInitializing(false);
    };

    initializeQuote();
  }, [generateQuote, staticQuote]);

  const handleNextQuote = async () => {
    if (useAI && !showFallback) {
      // 嘗試使用 AI 生成
      const aiQuote = await generateQuote();
      if (aiQuote) {
        setCurrentQuote(aiQuote);
        setShowFallback(false);
      } else {
        // AI 失敗，切換到靜態金句
        nextStaticQuote();
        setShowFallback(true);
      }
    } else {
      // 使用靜態金句
      nextStaticQuote();
    }
  };

  // 監聽靜態金句變化
  useEffect(() => {
    if (showFallback) {
      setCurrentQuote(staticQuote);
    }
  }, [staticQuote, showFallback]);

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
        {showFallback ? (
          <div className="flex items-center justify-center gap-2 text-sm text-orange-600">
            <AlertCircle size={16} />
            <span>使用本地金句庫</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-sm text-lake-blue">
            <Sparkles size={16} />
            <span>使用 Google AI 生成金句</span>
          </div>
        )}
      </motion.div>

      {/* 錯誤提示 */}
      {aiError && !showFallback && (
        <motion.div
          className="mt-4 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⚠️ AI 暫時無法使用，已切換到本地金句庫
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
