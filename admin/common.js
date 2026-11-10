/* ============ UMUMIY: savollar, darajalar, natija kodi ============ */
window.APP = {
  title: "Nerv sistemasi, analizatorlar va yurak-qon tomir tizimi",
  purpose: "Darsda o‘quvchilar bilimini tekshirish uchun 30 ta savoldan iborat test",
  author: "SPD 905u guruhi — Anvarova Madinaxon",
  secPerQuestion: 20,     // har bir savolga beriladigan vaqt (soniya)
  lockMinutes: 50,        // testni qayta ishlash uchun kutish vaqti (daqiqa)
  salt: "spd905u-madinaxon",
  /* FIREBASE REALTIME DATABASE havolasi (README dagi 1-qadam). Masalan:
     "https://spd905u-test-default-rtdb.firebaseio.com"   Bo'sh qoldirsangiz — qo'lda kod rejimi. */
  firebaseUrl: "https://test-f29e2-default-rtdb.firebaseio.com"
};

/* Har savolda o[0] — TO‘G‘RI javob. O‘quvchiga variantlar aralashtirib beriladi. */
window.QUIZ = {
  sections: [
    "Bosh miya va orqa miya",
    "Bosh miya nervlari",
    "Markaziy nerv sistemasi",
    "Ko‘rish analizatori",
    "Eshitish analizatori",
    "Yurak va qon tomirlar"
  ],
  questions: [
    // 1-bo'lim
    { s:0, q:"Bosh miyaning qaysi qismi muvozanatni saqlaydi?",
      o:["Miyacha","Uzunchoq miya","Varoliy ko‘prigi","Oraliq miya"] },
    { s:0, q:"Peshona bo‘lagi zararlansa, qanday faoliyatlar buziladi?",
      o:["Harakat, nutq va yozish faoliyati","Teri sezgisi va tana holatini sezish faoliyati","Eshitish, hid bilish va xotira faoliyati","Ko‘rish va ranglarni farqlash faoliyati"] },
    { s:0, q:"Orqa miya nechta segmentdan tashkil topgan?",
      o:["31–32 ta","33–34 ta","29–30 ta","26–27 ta"] },
    { s:0, q:"Issiq narsaga qo‘l tekkizganda qo‘lni tez tortib olish nima deyiladi?",
      o:["Refleks","Instinkt","Ko‘nikma","Sezgi"] },
    { s:0, q:"Ensa bo‘lagi zararlansa, qaysi sezgi buziladi?",
      o:["Ko‘rish sezgisi","Eshitish sezgisi","Hid bilish sezgisi","Teri (teginish) sezgisi"] },
    // 2-bo'lim
    { s:1, q:"Hid bilish nervi nechanchi juft nerv hisoblanadi?",
      o:["I juft","II juft","V juft","VII juft"] },
    { s:1, q:"Ko‘rish nervi zararlansa, qaysi faoliyat buziladi?",
      o:["Ko‘rish faoliyati","Ko‘z olmasini harakatlantirish","Yuz mimikasi","Hid bilish faoliyati"] },
    { s:1, q:"Yuz mushaklarini harakatlantiruvchi nerv qaysi?",
      o:["VII juft — yuz nervi","V juft — uch shoxli nerv","X juft — adashgan nerv","XI juft — qo‘shimcha nerv"] },
    { s:1, q:"Eshitish va muvozanat uchun javob beruvchi nerv qaysi?",
      o:["VIII juft — dahliz-chig‘anoq nervi","VII juft — yuz nervi","I juft — hid bilish nervi","XII juft — til osti nervi"] },
    { s:1, q:"Tilning harakatini boshqaruvchi nerv nechanchi juft?",
      o:["XII juft — til osti nervi","IX juft — til-halqum nervi","X juft — adashgan nerv","VII juft — yuz nervi"] },
    // 3-bo'lim
    { s:2, q:"Markaziy nerv sistemasiga qaysi a’zolar kiradi?",
      o:["Bosh miya va orqa miya","Bosh miya va bosh miya nervlari","Orqa miya va orqa miya nervlari","Bosh miya, orqa miya va nerv tugunlari"] },
    { s:2, q:"Bosh miya inson organizmida qanday vazifani bajaradi?",
      o:["Barcha fikrlar, harakatlar va his-tuyg‘ularni boshqaradi","Faqat ixtiyoriy harakatlarni boshqaradi","Faqat sezgi a’zolaridan kelgan axborotni qabul qiladi, javob qaytarmaydi","Faqat ichki a’zolar ishini (yurak urishi, nafas) boshqaradi"] },
    { s:2, q:"Orqa miya qayerda joylashgan?",
      o:["Umurtqa pog‘onasi kanalida","Bosh suyagi (kalla) bo‘shlig‘ida","Ko‘krak qafasi bo‘shlig‘ida","Umurtqalar orasidagi tog‘ay disklarida"] },
    { s:2, q:"Neyron nima va uning asosiy vazifasi qanday?",
      o:["Nerv hujayrasi bo‘lib, nerv impulslarini qabul qiladi va uzatadi","Yordamchi hujayra bo‘lib, nerv hujayralarini oziqlantiradi va himoya qiladi","Nerv tolasini o‘rab turuvchi qobiq bo‘lib, impuls tezligini oshiradi","Nervlar to‘plamidan iborat tugun bo‘lib, impulslarni saqlab turadi"] },
    { s:2, q:"Refleks nima?",
      o:["Organizmning tashqi yoki ichki ta’sirga javob reaksiyasi","Organizmning faqat tashqi ta’sirga ongli ravishda bergan javobi","Nerv impulsining bir neyron ichida tarqalishi","Retseptorning ta’sirni qabul qilish qobiliyati"] },
    // 4-bo'lim
    { s:3, q:"Ko‘rish analizatorining asosiy retseptorlari qayerda joylashgan?",
      o:["To‘r pardada","Shox pardada","Rangdor pardada","Ko‘z gavharida"] },
    { s:3, q:"Ko‘zda ranglarni ajratishga qaysi hujayralar yordam beradi?",
      o:["Kolbachalar","Tayoqchalar","Pigmentli hujayralar","Ganglioz hujayralar"] },
    { s:3, q:"Ko‘zda qorong‘ilikda ko‘rishga yordam beruvchi hujayralar qaysilar?",
      o:["Tayoqchalar","Kolbachalar","Rangdor parda hujayralari","Shox parda hujayralari"] },
    { s:3, q:"Ko‘rish axborotini miyaga qaysi nerv yetkazadi?",
      o:["Ko‘rish nervi","Ko‘zni harakatlantiruvchi nerv","Uch shoxli nerv","Yuz nervi"] },
    { s:3, q:"Ko‘rish markazi bosh miyaning qaysi bo‘lagida joylashgan?",
      o:["Ensa bo‘lagida","Chakka bo‘lagida","Tepa bo‘lagida","Peshona bo‘lagida"] },
    // 5-bo'lim
    { s:4, q:"Eshitish analizatorining retseptorlari qayerda joylashgan?",
      o:["Ichki quloqdagi chig‘anoqda","O‘rta quloqdagi eshitish suyakchalarida","Nog‘ora pardada","Ichki quloqdagi dahlizda"] },
    { s:4, q:"Tovush to‘lqinlarini birinchi bo‘lib qaysi a’zo qabul qiladi?",
      o:["Tashqi quloq","O‘rta quloq","Ichki quloq","Eshitish nervi"] },
    { s:4, q:"Eshitish retseptorlari qanday ataladi?",
      o:["Tukli sezuvchi hujayralar","Tayoqcha va kolbachalar","Mielinli nerv tolalari","Eshitish suyakchalari"] },
    { s:4, q:"Eshitish axboroti miyaga qaysi nerv orqali uzatiladi?",
      o:["VIII juft — dahliz-chig‘anoq nervi","VII juft — yuz nervi","I juft — hid bilish nervi","XII juft — til osti nervi"] },
    { s:4, q:"Eshitish markazi bosh miyaning qaysi bo‘lagida joylashgan?",
      o:["Chakka bo‘lagida","Ensa bo‘lagida","Tepa bo‘lagida","Peshona bo‘lagida"] },
    // 6-bo'lim
    { s:5, q:"Inson yuragi nechta kameradan iborat?",
      o:["4 ta — 2 ta bo‘lmacha va 2 ta qorincha","3 ta — 2 ta bo‘lmacha va 1 ta qorincha","2 ta — 1 ta bo‘lmacha va 1 ta qorincha","4 ta — 3 ta bo‘lmacha va 1 ta qorincha"] },
    { s:5, q:"Yurakdan qonni olib chiqadigan qon tomirlar nima deyiladi?",
      o:["Arteriyalar","Venalar","Kapillyarlar","Limfa tomirlari"] },
    { s:5, q:"Qonni yurakka olib keladigan qon tomirlar nima deyiladi?",
      o:["Venalar","Arteriyalar","Kapillyarlar","Aorta va uning tarmoqlari"] },
    { s:5, q:"Yurakning asosiy vazifasi nima?",
      o:["Qonni butun organizm bo‘ylab haydash","Qonni filtrlab, zararli moddalardan tozalash","Qonni kislorod bilan to‘yintirish","Yangi qon hujayralarini hosil qilish"] },
    { s:5, q:"Qon va to‘qimalar o‘rtasida kislorod hamda oziq moddalar almashinuvi qaysi tomirlarda sodir bo‘ladi?",
      o:["Kapillyarlarda","Arteriyalarda","Venalarda","Aortada"] }
  ]
};

/* 5 ta daraja (100% li tizim) + 3 xil rang (high / mid / low) */
window.LEVELS = [
  { min:90, key:"l1", label:"Juda zo‘r", tier:"high",
    note:"Mukammal natija! Bilimingiz bilan faxrlansa arziydi. Shu yo‘ldan davom eting — kelajakda a’lo mutaxassis bo‘lishingizga shubha yo‘q! 🌟" },
  { min:75, key:"l2", label:"Zo‘r", tier:"high",
    note:"Ajoyib natija! Mukammallikka juda yaqinsiz — bir oz takrorlash bilan 100% ga chiqasiz. Barakalla! 💪" },
  { min:60, key:"l3", label:"O‘rta", tier:"mid",
    note:"Yomon emas, bilimingizda mustahkam asos bor. Xato qilgan savollaringizni qayta ko‘rib chiqing — keyingi safar albatta yuqoriga chiqasiz. 📖" },
  { min:40, key:"l4", label:"Past", tier:"low",
    note:"Hafsalangiz pir bo‘lmasin! Mavzuni qayta o‘qib, har kuni 10–15 daqiqa takrorlang — natija tez yaxshilanadi. Siz uddalaysiz! 🌱" },
  { min:0,  key:"l5", label:"Juda past", tier:"low",
    note:"Bu faqat boshlanish. Hech kim hamma narsani birdaniga bilmaydi — mavzuni qaytadan birga ko‘rib chiqamiz. Eng muhimi, sinab ko‘rganingiz! ❤️" }
];
APP.levelOf = p => LEVELS.find(l => p >= l.min);
APP.fmtTime = s => { s = Math.max(0, Math.round(s)); return String(Math.floor(s/60)).padStart(2,"0") + ":" + String(s%60).padStart(2,"0"); };
APP.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---- Natija kodi (o‘quvchi → o‘qituvchi). Oddiy tekshiruv yig‘indisi bilan. ---- */
APP.hash = str => { let x = 5381; for (let i = 0; i < str.length; i++) x = ((x << 5) + x) ^ str.charCodeAt(i); return (x >>> 0).toString(36); };
APP.sign = r => APP.hash([r.i, r.n, r.c, r.t, r.l, r.ab, r.d, APP.salt].join("|"));
APP.encode = r => {
  const o = { i:r.i, n:r.n, c:r.c, t:r.t, l:r.l, ab:r.ab, d:r.d }; o.s = APP.sign(o);
  const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
  return "SPD905U." + b64.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
};
APP.decode = code => {
  try {
    let b = code.replace(/^SPD905U\./,"").replace(/-/g,"+").replace(/_/g,"/");
    while (b.length % 4) b += "=";
    const o = JSON.parse(decodeURIComponent(escape(atob(b))));
    if (o.s !== APP.sign(o)) return null;
    return o;
  } catch (e) { return null; }
};
APP.total = () => QUIZ.questions.length;

/* ---- Natijalarni umumiy bazaga yozish/o‘qish (Firebase REST, serversiz) ---- */
APP.dbOn = () => !!APP.firebaseUrl;
APP.dbUrl = p => APP.firebaseUrl.replace(/\/+$/,"") + "/results" + (p ? "/" + p : "") + ".json";
APP.dbPut = async r => {
  const o = { i:r.i, n:r.n, c:r.c, t:r.t, l:r.l, ab:r.ab, d:r.d }; o.s = APP.sign(o);
  const res = await fetch(APP.dbUrl(r.i), { method:"PUT", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(o) });
  if (!res.ok) throw new Error("db " + res.status);
};
APP.dbAll = async () => {
  const res = await fetch(APP.dbUrl() + "?_=" + Date.now(), { cache:"no-store" });
  if (!res.ok) throw new Error("db " + res.status);
  const j = await res.json() || {};
  return Object.values(j).filter(o => o && o.s === APP.sign(o));
};
APP.dbDel = async id => { await fetch(APP.dbUrl(id), { method:"DELETE" }); };
APP.dbClear = async () => { await fetch(APP.dbUrl(), { method:"DELETE" }); };
