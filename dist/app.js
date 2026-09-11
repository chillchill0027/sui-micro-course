const sceneButtons = [...document.querySelectorAll('[data-scene]')];
const scenePanels = [...document.querySelectorAll('[data-scene-panel]')];
const dialog = document.querySelector('#detailDialog');
const dialogContent = document.querySelector('#detailContent');
const screenButton = document.querySelector('#screenButton');
let currentScene = 0;

function showScene(index) {
  currentScene = Math.max(0, Math.min(scenePanels.length - 1, index));
  scenePanels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== currentScene; });
  sceneButtons.forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === currentScene);
    button.setAttribute('aria-current', buttonIndex === currentScene ? 'step' : 'false');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addDetailPager() {
  const article = dialogContent.querySelector('.paged');
  const slides = [...dialogContent.querySelectorAll('.detail-slide')];
  if (!article || slides.length < 2) return;
  let page = 0;
  const pager = document.createElement('nav');
  pager.className = 'detail-pager';
  pager.setAttribute('aria-label', '详细内容分页');
  pager.innerHTML = '<button type="button" data-page-prev>上一页</button><span></span><button type="button" data-page-next>下一页</button>';
  const label = pager.querySelector('span');
  const previous = pager.querySelector('[data-page-prev]');
  const next = pager.querySelector('[data-page-next]');
  const render = () => {
    slides.forEach((slide, index) => { slide.hidden = index !== page; });
    label.textContent = `${page + 1} / ${slides.length}`;
    previous.disabled = page === 0;
    next.disabled = page === slides.length - 1;
    dialog.scrollTo({ top: 0, behavior: 'smooth' });
  };
  previous.addEventListener('click', () => { if (page > 0) { page -= 1; render(); } });
  next.addEventListener('click', () => { if (page < slides.length - 1) { page += 1; render(); } });
  article.after(pager);
  render();
}

sceneButtons.forEach((button, index) => button.addEventListener('click', () => showScene(index)));
document.querySelectorAll('[data-next]').forEach((button) => button.addEventListener('click', () => showScene(currentScene + 1)));
document.querySelectorAll('[data-restart]').forEach((button) => button.addEventListener('click', () => showScene(0)));

document.querySelectorAll('[data-detail]').forEach((button) => {
  button.addEventListener('click', () => {
    const template = document.querySelector(`#detail-${button.dataset.detail}`);
    if (!template) return;
    dialogContent.replaceChildren(template.content.cloneNode(true));
    addDetailPager();
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});

screenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
  else document.exitFullscreen?.().catch(() => {});
});
document.addEventListener('fullscreenchange', () => { screenButton.textContent = document.fullscreenElement ? '退出全屏' : '全屏'; });
document.addEventListener('keydown', (event) => {
  if (dialog.open) return;
  if (event.key === 'ArrowRight' || event.key === 'PageDown') showScene(currentScene + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') showScene(currentScene - 1);
});

showScene(0);
