/**
 * CategoryBadge 組件
 * 
 * 設計理念：溫暖極簡主義
 * - 湖水藍背景、白字
 * - 圓形、小型、精緻
 */

import { QuoteCategory } from '@/lib/quotes';

interface CategoryBadgeProps {
  category: QuoteCategory;
}

const categoryNames: Record<QuoteCategory, string> = {
  humor: '幽默',
  serious: '正經',
  lunyu: '論語',
  zhuangzi: '莊子',
  laozi: '老子',
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-lake-blue rounded-full">
      {categoryNames[category]}
    </span>
  );
}
