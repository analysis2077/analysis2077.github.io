// 个人笔记学科数据 —— 六大学科 + 学院配色方案（站主 2026-11-23 确认）
// 学院配色沿用 BlueArchiveMathBook 模板的七学院主题系统；id 一经发布保持稳定（pde 的已发布 URL 不变）
export type SchoolTheme =
  | 'schale'
  | 'millennium'
  | 'gehenna'
  | 'trinity'
  | 'shanhaijing'
  | 'hyakkiyako'
  | 'abydos';

export interface Discipline {
  id: string;          // URL 标识，发布后不再改动
  name: string;        // 中文展示名
  en: string;          // 英文名
  theme: SchoolTheme;  // 学院配色
  count: number;       // 已收录分册数
  built?: boolean;     // 已建学科目录页
}

export const DISCIPLINES: Discipline[] = [
  { id: 'analysis',   name: '数学分析',       en: 'Mathematical Analysis',              theme: 'millennium',  count: 0, built: true },
  { id: 'measure',    name: '测度与积分',     en: 'Measure & Integration',              theme: 'abydos',      count: 0, built: true },
  { id: 'complex',    name: '复分析',         en: 'Complex Analysis',                   theme: 'trinity',     count: 0, built: true },
  { id: 'ode',        name: '常微分方程',     en: 'Ordinary Differential Equations',    theme: 'shanhaijing', count: 0, built: true },
  { id: 'pde',        name: '基础偏微分方程', en: 'Basic Partial Differential Equations', theme: 'gehenna',   count: 1, built: true },
  { id: 'functional', name: '泛函分析',       en: 'Functional Analysis',                theme: 'hyakkiyako',  count: 0, built: true },
];

// 系列（跨学科长期整理）
export const SERIES = [
  {
    id: 'the-unfinished-way',
    name: 'The Unfinished Way',
    desc: '跨学科长期整理系列 · 已收录 1 册（Basic Partial Differential Equations）',
  },
];

// Basic PDE 样本（规划 §6.4）——章节来自 302 页样本的目录结构
export const BASIC_PDE = {
  title: 'Basic Partial Differential Equations',
  titleZh: '偏微分方程基础',
  series: 'The Unfinished Way',
  part: 'Part I',
  lang: '英文（保留原题名）',
  pages: 302,
  status: '整理中' as const,
  prereq: '数学分析、线性代数、常微分方程基础',
  audience: '本科高年级 / 研究生一年级',
  version: '待核对（样本文件）',
  chapters: [
    { name: '分析准备 Preliminaries', page: '待导入' },
    { name: '特征线 Method of Characteristics', page: '待导入' },
    { name: 'Hamilton–Jacobi 方程与守恒律', page: '待导入' },
    { name: '二阶方程的分类', page: '待导入' },
    { name: 'Laplace / Poisson 方程', page: '待导入' },
    { name: '热方程 Heat Equation', page: '待导入' },
    { name: '波动方程 Wave Equation', page: '待导入' },
    { name: 'Cauchy–Kovalevsky 定理', page: '待导入' },
    { name: '弱导数与 Sobolev 空间', page: '待导入' },
  ],
};
