/**
 * APISettings 組件
 * 
 * 管理 AI API 設定
 * 支援 OpenAI 與 Claude API
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, X, Save } from 'lucide-react';

interface APISettingsProps {
  onSave: (provider: 'openai' | 'claude', apiKey: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function APISettings({ onSave, isOpen, onClose }: APISettingsProps) {
  const [provider, setProvider] = useState<'openai' | 'claude'>('openai');
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  const handleSave = () => {
    if (apiKey.trim()) {
      // 儲存到 localStorage
      localStorage.setItem(`ai_${provider}_key`, apiKey);
      onSave(provider, apiKey);
      setApiKey('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 標題 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Settings size={24} className="text-lake-blue" />
            <h2 className="text-xl font-semibold text-slate-800">AI 設定</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* 提供商選擇 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            選擇 AI 提供商
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => setProvider('openai')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                provider === 'openai'
                  ? 'bg-lake-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              OpenAI
            </button>
            <button
              onClick={() => setProvider('claude')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                provider === 'claude'
                  ? 'bg-lake-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Claude
            </button>
          </div>
        </div>

        {/* API 金鑰輸入 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {provider === 'openai' ? 'OpenAI API Key' : 'Claude API Key'}
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={
                provider === 'openai'
                  ? 'sk-...'
                  : 'sk-ant-...'
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-blue"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showKey ? '隱藏' : '顯示'}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {provider === 'openai'
              ? '從 https://platform.openai.com/api-keys 獲取'
              : '從 https://console.anthropic.com/api-keys 獲取'}
          </p>
        </div>

        {/* 提示 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-blue-800">
            💡 API 金鑰將儲存在您的瀏覽器本地，不會上傳到伺服器。
          </p>
        </div>

        {/* 按鈕 */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="flex-1 py-2 px-4 bg-lake-blue text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Save size={16} />
            保存
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
