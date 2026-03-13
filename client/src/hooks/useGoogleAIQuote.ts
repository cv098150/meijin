/**
 * useGoogleAIQuote Hook
 * 
 * 使用 Google Generative AI API 生成金句
 */

import { useState, useCallback } from 'react';
import { Quote, QuoteCategory } from '@/lib/quotes';

// Google API 金鑰（已嵌入）
const GOOGLE_API_KEY = 'AIzaSyDYh3q3l8gwY9IJ70inolHBLUu7eYONi5s';
const GOOGLE_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export function useGoogleAIQuote() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuote = useCallback(
    async (category?: QuoteCategory): Promise<Quote | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const categoryPrompt = category
          ? `類別：${getCategoryDescription(category)}`
          : '隨機選擇一個類別';

        const prompt = `請生成一則中文金句，${categoryPrompt}。

要求：
1. 金句內容不超過50個字
2. 如果是古文類別（論語、莊子、老子），需要提供原文和白話文解釋
3. 返回 JSON 格式，包含以下欄位：
   - text: 金句文本
   - category: 類別 (humor/serious/lunyu/zhuangzi/laozi)
   - explanation: 白話文解釋（如有）
   - author: 作者（如有）

只返回 JSON，不要其他文字。`;

        const response = await fetch(
          `${GOOGLE_API_URL}?key=${GOOGLE_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: prompt,
                    },
                  ],
                },
              ],
              generationConfig: {
                temperature: 0.8,
                maxOutputTokens: 300,
              },
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Google API 錯誤: ${errorData.error?.message || response.statusText}`
          );
        }

        const data = await response.json();

        // 檢查是否有候選回應
        if (!data.candidates || data.candidates.length === 0) {
          throw new Error('無法從 AI 獲取回應');
        }

        const content = data.candidates[0].content.parts[0].text;

        // 解析 JSON 回應
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('無法解析 AI 回應');
        }

        const quoteData = JSON.parse(jsonMatch[0]);

        return {
          id: Date.now(),
          text: quoteData.text,
          category: quoteData.category || 'serious',
          explanation: quoteData.explanation,
          author: quoteData.author,
        };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '生成金句失敗';
        setError(errorMessage);
        console.error('Google AI 生成錯誤:', err);
      } finally {
        setIsLoading(false);
      }

      return null;
    },
    []
  );

  return { generateQuote, isLoading, error };
}

/**
 * 取得類別描述
 */
function getCategoryDescription(category: QuoteCategory): string {
  const descriptions: Record<QuoteCategory, string> = {
    humor: '幽默逗趣，帶點自嘲',
    serious: '勵志深刻，發人深省',
    lunyu: '論語，孔子及弟子言論',
    zhuangzi: '莊子，道家思想',
    laozi: '老子《道德經》',
  };
  return descriptions[category] || '隨機';
}
