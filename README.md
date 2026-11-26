# 小兔的伊比利假期

線上網站：[小兔的伊比利假期](https://nibbles724bot.github.io/travel-iberia)

繁體中文的西班牙、葡萄牙 21 天旅行手帳網站，建議日期 **2027/5/22–6/11**（當地日期，20 晚）。馬德里 4 晚 → 格拉納達 3 晚 → 塞維亞 3 晚 → 里斯本 6 晚 → 波多 4 晚。國際飛行日可能另外增加。

Miffy 靈感的簡潔配色，搭配本專案原創 SVG 小兔與建築插畫，非官方合作。無外部字型、追蹤碼或執行期依賴。

## 使用

- `npm run dev`：在 http://localhost:5173 預覽（需 Python 3）。
- `npm run check`：檢查 JavaScript 語法（需 Node.js）。
- `npm run build`：輸出 `dist/`，可部署至任意靜態網站服務。

城市篩選、每日展開行程、三種預算試算與瀏覽器本機儲存的行前清單。清單不會跨裝置同步。列印時自動展開全部 21 天行程，完成後恢復原城市篩選。

## 部署

已提供 GitHub Pages Actions workflow。儲存庫 Settings → Pages → Source 選擇 **GitHub Actions**，推送 main 後即可部署。不需要 npm install。相對資源路徑支援 `/travel-iberia/` 子目錄。

## 規劃依據

資訊查核日期：2026/11/26。交通時數與預算是自主規劃估計，並非 2027 保證班次或即時報價。未預訂任何票券。

- [Renfe](https://www.renfe.com/es/en)：西班牙城際鐵路。
- [CP](https://www.cp.pt/)：里斯本–波多鐵路，實際起訖站依訂票確認。
- [ALSA](https://www.alsa.com/)：塞維亞–里斯本巴士，跨境日預留 7–9 小時；2027 班次待開賣核對。
- [阿爾罕布拉官方參觀提醒](https://tickets.alhambra-patronato.es/en/helpful-tips/)：提早預約、具名票券、證件與納斯里德宮時段。
- [塞維亞王宮](https://www.alcazarsevilla.org/)、[辛特拉宮殿](https://www.parquesdesintra.pt/en/)：門票與開放情形以官方公布為準。

預算為每人、兩人共用雙人房，20 晚住宿與 21 天餐飲，不含國際機票、保險、購物，另備 15% 彈性金。入境規定依旅客國籍至官方查核。

6/10 葡萄牙國定假日，已將市場採買移至前一天，當日以河海散步為主。[葡萄牙官方假日資訊](https://www.visitportugal.com/en/node/470987)。
