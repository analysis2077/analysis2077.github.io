// 课程数据 —— 本科阶段已修课程（站主 2026-11-23 提供，17 门）
// 学年映射：Y1S1 = 2022–2023 秋季学期起；Y4S2 = 2025–2026 春季学期
// 研究生阶段（慕尼黑工大）待首个完整学期结束后补充
// 注：MTH323 / MTH315 / MTH310 英文题名为站主提供原名，其余英文题名为中文对应译名，以官方成绩单为准
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
  // —— Y1S1 · 2022–2023 秋季学期 ——
  { code: 'MTH029', title: 'Calculus', titleZh: '微积分', stage: '本科', year: '2022–2023', semester: 'Semester 1', subject: '分析', status: '整理中', blurb: '大一起点课：极限、导数与积分的标准演算体系。' },
  { code: 'MTH017', title: 'Linear Algebra', titleZh: '线性代数', stage: '本科', year: '2022–2023', semester: 'Semester 1', subject: '代数与离散', status: '整理中', blurb: '矩阵、向量空间与线性方程组。' },
  // —— Y1S2 · 2022–2023 春季学期 ——
  { code: 'MTH008', title: 'Multivariable Calculus', titleZh: '多元微积分', stage: '本科', year: '2022–2023', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: '偏导数、重积分与多元函数微积分。' },
  // —— Y2S1 · 2023–2024 秋季学期 ——
  { code: 'MTH117', title: 'Analysis I', titleZh: '分析一', stage: '本科', year: '2023–2024', semester: 'Semester 1', subject: '分析', status: '整理中', blurb: '序列与级数、ε–δ 语言与实数完备性。' },
  // —— Y2S2 · 2023–2024 春季学期 ——
  { code: 'MTH118', title: 'Analysis II', titleZh: '分析二', stage: '本科', year: '2023–2024', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: '多元分析、一致收敛与 Riemann 积分。已有 248 页合并 PDF 样本（知识笔记 · TTL · 往年试题）。', sample: true, href: '/courses/mth118/' },
  { code: 'MTH106', title: 'Introduction to Differential Equations', titleZh: '微分方程入门', stage: '本科', year: '2023–2024', semester: 'Semester 2', subject: '方程与建模', status: '整理中', blurb: '一阶方程、二阶线性方程与基础解法。' },
  // —— Y3S1 · 2024–2025 秋季学期 ——
  { code: 'MTH212', title: 'Differential Equations and Control', titleZh: '微分方程与控制', stage: '本科', year: '2024–2025', semester: 'Semester 1', subject: '方程与建模', status: '整理中', blurb: '线性系统、稳定性分析与控制入门。' },
  { code: 'MTH229', title: 'Discrete Mathematics', titleZh: '离散数学', stage: '本科', year: '2024–2025', semester: 'Semester 1', subject: '代数与离散', status: '整理中', blurb: '集合、图论、组合与逻辑基础。' },
  // —— Y3S2 · 2024–2025 春季学期 ——
  { code: 'MTH208', title: 'Numerical Analysis', titleZh: '数值分析', stage: '本科', year: '2024–2025', semester: 'Semester 2', subject: '计算与数值', status: '整理中', blurb: '数值逼近、迭代法与误差分析。' },
  { code: 'MTH210', title: 'Partial Differential Equations', titleZh: '偏微分方程', stage: '本科', year: '2024–2025', semester: 'Semester 2', subject: '方程与建模', status: '整理中', blurb: '二阶线性方程分类、特征线法与经典方程。' },
  { code: 'MTH224', title: 'Metric Spaces', titleZh: '度量空间', stage: '本科', year: '2024–2025', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: '完备性、紧性与连续映射的抽象框架。' },
  // —— Y4S1 · 2025–2026 秋季学期 ——
  { code: 'MTH420', title: 'Measure and Integration', titleZh: '测度与积分', stage: '本科', year: '2025–2026', semester: 'Semester 1', subject: '分析', status: '整理中', blurb: '测度论、Lebesgue 积分与收敛定理。' },
  { code: 'MTH418', title: 'Advanced Partial Differential Equations', titleZh: '高级偏微分方程', stage: '本科', year: '2025–2026', semester: 'Semester 1', subject: '方程与建模', status: '整理中', blurb: '弱导数、Sobolev 空间与能量估计。' },
  { code: 'MTH323', title: 'Topology', stage: '本科', year: '2025–2026', semester: 'Semester 1', subject: '几何与拓扑', status: '整理中', blurb: '开集、连通性、紧性与同伦入门。' },
  { code: 'MTH315', title: 'Differential Geometry', stage: '本科', year: '2025–2026', semester: 'Semester 1', subject: '几何与拓扑', status: '整理中', blurb: '曲线曲面、第一基本形式与 Gauss 曲率。' },
  // —— Y4S2 · 2025–2026 春季学期 ——
  { code: 'MTH310', title: 'Functional Analysis', stage: '本科', year: '2025–2026', semester: 'Semester 2', subject: '分析', status: '整理中', blurb: 'Banach / Hilbert 空间、有界算子与对偶空间。' },
  { code: 'MTH308', title: 'Continuum Mechanics', titleZh: '连续介质力学', stage: '本科', year: '2025–2026', semester: 'Semester 2', subject: '方程与建模', status: '整理中', blurb: '应力应变、守恒律与弹性、流体基础。' },
];

export const STAGES = ['本科', '研究生'] as const;
export const SUBJECTS = ['分析', '方程与建模', '代数与离散', '几何与拓扑', '计算与数值'] as const;
