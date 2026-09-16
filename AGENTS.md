# 隋朝微格课 · Agent 工作说明

## 项目目标
人教版七年级下册第 1 课《隋朝统一与灭亡》微格课网页讲义。**唯一内容底稿**是：

`docs/teaching/隋朝第1课-知识点内容库.md`（主工作树根目录亦有同名文件）

播放器卡片、证据页、总结与讨论题，均须与该内容库对齐；内容库未提及的知识点不要保留，缺失的要补齐。

## 课序（固定）
封面 → 导入（37/1300）→ 577 → 581 → 583 → 589 → 604 开皇之治（六页）→ 605 → 607 → 610 → 614 → 615 → 618 → 总结 → 讨论

604 六页契约：总述 → 三省六部介绍 → 课堂活动（政令推演/封驳）→ 大索貌阅与输籍定样 → 租调/府兵/开皇律 → 合力与伏笔。币制、度量衡、仓储只在 6.6 备讲，不单独成页。

## 主交付物
- `web-lessons/sui-lesson1-player.html` — **课堂主推**
- `web-lessons/assets/evidence.js` — 证据页（governance / policyFlow / landLaw / courtPsych / examPaper / collapse / canal / unifyMap）
- `web-lessons/assets/presentation.css` — 视觉
- 配图：`web-lessons/assets/`（本地相对路径，勿改远程 URL）

`matrix / class / timeline` 为辅助页，内容深度以 player + 内容库为准，非本轮必改。

## 史实与表述分寸
- 教材必讲与拓展分标；不得与人教版教材冲突。
- 进士科：教材系于「隋炀帝时」，形成是过程；课序节点用 607。
- 继位疑云不采野闻；三征对象称「高句丽」；起义首发山东、611 王薄早于 612 征辽。
- 文献引文用简体并标出处。

## 改动约定
1. 先改 `docs/teaching/隋朝第1课-知识点内容库.md`（若需增删知识点），再写回 player/evidence。
2. `CARDS` 中每张卡挂 `year`；页序写在 `cardsOfYear` 的 `ORDER` 映射；证据页用 `@type` 占位。
3. 不引入外部 CDN、不启动本地服务器；双击 HTML 即可。
4. 课堂页分析一律直接展示，禁止「展开分析」等需点击才出现的内容（`reveal` 只生成问答块，无按钮）。
5. 验证：脚本括号平衡、ORDER 标题均存在、关键史实短语可检索；有条件再用无头 Chrome dump DOM。

## 分支
内容写回分支示例：`feat/player-knowledge-writeback`。合并前不要在 main 上直接堆未隔离大改。
