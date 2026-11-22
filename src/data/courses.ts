// 课程占位数据 —— 骨架阶段用于展示版式
// 真实课程清单（约 20 门）由站主按规划附录 B1 提供后批量替换
export interface Course {
  code: string;
  title: string;
  titleZh?: string;
  stage: '本科' | '研究生';
  year: string;
  semester: string;
  subject: string;
  status: '整理中' | '阶段完成' | '已归档';
  blurb: string;
  sample?: boolean; // 真实样本（已提供文件）标记
  href?: string;    // 已建详情页的课程
}

export const COURSES: Course[] = [
  {
    code: 'MTH118',
    title: 'Analysis II',
    titleZh: '分析 II',
    stage: '本科',
    year: '2025–2026',
    semester: 'Semester 2',
    subject: '分析',
    status: '整理中',
    blurb: '首个真实样本：248 页合并 PDF，含知识笔记、6 次 TTL 与 3 份往年试题。',
    sample: true,
    href: '/courses/mth118/',
  },
  { code: 'MTH101', title: 'Calculus I', titleZh: '微积分 I', stage: '本科', year: '2023–2024', semester: 'Semester 1', subject: '分析', status: '已归档', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH103', title: 'Linear Algebra I', titleZh: '线性代数 I', stage: '本科', year: '2023–2024', semester: 'Semester 2', subject: '代数', status: '已归档', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH201', title: 'Real Analysis', titleZh: '实分析', stage: '本科', year: '2024–2025', semester: 'Semester 1', subject: '分析', status: '阶段完成', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH205', title: 'Complex Analysis', titleZh: '复分析', stage: '本科', year: '2024–2025', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH210', title: 'Abstract Algebra', titleZh: '抽象代数', stage: '本科', year: '2024–2025', semester: 'Semester 2', subject: '代数', status: '整理中', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH301', title: 'General Topology', titleZh: '点集拓扑', stage: '本科', year: '2025–2026', semester: 'Semester 1', subject: '几何拓扑', status: '整理中', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH501', title: 'Partial Differential Equations', titleZh: '偏微分方程', stage: '研究生', year: '2025–2026', semester: 'Semester 1', subject: '分析', status: '整理中', blurb: '占位示例条目，用于展示课程卡片版式。' },
  { code: 'MTH502', title: 'Functional Analysis', titleZh: '泛函分析', stage: '研究生', year: '2025–2026', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: '占位示例条目，用于展示课程卡片版式。' },
];

export const STAGES = ['本科', '研究生'] as const;
export const SUBJECTS = ['分析', '代数', '几何拓扑'] as const;
