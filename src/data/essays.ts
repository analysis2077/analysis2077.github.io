// 随笔数据 —— 三大板块（站主 2026-11-23 确定）：
// 1) 数学史与人物  2) 概念科普  3) 理论专题
export interface EssayCategory {
  id: string;
  name: string;
  en: string;
  desc: string;
}

export const ESSAY_CATEGORIES: EssayCategory[] = [
  { id: 'history',  name: '数学史与人物', en: 'History & Figures', desc: '数学史上的事件、学派与数学家的故事。' },
  { id: 'concepts', name: '概念科普',     en: 'Concepts',          desc: '把一个数学概念讲清楚、讲有趣。' },
  { id: 'topics',   name: '理论专题',     en: 'Theory Topics',     desc: '围绕一个数学理论展开的完整专题。' },
];

export interface Essay {
  id: string;          // URL 标识
  title: string;
  titleEn?: string;
  category: string;    // ESSAY_CATEGORIES 的 id
  date: string;        // 整理发布日期
  author: string;
  abstract: string;    // 摘要（列表页展示）
  pages?: number;      // PDF 页数（PDF 型随笔）
  pdf?: string;        // PDF 路径（public 下）
  proofs?: number;     // 证明条数（专题类可选）
  tags: string[];
  related?: { label: string; href: string }[];
}

export const ESSAYS: Essay[] = [
  {
    id: 'real-completeness',
    title: '实数系完备性六大定理互证',
    titleEn: 'Mutual Proofs of the Six Completeness Theorems',
    category: 'topics',
    date: '2026-11-23',
    author: 'Liangyu Chen',
    abstract:
      '实数系的六大完备性定理——确界存在、单调有界、闭区间套、有限覆盖（Heine–Borel）、' +
      'Bolzano–Weierstrass 聚点定理与 Cauchy 收敛原理——在 ℝ 中两两等价。' +
      '本文按「以每一个定理为出发点，证明其余五个」的矩阵式结构，给出全部 30 条证明，' +
      '并整理各定理的标准表述，适合作为数学分析课程的专题复习材料。',
    pages: 14,
    proofs: 30,
    pdf: '/essays/real-completeness.pdf',
    tags: ['数学分析', '实数系', '完备性', '复习专题'],
    related: [
      { label: '学科 · 数学分析', href: '/notes/analysis/' },
      { label: '课程 · MTH117 分析一', href: '/courses/' },
    ],
  },
];
