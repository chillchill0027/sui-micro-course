const sceneButtons=[...document.querySelectorAll('[data-scene]')];
const scenePanels=[...document.querySelectorAll('[data-scene-panel]')];
const dialog=document.querySelector('#detailDialog');
const dialogContent=document.querySelector('#detailContent');
const screenButton=document.querySelector('#screenButton');
let currentScene=0;
function showScene(index){currentScene=Math.max(0,Math.min(scenePanels.length-1,index));scenePanels.forEach((panel,i)=>{panel.hidden=i!==currentScene});sceneButtons.forEach((button,i)=>{button.classList.toggle('active',i===currentScene);button.setAttribute('aria-current',i===currentScene?'step':'false')});window.scrollTo({top:0,behavior:'smooth'})}
sceneButtons.forEach((button,index)=>button.addEventListener('click',()=>showScene(index)));
document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>showScene(currentScene+1)));
document.querySelectorAll('[data-restart]').forEach(button=>button.addEventListener('click',()=>showScene(0)));
document.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{const template=document.querySelector(`#detail-${button.dataset.detail}`);if(!template)return;dialogContent.replaceChildren(template.content.cloneNode(true));dialog.showModal();dialog.scrollTop=0}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close()});
screenButton.addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});else document.exitFullscreen?.().catch(()=>{})});
document.addEventListener('fullscreenchange',()=>{screenButton.textContent=document.fullscreenElement?'退出全屏':'全屏'});
document.addEventListener('keydown',event=>{if(dialog.open)return;if(event.key==='ArrowRight'||event.key==='PageDown')showScene(currentScene+1);if(event.key==='ArrowLeft'||event.key==='PageUp')showScene(currentScene-1)});
showScene(0);
