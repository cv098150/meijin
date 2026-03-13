/**
 * useAIQuote Hook
 * 
 * 使用 AI API 生成金句
 * 支援 OpenAI 與 Claude API
 */

import { useState, useCallback } from 'react';
import { Quote, QuoteCategory } from '@/lib/quotes';

interface AIQuoteOptions {
  category?: QuoteCategory;
  apiKey: string;
  provider?: 'openai' | 'claude';
}

export function useAIQuote() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuote = useCallback(
    async (options: AIQuoteOptions): Promise<Quote | null> => {
      const { apiKey, provider = 'openai', category } = options;

      if (!apiKey) {
        setError('請提供 API 金鑰');
        return null;
      }

      setIsLoading(true);
      setError(null);

      try {
        if (provider === 'openai') {
          return await generateWithOpenAI(apiKey, category);
        } else if (provider === 'claude') {
          return await generateWithClaude(apiKey, category);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '生成金句失敗';
        setError(errorMessage);
        console.error('AI 生成錯誤:', err);
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
 * 使用 OpenAI API 生成金句
 */
async function generateWithOpenAI(
  apiKey: string,
  category?: QuoteCategory
): Promise<Quote> {
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

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `OpenAI API 錯誤: ${errorData.error?.message || response.statusText}`
    );
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

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
}

/**
 * 使用 Claude API 生成金句
 */
async function generateWithClaude(
  apiKey: string,
  category?: QuoteCategory
): Promise<Quote> {
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

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Claude API 錯誤: ${errorData.error?.message || response.statusText}`
    );
  }

  const data = await response.json();
  const content = data.content[0].text;

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
