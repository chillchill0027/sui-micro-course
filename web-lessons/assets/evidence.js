/* 课堂证据模块 — 仅保留知识点内容库明确要求的页面 */
window.SUI_EVIDENCE = (() => {
  const sources = {
    food: ['《隋书》卷二十四·食货志', 'https://zh.wikisource.org/wiki/隋書/卷24'],
    emperor: ['《隋书》卷三·炀帝纪上', 'https://zh.wikisource.org/wiki/隋書/卷03'],
    exams: ['《通典》卷十四·选举二', 'https://zh.wikisource.org/wiki/通典/卷014'],
    canal: ['UNESCO：中国大运河', 'https://whc.unesco.org/en/list/1443/'],
    governance: ['中央纪委国家监委：唐承隋制与三省六部', 'https://www.ccdi.gov.cn/2020/202005/t20200529_219088.html']
  };
  const link = key => `<a href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]} ↗</a>`;
  const reveal = (question, answer) => `<div class="inquiry"><p>${question}</p><div class="reveal-answer">${answer}</div></div>`;
  const source = (...keys) => `<div class="evidence-source">资料来源：${keys.map(link).join(' · ')}</div>`;
  const shell = (eyebrow, title, body, cls = '') => `<article class="evidence-page ${cls}"><header><p class="scene-eyebrow">${eyebrow}</p><h2>${title}</h2></header>${body}</article>`;

  function canal() {
    return shell('工程与空间 / 分段建设，相互贯通', '运河连接的，是一个供应系统。', `<div class="canal-workspace"><div class="canal-diagram"><svg viewBox="0 0 620 450" role="img" aria-label="隋代运河关系示意：涿郡经永济渠连接黄河；洛阳经通济渠连接淮河；邗沟连接长江；江南河通向余杭。非比例地图。"><g class="river-lines"><path d="M280 70 H565"/><path d="M40 170 H555"/><path d="M210 270 H570"/><path d="M150 345 H580"/><path d="M380 410 H580"/></g><g class="river-labels"><text x="505" y="59">海河水系</text><text x="505" y="158">黄河</text><text x="510" y="258">淮河</text><text x="510" y="333">长江</text><text x="510" y="430">钱塘江水系</text></g><g class="canal-paths"><path class="canal-segment seg-north" d="M355 55 L355 108 L280 170"/><path class="canal-segment seg-middle" d="M135 170 L245 170 L350 270"/><path class="canal-segment seg-middle" d="M350 270 L410 345"/><path class="canal-segment seg-south" d="M410 345 L462 410"/></g><g class="canal-labels"><text x="160" y="108">608 · 永济渠</text><text x="110" y="237">605 · 通济渠</text><text x="226" y="324">605 · 邗沟</text><text x="300" y="395">610 · 江南河</text></g><g class="city-dots"><circle cx="355" cy="55" r="7"/><circle cx="135" cy="170" r="8"/><circle cx="410" cy="345" r="6"/><circle cx="462" cy="410" r="7"/></g><g class="city-labels"><text x="369" y="42">涿郡</text><text x="75" y="151">洛阳</text><text x="420" y="325">江都附近</text><text x="400" y="442">余杭</text></g></svg><div class="canal-controls"><button data-canal="middle" aria-pressed="false">① 605 通济渠·邗沟</button><button data-canal="north" aria-pressed="false">② 608 永济渠</button><button data-canal="south" aria-pressed="false">③ 610 江南河</button><button data-canal="all" aria-pressed="true">完整网络</button></div><p class="evidence-note">教学关系示意，非比例地图。读图三步：先找中心洛阳，再找北端涿郡与南端余杭，最后依次辨认四段河道。</p></div><div class="map-reading"><h3>为什么以洛阳为中心？</h3><p>联系政治中心、北方军事区域与南方粮食产区；水道和仓储共同服务国家供应。含嘉仓、洛口仓等大型仓窖便于分段储存。</p><blockquote>“引沁水，南达于河，北通涿郡。”<cite>《隋书·炀帝纪上》大业四年</cite></blockquote>${reveal('为何不径直修一条从长安到杭州的直线运河？','主要河流多自西向东，人工运河要缝合五大东西向水系，补上南北纵向联系；工程须沿可利用的河道与地势选址。')}</div></div>${source('emperor','canal')}`, 'canal-page');
  }

  function governance() {
    return shell('604 · 三省六部制（制度介绍）', '中书出令 · 门下审核 · 尚书执行 · 六部办事', `<div class="governance-tree" role="img" aria-label="三省六部层级：皇帝最终裁决；隋称中书省为内史省；门下省审核封驳；尚书省统领六部。"><div class="emperor-node"><span>最终裁决</span><b>皇帝</b><small>三省皆对皇帝负责</small></div><div class="tree-stem"></div><div class="three-provinces"><section class="province draft"><span>① 出令</span><b>内史省</b><p>草拟诏令<br/><small>隋因避讳改称；唐复称中书省</small></p></section><i aria-hidden="true">→</i><section class="province review"><span>② 审议</span><b>门下省</b><p>审核、封驳</p></section><i aria-hidden="true">→</i><section class="province execute"><span>③ 执行</span><b>尚书省</b><p>统领施政</p></section></div><div class="ministry-branch"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="six-ministries"><section><b>吏部</b><small>任免考核勋爵</small></section><section><b>户部</b><small>户口田赋财政<br/><small>隋曰民部</small></small></section><section><b>礼部</b><small>礼仪学校贡举</small></section><section><b>兵部</b><small>武选军令军政</small></section><section><b>刑部</b><small>刑法审判复核<br/><small>隋初曰都官</small></small></section><section><b>工部</b><small>工程水利营造</small></section></div></div><div class="governance-impact"><p><b>分立</b><span>决策、审议、执行三者分开，避免事权集于一人。</span></p><p><b>集权</b><span>三省皆对皇帝负责，便于皇权集中与政令贯彻。</span></p><p><b>专业</b><span>六部分工承办，对应教材「简化机构、提高行政效率」。</span></p><p><b>影响</b><span>唐代趋于完善，成为中国古代中央官制主干。</span></p></div>${source('governance')}`, 'governance-page');
  }

  function policyFlow() {
    return shell('604 · 三省六部制（课堂活动）', '一项政令，如何走完「撰写—审核—执行」？', `<p class="evidence-lead">拟设案例：开皇年间要在关东增置官仓并调粮入京。所循机制属实，细节可简化。</p><div class="policy-steps"><section><span>0</span><b>皇帝</b><p>因关中粮价不稳，提出增储之意（最终裁决）。</p></section><section><span>①</span><b>内史省</b><p>承旨草拟诏书：置仓地点、调粮数额、期限与责任人。</p></section><section><span>②</span><b>门下省</b><p>审核；若认为征调过重、有妨农时，可<strong>封驳退回</strong>；认可则副署生效。</p></section><section><span>③</span><b>尚书省</b><p>奉诏分派：户部核账定额，工部营造仓窖，兵部保障漕路，吏部考核功过。</p></section><section><span>回</span><b>回报裁决</b><p>执行中的账目与进度回报尚书省，重大事项奏闻皇帝。</p></section></div><div class="logic-chain"><span>撰写</span><i>→</i><span>审核</span><i>→</i><span>执行</span><i>·</i><span>按专业分工</span></div><p class="evidence-note"><strong>角色扮演：</strong>三名学生分饰内史（拟写）、门下（审核或驳回）、尚书（分派执行）；教师传递旨意纸条走完全流程，并安排门下故意封驳一次。</p>${reveal('封驳是在牵制皇权，还是在替皇帝纠正失误？','本质是以程序减少施政失误，而非拆解皇权本身。皇帝仍作最终裁决，但政令须经三道程序、六个专业部门方能落地。')}${source('governance','food')}`, 'governance-page');
  }

  function landLaw() {
    return shell('604 · 租调 · 府兵 · 开皇律', '经济、军事、法律三柱，共同撑起开皇之治。', `<div class="support-chain"><section><b>租调制</b><p><strong>经济支柱。</strong>均田授田 → 编户输租（粮）、调（绢布）、服力役；「岁役功不过二十日，不役者收庸」。唐租庸调由此发展。</p></section><i>→</i><section><b>府兵制</b><p><strong>军事支柱。</strong>兵农合一、军府统兵、军权归中央。590 年诏军人悉属州县，兵农户籍合一。</p></section><i>→</i><section><b>开皇律</b><p><strong>法律支柱。</strong>十二篇、五刑、十恶；废枭首轘裂等酷刑；为《唐律疏议》直接蓝本。</p></section></div><div class="law-panel"><div><p class="scene-eyebrow">三柱合论</p><h3>足以兴，也足以亡</h3><p>租调充实财政与人力，府兵以低成本维持军队，开皇律统一法度；与三省六部、户籍整顿相互配套。</p><p>炀帝后期却同时压垮三柱：力役无度使均田农户破产，连年远征使府兵空转耗竭，法外科派使开皇律信誉破产。</p></div><div class="law-figure" aria-hidden="true"><span>经</span><i></i><span>军</span><i></i><span>法</span></div></div><p class="evidence-note">成就开皇之治的，与后来被超常透支的，是同一套高效国家机器——关键在执掌者如何使用。</p>`, 'support-page');
  }

  function courtPsych() {
    return shell('605 · 施政心理', '功业冲动 · 反馈失灵 · 合法性焦虑', `<div class="policy-steps"><section><span>1</span><b>功业冲动</b><p>试图在有限时间内同时完成东都、运河、巡幸礼制与对外武功，把帝国强盛「直观呈现」。</p></section><section><span>2</span><b>过高自评</b><p>自恃承接文帝雄厚基业，轻视前代速亡教训。</p></section><section><span>3</span><b>反馈失灵</b><p>不愿被谏诤打断工程节奏，对「成本最终由谁承担」趋于麻木。</p></section><section><span>4</span><b>路径依赖</b><p>每一次大规模动员的得手，都强化「还可以再征发一次」，直至系统断裂。</p></section></div><p class="evidence-lead">对照板书：文帝「先核实户口、再减轻赋役」 ↔ 炀帝「先排定工程、再强征人力」。</p>${reveal('这些工程本身或许各有道理，何以仍不免亡国？','工程目的合理，不等于动员方式可无限透支。当国家机器的高效被用于超常征发，赋役契约断裂，社会无法再生产。')}${source('emperor','food')}`, 'support-page');
  }

  function examPaper() {
    return shell('607 · 进士科', '把「才识」放进选官标准。', `<div class="exam-flow"><section><span>魏晋南北朝</span><b>九品中正</b><p>以家世、门第为重要依据；「上品无寒门，下品无势族」。</p></section><i>→</i><section><span>隋文帝时期</span><b>废九品中正</b><p>开皇中方罢；开始以才能取士。</p></section><i>→</i><section><span>隋炀帝时期</span><b>设进士科</b><p>以考试取士，科举制创立。</p></section></div><div class="paper-card"><p>进士科早期</p><h3>时务策</h3><span>围绕治国、边防、吏治等现实政务书面作答，考察见识与分析能力。</span><small>唐代才逐渐发展出更完备的经义、诗赋等考试内容与程序；不能把后世八股倒推到隋代。</small></div><p class="evidence-lead">科举制把选官权更集中到中央，也使更多非高门出身者获得上升通道；它经历隋创立、唐发展、后世完善的长期过程。教材表述为「隋炀帝时设置进士科」，形成是一个过程。</p>${source('exams')}`, 'exam-page');
  }

  function collapse() {
    return shell('612—614 · 三征高句丽', '战争把帝国的征发能力推到极限。', `<div class="war-years"><section><b>612</b><span>第一次东征</span><p>大军渡辽，萨水失利。</p></section><section><b>613</b><span>第二次东征</span><p>杨玄感起兵，后方失控。</p></section><section><b>614</b><span>第三次东征</span><p>内乱未止，国力继续耗损。</p></section></div><blockquote>“天下死于役而家伤于财……老弱耕稼，不足以救饥馁。”<cite>《隋书·食货志》</cite></blockquote><div class="collapse-grid"><p><b>底层百姓</b><br/>徭役、兵役叠加，劳动力离开土地，生产难以维持。</p><p><b>统治集团</b><br/>杨玄感起兵，官员与地方势力相继离心。</p><p><b>各地起义</b><br/>反隋队伍扩展，中央对地方的控制迅速松动。</p></div>${source('food','emperor')}`, 'collapse-page');
  }

  const cards = {
    y604: [
      { evidence: 'governance', title: '三省六部制（制度介绍）' },
      { evidence: 'policyFlow', title: '三省六部制（课堂活动）' },
      { evidence: 'landLaw', title: '租调、府兵与开皇律' }
    ],
    y605: [
      { evidence: 'courtPsych', title: '施政心理' }
    ],
    y607: [
      { evidence: 'examPaper', title: '进士科制度流变' }
    ],
    y610: [
      { evidence: 'canal', title: '运河分段示意' }
    ],
    y614: [
      { evidence: 'collapse', title: '三征与崩溃' }
    ]
  };

  function bind(root, jump) {
    root.querySelectorAll('[data-year-jump]').forEach(b => b.addEventListener('click', () => jump(b.dataset.yearJump)));
    root.querySelectorAll('[data-original]').forEach(b => b.addEventListener('click', () => {
      const page = b.closest('.map-original');
      if (!page) return;
      const img = page.querySelector('.original-map');
      if (!img) return;
      img.src = b.dataset.original;
      img.alt = b.textContent.trim() + ' · 完整历史地图原图';
      page.querySelectorAll('[data-original]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    }));
    root.querySelectorAll('[data-canal]').forEach(b => b.addEventListener('click', () => {
      const panel = b.closest('.canal-diagram');
      panel.dataset.focus = b.dataset.canal;
      panel.querySelectorAll('[data-canal]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    }));
  }

  function unifyMapAccurate(stepKey) {
    const MAP_NORTH = 'assets/map-north-577.jpg';
    const MAP_CAPITALS = 'assets/map-two-capitals.jpg';
    const MAP_SUI = 'assets/map-sui-unified.jpg';
    const steps = {
      '577': { title: '577 · 北周吞并北齐', img: MAP_NORTH, alt: '北周、北齐、陈政权分布', mod: 'map-north' },
      '581': { title: '581 · 隋文帝建立隋朝', img: MAP_SUI, alt: '隋朝形势', mod: 'map-sui' },
      '583': { title: '583 · 迁都大兴城', img: MAP_CAPITALS, alt: '标注两京：大兴与洛阳', mod: 'map-two' },
      '589': { title: '589 · 渡江灭陈，统一全国', img: MAP_SUI, alt: '隋朝统一后的形势', mod: 'map-sui' }
    };
    const step = steps[stepKey] || steps['577'];
    return `<article class="map-film map-original ${step.mod}">
      <div class="map-film-title">
        <p>${stepKey} 年</p>
        <h2>${step.title}</h2>
      </div>
      <div class="map-film-stage">
        <img class="original-map" src="${step.img}" alt="${step.alt}" />
      </div>
    </article>`;
  }

  return {
    cards,
    render: type => ({ canal, governance, policyFlow, landLaw, courtPsych, examPaper, collapse }[type])(),
    unifyMap: unifyMapAccurate,
    bind
  };
})();
