/**
 * useGroqQuote Hook
 * 
 * 使用 Groq API 生成金句
 * Groq 提供快速的 LLM 推理，適合實時金句生成
 */

import { useState, useCallback } from 'react';
import { Quote, QuoteCategory } from '@/lib/quotes';

// Groq API 配置
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export function useGroqQuote() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuote = useCallback(async (category?: QuoteCategory): Promise<Quote | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const categoryPrompts = {
        humor: '生成一個幽默逗趣、帶點自嘲的金句，不超過50字。',
        serious: '生成一個勵志深刻、發人深省的金句，不超過50字。',
        lunyu: '生成一個論語相關的金句，附上白話文解釋，不超過50字。',
        zhuangzi: '生成一個莊子相關的金句，附上白話文解釋，不超過50字。',
        laozi: '生成一個老子《道德經》相關的金句，附上白話文解釋，不超過50字。',
      };

      const prompt = category 
        ? categoryPrompts[category]
        : '生成一個隨機類別的金句（幽默、正經、論語、莊子或老子），不超過50字。';

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b-32768',
          messages: [
            {
              role: 'system',
              content: '你是一個專業的金句生成器。生成的金句應該富有哲理、啟發人心，並且簡潔有力。',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.8,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Groq API 錯誤: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content || '';

      if (!content) {
        throw new Error('Groq API 返回空內容');
      }

      // 解析返回的金句
      const quote: Quote = {
        id: Math.random(),
        text: content.trim().substring(0, 50),
        category: category || 'serious',
      };

      return quote;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '未知錯誤';
      setError(`Groq 生成錯誤: ${errorMessage}`);
      console.error('Groq AI 生成錯誤:', errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { generateQuote, isLoading, error };
}
