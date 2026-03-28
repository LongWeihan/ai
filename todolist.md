# Homepage Renovation Todo List

更新时间：2026-03-28

## 状态约定

- `[ ]` 未开始
- `[-]` 进行中
- `[x]` 已完成

## 总体工期

- [x] P0 前期准备与规则固化
- [x] P1 内容策展与双语文案重写
- [x] P2 首页与项目页版式改造
- [x] P3 视觉系统与主题重设
- [x] P4 默认亮色与切换逻辑修正
- [x] P5 项目封面与素材统一
- [x] P6 构建验证与收尾验收

## 分阶段任务

### P1 内容策展与双语文案重写

- [x] 重写英文首页首屏文案
- [x] 重写中文首页首屏文案
- [x] 新增 `codex-long-running-harness` 中英文项目页
- [x] 新增 `taskcaptain` 中英文项目页
- [x] 新增 `crewai-rs` 中英文项目页
- [x] 下调旧项目层级并重排 `importance`
- [x] 重写项目页分层结构文案

### P2 首页与项目页版式改造

- [x] 重做首页 Hero 结构
- [x] 重做首页 Featured Projects 区块
- [x] 重做项目页分组展示
- [x] 优化导航条中的语言切换展示
- [x] 优化卡片的信息密度与层级

### P3 视觉系统与主题重设

- [x] 重设 light / dark 主题色 token
- [x] 引入新的标题 / 正文字体体系
- [x] 建立研究型主页背景与卡片样式
- [x] 去除默认 al-folio 紫色模板感
- [x] 补充必要的微动效

### P4 默认亮色与切换逻辑修正

- [x] 将首次访问默认主题固定为 light
- [x] 保留用户主题偏好记忆
- [x] 检查语言切换的路径映射
- [x] 减少主题切换时的首屏闪烁

### P5 项目封面与素材统一

- [x] 为三大新项目准备统一风格封面
- [x] 校正旧项目封面风格差异
- [x] 检查图片在亮暗主题下的显示效果
- [x] 优化移动端图片占比

### P6 构建验证与收尾验收

- [x] 执行构建验证（本机缺少 Ruby / Bundler，改为 GitHub Actions 远端构建验证）
- [x] 检查英文首页与中文首页
- [x] 检查英文项目页与中文项目页
- [x] 检查亮暗切换
- [x] 检查桌面端和移动端
- [x] 做最终文案与视觉微调

## 施工记录

- [x] 2026-03-28 | P1 完成：首页与项目页的中英文内容重构，并引入三大新旗舰项目。
  涉及文件：`_pages/about.md`、`_pages/zh/about.md`、`_pages/projects.md`、`_pages/zh/projects.md`、`_projects/*.md`
  验证：已检查项目排序和中英配对
  遗留：需在可运行环境中做真实页面验收

- [x] 2026-03-28 | P2 完成：首页 Hero、项目分组页和项目卡片结构改造。
  涉及文件：`_includes/projects.liquid`、`_layouts/about.liquid`、相关页面 markdown
  验证：已静态复核模板结构
  遗留：需浏览器最终检查移动端观感

- [x] 2026-03-28 | P3 完成：视觉系统改造为简约专业的 AI 研究型风格。
  涉及文件：`_config.yml`、`_sass/_themes.scss`、`_sass/_portfolio.scss`、`assets/css/main.scss`
  验证：已检查主题 token、字体加载配置和样式入口
  遗留：Jekyll 未实际构建

- [x] 2026-03-28 | P4 完成：默认亮色逻辑与切换交互修正。
  涉及文件：`assets/js/theme.js`、`_includes/header.liquid`、`_sass/_themes.scss`
  验证：已确认主题脚本不再保留 `system` 默认逻辑
  遗留：需在浏览器中验证首次访问与持久化

- [x] 2026-03-28 | P5 完成：三大新项目封面素材统一。
  涉及文件：`assets/img/projects/codex_long_running_harness.svg`、`assets/img/projects/taskcaptain.svg`、`assets/img/projects/crewai_rs.svg`
  验证：所有项目图片路径已静态解析通过
  遗留：无

- [x] 2026-03-28 | P6 完成：远端构建、线上验收与仓库上传完成。
  涉及环境：本机缺少 Ruby / Bundler，因此改用 GitHub Actions 执行远端 Jekyll 构建与部署
  验证：主页改造已上传为 `5d4e66f`，施工记录同步后 `main` 最新为 `b10f598`；`Deploy site` 工作流成功；`gh-pages` 已更新；线上英文首页、中文首页、项目页、默认亮色、暗色切换、移动端单列布局和 `codex-long-running-harness` 项目详情页均已通过检查
  遗留：本地 Ruby 构建环境仍未补齐，但不影响当前线上主页发布
