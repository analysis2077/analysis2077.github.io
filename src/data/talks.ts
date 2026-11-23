// 讲课与讨论班数据 —— 站主模型（2026-11-23 确定）：
// 讨论班是主条目：条目页 = 讨论班介绍 + 讨论班材料 + 讲课视频（链接形式，没有也没关系）
// 讲课依附于讨论班；独立于讨论班的单次讲课也可单独建条目（可选）
// 新增一个讨论班 = 在 SEMINARS 加一条数据，条目页自动生成

/** 讲课视频：以链接形式给出（B 站等平台），没有可为空数组 */
export interface TalkVideo {
  title: string;      // 场次/视频标题
  url: string;        // 平台链接（如 B 站）
  date?: string;      // 授课日期
  note?: string;      // 补充说明（分段、讲义配套等）
}

/** 讨论班材料：讲义、幻灯片、笔记等；未整理的标 pending */
export interface TalkMaterial {
  label: string;      // 材料名
  desc?: string;      // 一句话说明
  href?: string;      // 站内或外部链接；缺省为待整理
  pending?: boolean;  // true = 待上传/待整理
}

export interface Seminar {
  id: string;         // URL 标识：/talks/<id>/
  name: string;       // 讨论班名称
  en?: string;
  tag: string;        // 主题标签（如 代数 · 表示论）
  period?: string;    // 举办时段（如 2025–2026 学年）
  org?: string;       // 组织单位 / 地点
  desc: string;       // 一句话简介（列表卡片用）
  intro?: string;     // 详细介绍（条目页展示；缺省用 desc）
  materials: TalkMaterial[];
  videos: TalkVideo[];
}

/** 单次讲课（独立活动，可选） */
export interface SingleLecture {
  id: string;
  title: string;
  date?: string;
  desc: string;
  videos: TalkVideo[];
}

// ==== 讨论班（站主提供后逐条录入）====
export const SEMINARS: Seminar[] = [
  {
    id: 'convex-analysis',
    name: 'Convex Analysis, Duality, and Variational Methods',
    tag: '凸分析 · 对偶 · 变分方法',
    period: '2026 秋季学期',
    org: 'MA305 · XJTLU',
    desc: 'Seminar 型 RA 项目：精读与重构 Ekeland–Témam《Convex Analysis and Variational Problems》，研究变分问题、椭圆 PDE 与广义解理论中的对偶性。',
    intro:
      '本人研究助理（RA）项目的讨论班：以 seminar 形式精读并重构 Ivar Ekeland 与 Roger Temam 的《Convex Analysis and Variational Problems》' +
      '（SIAM Classics in Applied Mathematics 28），覆盖 Part I–II（第 I–VII 章），每周一次于 XJTLU MA305 进行（导师：Dr. Yichen Liu）。' +
      '目标是熟练掌握凸分析工具，并将其用于研究变分问题、椭圆偏微分方程与广义解理论中的对偶性；' +
      '项目强调精确表述、假设追踪、证明重构，以及把抽象对偶机制复用到具体变分场景中。\n\n' +
      '研究内容分为六个相互衔接的板块：' +
      '① 泛函分析与凸分析基础——局部凸空间、对偶对、弱拓扑、分离定理、支撑超平面、凸集、下半连续凸函数、上图几何，' +
      '以及凸函数作为连续仿射下方函数之上确界的表示；' +
      '② Fenchel 共轭、双共轭、次微分与近似次梯度——以 Fenchel–Young 等式为共轭性与次微分最优性之间的桥梁，' +
      '并研究可微性、单调性、和与复合规则、Brøndsted–Rockafellar 原理；' +
      '③ 凸极小化与对偶——自反 Banach 空间中的直接方法、极小化子的存在唯一性、最优性条件、变分不等式、' +
      '投影与邻近方法、单调算子、扰动函数、值函数、稳定性、Lagrangian、强对偶、极值关系与 Kuhn–Tucker 结构，' +
      '核心对偶样板为「原变量的凸泛函 + 其线性像的凸泛函」模型问题；' +
      '④ 抽象对偶框架在变分问题与 PDE 中的应用——Sobolev 空间、伴随算子、Green 公式、积分泛函的共轭、' +
      'Dirichlet / Neumann / Stokes 问题、Mossolov 问题、过滤问题、弹塑性扭转、正则性问题与依赖微分算子的一般凸变分积分；' +
      '⑤ 广义解与极小曲面型问题——非自反情形直接方法为何失效、对偶问题如何保持可解、广义原解如何由对偶解重构、' +
      '边界行为与正则极小化序列、近似次梯度的作用；' +
      '⑥ 极小极大对偶与鞍点——比较扰动/共轭路线与 Lagrangian/极小极大路线，' +
      '并探讨对偶生成的算法（Uzawa、Arrow–Hurwicz 方法）及其在最优控制、力学与数学经济中的解释。\n\n' +
      '每周讲义均以自制 RA Handout Template 排版（见作品页）。',
    materials: [
      { label: 'Week 1 · Convex Sets, Separation, and the Hahn–Banach Theorem', desc: 'Ekeland–Témam 第 I 章 §1.1–1.3 讲义（10 页）', href: '/talks/convex-analysis/week1.pdf' },
      { label: 'Week 2 · Convex Functions, Lower Semicontinuity, and Affine Representation', desc: 'Ekeland–Témam 第 I 章 §2–3 讲义（16 页）', href: '/talks/convex-analysis/week2.pdf' },
      { label: 'Week 3 · Continuous Affine Minorants and Fenchel Conjugacy', desc: 'Ekeland–Témam 第 I 章 §3–4 讲义（19 页）', href: '/talks/convex-analysis/week3.pdf' },
    ],
    videos: [],
  },
];

// ==== 单次讲课（可选，独立于讨论班）====
export const LECTURES: SingleLecture[] = [];

/* ---- 录入模板（复制到 SEMINARS 后按实际填写）----
{
  id: 'example-seminar',
  name: '×× 讨论班',
  en: '×× Seminar',
  tag: '方向标签',
  period: '2025–2026 学年',
  org: '组织单位 · 地点',
  desc: '讨论班介绍：主题、目标、面向对象、举办方式。',
  materials: [
    { label: '第一次讲义', desc: '主题 ……', href: '/files/xx.pdf' },
    { label: '参考文献清单', desc: 'Books & papers', pending: true },
  ],
  videos: [
    { title: '第 1 讲 · ××', url: 'https://space.bilibili.com/1684869489', date: '2025-10-15' },
  ],
},
*/
