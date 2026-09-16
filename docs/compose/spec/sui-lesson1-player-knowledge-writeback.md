---
feature: sui-lesson1-player-knowledge-writeback
status: delivered
updated: 2026-09-15
branch: feat/player-knowledge-writeback
---

# 课堂播放器严格对齐知识点内容库

## Report

**What was built** — 以 `docs/teaching/隋朝第1课-知识点内容库.md` 为唯一底稿重写播放器：删除白瓷、回洛仓、时序总览、独立「减轻赋役/统一币制/置仓/仓库盈积/长城驰道/秦隋对照卡/一句话主线」等未在内容库中作为独立课页的内容；604 收成六页契约（总述→三省介绍→课堂活动→户籍两法→开皇律/三柱→合力伏笔）；补「开皇年号」「关陇集团」挂靠 577/581、「统一意义」「巡幸江都含流求」「讨论五题」等；`evidence.js` 只保留 governance / policyFlow / landLaw / courtPsych / examPaper / collapse / canal / unifyMap。清理未引用资产，新增 `AGENTS.md` 与精简 README。

**Verification** — ORDER 标题均存在；括号平衡；白瓷/回洛仓/时序总览等从 player+evidence 消失；含嘉仓、流求、妇人从役、内史省、封驳、五题讨论可检索；未引用 JPG 已删。

**Journey log** — 内容库写明「统一币制、度量衡与仓储漕运并入 6.6 备讲，不单独成页」，故并入「合力与伏笔」正文。

## Tasks
- [x] T1 删除未提及内容
- [x] T2 补齐缺失知识点并固定 604 六页
- [x] T3 整理工程文件与 AGENTS.md
