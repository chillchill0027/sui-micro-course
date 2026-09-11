const readingBar = document.querySelector('#readingBar');
const teacherButton = document.querySelector('#teacherMode');
const presentButton = document.querySelector('#presentButton');

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  readingBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};
document.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

teacherButton.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('teacher-mode');
  teacherButton.setAttribute('aria-pressed', String(enabled));
  teacherButton.textContent = enabled ? '隐藏讲稿提示' : '显示讲稿提示';
});

presentButton.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('presentation');
  presentButton.textContent = enabled ? '退出放映模式' : '进入放映模式';
  if (enabled && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (!enabled && document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
});
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove('presentation');
    presentButton.textContent = '进入放映模式';
  }
});

document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll('[role="tab"]')];
  const panels = [...tabs.querySelectorAll('[role="tabpanel"]')];
  const activate = (button) => {
    buttons.forEach((item) => {
      const selected = item === button;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== button.getAttribute('aria-controls'); });
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activate(button));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const next = buttons[(index + delta + buttons.length) % buttons.length];
      activate(next);
      next.focus();
    });
  });
});

document.querySelectorAll('[data-reveal]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.reveal);
    target.hidden = !target.hidden;
    button.textContent = target.hidden ? '展开证据链' : '收起证据链';
  });
});

document.querySelectorAll('[data-quiz]').forEach((quiz) => {
  quiz.addEventListener('change', (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const feedback = quiz.querySelector('.quiz-feedback');
    const correct = event.target.value === quiz.dataset.answer;
    feedback.textContent = correct ? '回答正确。请继续说明理由。' : `再想一步：正确答案是 ${quiz.dataset.answer}。`;
  });
});

const dialog = document.querySelector('#imageDialog');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');
document.querySelectorAll('[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const sectionLinks = [...document.querySelectorAll('nav a')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 't' && !/input|button/i.test(document.activeElement.tagName)) teacherButton.click();
  if (event.key === 'Escape' && document.body.classList.contains('presentation')) presentButton.click();
});
