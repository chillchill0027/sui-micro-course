/* Source-backed teaching material. All images remain local for offline lessons. */
window.SUI_EVIDENCE = (() => {
  const sources = {
    food: ['《隋书》卷二十四·食货志', 'https://zh.wikisource.org/wiki/隋書/卷24'],
    emperor: ['《隋书》卷三·炀帝纪上', 'https://zh.wikisource.org/wiki/隋書/卷03'],
    exams: ['《通典》卷十四·选举二', 'https://zh.wikisource.org/wiki/通典/卷014'],
    south: ['《行水金鉴》卷九十二：引大业杂记', 'https://zh.wikisource.org/wiki/行水金鑑_(四庫全書本)/卷092'],
    canal: ['UNESCO：中国大运河', 'https://whc.unesco.org/en/list/1443/'],
    granary: ['河南省文物考古研究院：回洛仓与黎阳仓', 'https://www.hnswwkgyjy.cn/NewsView.php?News_ID=270'],
    vase: ['中国国家博物馆：白釉双龙柄联腹传瓶', 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202209/t20220902_257177.shtml'],
    governance: ['中央纪委国家监委：唐承隋制与三省六部', 'https://www.ccdi.gov.cn/2020/202005/t20200529_219088.html']
  };
  const link = key => `<a href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]} ↗</a>`;
  const reveal = (question, answer) => `<div class="inquiry"><p>${question}</p><button type="button" class="reveal-btn" aria-expanded="false">展开分析 <span>＋</span></button><div class="reveal-answer" hidden>${answer}</div></div>`;
  const source = (...keys) => `<div class="evidence-source">资料来源：${keys.map(link).join(' · ')}</div>`;
  const shell = (eyebrow, title, body, cls = '') => `<article class="evidence-page ${cls}"><header><p class="scene-eyebrow">${eyebrow}</p><h2>${title}</h2></header>${body}</article>`;
  function timeline() {
    return shell('时序总览 / 先看先后，再看重叠', '历史有节点，也有持续的过程。', `<p class="evidence-lead">治理先于统一开始；统一扩大建设的条件；工程、战争与起义又在后期交织。</p><div class="event-sequence">${[['581','建立隋朝','y581'],['583','迁都大兴','y583'],['589','灭陈统一','y589'],['604','炀帝即位','y604'],['618','隋朝灭亡','y618']].map(([y,t,id])=>`<button data-year-jump="${id}"><b>${y}</b><span>${t}</span></button>`).join('')}</div><div class="process-tracks"><div><span>文帝治理</span><i style="--start:0%;--length:62%">581—604 · 贯穿统一前后</i></div><div><span>运河建设</span><i style="--start:65%;--length:19%">605—610</i></div><div><span>起义扩展</span><i style="--start:81%;--length:19%">611 起</i></div><div><span>三征辽东</span><i style="--start:84%;--length:11%">612—614</i></div></div><p class="evidence-note">此处为时间关系示意，条带非严格比例。左侧横条只标当前讲述主题，不表示年代等距或完成百分比。开皇年号为 581—600；文帝在位至 604 年。</p>${reveal('为什么起义排在三征辽东之前？','起义在 611 年已出现；三征辽东发生在 612—614 年。此前征发与战争准备已形成压力，后续战争又加剧危机。不能把 611 年的起义解释成 614 年战事结束后的结果。')}${source('emperor','food')}`, 'timeline-page');
  }
  function canal() {
    return shell('工程与空间 / 分段建设，相互贯通', '运河连接的，是一个供应系统。', `<div class="canal-workspace"><div class="canal-diagram"><svg viewBox="0 0 620 450" role="img" aria-label="隋代运河关系示意：涿郡经永济渠连接黄河；洛阳经通济渠连接淮河；邗沟连接长江；江南河通向余杭。非比例地图。"><g class="river-lines"><path d="M280 70 H565"/><path d="M40 170 H555"/><path d="M210 270 H570"/><path d="M150 345 H580"/><path d="M380 410 H580"/></g><g class="river-labels"><text x="505" y="59">海河水系</text><text x="505" y="158">黄河</text><text x="510" y="258">淮河</text><text x="510" y="333">长江</text><text x="510" y="430">钱塘江水系</text></g><g class="canal-paths"><path class="canal-segment seg-north" d="M355 55 L355 108 L280 170"/><path class="canal-segment seg-middle" d="M135 170 L245 170 L350 270"/><path class="canal-segment seg-middle" d="M350 270 L410 345"/><path class="canal-segment seg-south" d="M410 345 L462 410"/></g><g class="canal-labels"><text x="160" y="108">608 · 永济渠</text><text x="110" y="237">605 · 通济渠</text><text x="226" y="324">605 · 邗沟</text><text x="300" y="395">610 · 江南河</text></g><g class="city-dots"><circle cx="355" cy="55" r="7"/><circle cx="135" cy="170" r="8"/><circle cx="410" cy="345" r="6"/><circle cx="462" cy="410" r="7"/></g><g class="city-labels"><text x="369" y="42">涿郡</text><text x="75" y="151">洛阳</text><text x="420" y="325">江都附近</text><text x="400" y="442">余杭</text></g></svg><div class="canal-controls"><button data-canal="middle" aria-pressed="false">① 605 接江淮</button><button data-canal="north" aria-pressed="false">② 608 通北方</button><button data-canal="south" aria-pressed="false">③ 610 延江南</button><button data-canal="all" aria-pressed="true">完整网络</button></div><p class="evidence-note">教学关系示意，非比例地图；借用、疏浚旧河道与新开河段共同形成网络，不是六年内从零挖出所有河道。</p></div><div class="map-reading"><h3>为什么以洛阳为中心？</h3><p>联系政治中心、北方军事区域与南方粮食产区，水道和仓储共同服务国家供应。</p><blockquote>“引沁水，南达于河，北通涿郡。”<cite>《隋书·炀帝纪上》大业四年</cite></blockquote>${reveal('有运河就一定能把粮食送到需要的人手中吗？','还需要征收、船运、中转仓储与发放制度。运河说明“如何运输”，粮仓遗迹说明“在哪里储藏”；二者相互支撑，也提醒我们区分国家有储备与百姓得到救济。')}</div></div>${source('emperor','south','canal','granary')}`, 'canal-page');
  }
  function governance() {
    return shell('604 · 开皇之治', '一项政令，怎样从皇帝抵达全国？', `<div class="governance-tree" role="img" aria-label="三省六部层级关系：皇帝之下设置中书省、门下省和尚书省，政令依次起草、审议、执行，尚书省下统辖吏户礼兵刑工六部。"><div class="emperor-node"><span>最高决策</span><b>皇帝</b><small>掌握最终裁决权</small></div><div class="tree-stem"></div><div class="three-provinces"><section class="province draft"><span>① 起草</span><b>中书省</b><p>承旨草拟政令</p></section><i aria-hidden="true">→</i><section class="province review"><span>② 审议</span><b>门下省</b><p>审核、封驳政令</p></section><i aria-hidden="true">→</i><section class="province execute"><span>③ 执行</span><b>尚书省</b><p>统领六部施行政务</p></section></div><div class="ministry-branch"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="six-ministries"><section><b>吏部</b><small>官员任免考核</small></section><section><b>户部</b><small>户籍财政田赋</small></section><section><b>礼部</b><small>礼仪学校贡举</small></section><section><b>兵部</b><small>军事政令</small></section><section><b>刑部</b><small>刑法审判</small></section><section><b>工部</b><small>工程营造</small></section></div></div><div class="governance-impact"><p><b>分工</b><span>把决策、审核与执行拆开，减少一处机构独揽政务。</span></p><p><b>集权</b><span>各部门对皇帝负责，中央更容易把政令贯彻到地方。</span></p><p><b>影响</b><span>唐承隋制并继续完善，成为后世中央官制的重要源头。</span></p></div>${source('governance')}`, 'governance-page');
  }
  function landLaw() {
    return shell('604 · 制度支撑', '土地、赋役、军队与法律，彼此相连。', `<div class="support-chain"><section><b>均田制</b><p>授田于民，使农业生产和编户登记相互衔接。</p></section><i>→</i><section><b>租调役</b><p>农户缴纳粮、布帛并承担力役，国家获得稳定财政来源。</p></section><i>→</i><section><b>府兵制</b><p>兵农结合，平时生产、战时出征。</p></section></div><div class="law-panel"><div><p class="scene-eyebrow">开皇律</p><h3>减省刑律，重建秩序</h3><p>开皇律删减繁苛条文，定五刑，对后世律令制度影响深远。它与户籍、土地制度共同构成隋初恢复秩序的基础。</p></div><div class="law-figure" aria-hidden="true"><span>法</span><i></i><span>田</span><i></i><span>兵</span></div></div><p class="evidence-note">均田制、租调役、府兵制都承续北朝制度并在隋代调整。制度并非凭空出现，而是在统一条件下被重新整合。</p>`, 'support-page');
  }
  function examPaper() {
    return shell('607 · 进士科', '把“才识”放进选官标准。', `<div class="exam-flow"><section><span>魏晋南北朝</span><b>九品中正</b><p>以家世、门第为重要依据。</p></section><i>→</i><section><span>隋文帝时期</span><b>废九品中正</b><p>开始以才能取士。</p></section><i>→</i><section><span>隋炀帝时期</span><b>设进士科</b><p>以考试取士，科举制创立。</p></section></div><div class="paper-card"><p>进士科早期</p><h3>时务策</h3><span>围绕政务提出问题，考察应对与见识。</span><small>唐代才逐渐发展出更完备的经义、诗赋等考试内容与程序。</small></div><p class="evidence-lead">科举制把选官权更集中到中央，也使更多非高门出身者获得上升通道；它经历隋创立、唐发展、后世完善的长期过程。</p>${source('exams')}`, 'exam-page');
  }
  function collapse() {
    return shell('612—614 · 三征高句丽', '战争把帝国的征发能力推到极限。', `<div class="war-years"><section><b>612</b><span>第一次东征</span><p>大军渡辽，萨水失利。</p></section><section><b>613</b><span>第二次东征</span><p>杨玄感起兵，后方失控。</p></section><section><b>614</b><span>第三次东征</span><p>内乱未止，国力继续耗损。</p></section></div><blockquote>“天下死于役而家伤于财……老弱耕稼，不足以救饥馁。”<cite>《隋书·食货志》</cite></blockquote><div class="collapse-grid"><p><b>底层百姓</b><br/>徭役、兵役叠加，劳动力离开土地，生产难以维持。</p><p><b>统治集团</b><br/>杨玄感起兵，官员与地方势力相继离心。</p><p><b>各地起义</b><br/>反隋队伍扩展，中央对地方的控制迅速松动。</p></div>${source('food','emperor')}`, 'collapse-page');
  }
  const cards = {
    y581: [{ evidence: 'timeline', title: '事件与过程的时间关系' }],
    yKai: [{year:'yKai',tag:'book',tagText:'史料研读',title:'“仓库盈积”，说明了什么？',yearLine:'597 年 · 开皇十七年',body:`<blockquote>“开皇十七年，户口滋盛，中外仓库，无不盈积。”<cite>《隋书·食货志》；引文转为简体</cite></blockquote><p><strong>史料信息：</strong>“户口”关系国家掌握的人口与赋役基础；“仓库”关系财政和粮食储备。两者支持文帝时期国力恢复的判断。</p>${reveal('国家仓库充实，能推出每户百姓都富足吗？','不能。这是史书对国家层面状况的叙述，不等于所有家庭的生活调查。它能反映人口、财政与储备的发展，却不能证明每一户都富裕。')}${source('food')}`}],
    y605: [
      {evidence:'canal',title:'运河的建设次序与供应网络'},
      {year:'y605',tag:'book',tagText:'遗址 · 文献互证',title:'回洛仓：运河岸边的国家粮仓',yearLine:'605—606 年前后 · 隋炀帝大业初',img:'assets/huiluo-excavation.jpg',real:true,caption:'回洛仓 C3 仓窖发掘中 · 河南省文物考古研究院',body:`<p>在图中寻找圆形仓窖。回洛仓服务东都洛阳；黎阳仓侧重中转。粮仓与水路一起构成粮食的运输、储备网络。</p><p><strong>文献与考古：</strong>文献记“穿三百窖”；考古勘探推测回洛仓约有 700 座仓窖。数字不同，需要结合遗址范围、使用阶段与文献记载范围研究。</p>${reveal('遗址怎样补充文字记载？','文字说明设置与功能；仓窖、沟渠和粮食遗存提供实体证据。两种资料互证，不必要求每个数字完全一致。')}${source('granary')}`},
      {year:'y605',tag:'extend',tagText:'遗迹观察',title:'水路怎样接到粮仓？',yearLine:'隋代遗迹 · 现代考古照片',img:'assets/huiluo-channel.jpg',real:true,caption:'回洛仓漕运沟渠遗迹 · 河南省文物考古研究院',body:`<p>这不是隋代河道的复原图，而是今天发掘出的沟渠遗迹。报告指出，沟渠通往回洛仓管理区。</p><div class="logic-chain"><span>产粮区</span><i>→</i><span>水路</span><i>→</i><span>粮仓</span><i>→</i><span>供应</span></div><p>把遗迹与运河示意图对读：运输线路与仓储节点共同发挥作用。</p>${reveal('评价大运河，至少要分哪两个尺度？','短期：工程征发给当时社会带来的负担。长期：交通与物资交流网络对后世的作用。看到长期收益，不意味着可以忽略建设成本。')}${source('granary','canal')}`},
      {year:'y605',tag:'extend',tagText:'文物观察',title:'一件白瓷里的技术与交流',yearLine:'隋代 · 李静训墓出土',img:'assets/relic-white-vase.jpg',real:true,contain:true,caption:'白釉双龙柄联腹传瓶 · 中国国家博物馆藏',body:`<p><strong>先观察：</strong>白色釉面、相联双腹与对称龙柄。1957 年陕西西安梁家庄李静训墓出土，高 19 厘米。</p><p><strong>再解释：</strong>馆方认为器形可能结合本土盘口瓶与西域双柄银壶的特征，可用于观察制瓷技术和文化交流。</p>${reveal('能据此证明所有人都生活富裕，或它经大运河运来吗？','不能。这是贵族墓葬器物，说明特定群体的物质文化；器形交流也不能直接证明这件器物的运输路线。文物支持的结论，应停留在证据能够说明的范围内。')}${source('vase')}`},
      {year:'y605',tag:'book',tagText:'制度史料',title:'科举：记住时代，不硬绑单一年份',yearLine:'隋炀帝时 · 制度形成过程',body:`<blockquote>“九品及中正至开皇中方罢。”<cite>《通典》卷十四·选举二；引文转为简体</cite></blockquote><div class="logic-chain"><span>文帝取士改革</span><i>→</i><span>炀帝置进士科</span><i>→</i><span>后世发展完善</span></div><p>这条史料说明文帝时期选官制度的改变。教材主线进一步强调隋炀帝时设置进士科。本课把科举与运河放在同一主题中，是为了比较空间联系与人才选拔的变化，<strong>不表示二者在同一天或同一年同时完成</strong>。</p>${reveal('与门第选官相比，变化的关键是什么？','朝廷通过考试等途径选拔人才，选官权力与才识标准发生变化。形成和完善是长期过程，不能说隋代已经拥有后世所有考试程序。')}${source('exams')}`}
    ],
    y604: [
      { evidence:'governance' },
      { evidence:'landLaw' }
    ],
    y607: [
      { evidence:'examPaper' }
    ],
    y610: [
      { evidence:'canal' },
      { year:'y610',tag:'遗址',tagText:'遗迹证据',title:'回洛仓：运输如何变成供应',yearLine:'605—606 年前后 · 东都洛阳',img:'assets/huiluo-excavation.jpg',real:true,caption:'回洛仓 C3 仓窖发掘中 · 河南省文物考古研究院',body:`<p>运河解决的是水路连接；粮仓解决的是储存与调拨。回洛仓服务东都洛阳，黎阳仓承担中转功能。</p><p>考古发现仓窖、漕渠和粮食遗存，使“漕运—仓储—供给”成为可观察的历史证据。</p>${source('granary')}`},
      { year:'y610',tag:'文物',tagText:'文物证据',title:'白瓷：统一时代的技术与交流',yearLine:'隋代 · 李静训墓出土',img:'assets/relic-white-vase.jpg',real:true,contain:true,caption:'白釉双龙柄联腹传瓶 · 中国国家博物馆藏',body:`<p>白胎白釉、双腹相联、对称龙柄。器形结合本土盘口瓶与西域双柄银壶的特征。</p><p>它提示我们：隋代的统一不只改变交通与行政，也为技术传播、文化交流提供了更大的空间。</p>${source('vase')}`}
    ],
    y614: [
      { evidence:'collapse' }
    ]
  };
  function bind(root, jump) {
    let viewer = document.getElementById('photoViewer');
    if (!viewer) {
      viewer = document.createElement('dialog'); viewer.id = 'photoViewer';
      viewer.setAttribute('aria-label','文物与遗迹放大观察');
      viewer.innerHTML = '<form method="dialog"><span>文物与遗迹 · 观察细节</span><button type="submit" aria-label="关闭图片">关闭 ×</button></form><div class="photo-view"><img alt="" /></div><p class="photo-caption"></p>';
      document.body.appendChild(viewer);
    }
    root.querySelectorAll('.photo-open').forEach(b => b.addEventListener('click', () => {
      viewer.querySelector('img').src = b.dataset.photoSrc;
      viewer.querySelector('img').alt = b.dataset.photoCaption;
      viewer.querySelector('.photo-caption').textContent = b.dataset.photoCaption;
      viewer.showModal();
    }));
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
    root.querySelectorAll('.reveal-btn').forEach(b => b.addEventListener('click', () => {
      const answer = b.nextElementSibling, open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(open)); answer.hidden = !open;
      b.innerHTML = open ? '收起分析 <span>−</span>' : '展开分析 <span>＋</span>';
    }));
    root.querySelectorAll('[data-canal]').forEach(b=>b.addEventListener('click',()=>{
      const panel=b.closest('.canal-diagram');panel.dataset.focus=b.dataset.canal;
      panel.querySelectorAll('[data-canal]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    }));

  }

  function unifyMap(stepKey) {
    const steps = {
      '577': {title:'577 · 北周吞并北齐', note:'沿政权界线观察：原北齐疆域转为北周色，北方完成统一；长江以南仍属陈。', cls:'north'},
      '581': {title:'581 · 隋文帝建立隋朝', note:'北方疆域保持一体，政权由北周改为隋；南方陈朝仍与之对峙。', cls:'sui-north'},
      '583': {title:'583 · 迁都大兴城', note:'疆域格局未变；大兴城成为新的政治中心，洛阳连接关东与江淮。', cls:'capital'},
      '589': {title:'589 · 渡江灭陈，统一全国', note:'陈朝疆域转为隋色，南北政权界线消失，统一国家的版图形成。', cls:'all'}
    };
    const step = steps[stepKey] || steps['577'];
    return `<article class="map-film ${step.cls}"><div class="map-film-title"><p>${stepKey} 年</p><h2>${step.title}</h2><span>${step.note}</span></div><div class="map-film-stage"><img src="assets/map-divided-572.jpg" alt="572年北周、北齐、陈政权分布图，叠加疆域变化演示" /><svg viewBox="0 0 2890 2043" aria-hidden="true"><defs><filter id="soft-edge"><feGaussianBlur stdDeviation="1.2"/></filter></defs><path class="territory north-zhou" d="M35 95 L520 72 L910 58 L1110 80 L1260 155 L1370 260 L1475 365 L1585 455 L1650 550 L1580 650 L1500 735 L1405 815 L1300 858 L1190 835 L1090 775 L995 792 L900 855 L790 902 L680 862 L565 898 L445 830 L320 792 L195 738 L72 655 L38 510 Z"/><path class="territory north-qi" d="M1585 455 L1760 405 L1940 418 L2130 395 L2310 455 L2440 555 L2505 665 L2440 760 L2390 855 L2315 950 L2190 1012 L2050 990 L1915 938 L1800 942 L1680 875 L1560 812 L1475 730 L1580 650 L1650 550 Z"/><path class="territory chen" d="M1080 875 L1200 842 L1325 862 L1455 826 L1580 850 L1700 895 L1830 925 L1960 952 L2110 1000 L2260 1020 L2385 1100 L2410 1205 L2475 1315 L2420 1435 L2320 1530 L2185 1610 L2055 1690 L1900 1755 L1740 1730 L1600 1650 L1490 1540 L1395 1430 L1300 1350 L1210 1250 L1150 1135 L1070 1015 Z"/><path class="territory sui-all" d="M35 95 L520 72 L910 58 L1110 80 L1260 155 L1370 260 L1475 365 L1760 405 L1940 418 L2130 395 L2310 455 L2440 555 L2505 665 L2440 760 L2390 855 L2315 950 L2385 1100 L2410 1205 L2475 1315 L2420 1435 L2320 1530 L2185 1610 L2055 1690 L1900 1755 L1740 1730 L1600 1650 L1490 1540 L1395 1430 L1300 1350 L1210 1250 L1150 1135 L1070 1015 L1080 875 L995 792 L900 855 L790 902 L680 862 L565 898 L445 830 L320 792 L195 738 L72 655 L38 510 Z"/><g class="state-label label-zhou"><text x="1110" y="610">北周</text></g><g class="state-label label-qi"><text x="2040" y="730">北齐</text></g><g class="state-label label-chen"><text x="1850" y="1320">陈</text></g><g class="state-label label-sui"><text x="1440" y="690">隋</text></g><g class="capital-pin daxing"><circle cx="1540" cy="1050" r="20"/><text x="1580" y="1042">大兴城</text><text x="1580" y="1082">583</text></g><g class="capital-pin luoyang"><circle cx="1765" cy="1115" r="16"/><text x="1800" y="1112">洛阳</text></g><path class="river-arrow" d="M1850 1090 C1930 1160 2030 1200 2150 1250"/></svg></div><div class="map-film-caption"><span class="map-key">疆域变化</span><p>${step.note}</p></div></article>`;
  }

  function unifyMapAccurate(stepKey) {
    const steps = {
      '577': {
        title: '577 · 北周吞并北齐',
        note: '直接展示原图：原北齐疆域并入北周，北方完成统一；长江以南仍属陈。',
        img: 'assets/unify-577.png',
        alt: '577年原图：北周吞并北齐后的北方版图，南方仍为陈朝'
      },
      '581': {
        title: '581 · 隋文帝建立隋朝',
        note: '直接展示原图：北方版图不变，政权由北周改为隋；南方陈朝仍与之对峙。',
        img: 'assets/unify-581.png',
        alt: '581年原图：隋代周后的南北对峙版图'
      },
      '583': {
        title: '583 · 迁都大兴城',
        note: '直接展示原图：疆域格局未变；政治中心在大兴（长安），洛阳连接关东与江淮。',
        img: 'assets/unify-581.png',
        alt: '583年前后原图：隋与陈对峙，都城在关中大兴'
      },
      '589': {
        title: '589 · 渡江灭陈，统一全国',
        note: '直接展示原图：陈朝并入隋，南北政权界线消失，统一版图形成。',
        img: 'assets/unify-589.png',
        alt: '589年原图：隋统一全国后的版图'
      }
    };
    const step = steps[stepKey] || steps['577'];
    return `<article class="map-film map-original">
      <div class="map-film-title">
        <p>${stepKey} 年</p>
        <h2>${step.title}</h2>
        <span>${step.note}</span>
      </div>
      <div class="map-film-stage">
        <img class="original-map" src="${step.img}" alt="${step.alt}" />
      </div>
      <div class="map-film-caption">
        <span class="map-key">原图</span>
        <p>完整历史地图原图（含图例与今地名对照）。对照底图：572 年分裂局面 / 612 年隋朝形势。</p>
      </div>
      <div class="map-original-switch" role="group" aria-label="切换原始地图">
        <button type="button" data-original="assets/map-divided-572.jpg">572 分裂原图</button>
        <button type="button" data-original="assets/map-sui-612.jpg">612 隋朝原图</button>
      </div>
    </article>`;
  }

  return {cards, render: type => ({timeline,canal,governance,landLaw,examPaper,collapse}[type])(), unifyMap: unifyMapAccurate, bind};
})();
