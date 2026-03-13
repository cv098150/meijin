/**
 * 每金 - 主頁面
 * 
 * 設計理念：溫暖極簡主義 × 互動詩意
 * - 中心焦點式排版
 * - 充足的負空間
 * - 點擊或按空白鍵換句
 * - AI 生成金句功能
 */

import { useRandomQuote } from '@/hooks/useRandomQuote';
import { useAIQuote } from '@/hooks/useAIQuote';
import { QuoteCard } from '@/components/QuoteCard';
import { APISettings } from '@/components/APISettings';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Settings, Sparkles } from 'lucide-react';
import { Quote } from '@/lib/quotes';

export default function Home() {
  const { quote, nextQuote, isAnimating } = useRandomQuote();
  const { generateQuote, isLoading: isGenerating, error: aiError } = useAIQuote();
  const [showSettings, setShowSettings] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<Quote>(quote);
  const [useAI, setUseAI] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [provider, setProvider] = useState<'openai' | 'claude'>('openai');

  // 初始化時檢查 localStorage 中的 API 金鑰
  useEffect(() => {
    const savedOpenAIKey = localStorage.getItem('ai_openai_key');
    const savedClaudeKey = localStorage.getItem('ai_claude_key');
    if (savedOpenAIKey) {
      setApiKey(savedOpenAIKey);
      setProvider('openai');
      setUseAI(true);
    } else if (savedClaudeKey) {
      setApiKey(savedClaudeKey);
      setProvider('claude');
      setUseAI(true);
    }
  }, []);

  // 監聽靜態金句的變化
  useEffect(() => {
    setCurrentQuote(quote);
  }, [quote]);

  const handleNextQuote = async () => {
    if (useAI && apiKey) {
      // 使用 AI 生成金句
      const aiQuote = await generateQuote({
        apiKey,
        provider,
      });
      if (aiQuote) {
        setCurrentQuote(aiQuote);
      }
    } else {
      // 使用靜態金句
      nextQuote();
    }
  };

  const handleSaveSettings = (newProvider: 'openai' | 'claude', newApiKey: string) => {
    setProvider(newProvider);
    setApiKey(newApiKey);
    setUseAI(true);
  };

  const handleClearSettings = () => {
    localStorage.removeItem('ai_openai_key');
    localStorage.removeItem('ai_claude_key');
    setApiKey('');
    setUseAI(false);
  };

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
        isAnimating={isAnimating || isGenerating}
        onClick={handleNextQuote}
      />

      {/* AI 狀態與錯誤提示 */}
      {useAI && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-lake-blue">
            <Sparkles size={16} />
            <span>使用 {provider === 'openai' ? 'OpenAI' : 'Claude'} AI 生成金句</span>
          </div>
        </motion.div>
      )}

      {aiError && (
        <motion.div
          className="mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⚠️ {aiError}
        </motion.div>
      )}

      {/* 底部提示與設定按鈕 */}
      <motion.div
        className="mt-12 text-center flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-xs md:text-sm text-gray-500">
          💡 點擊卡片或按空白鍵獲取新金句
        </p>

        {/* 設定按鈕 */}
        <motion.button
          onClick={() => setShowSettings(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-lake-blue hover:bg-blue-50 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings size={16} />
          {useAI ? 'AI 設定' : '啟用 AI 生成'}
        </motion.button>

        {/* 清除 AI 設定按鈕 */}
        {useAI && (
          <motion.button
            onClick={handleClearSettings}
            className="text-xs text-gray-500 hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            切換回靜態金句
          </motion.button>
        )}
      </motion.div>

      {/* API 設定對話框 */}
      <APISettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
      />
    </div>
  );
}
