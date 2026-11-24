// 课程资料文档 —— 一门课的一份合并 PDF 及其目录（代表样本 MTH118，2026-11-24 导入；后续课程照此结构）
// 目录 JSON 由 tools/pdf-toc-to-json.mjs 从 PDF 书签生成，中文说明在对照表里人工维护后一并写入
import type { RelatedLink } from './notes';
import mth118Toc from './course-docs/mth118.toc.json';

export interface TocSection {
  no: string;        // 书内编号（1.1 / 6.2 / 12.3）
  title: string;     // 原题名
  zh?: string;       // 中文说明（可选）
  page: number;      // 书内印刷页码（PDF 页脚标注）
}
export interface TocChapter { no: string; title: string; zh?: string; page: number; sections: TocSection[] }
export interface TocPart { no: string; title: string; key: string; zh: string; page: number; chapters: TocChapter[] }

export interface CourseDoc {
  code: string;       // 课程代码（对应 COURSES 的一条）
  pdf: string;        // PDF 的站内路径
  pages: number;      // PDF 总页数
  size: string;       // 展示用文件体积
  offset: number;     // PDF 物理页 = 书内页码 + offset；目录里一律记书内页码，生成链接时再换算（规划 §4.3）
  cover: { year: string; term: string; version: string; updated: string };  // PDF 封面 / 文档信息页所载的笔记版本
  coverImage?: string;              // PDF 封面页图片（第 1 页渲染），档案卡左侧展示（站主 2026-11-24：课程页统一这样做）
  scope: string;      // 资料范围
  parts: TocPart[];
  notes?: Record<string, string>;   // 各分区的补充说明（来源、解答署名等），键为 Part 的 key
  related?: RelatedLink[];          // 站内关联入口
}

// 三个资料分区的固定英文标题、通用说明与计数单位（规划 §4.2 的三类资料）
export const PART_LABELS: Record<string, { en: string; desc: string; unit: string }> = {
  knowledge:    { en: 'Knowledge Notes', desc: '定义、定理、方法、例题与常见错误。', unit: '章' },
  ttl:          { en: 'TTL Materials',   desc: '每次习题课（tutorial / task-sheet）的题目与结构化解答。', unit: '次' },
  'past-papers': { en: 'Past Papers',    desc: '按考试学年归档的试题、完整解答与评分要点。', unit: '份' },
};

export const COURSE_DOCS: Record<string, CourseDoc> = {
  MTH118: {
    code: 'MTH118',
    pdf: '/courses/mth118/MTH118.pdf',
    coverImage: '/courses/mth118/cover.png',
    pages: 248,
    size: '0.95 MB',
    offset: mth118Toc.offset,
    cover: { year: '2025–2026', term: 'Semester 2', version: '1', updated: '2026-07-15' },
    scope: '知识笔记 5 章 · TTL × 6 · 往年试题 × 3',
    parts: mth118Toc.parts,
    // 站主 2026-11-24：课程资料（含往年试题）全部公开，各分区一视同仁，不另加说明
    notes: {
      knowledge: '按 MTH118 讲义的顺序与记号整理，讲义中省略的步骤在此写全，并标注了对讲义的更正与考试重点。',
    },
    related: [{ kicker: '相关个人笔记', title: '数学分析 · Mathematical Analysis', desc: '个人笔记中对应的学科页', href: '/notes/analysis/' }],
  },
};
