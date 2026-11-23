// 全站基础信息（改名只需改这里）
export const SITE = {
  name: 'The Unfinished Way',
  nameCn: '未竟之路',
  owner: '陈亮羽',
  tagline: '个人数学档案 · Mathematical Archive',
  desc: '一位数学研究生的个人档案馆：课程笔记、个人笔记、随笔、讲课与讨论班、作品。',
  nav: [
    { href: '/', zh: '首页', en: 'Home' },
    { href: '/about/', zh: '关于', en: 'About' },
    { href: '/courses/', zh: '课程笔记', en: 'Courses' },
    { href: '/notes/', zh: '个人笔记', en: 'Notes' },
    { href: '/essays/', zh: '随笔', en: 'Essays' },
    { href: '/talks/', zh: '讲课与讨论班', en: 'Talks' },
    { href: '/works/', zh: '作品', en: 'Works' },
  ],
};

export const UPDATES = [
  { date: '2026-11-23', title: '随笔板块上线：首篇理论专题《实数系完备性六大定理互证》（PDF · 30 条证明）', isNew: true },
  { date: '2026-11-23', title: '讲课与讨论班改为条目式归档：介绍 · 材料 · 讲课视频链接', isNew: false },
  { date: '2026-11-23', title: '课程清单导入：本科阶段 17 门（2022–2026 · XJTLU）', isNew: false },
  { date: '2026-11-23', title: '个人笔记确定六大学科，一学科一学院配色', isNew: false },
  { date: '2026-11-23', title: '四个 LaTeX 模板公开发布（GitHub Releases 可下载）', isNew: false },
  { date: '2026-11-23', title: '全站搜索上线（支持中文主题 / 英文题名 / 课程代码）', isNew: false },
];
