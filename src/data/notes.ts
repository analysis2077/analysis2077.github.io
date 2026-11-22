// 个人笔记占位数据 —— 学科词表为规划 §6.1 的示例，最终以站主实际清单为准
export interface Discipline {
  id: string;
  name: string;
  en: string;
  count: number;       // 已有条目数（占位）
  theme?: 'gehenna';   // 学院主题
  built?: boolean;     // 骨架阶段已建目录页
}

export const DISCIPLINES: Discipline[] = [
  { id: 'analysis', name: '数学分析', en: 'Mathematical Analysis', count: 0 },
  { id: 'real', name: '实分析与测度', en: 'Real Analysis & Measure', count: 0 },
  { id: 'functional', name: '泛函分析', en: 'Functional Analysis', count: 0 },
  { id: 'complex', name: '复分析', en: 'Complex Analysis', count: 0 },
  { id: 'fourier', name: 'Fourier 与调和分析', en: 'Fourier & Harmonic Analysis', count: 0 },
  { id: 'ode', name: '常微分方程', en: 'Ordinary Differential Equations', count: 0 },
  { id: 'pde', name: '偏微分方程', en: 'Partial Differential Equations', count: 1, theme: 'gehenna', built: true },
  { id: 'linalg', name: '线性代数与矩阵', en: 'Linear Algebra & Matrices', count: 0 },
  { id: 'algebra', name: '抽象代数', en: 'Abstract Algebra', count: 0 },
  { id: 'geometry', name: '拓扑与几何', en: 'Topology & Geometry', count: 0 },
  { id: 'probability', name: '概率与随机过程', en: 'Probability & Stochastic Processes', count: 0 },
  { id: 'numerical', name: '数值与计算', en: 'Numerics & Computation', count: 0 },
];

// 系列（规划 §6.2）
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
