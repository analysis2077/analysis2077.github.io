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
  desc: string;       // 讨论班介绍（2–4 句）
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
export const SEMINARS: Seminar[] = [];

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
