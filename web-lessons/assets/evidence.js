/* Source-backed teaching material. All images remain local for offline lessons. */
window.SUI_EVIDENCE = (() => {
  const sources = {
    food: ['《隋书》卷二十四·食货志', 'https://zh.wikisource.org/wiki/隋書/卷24'],
    emperor: ['《隋书》卷三·炀帝纪上', 'https://zh.wikisource.org/wiki/隋書/卷03'],
    exams: ['《通典》卷十四·选举二', 'https://zh.wikisource.org/wiki/通典/卷014'],
    south: ['《行水金鉴》卷九十二：引大业杂记', 'https://zh.wikisource.org/wiki/行水金鑑_(四庫全書本)/卷092'],
    canal: ['UNESCO：中国大运河', 'https://whc.unesco.org/en/list/1443/'],
    granary: ['河南省文物考古研究院：回洛仓与黎阳仓', 'https://www.hnswwkgyjy.cn/NewsView.php?News_ID=270'],
    vase: ['中国国家博物馆：白釉双龙柄联腹传瓶', 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202209/t20220902_257177.shtml']
  };
  const link = key => `<a href="${sources[key][1]}" target="_blank" rel="noopener noreferrer">${sources[key][0]} ↗</a>`;
  const reveal = (question, answer) => `<div class="inquiry"><p>${question}</p><button type="button" class="reveal-btn" aria-expanded="false">展开分析 <span>＋</span></button><div class="reveal-answer" hidden>${answer}</div></div>`;
  const source = (...keys) => `<div class="evidence-source">资料来源：${keys.map(link).join(' · ')}</div>`;
  const shell = (eyebrow, title, body, cls = '') => `<article class="evidence-page ${cls}"><header><p class="scene-eyebrow">${eyebrow}</p><h2>${title}</h2></header>${body}</article>`;
  function timeline() {
    return shell('时序总览 / 先看先后，再看重叠', '历史有节点，也有持续的过程。', `<p class="evidence-lead">治理先于统一开始；统一扩大建设的条件；工程、战争与起义又在后期交织。</p><div class="event-sequence">${[['581','建立隋朝','y581'],['583','迁都大兴','y583'],['589','灭陈统一','y589'],['604','炀帝即位','y604'],['618','隋朝灭亡','y618']].map(([y,t,id])=>`<button data-year-jump="${id}"><b>${y}</b><span>${t}</span></button>`).join('')}</div><div class="process-tracks"><div><span>文帝治理</span><i style="--start:0%;--length:62%">581—604 · 贯穿统一前后</i></div><div><span>运河建设</span><i style="--start:65%;--length:19%">605—610</i></div><div><span>起义扩展</span><i style="--start:81%;--length:19%">611 起</i></div><div><span>三征辽东</span><i style="--start:84%;--length:11%">612—614</i></div></div><p class="evidence-note">此处为时间关系示意，条带非严格比例。左侧横条只标当前讲述主题，不表示年代等距或完成百分比。开皇年号为 581—600；文帝在位至 604 年。</p>${reveal('为什么起义排在三征辽东之前？','起义在 611 年已出现；三征辽东发生在 612—614 年。此前征发与战争准备已形成压力，后续战争又加剧危机。不能把 611 年的起义解释成 614 年战事结束后的结果。')}${source('emperor','food')}`, 'timeline-page');
  }
  function maps() {
    return shell('地图互证 / 572 → 577 → 581 → 589 → 612', '先辨年代，再观察统一。', `<div class="map-workspace"><div class="map-column"><div class="map-toolbar"><button class="map-switch selected" data-map="572" aria-pressed="true">572 · 分裂局面</button><button class="map-switch" data-map="612" aria-pressed="false">612 · 隋朝形势</button><button class="map-zoom" aria-pressed="false">放大中原</button></div><div class="map-window"><img class="history-map" src="assets/map-divided-572.jpg" alt="用户提供的572年历史地图，显示北周、北齐、陈等政权" /></div><p class="map-caption">572 年：北周、北齐、陈并存，早于隋建立 9 年。</p></div><div class="map-reading"><h3>读图的三个步骤</h3><ol><li><b>先读图例</b><br/>区分政权界、现代国界与今地名。</li><li><b>再补中间事件</b><br/>577 北周灭北齐 → 581 杨坚代周 → 589 隋灭陈。</li><li><b>最后比较空间</b><br/>612 图呈现统一后的形势，不是 589 年当年的疆域图。</li></ol>${reveal('这两张地图能直接证明什么？','能比较两个时点的政权分布；不能单凭地图解释统一原因，也不能把各色区域都当成隋朝领土。结合建隋、灭陈的文献，才能说明变化过程。')}</div></div><p class="evidence-note">地图：用户提供 04.jpg（图注 572 年）、01.jpg（图注大业八年 612 年）；原始出版信息未提供。保留完整图例，未改绘疆界。</p>`, 'map-page');
  }
  function canal() {
    return shell('工程与空间 / 分段建设，相互贯通', '运河连接的，是一个供应系统。', `<div class="canal-workspace"><div class="canal-diagram"><svg viewBox="0 0 620 450" role="img" aria-label="隋代运河关系示意：涿郡经永济渠连接黄河；洛阳经通济渠连接淮河；邗沟连接长江；江南河通向余杭。非比例地图。"><g class="river-lines"><path d="M280 70 H565"/><path d="M40 170 H555"/><path d="M210 270 H570"/><path d="M150 345 H580"/><path d="M380 410 H580"/></g><g class="river-labels"><text x="505" y="59">海河水系</text><text x="505" y="158">黄河</text><text x="510" y="258">淮河</text><text x="510" y="333">长江</text><text x="510" y="430">钱塘江水系</text></g><g class="canal-paths"><path class="canal-segment seg-north" d="M355 55 L355 108 L280 170"/><path class="canal-segment seg-middle" d="M135 170 L245 170 L350 270"/><path class="canal-segment seg-middle" d="M350 270 L410 345"/><path class="canal-segment seg-south" d="M410 345 L462 410"/></g><g class="canal-labels"><text x="160" y="108">608 · 永济渠</text><text x="110" y="237">605 · 通济渠</text><text x="226" y="324">605 · 邗沟</text><text x="300" y="395">610 · 江南河</text></g><g class="city-dots"><circle cx="355" cy="55" r="7"/><circle cx="135" cy="170" r="8"/><circle cx="410" cy="345" r="6"/><circle cx="462" cy="410" r="7"/></g><g class="city-labels"><text x="369" y="42">涿郡</text><text x="75" y="151">洛阳</text><text x="420" y="325">江都附近</text><text x="400" y="442">余杭</text></g></svg><div class="canal-controls"><button data-canal="middle" aria-pressed="false">① 605 接江淮</button><button data-canal="north" aria-pressed="false">② 608 通北方</button><button data-canal="south" aria-pressed="false">③ 610 延江南</button><button data-canal="all" aria-pressed="true">完整网络</button></div><p class="evidence-note">教学关系示意，非比例地图；借用、疏浚旧河道与新开河段共同形成网络，不是六年内从零挖出所有河道。</p></div><div class="map-reading"><h3>为什么以洛阳为中心？</h3><p>联系政治中心、北方军事区域与南方粮食产区，水道和仓储共同服务国家供应。</p><blockquote>“引沁水，南达于河，北通涿郡。”<cite>《隋书·炀帝纪上》大业四年</cite></blockquote>${reveal('有运河就一定能把粮食送到需要的人手中吗？','还需要征收、船运、中转仓储与发放制度。运河说明“如何运输”，粮仓遗迹说明“在哪里储藏”；二者相互支撑，也提醒我们区分国家有储备与百姓得到救济。')}</div></div>${source('emperor','south','canal','granary')}`, 'canal-page');
  }
  const cards = {
    y581: [{ evidence: 'timeline', title: '事件与过程的时间关系' }],
    y589: [{ evidence: 'maps', title: '从分裂到统一的地图对照' }],
    yKai: [{year:'yKai',tag:'book',tagText:'史料研读',title:'“仓库盈积”，说明了什么？',yearLine:'597 年 · 开皇十七年',body:`<blockquote>“开皇十七年，户口滋盛，中外仓库，无不盈积。”<cite>《隋书·食货志》；引文转为简体</cite></blockquote><p><strong>圈关键词：</strong>“户口”关系国家掌握的人口与赋役基础；“仓库”关系财政和粮食储备。两者支持文帝时期国力恢复的判断。</p>${reveal('国家仓库充实，能推出每户百姓都富足吗？','不能。这是史书对国家层面状况的叙述，不等于所有家庭的生活调查。回答时写“反映人口、财政与储备的发展”，避免把国家富强直接等同于人人富裕。')}${source('food')}`}],
    y605: [
      {evidence:'canal',title:'运河的建设次序与供应网络'},
      {year:'y605',tag:'book',tagText:'遗址 · 文献互证',title:'回洛仓：运河岸边的国家粮仓',yearLine:'605—606 年前后 · 隋炀帝大业初',img:'assets/huiluo-excavation.jpg',real:true,caption:'回洛仓 C3 仓窖发掘中 · 河南省文物考古研究院',body:`<p>在图中寻找圆形仓窖。回洛仓服务东都洛阳；黎阳仓侧重中转。粮仓与水路一起构成粮食的运输、储备网络。</p><p><strong>文献与考古：</strong>文献记“穿三百窖”；考古勘探推测回洛仓约有 700 座仓窖。数字不同，需要结合遗址范围、使用阶段与文献记载范围研究。</p>${reveal('遗址怎样补充文字记载？','文字说明设置与功能；仓窖、沟渠和粮食遗存提供实体证据。两种资料互证，不必要求每个数字完全一致。')}${source('granary')}`},
      {year:'y605',tag:'extend',tagText:'遗迹观察',title:'水路怎样接到粮仓？',yearLine:'隋代遗迹 · 现代考古照片',img:'assets/huiluo-channel.jpg',real:true,caption:'回洛仓漕运沟渠遗迹 · 河南省文物考古研究院',body:`<p>这不是隋代河道的复原图，而是今天发掘出的沟渠遗迹。报告指出，沟渠通往回洛仓管理区。</p><div class="logic-chain"><span>产粮区</span><i>→</i><span>水路</span><i>→</i><span>粮仓</span><i>→</i><span>供应</span></div><p>把遗迹与运河示意图对读：运输线路与仓储节点共同发挥作用。</p>${reveal('评价大运河，至少要分哪两个尺度？','短期：工程征发给当时社会带来的负担。长期：交通与物资交流网络对后世的作用。看到长期收益，不意味着可以忽略建设成本。')}${source('granary','canal')}`},
      {year:'y605',tag:'extend',tagText:'文物观察',title:'一件白瓷里的技术与交流',yearLine:'隋代 · 李静训墓出土',img:'assets/relic-white-vase.jpg',real:true,contain:true,caption:'白釉双龙柄联腹传瓶 · 中国国家博物馆藏',body:`<p><strong>先观察：</strong>白色釉面、相联双腹与对称龙柄。1957 年陕西西安梁家庄李静训墓出土，高 19 厘米。</p><p><strong>再解释：</strong>馆方认为器形可能结合本土盘口瓶与西域双柄银壶的特征，可用于观察制瓷技术和文化交流。</p>${reveal('能据此证明所有人都生活富裕，或它经大运河运来吗？','不能。这是贵族墓葬器物，说明特定群体的物质文化；器形交流也不能直接证明这件器物的运输路线。文物支持的结论，应停留在证据能够说明的范围内。')}${source('vase')}`},
      {year:'y605',tag:'book',tagText:'制度史料',title:'科举：记住时代，不硬绑单一年份',yearLine:'隋炀帝时 · 制度形成过程',body:`<blockquote>“九品及中正至开皇中方罢。”<cite>《通典》卷十四·选举二；引文转为简体</cite></blockquote><div class="logic-chain"><span>文帝取士改革</span><i>→</i><span>炀帝置进士科</span><i>→</i><span>后世发展完善</span></div><p>这条史料说明文帝时期选官制度的改变。教材主线进一步强调隋炀帝时设置进士科。本课把科举与运河放在同一主题中，是为了比较空间联系与人才选拔的变化，<strong>不表示二者在同一天或同一年同时完成</strong>。</p>${reveal('与门第选官相比，变化的关键是什么？','朝廷通过考试等途径选拔人才，选官权力与才识标准发生变化。形成和完善是长期过程，不能说隋代已经拥有后世所有考试程序。')}${source('exams')}`}
    ],
    yUp: [{year:'yUp',tag:'cost',tagText:'因果辨析',title:'先有起义，再有后续战争的加压',yearLine:'611 起义 → 612—614 三征辽东',body:`<p>读时间线时，不要把讲解顺序当成事件发生顺序。611 年起义已出现，612—614 年的战争进一步加重危机。</p><div class="logic-chain"><span>此前工程与征发</span><i>→</i><span>生产受损、起义</span><i>↔</i><span>后续战争与统治危机</span></div>${reveal('如何把“先后”说成有证据的因果？','先确认时间先后，再说明作用机制：劳动力与物资征发影响生产，生活压力推动反抗；战争继续扩大征发，反抗又影响战争后方。时间接近本身不是充分证据。')}${source('emperor','food')}`}]
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
    root.querySelectorAll('.reveal-btn').forEach(b => b.addEventListener('click', () => {
      const answer = b.nextElementSibling, open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(open)); answer.hidden = !open;
      b.innerHTML = open ? '收起分析 <span>−</span>' : '展开分析 <span>＋</span>';
    }));
    root.querySelectorAll('.map-page:not(.unify-page)').forEach(page => {
      const img = page.querySelector('.history-map'), cap = page.querySelector('.map-caption');
      page.querySelectorAll('[data-map]').forEach(b => b.addEventListener('click', () => {
        const year = b.dataset.map;
        img.src = year === '572' ? 'assets/map-divided-572.jpg' : 'assets/map-sui-612.jpg';
        img.alt = year === '572' ? '572年北周、北齐、陈等政权分布图' : '612年隋朝及周边政权形势图';
        img.classList.remove('map-arrive'); void img.offsetWidth; img.classList.add('map-arrive');
        cap.textContent = year === '572' ? '572 年：北周、北齐、陈并存，早于隋建立 9 年。' : '612 年：隋统一之后的形势，距 589 年统一已有 23 年。';
        page.querySelectorAll('[data-map]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b));});
      }));
      const zbtn = page.querySelector('.map-zoom');
      if (zbtn) zbtn.addEventListener('click', e=>{
        const zoom = img.classList.toggle('zoomed');
        e.currentTarget.setAttribute('aria-pressed',String(zoom));e.currentTarget.textContent=zoom?'还原全图':'放大中原';
      });
    });
    root.querySelectorAll('[data-canal]').forEach(b=>b.addEventListener('click',()=>{
      const panel=b.closest('.canal-diagram');panel.dataset.focus=b.dataset.canal;
      panel.querySelectorAll('[data-canal]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    }));

    /* 统一进程：先修复全景，再放大 */
    const UNIFY = {
      '577': { label:'577 · 北周吞并北齐', repair:'修复全景：北周—北齐—陈', zoom:'放大中原', layers:['zhou','chen'], note:'北方已一体，南方仍是陈。' },
      '581': { label:'581 · 隋文帝建立隋朝', repair:'修复全景：北方改旗为隋', zoom:'放大关中', layers:['sui-north','daxing'], note:'581 建隋，仍都长安。' },
      '583': { label:'583 · 迁都大兴城', repair:'修复全景：标出大兴与洛阳', zoom:'放大关中—洛阳', layers:['daxing','luoyang'], note:'为运河以洛阳为中心作铺垫。' },
      '589': { label:'589 · 过长江统一陈朝', repair:'修复全景：南北同色 = 统一', zoom:'放大江淮', layers:['sui-all','jiangdu'], note:'结束分裂，促进南北交流。' }
    };
    root.querySelectorAll('.unify-map').forEach(page => {
      const key = page.dataset.unify || '577';
      const cfg = UNIFY[key] || UNIFY['577'];
      const img = page.querySelector('.history-map');
      const cap = page.querySelector('.map-caption');
      const btnR = page.querySelector('[data-unify-repair]');
      const btnZ = page.querySelector('[data-unify-zoom]');
      const overlay = page.querySelector('.unify-overlay');
      let repaired = false, zoomed = false;
      function paint() {
        (overlay||page).querySelectorAll('[data-layer]').forEach(el => el.classList.remove('on'));
        cfg.layers.forEach(id => {
          const el = (overlay||page).querySelector('[data-layer="'+id+'"]');
          if (el) el.classList.add('on');
        });
      }
      if (btnR) btnR.addEventListener('click', () => {
        repaired = true;
        paint();
        btnR.disabled = true;
        btnR.textContent = '已修复 ✓';
        btnR.setAttribute('aria-pressed','true');
        if (btnZ) { btnZ.disabled = false; }
        if (cap) cap.textContent = '全景已修复：' + cfg.note + ' 现在可以「' + cfg.zoom + '」。';
      });
      if (btnZ) btnZ.addEventListener('click', () => {
        if (!repaired) return;
        zoomed = !zoomed;
        img.classList.toggle('zoomed', zoomed);
        btnZ.setAttribute('aria-pressed', String(zoomed));
        btnZ.textContent = zoomed ? '还原全图' : cfg.zoom;
        if (cap) cap.textContent = zoomed ? '局部放大中 · 再点还原' : ('全景已修复：' + cfg.note);
      });
    });
  }

  function unifyMap(stepKey) {
    const UNIFY = {
      '577': { label:'577 · 北周吞并北齐', repair:'修复全景：北周—北齐—陈', zoom:'放大中原', layers:['zhou','chen'], note:'北方已一体，南方仍是陈。', steps:['先看 572 底图上的三方','点修复：北方加深','再放大中原细看'] },
      '581': { label:'581 · 隋文帝建立隋朝', repair:'修复全景：北方改旗为隋', zoom:'放大关中', layers:['sui-north','daxing'], note:'581 建隋，仍都长安。', steps:['北方换旗为隋','标出都城','放大关中'] },
      '583': { label:'583 · 迁都大兴城', repair:'修复全景：标出大兴与洛阳', zoom:'放大关中—洛阳', layers:['daxing','luoyang'], note:'为运河以洛阳为中心作铺垫。', steps:['标大兴','标洛阳','放大两都连线'] },
      '589': { label:'589 · 过长江统一陈朝', repair:'修复全景：南北同色 = 统一', zoom:'放大江淮', layers:['sui-all','jiangdu'], note:'结束分裂，促进南北交流。', steps:['南方并入隋色','标江都','放大江淮'] }
    };
    const step = UNIFY[stepKey] || UNIFY['577'];
    return shell('地图 · 先修复，再放大局部', step.label, `
      <div class="map-workspace unify-map" data-unify="${stepKey}">
        <div class="map-column">
          <div class="map-toolbar">
            <button type="button" class="map-switch" data-unify-repair aria-pressed="false">${step.repair}</button>
            <button type="button" class="map-zoom" data-unify-zoom aria-pressed="false" disabled>${step.zoom}</button>
          </div>
          <div class="map-window" style="position:relative;overflow:hidden">
            <img class="history-map" src="assets/map-divided-572.jpg" alt="572年历史地图，用作统一进程示意底图" />
            <div class="unify-overlay" aria-hidden="true">
              <span class="blob blob-zhou" data-layer="zhou"></span>
              <span class="blob blob-chen" data-layer="chen"></span>
              <span class="blob blob-sui-n" data-layer="sui-north"></span>
              <span class="blob blob-sui-all" data-layer="sui-all"></span>
              <span class="pin pin-daxing" data-layer="daxing"><i></i>大兴</span>
              <span class="pin pin-luoyang" data-layer="luoyang"><i></i>洛阳</span>
              <span class="pin pin-jiangdu" data-layer="jiangdu"><i></i>江都</span>
            </div>
          </div>
          <p class="map-caption">先点「${step.repair}」，完成全景后再放大。</p>
        </div>
        <div class="map-reading">
          <h3>操作步骤</h3>
          <ol><li><b>先修复</b><br/>完整地图上染色 / 标点，看清全局。</li><li><b>再放大</b><br/>放大局部，细讲空间关系。</li><li><b>可还原</b><br/>再点一次回全景。</li></ol>
          ${step.steps.map((s,i)=>`<div class="step"><b>${i+1}</b><span>${s}</span></div>`).join('')}
          <p class="evidence-note">${step.note} 叠色为教学示意，非精确疆界。</p>
        </div>
      </div>`, 'map-page unify-page');
  }

  return {cards, render: type => ({timeline,maps,canal}[type])(), unifyMap, bind};
})();
