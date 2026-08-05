// 简单交互：随机名言、主题切换、表单模拟提交
const quotes = [
  "不要等待机会，而要创造机会。— 未知",
  "行胜于言。— 孔子",
  "学而不思则罔，思而不学则殆。— 孔子",
  "小步快跑，持续改进。— 开发者格言",
  "失败是成功之母。— 民谚"
];

function $(sel){return document.querySelector(sel)}

const quoteBtn = $('#quoteBtn');
const quoteEl = $('#quote');
const themeToggle = $('#themeToggle');
const contactForm = $('#contactForm');
const formResult = $('#formResult');

// 随机显示名言
quoteBtn?.addEventListener('click', ()=>{
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  quoteEl.textContent = q;
  quoteEl.animate([{opacity:0},{opacity:1}],{duration:300,easing:'ease-out'});
});

// 主题切换并保存到 localStorage
function setTheme(t){
  if(t==='dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('site-theme', t);
}
themeToggle?.addEventListener('click', ()=>{
  const cur = localStorage.getItem('site-theme') === 'dark' ? 'light' : 'dark';
  setTheme(cur);
});
(function initTheme(){
  const saved = localStorage.getItem('site-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  setTheme(saved);
})();

// 表单模拟提交
contactForm?.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  const fd = new FormData(contactForm);
  const name = fd.get('name') || '匿名';
  formResult.textContent = `感谢 ${name} 的留言（这是模拟提交）`;
  contactForm.reset();
  formResult.animate([{opacity:0},{opacity:1}],{duration:300});
});
