/* ============================================================
   KOP DESK ― データファイル
   ここだけ書き換えれば、アプリの中身が全部変わります。
   GitHub の画面上で直接編集して保存 → 1〜2分でサイトに反映されます。
   ※ 記号（ , " { } ）を消さないように気をつけてください。

   このファイルは「オフラインでも必ず出る土台のデータ」です。
   ネットにつながっていれば、アプリが起動時にFotMobから
   最新の日程・スコア・負傷者を取り直して上書きします。
   ============================================================ */

window.KOP_DATA = {

  updated: "2026-07-29",
  season: "2026/27",

  /* FotMobからの自動更新設定。enabled を false にすると下の保存データだけを使う */
  fotmob: { teamId: 8650, enabled: true },

  /* ── クラブ辞典 ────────────────────────────────────────────
     code = プレミアリーグ公式のエンブレム番号。
     code が null のクラブは頭文字マーク（例：MON）で表示されます。
  ------------------------------------------------------------ */
  clubs: {
    liverpool:      { ja:"リヴァプール",       en:"Liverpool",           short:"LIV", code:"t14",  color:"#C8102E" },
    arsenal:        { ja:"アーセナル",         en:"Arsenal",             short:"ARS", code:"t3",   color:"#EF0107" },
    "aston-villa":  { ja:"アストン・ヴィラ",   en:"Aston Villa",         short:"AVL", code:"t7",   color:"#95BFE5" },
    bournemouth:    { ja:"ボーンマス",         en:"Bournemouth",         short:"BOU", code:"t91",  color:"#DA291C" },
    brentford:      { ja:"ブレントフォード",   en:"Brentford",           short:"BRE", code:"t94",  color:"#E30613" },
    brighton:       { ja:"ブライトン",         en:"Brighton",            short:"BHA", code:"t36",  color:"#0057B8" },
    chelsea:        { ja:"チェルシー",         en:"Chelsea",             short:"CHE", code:"t8",   color:"#034694" },
    coventry:       { ja:"コヴェントリー",     en:"Coventry City",       short:"COV", code:"t9",   color:"#78D0F3" },
    "crystal-palace":{ja:"C・パレス",          en:"Crystal Palace",      short:"CRY", code:"t31",  color:"#1B458F" },
    everton:        { ja:"エヴァートン",       en:"Everton",             short:"EVE", code:"t11",  color:"#003399" },
    fulham:         { ja:"フラム",             en:"Fulham",              short:"FUL", code:"t54",  color:"#CC0000" },
    hull:           { ja:"ハル・シティ",       en:"Hull City",           short:"HUL", code:"t88",  color:"#F5A12D" },
    ipswich:        { ja:"イプスウィッチ",     en:"Ipswich Town",        short:"IPS", code:"t40",  color:"#0044A9" },
    leeds:          { ja:"リーズ",             en:"Leeds United",        short:"LEE", code:"t2",   color:"#FFCD00" },
    "man-city":     { ja:"マンチェスター・C",  en:"Manchester City",     short:"MCI", code:"t43",  color:"#6CABDD" },
    "man-utd":      { ja:"マンチェスター・U",  en:"Manchester United",   short:"MUN", code:"t1",   color:"#DA291C" },
    newcastle:      { ja:"ニューカッスル",     en:"Newcastle United",    short:"NEW", code:"t4",   color:"#41B6E6" },
    forest:         { ja:"ノッティンガム・F",  en:"Nottingham Forest",   short:"NFO", code:"t17",  color:"#DD0000" },
    sunderland:     { ja:"サンダーランド",     en:"Sunderland",          short:"SUN", code:"t56",  color:"#EB172B" },
    tottenham:      { ja:"トッテナム",         en:"Tottenham Hotspur",   short:"TOT", code:"t6",   color:"#132257" },

    /* プレシーズンの相手・移籍の相手クラブなど */
    wrexham:        { ja:"レクサム",           en:"Wrexham AFC",         short:"WRE", code:"t109", color:"#DA291C" },
    monaco:         { ja:"ASモナコ",           en:"AS Monaco",           short:"MON", code:null,   color:"#CE1126" },
    como:           { ja:"コモ1907",           en:"Como 1907",           short:"COM", code:null,   color:"#0B4EA2" },
    "real-madrid":  { ja:"レアル・マドリード", en:"Real Madrid",         short:"RMA", code:null,   color:"#00529F" },
    rennes:         { ja:"レンヌ",             en:"Stade Rennais",       short:"REN", code:null,   color:"#E30613" },
    osasuna:        { ja:"オサスナ",           en:"CA Osasuna",          short:"OSA", code:null,   color:"#0A346F" },
    bolton:         { ja:"ボルトン",           en:"Bolton Wanderers",    short:"BOL", code:"t30",  color:"#263C7E" },
    "west-brom":    { ja:"WBA",                en:"West Bromwich Albion",short:"WBA", code:"t35",  color:"#122F67" },
    hartberg:       { ja:"ハルトベルク",       en:"TSV Hartberg",        short:"HAR", code:null,   color:"#1F7A3D" },
    "free-agent":   { ja:"フリー",             en:"Free agent",          short:"FA",  code:null,   color:"#8A757C" }
  },

  /* FotMobの英語クラブ名 → 上の clubs のキー。ロゴを出すための対応表 */
  fmNames: {
    "Liverpool":"liverpool","Arsenal":"arsenal","Aston Villa":"aston-villa","Bournemouth":"bournemouth",
    "Brentford":"brentford","Brighton":"brighton","Chelsea":"chelsea","Coventry":"coventry",
    "Crystal Palace":"crystal-palace","Everton":"everton","Fulham":"fulham","Hull":"hull",
    "Ipswich":"ipswich","Leeds":"leeds","Man City":"man-city","Man United":"man-utd",
    "Newcastle":"newcastle","Nottm Forest":"forest","Sunderland":"sunderland","Tottenham":"tottenham",
    "Wrexham":"wrexham","Monaco":"monaco","Como":"como","Real Madrid":"real-madrid","Rennes":"rennes",
    "Osasuna":"osasuna","Bolton":"bolton","West Brom":"west-brom","Hartberg":"hartberg"
  },

  /* ── 次の試合（起動時にFotMobで上書きされる） ───────────── */
  next: { opponent:"wrexham", home:false, comp:"プレシーズン親善試合", kickoffUTC:"2026-07-29T23:30:00Z", venue:"Yankee Stadium, New York", note:"北米ツアー第2戦。イラオラ体制2試合目。" },

  /* ── 試合結果（新しい順） ───────────────────────────── */
  results: [
    {
      fmMatchId: "5498878",
      date: "2026-07-25",
      comp: "プレシーズン親善試合",
      venue: "GEODIS Park, Nashville, Tennessee",
      home: "liverpool",
      homeScore: 4,
      away: "sunderland",
      awayScore: 2,
      ht: "1 - 1",
      attendance: "24,897",
      formation: "4-2-3-1",
      potm: "Dominik Szoboszlai",
      events: [
        { min:13, side:"home", who:"Kieran Morrison", agg:"1 - 0" },
        { min:28, side:"away", who:"Enzo Le Fée", agg:"1 - 1" },
        { min:49, side:"away", who:"Timur Tuterov", agg:"1 - 2" },
        { min:56, side:"home", who:"Dominik Szoboszlai", agg:"2 - 2" },
        { min:72, side:"home", who:"Federico Chiesa", agg:"3 - 2" },
        { min:85, side:"home", who:"Lewis Koumas", agg:"4 - 2" }
      ],
      statGroups: [
        { title:"Top stats", ja:"主要スタッツ", rows:[{ t:"Ball possession", v:[64, 36] }, { t:"Total shots", v:[14, 11] }, { t:"Shots on target", v:[6, 5] }, { t:"Touches in opposition box", v:[18, 14] }, { t:"Big chances", v:[4, 1] }, { t:"Big chances missed", v:[2, 0] }, { t:"Accurate passes", v:["467 (90%)", "233 (78%)"] }, { t:"Yellow cards", v:[0, 1] }, { t:"Corners", v:[4, 1] }] },
        { title:"Shots", ja:"シュート", rows:[{ t:"Total shots", v:[14, 11] }, { t:"Shots off target", v:[6, 2] }, { t:"Shots on target", v:[6, 5] }, { t:"Blocked shots", v:[2, 4] }, { t:"Hit woodwork", v:[0, 0] }, { t:"Shots inside box", v:[9, 5] }, { t:"Shots outside box", v:[5, 6] }] },
        { title:"Passes", ja:"パス", rows:[{ t:"Passes", v:[517, 297] }, { t:"Accurate passes", v:["467 (90%)", "233 (78%)"] }, { t:"Own half", v:[261, 148] }, { t:"Opposition half", v:[206, 85] }, { t:"Accurate long balls", v:["41 (62%)", "13 (36%)"] }, { t:"Accurate crosses", v:["1 (9%)", "3 (50%)"] }, { t:"Throws", v:[10, 18] }, { t:"Touches in opposition box", v:[18, 14] }, { t:"Offsides", v:[0, 1] }] },
        { title:"Defence", ja:"守備", rows:[{ t:"Tackles", v:[8, 9] }, { t:"Interceptions", v:[5, 6] }, { t:"Blocks", v:[5, 2] }, { t:"Clearances", v:[12, 10] }, { t:"Keeper saves", v:[2, 2] }] },
        { title:"Duels", ja:"デュエル", rows:[{ t:"Duels won", v:[30, 41] }, { t:"Ground duels won", v:["22 (39%)", "34 (61%)"] }, { t:"Aerial duels won", v:["8 (53%)", "7 (47%)"] }, { t:"Successful dribbles", v:["5 (38%)", "8 (73%)"] }] }
      ],
      starters: [
        { fmId:948800, name:"Giorgi Mamardashvili", no:"25", x:50.0, y:10.0, rating:5.7, out:67, inn:null },
        { fmId:966018, name:"Jeremie Frimpong", no:"30", x:87.5, y:29.2, rating:5.9, out:68, inn:null },
        { fmId:568571, name:"Joseph Gomez", no:"2", x:62.5, y:29.2, rating:6.3, out:10, inn:null },
        { fmId:1933860, name:"Mor Talla Ndiaye", no:"75", x:37.5, y:29.2, rating:6.6, out:67, inn:null },
        { fmId:671529, name:"Konstantinos Tsimikas", no:"21", x:12.5, y:29.2, rating:6.2, out:46, inn:null },
        { fmId:933768, name:"Curtis Jones", no:"17", x:70.0, y:48.5, rating:6.5, out:46, inn:null },
        { fmId:1231075, name:"James McConnell", no:"53", x:30.0, y:48.5, rating:6.4, out:57, inn:null },
        { fmId:1439550, name:"Kieran Morrison", no:"68", x:83.8, y:67.8, rating:7.8, out:68, inn:null },
        { fmId:963964, name:"Harvey Elliott", no:"19", x:50.0, y:67.8, rating:7.1, out:46, inn:null },
        { fmId:1597668, name:"Rio Ngumoha", no:"73", x:16.3, y:67.8, rating:6.2, out:46, inn:null },
        { fmId:1692224, name:"Will Wright", no:"79", x:50.0, y:87.0, rating:6.2, out:46, inn:null }
      ],
      subs: [
        { fmId:1780239, name:"Ifeanyi Ndukwe", no:"83", x:null, y:null, rating:6.6, out:null, inn:10 },
        { fmId:1195281, name:"Milos Kerkez", no:"6", x:null, y:null, rating:6.4, out:null, inn:46 },
        { fmId:846005, name:"Dominik Szoboszlai", no:"8", x:null, y:null, rating:8.2, out:null, inn:46 },
        { fmId:1436258, name:"Trey Nyoni", no:"42", x:null, y:null, rating:7.6, out:null, inn:46 },
        { fmId:784510, name:"Federico Chiesa", no:"14", x:null, y:null, rating:7.9, out:null, inn:46 },
        { fmId:1364042, name:"Lewis Koumas", no:"67", x:null, y:null, rating:8, out:null, inn:46 },
        { fmId:1355539, name:"Calum Scanlon", no:"48", x:null, y:null, rating:6.5, out:null, inn:57 },
        { fmId:582276, name:"Freddie Woodman", no:"28", x:null, y:null, rating:6.2, out:null, inn:67 },
        { fmId:1249634, name:"Luke Chambers", no:"44", x:null, y:null, rating:6.3, out:null, inn:67 },
        { fmId:1076952, name:"Calvin Ramsay", no:"47", x:null, y:null, rating:7.2, out:null, inn:68 },
        { fmId:1832921, name:"Joshua Abe", no:"40", x:null, y:null, rating:6, out:null, inn:68 },
        { fmId:1236818, name:"Harvey Davies", no:"95", x:null, y:null, rating:null, out:null, inn:null },
        { fmId:1644308, name:"Joshua Sonni-Lambie", no:"82", x:null, y:null, rating:null, out:null, inn:null }
      ],
      notes: [
        "<b>イラオラ体制の初陣を勝利で飾る。</b>後半に3点を奪って逆転。",
        "先発は10代中心の若い構成。モリソン（7.8）が先制点を挙げた。",
        "Joe Gomez が10分で負傷交代。ンドゥクウェが緊急出場した。",
        "後半頭から主力を投入し、ソボスライ（8.2）がマン・オブ・ザ・マッチ。"
      ],
      video: "https://www.liverpoolfc.com/news/liverpool-4-2-sunderland-watch-highlights-and-full-replay-pre-season-game-nashville"
    }
    ],

  /* ── プレシーズン日程 ─────────────────────────────── */
  preseason: [
    { kickoffUTC:"2026-07-25T22:00:00Z", opp:"sunderland", home:true, score:"4 - 2", finished:true, fmMatchId:5498878, venue:"Nashville" },
    { kickoffUTC:"2026-07-29T23:30:00Z", opp:"wrexham", home:true, score:null, finished:false, fmMatchId:5498879, venue:"New York" },
    { kickoffUTC:"2026-08-02T20:00:00Z", opp:"leeds", home:true, score:null, finished:false, fmMatchId:5498880, venue:"Chicago" },
    { kickoffUTC:"2026-08-09T13:30:00Z", opp:"monaco", home:true, score:null, finished:false, fmMatchId:5765326, venue:"Anfield" },
    { kickoffUTC:"2026-08-16T11:00:00Z", opp:"como", home:true, score:null, finished:false, fmMatchId:5973785, venue:"Anfield" },
    { kickoffUTC:"2026-08-16T17:00:00Z", opp:"como", home:true, score:null, finished:false, fmMatchId:5765327, venue:"Anfield" }
    ],

  /* ── プレミアリーグ日程 ───────────────────────────── */
  league: [
    { kickoffUTC:"2026-08-23T15:30:00Z", opp:"newcastle", home:false, score:null, finished:false, fmMatchId:5795371, note:"開幕戦" },
    { kickoffUTC:"2026-08-29T11:30:00Z", opp:"forest", home:true, score:null, finished:false, fmMatchId:5795431, note:"" },
    { kickoffUTC:"2026-09-04T19:00:00Z", opp:"ipswich", home:false, score:null, finished:false, fmMatchId:5795441, note:"" },
    { kickoffUTC:"2026-09-12T14:00:00Z", opp:"fulham", home:true, score:null, finished:false, fmMatchId:5795451, note:"" },
    { kickoffUTC:"2026-09-20T13:00:00Z", opp:"bournemouth", home:false, score:null, finished:false, fmMatchId:5795455, note:"イラオラ古巣凱旋" },
    { kickoffUTC:"2026-10-10T14:00:00Z", opp:"man-city", home:true, score:null, finished:false, fmMatchId:5795472, note:"" },
    { kickoffUTC:"2026-10-17T14:00:00Z", opp:"brentford", home:false, score:null, finished:false, fmMatchId:5795476, note:"" },
    { kickoffUTC:"2026-10-24T14:00:00Z", opp:"brighton", home:true, score:null, finished:false, fmMatchId:5795492, note:"" },
    { kickoffUTC:"2026-10-31T15:00:00Z", opp:"arsenal", home:true, score:null, finished:false, fmMatchId:5795501, note:"" },
    { kickoffUTC:"2026-11-07T15:00:00Z", opp:"crystal-palace", home:false, score:null, finished:false, fmMatchId:5795507, note:"" },
    { kickoffUTC:"2026-11-21T15:00:00Z", opp:"man-utd", home:true, score:null, finished:false, fmMatchId:5795521, note:"" },
    { kickoffUTC:"2026-11-28T15:00:00Z", opp:"everton", home:false, score:null, finished:false, fmMatchId:5795528, note:"" }
    ],

  /* ── 監督・コーチ陣 ───────────────────────────────────── */
  manager: {
    name: "Andoni Iraola",
    ja: "アンドニ・イラオラ",
    nat: "🇪🇸", natJa: "スペイン / バスク",
    born: "1982-06-22",
    height: 182,
    appointed: "2026-06-04",
    contract: "2年契約",
    prev: "AFCボーンマス（2023-2026）",
    bio: "現役時代はアスレティック・ビルバオの右サイドバックとして510試合以上に出場したクラブレジェンド。指導者としてはミランデス、ラージョ・バジェカーノを経て2023年にボーンマスへ。25/26シーズンにはクラブ史上最高の6位・ヨーロッパリーグ出場権を獲得し、リヴァプールとの勝ち点差はわずか3だった。",
    principles: [
      { t:"マンツーマン・ハイプレス", d:"最前線から各選手が「一番近い相手」を捕まえに行く。ボールを失った瞬間の即時奪回が生命線。プレミアでも屈指のプレス強度を誇った。" },
      { t:"縦に速いダイレクト攻撃", d:"奪ってから4〜6秒で仕留めるトランジション重視。ボール保持率にはこだわらず、相手陣内での奪取から一気に沈める。" },
      { t:"サイドバックの高い位置", d:"両SBが最終ラインから飛び出して幅を作る。フリンポンやブラッドリーの推進力と噛み合う設計。" },
      { t:"若手を伸ばす手腕", d:"ボーンマスでもフイセン、ケルケズら若手を大化けさせた実績。サンダーランド戦でも10代を大量に先発させ、モリソンとンガモハが結果を出した。" }
    ],
    vsPrev: {
      a: { name:"Arne Slot", tag:"前任", points:["ポジショナルな保持型","構造とコントロール重視","4-2-3-1をベースに配置で崩す"] },
      b: { name:"Andoni Iraola", tag:"現体制", points:["マンツーマン基調のハイプレス","強度とトランジション重視","同じ4-2-3-1でも走行距離が跳ね上がる"] }
    },
    staff: [
      { role:"アシスタントコーチ", name:"Pablo de la Torre", nat:"🇪🇸" },
      { role:"1軍コーチ",         name:"Tommy Elphick",     nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { role:"1軍コーチ",         name:"Shaun Cooper",      nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { role:"GKコーチ",          name:"Alejandro Rosalen", nat:"🇪🇸" }
    ]
  },

  /* ── 予想スタメン（次のプレミア開幕戦を想定） ─────────────
     x: 0=左端 100=右端 ／ y: 0=自陣ゴール 100=相手ゴール
  ------------------------------------------------------------ */
  formation: {
    name: "4-2-3-1",
    label: "予想スタメン",
    note: "イラオラがボーンマスで多用した基本形。ブラッドリー、レオーニ、エキティケが負傷離脱中のため、右SBはフリンポン、CBはジャケとファン・ダイクの新コンビが軸になる。",
    xi: [
      { id:"alisson-becker",     role:"GK", x:50, y:8  },
      { id:"milos-kerkez",       role:"LB", x:14, y:27 },
      { id:"virgil-van-dijk",    role:"CB", x:37, y:21 },
      { id:"jeremy-jacquet",     role:"CB", x:63, y:21 },
      { id:"jeremie-frimpong",   role:"RB", x:86, y:27 },
      { id:"ryan-gravenberch",   role:"DM", x:34, y:47 },
      { id:"alexis-mac-allister",role:"CM", x:66, y:47 },
      { id:"cody-gakpo",         role:"LW", x:14, y:70 },
      { id:"florian-wirtz",      role:"AM", x:50, y:66 },
      { id:"federico-chiesa",    role:"RW", x:86, y:70 },
      { id:"alexander-isak",     role:"CF", x:50, y:88 }
    ],
    bench: ["giorgi-mamardashvili","joseph-gomez","konstantinos-tsimikas","wataru-endo",
            "dominik-szoboszlai","curtis-jones","harvey-elliott","trey-nyoni",
            "victor-munoz","rio-ngumoha","kieran-morrison","lewis-koumas"]
  },

  /* ── スカッド（FotMobの実データ＋日本語メモ） ────────── */
  squad: [
    { id:"vitezslav-jaros", fmId:1068920, dn:null, no:null, name:"Vítezslav Jaros", ja:"ヴィーチェスラフ・ヤロシュ", pos:"GK", detail:"GK", nat:"🇨🇿", natJa:"チェコ", dob:"2001-07-23", height:187, value:3920856, note:"チェコ代表GK。出場機会を求める立場。" },
    { id:"alisson-becker", fmId:319784, dn:"Alisson", no:1, name:"Alisson Becker", ja:"アリソン・ベッカー", pos:"GK", detail:"GK", nat:"🇧🇷", natJa:"ブラジル", dob:"1992-10-02", height:193, value:14795536, note:"副キャプテン。世界屈指のシュートストップ力。" },
    { id:"giorgi-mamardashvili", fmId:948800, dn:"Mamardashvili", no:25, name:"Giorgi Mamardashvili", ja:"ギオルギ・ママルダシュヴィリ", pos:"GK", detail:"GK", nat:"🇬🇪", natJa:"ジョージア", dob:"2000-09-29", height:197, value:30831484, note:"197cmの長身。サンダーランド戦で先発した。" },
    { id:"freddie-woodman", fmId:582276, dn:null, no:28, name:"Freddie Woodman", ja:"フレディ・ウッドマン", pos:"GK", detail:"GK", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"1997-03-04", height:188, value:1963119, note:"7月に契約延長。ベテランの第3GK。" },
    { id:"harvey-davies", fmId:1236818, dn:null, no:95, name:"Harvey Davies", ja:"ハーヴェイ・デイヴィス", pos:"GK", detail:"GK", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"2003-09-03", height:190, value:623403, note:"アカデミー出身のGK。" },
    { id:"jeremy-jacquet", fmId:1473534, dn:"Jacquet", no:null, name:"Jérémy Jacquet", ja:"ジェレミー・ジャケ", pos:"DF", detail:"CB", nat:"🇫🇷", natJa:"フランス", dob:"2005-07-13", height:188, value:31541955, note:"レンヌから加入した新戦力CB。コナテの後釜として期待。" },
    { id:"joseph-gomez", fmId:568571, dn:"Gomez", no:2, name:"Joseph Gomez", ja:"ジョー・ゴメス", pos:"DF", detail:"CB,RB", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"1997-05-23", height:191, value:14245813, note:"サンダーランド戦の10分で負傷交代。CB陣にとって痛手。" },
    { id:"virgil-van-dijk", fmId:209405, dn:"Van Dijk", no:4, name:"Virgil van Dijk", ja:"フィルジル・ファン・ダイク", pos:"DF", detail:"CB", nat:"🇳🇱", natJa:"オランダ", dob:"1991-07-08", height:193, value:6830396, note:"キャプテン。コナテ退団で最終ラインの重責がさらに増す。", captain:true },
    { id:"milos-kerkez", fmId:1195281, dn:null, no:6, name:"Milos Kerkez", ja:"ミロシュ・ケルケズ", pos:"DF", detail:"LB", nat:"🇭🇺", natJa:"ハンガリー", dob:"2003-11-07", height:180, value:61326478, note:"ボーンマス時代にイラオラの下でブレイク。指揮官の要求を最も理解している。" },
    { id:"conor-bradley", fmId:1113690, dn:null, no:12, name:"Conor Bradley", ja:"コナー・ブラッドリー", pos:"DF", detail:"RB,RM", nat:"🇬🇧", natJa:"北アイルランド", dob:"2003-07-09", height:181, value:34948173, note:"アカデミー育ち。攻守の推進力が新体制と好相性。", injury:"Early August 2026" },
    { id:"giovanni-leoni", fmId:1609209, dn:null, no:15, name:"Giovanni Leoni", ja:"ジョヴァンニ・レオーニ", pos:"DF", detail:"CB", nat:"🇮🇹", natJa:"イタリア", dob:"2006-12-21", height:196, value:30471783, note:"196cmの19歳CB。今季は出場機会が増える見込み。", injury:"Early August 2026" },
    { id:"jeremie-frimpong", fmId:966018, dn:null, no:30, name:"Jeremie Frimpong", ja:"ジェレミー・フリンポン", pos:"DF", detail:"RB,RW", nat:"🇳🇱", natJa:"オランダ", dob:"2000-12-10", height:171, value:43552026, note:"爆発的なスピード。高い位置を取るイラオラのSB像に合致。" },
    { id:"calvin-ramsay", fmId:1076952, dn:null, no:47, name:"Calvin Ramsay", ja:"カルヴィン・ラムジー", pos:"DF", detail:"RB,RWB", nat:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", natJa:"スコットランド", dob:"2003-07-31", height:177, value:1278234, note:"サンダーランド戦の途中出場で7.2の高評価。" },
    { id:"mor-talla-ndiaye", fmId:1933860, dn:"Ndiaye", no:75, name:"Mor Talla Ndiaye", ja:"モル・タラ・ンディアイ", pos:"DF", detail:"CB", nat:"🇸🇳", natJa:"セネガル", dob:"2008-01-06", height:null, value:null, note:"18歳のCB。1月加入でいきなりプレシーズン先発。" },
    { id:"wataru-endo", fmId:202643, dn:"Endo", no:3, name:"Wataru Endo", ja:"遠藤 航", pos:"MF", detail:"CDM,CB", nat:"🇯🇵", natJa:"日本", dob:"1993-02-09", height:178, value:4416362, note:"デュエル王。プレス強度を求める新体制で存在感を取り戻せるか。" },
    { id:"dominik-szoboszlai", fmId:846005, dn:null, no:8, name:"Dominik Szoboszlai", ja:"ドミニク・ソボスライ", pos:"MF", detail:"CAM,CDM,RW,RB,CM,LW", nat:"🇭🇺", natJa:"ハンガリー", dob:"2000-10-25", height:185, value:103884167, note:"サンダーランド戦で強烈な同点弾。マン・オブ・ザ・マッチ。7月に契約延長。" },
    { id:"alexis-mac-allister", fmId:831489, dn:"Mac Allister", no:10, name:"Alexis Mac Allister", ja:"アレクシス・マカリステル", pos:"MF", detail:"CDM,CM,CAM,LM", nat:"🇦🇷", natJa:"アルゼンチン", dob:"1998-12-24", height:174, value:84925776, note:"中盤の心臓。ゲームの緩急をつくる。" },
    { id:"curtis-jones", fmId:933768, dn:null, no:17, name:"Curtis Jones", ja:"カーティス・ジョーンズ", pos:"MF", detail:"CDM,RB,CAM,CM", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"2001-01-30", height:182, value:37615957, note:"地元育ちのユーティリティ。" },
    { id:"harvey-elliott", fmId:963964, dn:null, no:19, name:"Harvey Elliott", ja:"ハーヴェイ・エリオット", pos:"MF", detail:"CAM", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"2003-04-04", height:170, value:28474870, note:"サンダーランド戦は前半のみで7.1。出場時間の確保が今季のテーマ。" },
    { id:"konstantinos-tsimikas", fmId:671529, dn:"Tsimikas", no:21, name:"Konstantinos Tsimikas", ja:"コスタス・ツィミカス", pos:"MF", detail:"LB,LWB,LM", nat:"🇬🇷", natJa:"ギリシャ", dob:"1996-05-12", height:179, value:11054088, note:"左サイドの控え。精度の高いクロスが武器。" },
    { id:"ryan-gravenberch", fmId:956683, dn:null, no:38, name:"Ryan Gravenberch", ja:"ライアン・フラーフェンベルフ", pos:"MF", detail:"CDM,CM", nat:"🇳🇱", natJa:"オランダ", dob:"2002-05-16", height:190, value:94765001, note:"アンカーで完全開花。3月に契約延長。W杯からの合流組。" },
    { id:"trey-nyoni", fmId:1436258, dn:null, no:42, name:"Trey Nyoni", ja:"トレイ・ニョニ", pos:"MF", detail:"CDM,CM,CB", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"2007-06-30", height:null, value:9921057, note:"サンダーランド戦の後半から出て7.6。アカデミーの逸材。" },
    { id:"stefan-bajcetic", fmId:1310118, dn:null, no:43, name:"Stefan Bajcetic", ja:"ステファン・バイチェティッチ", pos:"MF", detail:"CM", nat:"🇪🇸", natJa:"スペイン", dob:"2004-10-22", height:185, value:9512011, note:"負傷で離脱中。", injury:"Early August 2026" },
    { id:"victor-munoz", fmId:1553105, dn:"Muñoz", no:null, name:"Víctor Muñoz", ja:"ビクトル・ムニョス", pos:"FW", detail:"LW,RW,ST,CAM,LM", nat:"🇪🇸", natJa:"スペイン", dob:"2003-07-13", height:173, value:null, note:"オサスナから加入。サラー退団後のサイド攻撃の新戦力。" },
    { id:"florian-wirtz", fmId:1152455, dn:null, no:7, name:"Florian Wirtz", ja:"フロリアン・ヴィルツ", pos:"FW", detail:"LW,CAM,ST", nat:"🇩🇪", natJa:"ドイツ", dob:"2003-05-03", height:175, value:115559582, note:"背番号7。トップ下の主役。W杯からの合流組。" },
    { id:"alexander-isak", fmId:690107, dn:null, no:9, name:"Alexander Isak", ja:"アレクサンデル・イサク", pos:"FW", detail:"ST", nat:"🇸🇪", natJa:"スウェーデン", dob:"1999-09-21", height:192, value:97224326, note:"エースストライカー。W杯からの合流組。" },
    { id:"federico-chiesa", fmId:784510, dn:null, no:14, name:"Federico Chiesa", ja:"フェデリコ・キエーザ", pos:"FW", detail:"RW,ST", nat:"🇮🇹", natJa:"イタリア", dob:"1997-10-25", height:175, value:15683329, note:"サンダーランド戦で勝ち越し弾、評価7.9。プレシーズン絶好調。" },
    { id:"cody-gakpo", fmId:806552, dn:null, no:18, name:"Cody Gakpo", ja:"コーディ・ハクポ", pos:"FW", detail:"LW,ST,LM", nat:"🇳🇱", natJa:"オランダ", dob:"1999-05-07", height:193, value:62190371, note:"サラー退団で左右どちらも任される機会が増える。" },
    { id:"hugo-ekitike", fmId:1197030, dn:"Ekitiké", no:22, name:"Hugo Ekitiké", ja:"ユーゴ・エキティケ", pos:"FW", detail:"ST,LW", nat:"🇫🇷", natJa:"フランス", dob:"2002-06-20", height:190, value:97710245, note:"長期離脱中。復帰は2027年1月頃の見込み。", injury:"Early January 2027" },
    { id:"rio-ngumoha", fmId:1597668, dn:null, no:73, name:"Rio Ngumoha", ja:"リオ・ンガモハ", pos:"FW", detail:"LW", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:"2008-08-29", height:null, value:26859054, note:"サンダーランド戦で先発。突破力抜群の17歳。" },
    { id:"james-mcconnell", fmId:1231075, dn:null, no:"53", name:"James McConnell", ja:"ジェームズ・マコネル", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:1562699, note:"サンダーランド戦で中盤を担った。", academy:true },
    { id:"kieran-morrison", fmId:1439550, dn:null, no:"68", name:"Kieran Morrison", ja:"キーラン・モリソン", pos:"ACAD", detail:"アカデミー", nat:"🇬🇧", natJa:"北アイルランド", dob:null, height:null, value:null, note:"サンダーランド戦で先制点、評価7.8。今夏の主役候補。", academy:true },
    { id:"will-wright", fmId:1692224, dn:null, no:"79", name:"Will Wright", ja:"ウィル・ライト", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:null, note:"サンダーランド戦でCFとして先発。", academy:true },
    { id:"ifeanyi-ndukwe", fmId:1780239, dn:null, no:"83", name:"Ifeanyi Ndukwe", ja:"イフェアニ・ンドゥクウェ", pos:"ACAD", detail:"アカデミー", nat:"🏳️", natJa:"Austria", dob:null, height:null, value:1601421, note:"ゴメスの負傷交代で10分から出場し6.6。今夏加入。", academy:true },
    { id:"lewis-koumas", fmId:1364042, dn:null, no:"67", name:"Lewis Koumas", ja:"ルイス・クーマス", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁷󠁬󠁳󠁿", natJa:"ウェールズ", dob:null, height:null, value:3494415, note:"サンダーランド戦で4点目、評価8.0。", academy:true },
    { id:"calum-scanlon", fmId:1355539, dn:null, no:"48", name:"Calum Scanlon", ja:"カラム・スキャンロン", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:514609, note:"アカデミーの左SB。", academy:true },
    { id:"luke-chambers", fmId:1249634, dn:null, no:"44", name:"Luke Chambers", ja:"ルーク・チェンバース", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:871790, note:"アカデミーのDF。", academy:true },
    { id:"joshua-abe", fmId:1832921, dn:null, no:"40", name:"Joshua Abe", ja:"ジョシュア・アベ", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:null, note:"アカデミーの若手。", academy:true },
    { id:"joshua-sonni-lambie", fmId:1644308, dn:"Sonni-Lambie", no:"82", name:"Joshua Sonni-Lambie", ja:"ジョシュア・ソンニ＝ランビー", pos:"ACAD", detail:"アカデミー", nat:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", natJa:"イングランド", dob:null, height:null, value:null, note:"アカデミーの若手。", academy:true }
    ],

  /* ── 移籍 ───────────────────────────────────────────────
     step: 0=噂 1=交渉 2=合意 3=メディカル 4=完了
  ------------------------------------------------------------ */
  transfers: {
    in: [
      { name:"Jérémy Jacquet",  ja:"ジェレミー・ジャケ", pos:"CB", from:"rennes",  fee:"€6,360万", step:4, date:"2026年2月", text:"コナテ退団で空いたCBの穴を埋める大型補強。21歳ながらリーグ・アンで主力を張った。プレシーズン初戦は負傷で欠場。" },
      { name:"Víctor Muñoz",    ja:"ビクトル・ムニョス", pos:"LW", from:"osasuna", fee:"€4,000万", step:4, date:"2026年6月", text:"サラー退団を受けたサイドアタッカーの補強。ラ・リーガで評価を上げた23歳。" }
    ],
    out: [
      { name:"Mohamed Salah",   ja:"モハメド・サラー",       pos:"RW", to:"free-agent",  fee:"契約満了・フリー", date:"2026年7月", major:true, text:"9シーズンを戦った絶対的エースがフリーで退団。クラブは新たな右サイドの答えを探す一年になる。" },
      { name:"Ibrahima Konaté", ja:"イブラヒマ・コナテ",     pos:"CB", to:"real-madrid", fee:"契約満了・フリー", date:"2026年6月", major:true, text:"契約満了に伴いレアル・マドリードへ。CBの層の薄さが今季の課題として残る。" },
      { name:"Andrew Robertson",ja:"アンディ・ロバートソン", pos:"LB", to:"tottenham",   fee:"フリー",           date:"2026年6月", text:"長年の左サイドの主がロンドンへ。左はケルケズとツィミカスの2枚体制に。" },
      { name:"Luca Stephenson", ja:"ルカ・スティーヴンソン", pos:"RM", to:"bolton",      fee:"€82万",           date:"2026年7月", text:"" },
      { name:"Carter Pinnington",ja:"カーター・ピニントン",  pos:"CB", to:"west-brom",   fee:"—",                date:"2026年6月", text:"" },
      { name:"Ármin Pécsi",     ja:"アルミン・ペーチ",       pos:"GK", to:"hartberg",    fee:"レンタル",         date:"2026年7月", text:"出場機会を求めてオーストリアへレンタル移籍。" },
      { name:"Rhys Williams",   ja:"リース・ウィリアムズ",   pos:"CB", to:"free-agent",  fee:"契約満了・フリー", date:"2026年7月", text:"" }
    ],
    extensions: [
      { name:"Dominik Szoboszlai", ja:"ドミニク・ソボスライ", date:"2026年7月" },
      { name:"Freddie Woodman",    ja:"フレディ・ウッドマン", date:"2026年7月" },
      { name:"Ryan Gravenberch",   ja:"ライアン・フラーフェンベルフ", date:"2026年3月" }
    ],
    managerMove: {
      inName:"Andoni Iraola", outName:"Arne Slot", date:"2026年6月4日",
      text:"アルネ・スロットの後任として2年契約で就任。7/25のサンダーランド戦が初采配で4-2の勝利。"
    }
  },

  /* ── 監視中の移籍ソース ───────────────────────────────── */
  sources: [
    { handle:"Fabrizio Romano", at:"@FabrizioRomano", tier:"Tier 1", tierClass:"t1", text:"「Here we go!」を含む投稿を自動でハイライト表示。移籍成立の最終確認ソースとして扱う。", status:"接続待ち — 手動埋め込みモード", live:false },
    { handle:"David Ornstein",  at:"@David_Ornstein", tier:"Tier 1", tierClass:"t1", text:"The Athleticの記事はGoogle News RSSで自動取得可能。ポスト単体は手動埋め込み。", status:"記事フィード 稼働中", live:true },
    { handle:"Paul Joyce",      at:"@_pauljoyce",     tier:"LFC番記者", tierClass:"t2", text:"The Times所属。リヴァプール専任のため、クラブ内部情報の精度が最も高い。記事はRSS自動取得。", status:"記事フィード 稼働中", live:true },
    { handle:"This Is Anfield", at:"@thisisanfield",  tier:"ファンメディア", tierClass:"t2", text:"試合レポートと採点が速い。RSSあり。", status:"記事フィード 稼働中", live:true },
    { handle:"indykaila News",  at:"@indykaila",      tier:"要検証", tierClass:"t3", text:"速報性は高いが的中率にばらつきがある。Tier 1で裏が取れるまで「未確認」バッジを外さない設計。", status:"接続待ち — 手動埋め込みモード", live:false }
  ],

  /* ── データ接続の設計メモ ─────────────────────────────── */
  feeds: [
    { name:"日程・スコア・負傷者", level:"自動取得中", cls:"auto", text:"FotMobの公開JSON。APIキー不要・CORS許可済みなので、このページから直接読める。起動するたびに日程とスコア、負傷者リストを取り直している。", code:"fotmob.com/api/data/teams?id=8650" },
    { name:"試合スタッツ・スタメン・採点", level:"自動＋保存", cls:"semi", text:"同じくFotMob。支配率やシュート数、選手ごとの採点、マン・オブ・ザ・マッチまで取れる。ただしこのURLはFotMob側のキャッシュの都合でブラウザから読めなくなることがあるため、取れたら更新・ダメなら data.js の保存分を表示する作りにしてある。棒グラフが消えることはない。", code:"fotmob.com/api/data/matchDetails?matchId=...&ccode3=JPN" },
    { name:"クラブのエンブレム", level:"全自動", cls:"auto", text:"プレミアリーグ公式CDNの200px PNG。クラブごとの番号（Liverpool=t14）を data.js の clubs に書くだけでロゴが出る。番号が分からないクラブは code を null にすれば頭文字マークで表示される。", code:"resources.premierleague.com/premierleague/badges/100/t14@x2.png" },
    { name:"得点シーン映像", level:"半自動", cls:"semi", text:"LFC公式YouTubeチャンネルのRSS。APIキー不要、無料、無制限。今は試合ごとに公式ページのリンクを data.js に入れている。", code:"youtube.com/feeds/videos.xml?channel_id=..." },
    { name:"記者の移籍記事", level:"未接続", cls:"semi", text:"Google News RSSを記者名で絞り込む方式。Paul JoyceとDavid Ornsteinは署名記事が多いのでこれでかなり拾える。RSSはCORSが効かないので、読むには中継役（PHPなど）が要る。", code:'news.google.com/rss/search?q="Paul+Joyce"+Liverpool' },
    { name:"記者のXポスト本体", level:"手動", cls:"semi", text:"X APIの無料枠ではタイムライン読み取り不可、有料は月100ドル〜。「Here we go」級の決定的な1件だけ手で入れる運用が現実的で、コストゼロ。", code:"" }
  ],

  /* ── スタッツ名の日本語訳（FotMobの英語表記 → 日本語） ──── */
  statJa: {
    "Top stats":"主要スタッツ", "Shots":"シュート", "Passes":"パス", "Defence":"守備", "Duels":"デュエル",
    "Ball possession":"ボール支配率", "Total shots":"シュート数", "Shots on target":"枠内シュート",
    "Touches in opposition box":"敵陣ボックス内タッチ", "Big chances":"決定機", "Big chances missed":"決定機を外した数",
    "Accurate passes":"パス成功", "Yellow cards":"イエローカード", "Corners":"コーナーキック",
    "Shots off target":"枠外シュート", "Blocked shots":"ブロックされた", "Hit woodwork":"ポスト・バー",
    "Shots inside box":"ボックス内シュート", "Shots outside box":"ボックス外シュート",
    "Own half":"自陣でのパス", "Opposition half":"敵陣でのパス", "Accurate long balls":"ロングボール成功",
    "Accurate crosses":"クロス成功", "Throws":"スローイン", "Offsides":"オフサイド",
    "Tackles":"タックル", "Interceptions":"インターセプト", "Blocks":"ブロック", "Clearances":"クリア",
    "Keeper saves":"GKセーブ", "Duels won":"デュエル勝利", "Ground duels won":"地上戦",
    "Aerial duels won":"空中戦", "Successful dribbles":"ドリブル成功", "Red cards":"レッドカード",
    "Fouls committed":"ファウル", "Expected goals (xG)":"期待ゴール(xG)"
  }
};
