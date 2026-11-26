const cities = [
{id:'barcelona',name:'巴塞隆納',en:'BARCELONA',dates:'05.22 — 05.24',nights:3,color:'#d9ad83',symbol:'✺',stay:'Eixample／近地鐵',intro:'高第的曲線、彩色馬賽克，和地中海的第一陣風。'},
{id:'madrid',name:'馬德里',en:'MADRID',dates:'05.25 — 05.27',nights:3,color:'#f4bd4b',symbol:'☀',stay:'Las Letras／Retiro 周邊',intro:'從美術館到小酒館，慢慢進入西班牙的節奏。'},
{id:'granada',name:'格拉納達',en:'GRANADA',dates:'05.28 — 05.29',nights:2,color:'#e8ad95',symbol:'✿',stay:'Centro／大教堂周邊',intro:'紅色宮殿、白色山城，和一場溫柔的日落。'},
{id:'seville',name:'塞維亞',en:'SEVILLE',dates:'05.30 — 06.01',nights:3,color:'#c7d1af',symbol:'❋',stay:'Santa Cruz／Centro',intro:'在橘樹與磁磚之間，遇見安達魯西亞。'},
{id:'lisbon',name:'里斯本',en:'LISBON',dates:'06.02 — 06.06',nights:5,color:'#bacfd7',symbol:'≈',stay:'Baixa／Chiado，優先近地鐵',intro:'電車、蛋塔和海風，給城市留多一點時間。'},
{id:'porto',name:'波多',en:'PORTO',dates:'06.07 — 06.11',nights:4,color:'#e7cb83',symbol:'♡',stay:'Bolhão／Aliados',intro:'在杜羅河畔，替這趟假期寫下最後一頁。'}];
// One entry per calendar day. Arrival and departure days are included.
const plan = [
 [
  "barcelona",
  "抵達，和地中海打個招呼",
  "抵達巴塞隆納，機場接駁至旅宿，先寄放行李。",
  "哥德區、巴塞隆納主教座堂外觀，依體力散步。",
  "早點吃晚餐，留時間休息與調整時差。",
  "宿巴塞隆納；第一天不排限時門票，保留延誤彈性。"
 ],
 [
  "barcelona",
  "聖家堂的光，奎爾公園的色彩",
  "依預約時段參觀聖家堂，留 2–3 小時欣賞彩繪玻璃。",
  "午餐與休息後前往奎爾公園，留足上山交通時間。",
  "Gràcia 街區晚餐，慢慢走回城市日常。",
  "宿巴塞隆納；兩處分別預約，建議至少間隔 3 小時；上塔為選配。"
 ],
 [
  "barcelona",
  "高第的房子，海邊的午後",
  "巴特婁之家與米拉之家，選一處入內，另一處看外觀。",
  "Passeig de Gràcia 散步與午休。",
  "巴塞隆內塔海灘走走，吃一頓海邊晚餐。",
  "宿巴塞隆納；兩座建築不必都買票，依喜好擇一。"
 ],
 [
  "madrid",
  "搭高鐵，去馬德里曬太陽",
  "Barcelona Sants 搭高鐵至 Madrid Puerta de Atocha，估約 3–3.5 小時。",
  "入住後走太陽門廣場與主廣場。",
  "Las Letras 文學區吃 tapas。",
  "宿馬德里；兩端車站與車程依班次確認，預留行李安檢時間。"
 ],
 [
  "madrid",
  "把一天交給藝術與公園",
  "普拉多美術館，挑喜歡的展區慢慢看。",
  "麗池公園散步、找一間咖啡館午休。",
  "Las Letras 文學區吃 tapas。",
  "普拉多建議預約；住宿馬德里。"
 ],
 [
  "madrid",
  "托雷多，一頁中世紀",
  "火車往返托雷多；先走老城與大教堂。",
  "午餐後慢逛猶太區，體力允許再去觀景台。",
  "回馬德里整理行李。",
  "托雷多當日來回；預留車站至老城接駁。"
 ],
 [
  "granada",
  "往南，在白色山城等夕陽",
  "馬德里搭火車至格拉納達，估約 3.5–4.5 小時。",
  "入住與午休後，大教堂周邊及阿爾拜辛街區散步。",
  "聖尼古拉斯觀景台看夕陽。",
  "宿格拉納達；石板坡路較多，若抵達較晚先休息。"
 ],
 [
  "granada",
  "阿爾罕布拉的花園時光",
  "依預約時段參觀納斯里德宮。",
  "阿爾卡薩巴與赫內拉利費花園，園區留 4–5 小時。",
  "回市區休息，簡單晚餐。",
  "需提早具名訂票並攜帶護照；宮殿時段不可錯過。"
 ],
 [
  "seville",
  "前往塞維亞，今晚聽佛朗明哥",
  "火車前往塞維亞，估約 2.5–3.5 小時。",
  "入住後逛聖十字區，留時間午休。",
  "預約正式劇場的佛朗明哥表演。",
  "宿塞維亞；以開賣班次確認是否直達。"
 ],
 [
  "seville",
  "王宮庭院與大教堂",
  "塞維亞王宮，花園一起慢慢逛。",
  "午休後參觀大教堂與吉拉達塔。",
  "老城晚餐，點份 salmorejo 冷湯。",
  "王宮與大教堂分開預約；兩景點間保留午餐緩衝。"
 ],
 [
  "seville",
  "一整天，都是安達魯西亞",
  "早晨西班牙廣場與瑪麗亞路易莎公園。",
  "特里亞納區看陶瓷、沿河吃午餐。",
  "河畔散步，買好隔天車上點心。",
  "宿塞維亞；午後可刪減景點，避開高溫。"
 ],
 [
  "lisbon",
  "跨過國界，跟葡萄牙說聲好",
  "搭跨境巴士前往里斯本，規劃約 7–9 小時。",
  "整日保留交通彈性；抵達後辦理入住。",
  "旅宿附近吃晚餐，早點休息。",
  "需確認 ALSA／其他業者 2027 班次；葡萄牙時間比西班牙慢 1 小時。"
 ],
 [
  "lisbon",
  "從老城，走進藍色瓷磚",
  "阿爾法瑪街區散步，參觀主教座堂周邊。",
  "聖露西亞觀景台、咖啡與午休。",
  "預約小型 Fado 表演，確認餐點與最低消費。",
  "宿里斯本；電車可作體驗，擁擠時改步行或地鐵。"
 ],
 [
  "lisbon",
  "貝倫的蛋塔與海風",
  "前往貝倫，參觀熱羅尼莫斯修道院。",
  "吃蛋塔、沿河走到發現者紀念碑與貝倫塔外觀。",
  "回 Chiado 晚餐。",
  "修道院需確認開放及訂票；不預設貝倫塔可入內。"
 ],
 [
  "lisbon",
  "辛特拉，走進山上的童話",
  "火車前往辛特拉，預訂佩納宮入場與上山交通。",
  "午餐後視體力選雷加萊拉莊園或老城。",
  "回里斯本；不要再塞海角行程。",
  "辛特拉當日來回；宮殿間接駁耗時，一天最多兩處。"
 ],
 [
  "lisbon",
  "海邊或城市，選喜歡的步調",
  "天氣好搭車前往卡斯凱什，海邊散步。",
  "午餐後慢慢回里斯本，留時間逛 Baixa 與 Chiado。",
  "河畔日落，整理隔天前往波多的行李。",
  "宿里斯本；雨天可改古本基安博物館，疲累可整天留在市區。"
 ],
 [
  "porto",
  "搭火車，往杜羅河去",
  "搭 CP Alfa Pendular／Intercidades 前往波多。",
  "估約 3–3.5 小時到 Campanhã，另留市區接駁。",
  "入住後沿 Ribeira 河畔散步。",
  "宿波多；起訖車站依車票確認。"
 ],
 [
  "porto",
  "藍瓷磚與一座城市的故事",
  "聖本篤車站看瓷磚，接著波多主教座堂。",
  "牧師塔周邊；想去萊羅書店須另約。",
  "路易一世大橋、Jardim do Morro 看夕陽。",
  "宿波多；橋上風大，日落後加件薄外套。"
 ],
 [
  "porto",
  "隔著河，乾杯一下",
  "跨河到加亞新城，預約酒窖導覽。",
  "河畔午餐、回市區逛 Bolhão 市場並買伴手禮。",
  "回市中心試試 francesinha 三明治。",
  "宿波多；不飲酒可改河畔散步。若想去杜羅河谷，可整天改一日團，需另訂。"
 ],
 [
  "porto",
  "最後一天，也要慢慢過",
  "河畔吃早餐；市場與伴手禮採買改排前一天。",
  "搭車至 Foz 河海交會處散步。",
  "回市區吃告別晚餐、確認明日航班。",
  "6/10 為葡萄牙國定假日，商店與市場可能休息；以海邊散步為主，確認餐廳營業。"
 ],
 [
  "porto",
  "帶一口袋陽光回家",
  "退房，依航班時間前往波多機場。",
  "建議國際線起飛前至少 3 小時抵達，依航空公司要求。",
  "返程／轉機；抵達出發地日期依實際機票。",
  "本行程以當地 21 天計；跨洲飛行可能另需前後各 1 天。"
 ]
];
// Photos follow each day's named landmarks, including optional alternatives.
const dayPlaces = [
 ['gothic','barcelona-cathedral'],['sagrada','guell','gracia'],['batllo','mila','passeig','barceloneta'],
 ['sol','plaza-mayor','letras'],['prado','retiro','letras'],['toledo-cathedral','toledo-jewish','toledo-view'],
 ['granada-cathedral','albaicin','san-nicolas'],['nasrid','alcazaba','generalife'],['santa-cruz'],
 ['alcazar','seville-cathedral','giralda'],['plaza-espana','maria-luisa','triana'],[],
 ['alfama','lisbon-cathedral','santa-luzia'],['jeronimos','discoveries','belem','chiado'],['pena','regaleira'],
 ['cascais','baixa','chiado','gulbenkian'],['ribeira'],
 ['sao-bento','porto-cathedral','clerigos','lello','luis','morro'],['gaia','bolhao','douro'],['foz'],[]
];
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function photoGallery(index){
 const ids=dayPlaces[index]||[];
 if(!ids.length)return '<p class="travel-day-note">這天留給移動與休息，輕輕鬆鬆就好。</p>';
 return `<div class="place-gallery" aria-label="當日景點照片">${ids.map(id=>{
  const p=places[id];if(!p)return '';
  return `<figure class="place-photo"><button type="button" class="photo-open" data-photo="${id}" aria-label="放大${escapeHTML(p.name)}照片"><img src="${p.image}" width="640" height="440" loading="lazy" decoding="async" alt="${escapeHTML(p.name)}實景照片"><span aria-hidden="true">放大照片 ＋</span></button><figcaption><strong>${escapeHTML(p.name)}</strong><span class="photo-credit">${escapeHTML(p.author)} · <a href="${escapeHTML(p.source)}" target="_blank" rel="noopener">${escapeHTML(p.license)}／來源 ↗</a></span></figcaption></figure>`;
 }).join('')}</div>`;
}
const routeList=document.querySelector('#route-list');
routeList.innerHTML=cities.map(c=>`<a class="route-stop" href="#itinerary" data-jump="${c.id}"><span class="city-icon" style="background:${c.color}">${c.symbol}</span><span class="city-en">${c.en}</span><strong>${c.name}</strong><span>${c.dates}</span><small>${c.nights} 晚 · ${c.stay}</small></a>`).join('');
function render(city='all'){
 document.querySelectorAll('[data-city]').forEach(b=>{const on=b.dataset.city===city;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 document.querySelector('#days').innerHTML=cities.filter(c=>city==='all'||c.id===city).map(c=>`<article class="city-chapter"><div class="chapter-heading"><span class="chapter-icon" style="background:${c.color}">${c.symbol}</span><div><h3>${c.name} <span>${c.en}</span></h3><p>${c.intro}</p></div><span class="night-tag">${c.nights} NIGHTS</span></div><div class="day-list">${plan.map((d,i)=>{if(d[0]!==c.id)return '';const date=new Date(Date.UTC(2027,4,22+i));return `<details><summary>${dayPlaces[i]?.length && places[dayPlaces[i][0]]?`<img class="day-thumbnail" src="${places[dayPlaces[i][0]].image}" width="104" height="78" alt="" loading="lazy" decoding="async">`:'<span class="day-thumbnail travel-thumbnail" aria-hidden="true">☀</span>'}<span class="day-num">DAY ${String(i+1).padStart(2,'0')}<small>${date.getUTCMonth()+1}/${String(date.getUTCDate()).padStart(2,'0')}</small></span><span class="day-title">${d[1]}<small>${d[2]}</small></span><span class="expand" aria-hidden="true">＋</span></summary><div class="day-detail">${photoGallery(i)}<div><b>上午</b><p>${d[2]}</p></div><div><b>午後</b><p>${d[3]}</p></div><div><b>晚上</b><p>${d[4]}</p></div><p class="day-tip">小提醒 · ${d[5]}</p><a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.en+' '+c.stay.split('／')[0])}">查看城市與住宿區地圖 ↗</a></div></details>`}).join('')}</div></article>`).join('');
}
document.querySelectorAll('[data-city]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.city)));
document.querySelectorAll('[data-jump]').forEach(a=>a.addEventListener('click',()=>render(a.dataset.jump)));
render();
const budgets={simple:[[750,1100],[420,630],[300,480],[240,360]],comfort:[[1300,2000],[630,840],[350,580],[300,450]],treat:[[2400,3500],[840,1260],[450,750],[380,600]]};
function money(n){return n.toLocaleString('en-US');}
function budget(){
 const input=document.querySelector('#travelers');
 const n=Number(input.value);
 const valid=Number.isInteger(n)&&n>=1&&n<=20;
 input.setCustomValidity(valid?'':'請輸入 1 至 20 位旅客');
 document.querySelector('#people-error').textContent=valid?'':'請輸入 1 至 20 的整數人數。';
 if(!valid){document.querySelector('#group-total').textContent='請先輸入有效人數';document.querySelector('#total').textContent='—';document.querySelector('#budget-items').innerHTML='';document.querySelector('#room-note').textContent='';document.querySelector('#reserve-total').textContent='';return;}
 const amounts=budgets[document.querySelector('#budget-style').value];
 const rooms=Math.ceil(n/2);
 const group=amounts.map((v,i)=>v.map(x=>i===0?x*2*rooms:x*n));
 const lower=group.reduce((sum,v)=>sum+v[0],0),upper=group.reduce((sum,v)=>sum+v[1],0);
 const range=(lo,hi)=>`€${money(Math.round(lo))}–${money(Math.round(hi))}`;
 document.querySelector('#total').textContent=range(lower/n,upper/n);
 document.querySelector('#group-total').textContent=range(lower,upper);
 document.querySelector('#group-label').textContent=`${n} 人同行總預算`;
 document.querySelector('#room-note').textContent=`${n} 人 · ${rooms} 間雙人房 × 20 晚${n%2?'（含 1 間單人入住，按整房估算）':''}`;
 document.querySelector('#budget-items').innerHTML=group.map((v,i)=>`<div><span>${['住宿 · 每人分攤 20 晚','餐飲 · 每人 21 天','交通 · 每人','門票與體驗 · 每人'][i]}</span><b>${range(v[0]/n,v[1]/n)}</b></div>`).join('');
 document.querySelector('#reserve-total').textContent=`含 15% 預備金的同行總額：${range(lower*1.15,upper*1.15)}`;
}
document.querySelector('#budget-style').addEventListener('change',budget);document.querySelector('#travelers').addEventListener('input',budget);budget();
const tasks=['確認巴塞隆納進、波多出的多點進出機票','確認護照效期與適用的入境要求（依國籍查官方資訊）','預訂 20 晚旅宿，優先可取消方案','預約聖家堂、奎爾公園、阿爾罕布拉宮與辛特拉門票','確認跨城火車與塞維亞－里斯本巴士班次','準備旅遊保險、網路、轉接頭與好走的鞋'];
let checked=[];try{const saved=JSON.parse(localStorage.getItem('iberia-checklist-v2')||'[]');if(Array.isArray(saved))checked=saved.filter(v=>Number.isInteger(v)&&v>=0&&v<tasks.length);}catch{}
document.querySelector('#checklist').innerHTML=tasks.map((t,i)=>`<label class="check"><input type="checkbox" value="${i}" ${checked.includes(i)?'checked':''}><span>${t}</span></label>`).join('');
function progress(){document.querySelector('#check-progress').textContent=`已準備 ${document.querySelectorAll('#checklist input:checked').length} / ${tasks.length} 項`;}
document.querySelector('#checklist').addEventListener('change',()=>{try{localStorage.setItem('iberia-checklist-v2',JSON.stringify([...document.querySelectorAll('#checklist input:checked')].map(i=>Number(i.value))));}catch{}progress();});progress();

let beforePrintCity='all';
window.addEventListener('beforeprint',()=>{beforePrintCity=document.querySelector('[data-city].active')?.dataset.city||'all';render('all');document.querySelectorAll('details').forEach(d=>d.open=true);});
window.addEventListener('afterprint',()=>render(beforePrintCity));

const photoDialog=document.querySelector('#photo-dialog');
document.querySelector('#days').addEventListener('click',event=>{
 const trigger=event.target.closest('[data-photo]');if(!trigger)return;
 const p=places[trigger.dataset.photo];if(!p)return;
 document.querySelector('#photo-large').src=p.image;
 document.querySelector('#photo-large').alt=p.name+'實景照片';
 document.querySelector('#photo-name').textContent=p.name;
 document.querySelector('#photo-author').textContent=p.author;
 const source=document.querySelector('#photo-source');source.href=p.source;source.textContent=p.license+' · 圖片來源';
 const license=document.querySelector('#photo-license');license.href=p.licenseUrl||p.source;license.textContent='授權條款 ↗';
 document.querySelector('#photo-map').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.title);
 photoDialog.showModal();
});
document.querySelector('#photo-close').addEventListener('click',()=>photoDialog.close());
photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)photoDialog.close();});
