(()=>{
if(window.__websiteStudioFormatting)return;window.__websiteStudioFormatting=true;
let busy=false,queued=false;
const observer=new MutationObserver(records=>{const affected=records.some(r=>r.type==='attributes'&&r.attributeName==='lang'||(r.target.nodeType===1?r.target:r.target.parentElement)?.closest('[data-website-studio-format]')||[...r.addedNodes].some(n=>n.nodeType===1&&(n.matches('[data-website-studio-format]')||n.querySelector('[data-website-studio-format]'))));if(affected&&!queued){queued=true;queueMicrotask(render);}});
const watch=()=>observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['lang','data-website-studio-format']});
function render(){
 queued=false;if(busy)return;busy=true;observer.disconnect();
 try{for(const root of document.querySelectorAll('[data-website-studio-format]')){
  if(root.matches('[data-we-editing]')||root.querySelector('[data-we-editing]'))continue;
  let data;try{data=JSON.parse(root.getAttribute('data-website-studio-format'));}catch{continue;}
  if(data.Version!==1||!data.Languages||!/^[a-f0-9]{32}$/.test(data.Owner||''))continue;
  for(const span of [...root.querySelectorAll('span[data-website-studio-run]')])if(span.getAttribute('data-website-studio-owner')===data.Owner)span.replaceWith(...span.childNodes);
  const language=(document.documentElement.lang||'').toLowerCase(),runs=data.Languages[language]||data.Languages[language.split('-')[0]]||data.Languages['*']||[];
  if(!Array.isArray(runs)||runs.length>1000)continue;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('script,style,textarea')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),nodes=[];let n;
  while(n=walker.nextNode())nodes.push(n);
  let offset=0;
  for(const text of nodes){const start=offset,end=start+text.length;offset=end;
   const relevant=runs.filter(r=>Number.isInteger(r.Start)&&Number.isInteger(r.Length)&&r.Length>0&&r.Start<end&&r.Start+r.Length>start&&/^[a-f0-9]{32}$/.test(r.Style||''));
   if(!relevant.length)continue;
   const points=[0,text.length];for(const r of relevant){points.push(Math.max(0,r.Start-start),Math.min(text.length,r.Start+r.Length-start));}
   points.sort((a,b)=>a-b);const edges=[...new Set(points)],fragment=document.createDocumentFragment();
   for(let i=0;i<edges.length-1;i++){const a=edges[i],b=edges[i+1],styles=relevant.filter(r=>r.Start<=start+a&&r.Start+r.Length>=start+b).map(r=>r.Style),value=text.data.slice(a,b);
    if(!styles.length)fragment.appendChild(document.createTextNode(value));else{const span=document.createElement('span');span.setAttribute('data-website-studio-run',styles.join(' '));span.setAttribute('data-website-studio-owner',data.Owner);span.textContent=value;fragment.appendChild(span);}}
   text.replaceWith(fragment);
  }
 }}finally{busy=false;watch();}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render,{once:true});else render();
})();