const cities = [
{id:'madrid',name:'馬德里',en:'MADRID',dates:'05.22 — 05.25',nights:4,color:'#f4bd4b',symbol:'☀',stay:'Las Letras／Retiro 周邊',intro:'從美術館到小酒館，慢慢進入西班牙的節奏。'},
{id:'granada',name:'格拉納達',en:'GRANADA',dates:'05.26 — 05.28',nights:3,color:'#e8ad95',symbol:'✿',stay:'Centro／大教堂周邊',intro:'紅色宮殿、白色山城，和一場溫柔的日落。'},
{id:'seville',name:'塞維亞',en:'SEVILLE',dates:'05.29 — 05.31',nights:3,color:'#c7d1af',symbol:'❋',stay:'Santa Cruz／Centro',intro:'在橘樹與磁磚之間，遇見安達魯西亞。'},
{id:'lisbon',name:'里斯本',en:'LISBON',dates:'06.01 — 06.06',nights:6,color:'#bacfd7',symbol:'≈',stay:'Baixa／Chiado，優先近地鐵',intro:'電車、蛋塔和海風，給城市留多一點時間。'},
{id:'porto',name:'波多',en:'PORTO',dates:'06.07 — 06.11',nights:4,color:'#e7cb83',symbol:'♡',stay:'Bolhão／Aliados',intro:'在杜羅河畔，替這趟假期寫下最後一頁。'}];
// One entry per calendar day. Arrival and departure days are included.
const plan = [
['madrid','抵達，先把時差放下','抵達馬德里，機場接駁至旅宿、寄放行李。','太陽門廣場、主廣場，走一小段就好。','早點吃晚餐，補眠迎接假期。','宿馬德里；不排付費預約，保留航班延誤彈性。'],
['madrid','把一天交給藝術與公園','普拉多美術館，挑喜歡的展區慢慢看。','麗池公園散步、找一間咖啡館午休。','Las Letras 文學區吃 tapas。','普拉多建議預約；住宿馬德里。'],
['madrid','皇宮與老城的日常','馬德里王宮，預留約 2–3 小時。','阿穆德納主教座堂、老城街巷。','德波神廟周邊看暮色，依開放情況調整。','宿馬德里；王宮開放可能受官方活動影響。'],
['madrid','托雷多，一頁中世紀','火車往返托雷多；先走老城與大教堂。','午餐後慢逛猶太區，體力允許再去觀景台。','回馬德里整理行李。','托雷多當日來回；預留車站至老城接駁。'],
['granada','向南，去紅色宮殿的城市','馬德里搭火車前往格拉納達，估約 3.5–4.5 小時。','入住市中心，午後休息。','大教堂周邊散步，找一間 tapas 小館。','跨城日；車程依實際班次，宿格拉納達。'],
['granada','阿爾罕布拉的花園時光','依預約時段參觀納斯里德宮。','阿爾卡薩巴與赫內拉利費花園，園區留 4–5 小時。','回市區休息，簡單晚餐。','需提早具名訂票並攜帶護照；宮殿時段不可錯過。'],
['granada','白色巷弄，橘色夕陽','阿爾拜辛街區慢走，穿好走的鞋。','茶館休息；可選阿拉伯浴場，需另訂。','聖尼古拉斯觀景台看夕陽，晚餐後回旅宿。','宿格拉納達；山坡石板路，避免中午曝曬。'],
['seville','前往塞維亞，今晚聽佛朗明哥','火車前往塞維亞，估約 2.5–3.5 小時。','入住後逛聖十字區，留時間午休。','預約正式劇場的佛朗明哥表演。','宿塞維亞；以開賣班次確認是否直達。'],
['seville','王宮庭院與大教堂','塞維亞王宮，花園一起慢慢逛。','午休後參觀大教堂與吉拉達塔。','老城晚餐，點份 salmorejo 冷湯。','王宮與大教堂分開預約；兩景點間保留午餐緩衝。'],
['seville','一整天，都是安達魯西亞','早晨西班牙廣場與瑪麗亞路易莎公園。','特里亞納區看陶瓷、沿河吃午餐。','河畔散步，買好隔天車上點心。','宿塞維亞；午後可刪減景點，避開高溫。'],
['lisbon','跨過國界，跟葡萄牙說聲好','搭跨境巴士前往里斯本，規劃約 7–9 小時。','整日保留交通彈性；抵達後辦理入住。','旅宿附近吃晚餐，早點休息。','需確認 ALSA／其他業者 2027 班次；葡萄牙時間比西班牙慢 1 小時。'],
['lisbon','從老城，走進藍色瓷磚','阿爾法瑪街區散步，參觀主教座堂周邊。','聖露西亞觀景台、咖啡與午休。','預約小型 Fado 表演，確認餐點與最低消費。','宿里斯本；電車可作體驗，擁擠時改步行或地鐵。'],
['lisbon','貝倫的蛋塔與海風','前往貝倫，參觀熱羅尼莫斯修道院。','吃蛋塔、沿河走到發現者紀念碑與貝倫塔外觀。','回 Chiado 晚餐。','修道院需確認開放及訂票；不預設貝倫塔可入內。'],
['lisbon','辛特拉，走進山上的童話','火車前往辛特拉，預訂佩納宮入場與上山交通。','午餐後視體力選雷加萊拉莊園或老城。','回里斯本；不要再塞海角行程。','辛特拉當日來回；宮殿間接駁耗時，一天最多兩處。'],
['lisbon','把空白留給大西洋','前往卡斯凱什，海邊步道慢慢走。','海鮮午餐、沙灘休息，依天候調整。','回里斯本，找一間喜歡的酒吧或咖啡館。','宿里斯本；風大或下雨改古本基安博物館。'],
['lisbon','自由日，收集城市的小事','睡晚一點，逛 Baixa 與 Chiado 小店。','挑喜歡的博物館，或補上前幾天沒走完的地方。','看一場河畔日落，整理行李。','彈性日：可吸收天候與疲勞，不安排硬性預約。'],
['porto','搭火車，往杜羅河去','搭 CP Alfa Pendular／Intercidades 前往波多。','估約 3–3.5 小時到 Campanhã，另留市區接駁。','入住後沿 Ribeira 河畔散步。','宿波多；起訖車站依車票確認。'],
['porto','藍瓷磚與一座城市的故事','聖本篤車站看瓷磚，接著波多主教座堂。','牧師塔周邊；想去萊羅書店須另約。','路易一世大橋、Jardim do Morro 看夕陽。','宿波多；橋上風大，日落後加件薄外套。'],
['porto','隔著河，乾杯一下','跨河到加亞新城，預約酒窖導覽。','河畔午餐，選短程遊船或咖啡館。','回市中心試試 francesinha 三明治。','宿波多；不飲酒可換纜車或河畔散步，皆自費選項。'],
['porto','最後一天，也要慢慢過','河畔吃早餐；市場與伴手禮採買改排前一天。','搭車至 Foz 河海交會處散步。','回市區吃告別晚餐、確認明日航班。','6/10 為葡萄牙國定假日，商店與市場可能休息；以海邊散步為主，確認餐廳營業。'],
['porto','帶一口袋陽光回家','退房，依航班時間前往波多機場。','建議國際線起飛前至少 3 小時抵達，依航空公司要求。','返程／轉機；抵達出發地日期依實際機票。','本行程以當地 21 天計；跨洲飛行可能另需前後各 1 天。']];
const routeList=document.querySelector('#route-list');
routeList.innerHTML=cities.map(c=>`<a class="route-stop" href="#itinerary" data-jump="${c.id}"><span class="city-icon" style="background:${c.color}">${c.symbol}</span><span class="city-en">${c.en}</span><strong>${c.name}</strong><span>${c.dates}</span><small>${c.nights} 晚 · ${c.stay}</small></a>`).join('');
function render(city='all'){
 document.querySelectorAll('[data-city]').forEach(b=>{const on=b.dataset.city===city;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 document.querySelector('#days').innerHTML=cities.filter(c=>city==='all'||c.id===city).map(c=>`<article class="city-chapter"><div class="chapter-heading"><span class="chapter-icon" style="background:${c.color}">${c.symbol}</span><div><h3>${c.name} <span>${c.en}</span></h3><p>${c.intro}</p></div><span class="night-tag">${c.nights} NIGHTS</span></div><div class="day-list">${plan.map((d,i)=>{if(d[0]!==c.id)return '';const date=new Date(Date.UTC(2027,4,22+i));return `<details><summary><span class="day-num">DAY ${String(i+1).padStart(2,'0')}<small>${date.getUTCMonth()+1}/${String(date.getUTCDate()).padStart(2,'0')}</small></span><span class="day-title">${d[1]}<small>${d[2]}</small></span><span class="expand" aria-hidden="true">＋</span></summary><div class="day-detail"><div><b>上午</b><p>${d[2]}</p></div><div><b>午後</b><p>${d[3]}</p></div><div><b>晚上</b><p>${d[4]}</p></div><p class="day-tip">小提醒 · ${d[5]}</p><a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.en+' '+c.stay.split('／')[0])}">查看城市與住宿區地圖 ↗</a></div></details>`}).join('')}</div></article>`).join('');
}
document.querySelectorAll('[data-city]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.city)));
document.querySelectorAll('[data-jump]').forEach(a=>a.addEventListener('click',()=>render(a.dataset.jump)));
render();
const budgets={simple:[[700,1000],[420,630],[250,400],[180,280]],comfort:[[1200,1800],[630,840],[300,500],[250,350]],treat:[[2200,3200],[840,1260],[400,650],[300,500]]};
function money(n){return n.toLocaleString('en-US');}
function budget(){const amounts=budgets[document.querySelector('#budget-style').value];let lo=0,hi=0;document.querySelector('#budget-items').innerHTML=amounts.map((v,i)=>{lo+=v[0];hi+=v[1];return `<div><span>${['住宿 · 20 晚／每人分攤','餐飲 · 21 天','跨城與市內交通','門票與體驗'][i]}</span><b>€${money(v[0])}–${money(v[1])}</b></div>`}).join('');document.querySelector('#total').textContent=`€${money(lo)}–${money(hi)}`;}
document.querySelector('#budget-style').addEventListener('change',budget);budget();
const tasks=['確認馬德里進、波多出的多點進出機票','確認護照效期與適用的入境要求（依國籍查官方資訊）','預訂 20 晚旅宿，優先可取消方案','預約阿爾罕布拉宮、塞維亞王宮與辛特拉門票','確認跨城火車與塞維亞－里斯本巴士班次','準備旅遊保險、網路、轉接頭與好走的鞋'];
let checked=[];try{const saved=JSON.parse(localStorage.getItem('iberia-checklist-v1')||'[]');if(Array.isArray(saved))checked=saved.filter(v=>Number.isInteger(v)&&v>=0&&v<tasks.length);}catch{}
document.querySelector('#checklist').innerHTML=tasks.map((t,i)=>`<label class="check"><input type="checkbox" value="${i}" ${checked.includes(i)?'checked':''}><span>${t}</span></label>`).join('');
function progress(){document.querySelector('#check-progress').textContent=`已準備 ${document.querySelectorAll('#checklist input:checked').length} / ${tasks.length} 項`;}
document.querySelector('#checklist').addEventListener('change',()=>{try{localStorage.setItem('iberia-checklist-v1',JSON.stringify([...document.querySelectorAll('#checklist input:checked')].map(i=>Number(i.value))));}catch{}progress();});progress();

let beforePrintCity='all';
window.addEventListener('beforeprint',()=>{beforePrintCity=document.querySelector('[data-city].active')?.dataset.city||'all';render('all');document.querySelectorAll('details').forEach(d=>d.open=true);});
window.addEventListener('afterprint',()=>render(beforePrintCity));
