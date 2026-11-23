// 个人笔记学科数据 —— 六大学科 + 学院配色方案（站主 2026-11-23 确认）
// 学院配色沿用 BlueArchiveMathBook 模板的七学院主题系统；id 一经发布保持稳定（pde 的已发布 URL 不变）
// 结构（站主 2026-11-24 修订）：一门学科对应一本笔记，没有分册层——学科页即这本笔记的档案页（学科 → 章节）
export type SchoolTheme =
  | 'schale'
  | 'millennium'
  | 'gehenna'
  | 'trinity'
  | 'shanhaijing'
  | 'hyakkiyako'
  | 'abydos';

export interface Chapter {
  name: string;   // 章节名：英文原题名保留，可附中文
  page: string;   // PDF 页码；尚未从 PDF 目录核对时为“待导入”
}

// 学科对应的那本笔记；尚未提供笔记的学科不写此字段（学科页显示整理中的空状态）
export interface Notebook {
  title: string;      // 原题名
  titleZh: string;    // 中文题名
  intro: string;      // 中文简介
  series: string;     // 所属系列（笔记总题名），可跨学科
  lang: string;
  pages: number;      // PDF 总页数
  status: '整理中' | '已发布';
  prereq: string;
  audience: string;
  version: string;
  pdf?: string;       // PDF 的站内路径；缺省时下载按钮保持禁用
  chapters: Chapter[];
  preview: { label: string; tex: string }[];   // 网页数学环境预览（KaTeX 渲染）
}

// 站内关联入口：学科有笔记时显示为卡片，否则显示为简短链接
export interface RelatedLink {
  kicker: string;
  title: string;
  desc: string;
  href: string;
}

export interface Discipline {
  id: string;          // URL 标识，发布后不再改动
  name: string;        // 学科名 = 这本笔记的中文名
  en: string;          // 英文名
  short: string;       // 页头小字用的英文简称
  theme: SchoolTheme;  // 学院配色
  notebook?: Notebook; // 这门学科对应的笔记（一门学科对应一本笔记）
  related?: RelatedLink[];
}

export const DISCIPLINES: Discipline[] = [
  { id: 'analysis',   name: '数学分析',       en: 'Mathematical Analysis',                short: 'Mathematical Analysis', theme: 'millennium',
    related: [{ kicker: '相关课程', title: 'MTH118 Analysis II', desc: '本科 · 2023–2024 S2 · 分析', href: '/courses/mth118/' }] },
  { id: 'measure',    name: '测度与积分',     en: 'Measure & Integration',                short: 'Measure & Integration', theme: 'abydos' },
  { id: 'complex',    name: '复分析',         en: 'Complex Analysis',                     short: 'Complex Analysis',    theme: 'trinity' },
  { id: 'ode',        name: '常微分方程',     en: 'Ordinary Differential Equations',      short: 'ODE',                 theme: 'shanhaijing' },
  { id: 'pde', name: '基础偏微分方程', en: 'Basic Partial Differential Equations', short: 'Basic PDE', theme: 'gehenna',
    related: [{ kicker: '相关课程', title: 'MTH118 Analysis II', desc: '本科 · 2023–2024 S2 · 分析', href: '/courses/mth118/' }],
    // Basic PDE 样本（规划 §6.4）——章节来自 302 页样本的目录结构
    notebook: {
      title: 'Basic Partial Differential Equations',
      titleZh: '偏微分方程基础',
      intro: '从分析准备与特征线出发，经二阶方程分类与三类经典方程，到弱导数与 Sobolev 空间。',
      series: 'The Unfinished Way',
      lang: '英文',
      pages: 302,
      status: '整理中',
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
      preview: [
        { label: '热方程 HEAT', tex: '\\partial_t u - \\Delta u = 0 \\quad (\\Omega \\times (0,\\infty))' },
        { label: '波动方程 WAVE', tex: '\\partial_{tt} u - c^2 \\Delta u = 0' },
        { label: 'SOBOLEV 空间', tex: 'W^{1,2}(\\Omega) = \\{\\, u \\in L^2(\\Omega) : \\partial_i u \\in L^2(\\Omega) \\,\\}' },
      ],
    } },
  { id: 'functional', name: '泛函分析',       en: 'Functional Analysis',                  short: 'Functional Analysis', theme: 'hyakkiyako' },
];

// 学院主题的中文名与配色描述（学科卡标签、学科页页头与档案卡铭牌用）
export const THEME_META: Record<SchoolTheme, { cn: string; plate: string; desc: string }> = {
  schale:       { cn: 'Schale · 夏莱',           plate: 'SCHALE',       desc: 'Schale 蓝白' },
  millennium:   { cn: 'Millennium · 千禧',       plate: 'MILLENNIUM',   desc: 'Millennium 蓝紫' },
  gehenna:      { cn: 'Gehenna · 格黑娜',        plate: 'GEHENNA',      desc: 'Gehenna 红紫' },
  trinity:      { cn: 'Trinity · 圣三一',        plate: 'TRINITY',      desc: 'Trinity 金蓝' },
  shanhaijing:  { cn: 'Shanhaijing · 山海经',    plate: 'SHANHAIJING',  desc: 'Shanhaijing 翡翠朱砂' },
  hyakkiyako:   { cn: 'Hyakkiyako · 百鬼夜行',   plate: 'HYAKKIYAKO',   desc: 'Hyakkiyako 暖红紫藤' },
  abydos:       { cn: 'Abydos · 阿拜多斯',       plate: 'ABYDOS',       desc: 'Abydos 沙金' },
};
