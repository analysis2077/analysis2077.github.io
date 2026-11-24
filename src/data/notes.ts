// 个人笔记学科数据 —— 六大学科 + 学院配色方案（站主 2026-11-23 确认）
// 学院配色沿用 BlueArchiveMathBook 模板的七学院主题系统；id 一经发布保持稳定（pde 的已发布 URL 不变）
// 结构（站主 2026-11-24 修订）：一门学科对应一本笔记，没有分册层——学科页即这本笔记的档案页（学科 → 章节）
// 目录 JSON 由 tools/pdf-toc-to-json.mjs 从 PDF 书签生成，中文说明在 notebooks/<学科>.labels.json 里人工维护
import pdeToc from './notebooks/pde.toc.json';

export type SchoolTheme =
  | 'schale'
  | 'millennium'
  | 'gehenna'
  | 'trinity'
  | 'shanhaijing'
  | 'hyakkiyako'
  | 'abydos';

// 目录条目：书内的 Part → 章 → 节（Part 只是书内目录的分组，不是分册层）
// 页码口径与课程页一致：记 PDF 页脚标注的书内印刷页码，生成链接时再换算成 PDF 物理页（书内页码 + offset）
export interface Section {
  no: string;      // 书内编号（1.1 / 2.3）
  title: string;   // 英文原题名
  zh?: string;     // 中文说明（可选）
  page: number;    // 书内印刷页码
}
export interface Chapter { no: string; title: string; zh?: string; page: number; sections: Section[] }
export interface Part { no: string; title: string; zh?: string; page: number; chapters: Chapter[] }
export interface FrontMatter { title: string; zh?: string; pdfPage: number }   // 前置页（序言等）用罗马页码，记 PDF 物理页

// 学科对应的那本笔记；尚未提供笔记的学科不写此字段（学科页显示整理中的空状态）
export interface Notebook {
  title: string;      // 原题名
  titleZh: string;    // 中文题名
  intro: string;      // 中文简介
  series: string;     // 所属系列（笔记总题名），可跨学科
  lang: string;
  pages: number;      // PDF 总页数
  size?: string;      // 展示用文件体积
  status: '整理中' | '已发布';
  prereq: string;
  audience: string;
  version: string;    // 当前版本（取自 PDF 封面所载的修订日期）
  scope?: string;     // 范围（几个 Part、多少章节）
  pdf?: string;       // PDF 的站内路径；缺省时下载按钮保持禁用、目录条目不可点击
  offset: number;     // PDF 物理页 = 书内页码 + offset（封面、序言、目录等前置页的页数）
  coverImage?: string;      // 档案卡左侧的封面图（从 PDF 的某一页渲染；站主 2026-11-24：Basic PDE 用第 7 页）
  coverPage?: number;       // 封面图对应的 PDF 物理页，点击时打开到这一页
  coverSize?: [number, number];   // 封面图像素尺寸（防止图片加载时版面跳动）
  front?: FrontMatter[];     // 前置页目录（序言等）
  parts: Part[];             // 核心目录（目录 JSON 先过 tools/pdf-toc-check.mjs 自检书签页码再生成）
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
    // Basic PDE 笔记（2026-11-24 导入）：294 页 PDF，书内 Part I 共 9 章 50 节；目录由书签生成并逐条核过页码
    notebook: {
      title: 'Basic Partial Differential Equations',
      titleZh: '偏微分方程基础',
      intro: '从分析准备与特征线出发，经二阶方程分类与三类经典方程，到弱导数与 Sobolev 空间。',
      series: 'The Unfinished Way',
      lang: '英文',
      pages: 294,
      size: '5.2 MB',
      status: '已发布',
      prereq: '数学分析、线性代数、常微分方程基础',
      audience: '本科高年级 / 研究生一年级',
      version: '2026-11-24 修订',
      scope: 'Part I · 9 章 50 节',
      pdf: '/notes/pde/basic-partial-differential-equations.pdf',
      offset: pdeToc.offset,
      coverImage: '/notes/pde/cover.jpg',   // 站主 2026-11-24：封面图用 PDF 第 7 页（Part I 扉页）
      coverPage: 7,
      coverSize: [910, 1287],
      front: pdeToc.front ?? [],
      parts: pdeToc.parts,
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
