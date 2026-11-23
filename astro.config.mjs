import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

// GitHub Pages 用户站点地址（仓库名 analysis2077.github.io）
export default defineConfig({
  site: 'https://analysis2077.github.io',
  devToolbar: { enabled: false },
  // Pagefind 搜索：构建后自动对 dist 建索引；dev / preview 由集成伺服 /pagefind
  integrations: [pagefind()],
  // 旧分册网址 → 学科页（一门学科对应一本笔记，分册层已并入学科页；已发布链接不失效）
  redirects: {
    '/notes/pde/basic-pde/': '/notes/pde/',
  },
});
