/*
 * 每金 - humor 類別金句
 */

export type QuoteCategory = 'humor' | 'serious';

export interface Quote {
  id: number;
  text: string;
  category: QuoteCategory;
  explanation?: string;
  author?: string;
}

export const humorQuotes: Quote[] = [
  {
    id: 1,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 2,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 3,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 4,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 5,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 6,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 7,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 8,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 9,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 10,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 11,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 12,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 13,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 14,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 15,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 16,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 17,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 18,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 19,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 20,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 21,
    text: '那些殺不死我的，拜託你殺認真點',
    category: 'humor',
  },
  {
    id: 22,
    text: '人如果沒有夢想，那和無憂無慮有什麼分別呢',
    category: 'humor',
  },
  {
    id: 23,
    text: '能者多勞，那你能吧，我不能我要下班',
    category: 'humor',
  },
  {
    id: 24,
    text: '退一萬步來講，我根本聽不到你在講什麼',
    category: 'humor',
  },
  {
    id: 25,
    text: '強者從來不抱怨環境，但我是弱者，我抱怨環境也抱怨強者',
    category: 'humor',
  },
  {
    id: 26,
    text: '如果生活把你的門關上了，那你就再把它打開。這就是門，門就是這樣用的',
    category: 'humor',
  },
  {
    id: 27,
    text: '靠臉吃飯不長久，靠不要臉吃飯天長地久',
    category: 'humor',
  },
  {
    id: 28,
    text: '如果上帝關了你的門，還把窗戶鎖上，那就代表他要開冷氣了',
    category: 'humor',
  },
  {
    id: 29,
    text: '只要我是一坨屎，就沒人敢踩我頭上',
    category: 'humor',
  },
  {
    id: 30,
    text: '生活給了我一拳，我出布',
    category: 'humor',
  },
  {
    id: 31,
    text: '狼若回頭，不是報恩就是報仇，我若回頭，不是迷路就是過頭',
    category: 'humor',
  },
  {
    id: 32,
    text: '愛笑的人運氣都不會太差，因為運氣差的都笑不出來',
    category: 'humor',
  },
  {
    id: 33,
    text: '如果你惹毛我了，我就毛絨絨的走開',
    category: 'humor',
  },
  {
    id: 34,
    text: '退一萬步來講，你今天走了一萬步',
    category: 'humor',
  },
  {
    id: 35,
    text: '不要觸碰我的底線，不然我又要再畫一條',
    category: 'humor',
  },
  {
    id: 36,
    text: '幹我們這行最忌諱的就是幹我們這行',
    category: 'humor',
  },
  {
    id: 37,
    text: '休息是因為走不了更長遠的路',
    category: 'humor',
  },
  {
    id: 38,
    text: '蹲得越低，腳越麻',
    category: 'humor',
  },
  {
    id: 39,
    text: '明知山有虎，別去明知山',
    category: 'humor',
  },
  {
    id: 40,
    text: '希望你能走出舒適圈，因為我要進去',
    category: 'humor',
  },
  {
    id: 41,
    text: '我已經不是當初那個懵懂無知的少女了，我現在是懵懂無知的中年婦女',
    category: 'humor',
  },
  {
    id: 42,
    text: '快樂是一天，不快樂也是一天，你就這樣過了兩天',
    category: 'humor',
  },
  {
    id: 43,
    text: '作為一個過來人，我給您一個忠告：不要過來',
    category: 'humor',
  },
  {
    id: 44,
    text: '我們不能隨便生氣。生氣的時候，你會使出真本領。這樣，別人就會知道你的真本領很爛',
    category: 'humor',
  },
  {
    id: 45,
    text: '要謝的人太多了，那就謝天吧，要改的東西太多了，那就改天吧',
    category: 'humor',
  },
  {
    id: 46,
    text: '我不是沒有夢想，我的夢想就是沒有夢想',
    category: 'humor',
  },
  {
    id: 47,
    text: '成功的人都有一個共同點，那就是他們都成功了',
    category: 'humor',
  },
  {
    id: 48,
    text: '失敗乃成功之母，那成功是什麼？是孤兒',
    category: 'humor',
  },
  {
    id: 49,
    text: '天才是百分之一的靈感加百分之九十九的汗水，我是百分之百的放棄',
    category: 'humor',
  },
  {
    id: 50,
    text: '堅持就是勝利，放棄也是一種堅持',
    category: 'humor',
  },
  {
    id: 51,
    text: '我不怕失敗，我怕的是失敗後還要起來',
    category: 'humor',
  },
  {
    id: 52,
    text: '別人的人生如開掛，我的人生是開玩笑',
    category: 'humor',
  },
  {
    id: 53,
    text: '我的人生沒有高潮，只有尷尬症',
    category: 'humor',
  },
  {
    id: 54,
    text: '人生就像一場馬拉松，我連起點都沒找到',
    category: 'humor',
  },
  {
    id: 55,
    text: '我不是懶，我只是在醞釀能量',
    category: 'humor',
  },
  {
    id: 56,
    text: '我不是胖，我只是被幸福壓彎了',
    category: 'humor',
  },
  {
    id: 57,
    text: '我不是醜，我只是審美超前',
    category: 'humor',
  },
  {
    id: 58,
    text: '我不是窮，我只是缺錢',
    category: 'humor',
  },
  {
    id: 59,
    text: '我不是失敗，我只是在走另一條路',
    category: 'humor',
  },
  {
    id: 60,
    text: '我不是逃避，我只是在尋找方向',
    category: 'humor',
  },
  {
    id: 61,
    text: '我不是放棄，我只是改變了目標',
    category: 'humor',
  },
  {
    id: 62,
    text: '我不是懦弱，我只是在積蓄力量',
    category: 'humor',
  },
  {
    id: 63,
    text: '我不是孤獨，我只是在享受獨處',
    category: 'humor',
  },
  {
    id: 64,
    text: '我不是無聊，我只是在思考人生',
    category: 'humor',
  },
  {
    id: 65,
    text: '我不是沉默，我只是在聽別人說話',
    category: 'humor',
  },
  {
    id: 66,
    text: '我不是冷淡，我只是在保護自己',
    category: 'humor',
  },
  {
    id: 67,
    text: '我不是自私，我只是在照顧自己',
    category: 'humor',
  },
  {
    id: 68,
    text: '我不是任性，我只是在堅持原則',
    category: 'humor',
  },
  {
    id: 69,
    text: '我不是固執，我只是有信念',
    category: 'humor',
  },
  {
    id: 70,
    text: '我不是傲慢，我只是有自信',
    category: 'humor',
  },
  {
    id: 71,
    text: '我不是自大，我只是了解自己',
    category: 'humor',
  },
  {
    id: 72,
    text: '我不是狂妄，我只是有夢想',
    category: 'humor',
  },
  {
    id: 73,
    text: '我不是瘋狂，我只是與眾不同',
    category: 'humor',
  },
  {
    id: 74,
    text: '我不是怪異，我只是獨特',
    category: 'humor',
  },
  {
    id: 75,
    text: '我不是古怪，我只是有個性',
    category: 'humor',
  },
  {
    id: 76,
    text: '我不是奇怪，我只是不合群',
    category: 'humor',
  },
  {
    id: 77,
    text: '我不是詭異，我只是神秘',
    category: 'humor',
  },
  {
    id: 78,
    text: '我不是詭計多端，我只是聰明',
    category: 'humor',
  },
  {
    id: 79,
    text: '我不是狡猾，我只是聰慧',
    category: 'humor',
  },
  {
    id: 80,
    text: '我不是奸詐，我只是精明',
    category: 'humor',
  },
  {
    id: 81,
    text: '我不是虛偽，我只是懂禮貌',
    category: 'humor',
  },
  {
    id: 82,
    text: '我不是虛假，我只是會表演',
    category: 'humor',
  },
  {
    id: 83,
    text: '我不是做作，我只是在演戲',
    category: 'humor',
  },
  {
    id: 84,
    text: '我不是矯情，我只是有感受',
    category: 'humor',
  },
  {
    id: 85,
    text: '我不是裝作，我只是在假裝',
    category: 'humor',
  },
  {
    id: 86,
    text: '我不是偽裝，我只是在隱藏',
    category: 'humor',
  },
  {
    id: 87,
    text: '我不是隱瞞，我只是在保密',
    category: 'humor',
  },
  {
    id: 88,
    text: '我不是欺騙，我只是在說謊',
    category: 'humor',
  },
  {
    id: 89,
    text: '我不是謊言，我只是在編故事',
    category: 'humor',
  },
  {
    id: 90,
    text: '我不是胡說，我只是在瞎掰',
    category: 'humor',
  },
  {
    id: 91,
    text: '我不是亂說，我只是在廢話',
    category: 'humor',
  },
  {
    id: 92,
    text: '我不是廢話，我只是在浪費時間',
    category: 'humor',
  },
  {
    id: 93,
    text: '我不是浪費時間，我只是在打發時間',
    category: 'humor',
  },
  {
    id: 94,
    text: '我不是打發時間，我只是在消磨時光',
    category: 'humor',
  },
  {
    id: 95,
    text: '我不是消磨時光，我只是在等待',
    category: 'humor',
  },
  {
    id: 96,
    text: '我不是等待，我只是在觀望',
    category: 'humor',
  },
  {
    id: 97,
    text: '我不是觀望，我只是在旁觀',
    category: 'humor',
  },
  {
    id: 98,
    text: '我不是旁觀，我只是在看戲',
    category: 'humor',
  },
  {
    id: 99,
    text: '我不是看戲，我只是在湊熱鬧',
    category: 'humor',
  },
  {
    id: 100,
    text: '我不是湊熱鬧，我只是在參與',
    category: 'humor',
  },
  {
    id: 101,
    text: '我不是參與，我只是在加入',
    category: 'humor',
  },
  {
    id: 102,
    text: '我不是加入，我只是在跟風',
    category: 'humor',
  },
  {
    id: 103,
    text: '我不是跟風，我只是在隨大流',
    category: 'humor',
  },
  {
    id: 104,
    text: '我不是隨大流，我只是在從眾',
    category: 'humor',
  },
  {
    id: 105,
    text: '我不是從眾，我只是在和諧',
    category: 'humor',
  },
  {
    id: 106,
    text: '我不是和諧，我只是在妥協',
    category: 'humor',
  },
  {
    id: 107,
    text: '我不是妥協，我只是在讓步',
    category: 'humor',
  },
  {
    id: 108,
    text: '我不是讓步，我只是在退縮',
    category: 'humor',
  },
  {
    id: 109,
    text: '我不是退縮，我只是在躲避',
    category: 'humor',
  },
  {
    id: 110,
    text: '我不是躲避，我只是在逃避',
    category: 'humor',
  },
  {
    id: 111,
    text: '我不是逃避，我只是在逃亡',
    category: 'humor',
  },
  {
    id: 112,
    text: '我不是逃亡，我只是在流亡',
    category: 'humor',
  },
  {
    id: 113,
    text: '我不是流亡，我只是在漂泊',
    category: 'humor',
  },
  {
    id: 114,
    text: '我不是漂泊，我只是在流浪',
    category: 'humor',
  },
  {
    id: 115,
    text: '我不是流浪，我只是在遊蕩',
    category: 'humor',
  },
  {
    id: 116,
    text: '我不是遊蕩，我只是在閒逛',
    category: 'humor',
  },
  {
    id: 117,
    text: '我不是閒逛，我只是在散步',
    category: 'humor',
  },
  {
    id: 118,
    text: '我不是散步，我只是在走路',
    category: 'humor',
  },
  {
    id: 119,
    text: '我不是走路，我只是在移動',
    category: 'humor',
  },
  {
    id: 120,
    text: '人生最大的謊言就是我明天開始努力',
    category: 'humor',
  },
  {
    id: 121,
    text: '我不是不想工作，我只是在等待靈感',
    category: 'humor',
  },
  {
    id: 122,
    text: '錢不是萬能的，但沒有錢是萬萬不能的',
    category: 'humor',
  },
  {
    id: 123,
    text: '我的理想就是沒有理想',
    category: 'humor',
  },
  {
    id: 124,
    text: '我的目標就是沒有目標',
    category: 'humor',
  },
  {
    id: 125,
    text: '我的計畫就是沒有計畫',
    category: 'humor',
  },
  {
    id: 126,
    text: '我的夢想就是能睡個好覺',
    category: 'humor',
  },
  {
    id: 127,
    text: '我的願望就是不要有願望',
    category: 'humor',
  },
  {
    id: 128,
    text: '我的期望就是不要有期望',
    category: 'humor',
  },
  {
    id: 129,
    text: '我的希望就是不要有希望',
    category: 'humor',
  },
  {
    id: 130,
    text: '我的信念就是沒有信念',
    category: 'humor',
  },
  {
    id: 131,
    text: '我的信仰就是沒有信仰',
    category: 'humor',
  },
  {
    id: 132,
    text: '我的宗教就是睡眠',
    category: 'humor',
  },
  {
    id: 133,
    text: '我的信徒就是我自己',
    category: 'humor',
  },
  {
    id: 134,
    text: '我的教義就是及時行樂',
    category: 'humor',
  },
  {
    id: 135,
    text: '我的聖經就是手機',
    category: 'humor',
  },
  {
    id: 136,
    text: '我的天堂就是床',
    category: 'humor',
  },
  {
    id: 137,
    text: '我的地獄就是上班',
    category: 'humor',
  },
  {
    id: 138,
    text: '我的煉獄就是開會',
    category: 'humor',
  },
  {
    id: 139,
    text: '我的天使就是存款',
    category: 'humor',
  },
  {
    id: 140,
    text: '我的魔鬼就是老闆',
    category: 'humor',
  },
  {
    id: 141,
    text: '我的救世主就是假期',
    category: 'humor',
  },
  {
    id: 142,
    text: '我的終極目標就是退休',
    category: 'humor',
  },
  {
    id: 143,
    text: '我的人生意義就是活著',
    category: 'humor',
  },
  {
    id: 144,
    text: '我的存在價值就是吃飯',
    category: 'humor',
  },
  {
    id: 145,
    text: '我的生存理由就是睡覺',
    category: 'humor',
  },
  {
    id: 146,
    text: '我的活著目的就是玩樂',
    category: 'humor',
  },
  {
    id: 147,
    text: '我的生活方式就是混日子',
    category: 'humor',
  },
  {
    id: 148,
    text: '我的人生哲學就是隨遇而安',
    category: 'humor',
  },
  {
    id: 149,
    text: '我的人生態度就是得過且過',
    category: 'humor',
  },
  {
    id: 150,
    text: '我的人生信條就是及時行樂',
    category: 'humor',
  },
  {
    id: 151,
    text: '我的人生格言就是活著就好',
    category: 'humor',
  },
  {
    id: 152,
    text: '我的人生座右銘就是不要想太多',
    category: 'humor',
  },
  {
    id: 153,
    text: '我的人生箴言就是開心最重要',
    category: 'humor',
  },
  {
    id: 154,
    text: '我的人生寶典就是吃喝玩樂',
    category: 'humor',
  },
  {
    id: 155,
    text: '我的人生秘訣就是不要太認真',
    category: 'humor',
  },
  {
    id: 156,
    text: '我的人生竅門就是放鬆心態',
    category: 'humor',
  },
  {
    id: 157,
    text: '我的人生妙招就是順其自然',
    category: 'humor',
  },
  {
    id: 158,
    text: '我的人生絕招就是假裝沒看到',
    category: 'humor',
  },
  {
    id: 159,
    text: '我的人生必殺技就是裝作沒聽見',
    category: 'humor',
  },
  {
    id: 160,
    text: '我的人生大法就是視而不見',
    category: 'humor',
  },
  {
    id: 161,
    text: '我的人生秘法就是聽而不聞',
    category: 'humor',
  },
  {
    id: 162,
    text: '我的人生奧義就是裝傻充愣',
    category: 'humor',
  },
  {
    id: 163,
    text: '我的人生真諦就是裝作無知',
    category: 'humor',
  },
  {
    id: 164,
    text: '我的人生本質就是混吃等死',
    category: 'humor',
  },
  {
    id: 165,
    text: '我的人生真相就是浪費時間',
    category: 'humor',
  },
  {
    id: 166,
    text: '我的人生真實就是無所事事',
    category: 'humor',
  },
  {
    id: 167,
    text: '我的人生現實就是碌碌無為',
    category: 'humor',
  },
  {
    id: 168,
    text: '我的人生實況就是一事無成',
    category: 'humor',
  },
  {
    id: 169,
    text: '我的人生直播就是平凡無奇',
    category: 'humor',
  },
  {
    id: 170,
    text: '我的人生紀錄片就是無聊至極',
    category: 'humor',
  },
  {
    id: 171,
    text: '我的人生電影就是悲劇大片',
    category: 'humor',
  },
  {
    id: 172,
    text: '我的人生電視劇就是狗血連續劇',
    category: 'humor',
  },
  {
    id: 173,
    text: '我的人生小說就是爛尾文',
    category: 'humor',
  },
  {
    id: 174,
    text: '我的人生故事就是沒有故事',
    category: 'humor',
  },
  {
    id: 175,
    text: '我的人生傳記就是平凡傳',
    category: 'humor',
  },
  {
    id: 176,
    text: '我的人生列傳就是無名傳',
    category: 'humor',
  },
  {
    id: 177,
    text: '我的人生史詩就是悲歌',
    category: 'humor',
  },
  {
    id: 178,
    text: '我的人生樂章就是悲鳴',
    category: 'humor',
  },
  {
    id: 179,
    text: '我的人生旋律就是哀樂',
    category: 'humor',
  },
  {
    id: 180,
    text: '我的人生節奏就是慢板',
    category: 'humor',
  },
  {
    id: 181,
    text: '我的人生速度就是靜止',
    category: 'humor',
  },
  {
    id: 182,
    text: '我的人生進度就是0%',
    category: 'humor',
  },
  {
    id: 183,
    text: '我的人生完成度就是負數',
    category: 'humor',
  },
  {
    id: 184,
    text: '我的人生滿意度就是負無窮',
    category: 'humor',
  },
  {
    id: 185,
    text: '我的人生幸福度就是-999',
    category: 'humor',
  },
  {
    id: 186,
    text: '我的人生成就感就是沒有',
    category: 'humor',
  },
  {
    id: 187,
    text: '我的人生獲得感就是失落感',
    category: 'humor',
  },
  {
    id: 188,
    text: '我的人生安全感就是不安全感',
    category: 'humor',
  },
  {
    id: 189,
    text: '我的人生歸屬感就是陌生感',
    category: 'humor',
  },
  {
    id: 190,
    text: '我的人生認同感就是否定感',
    category: 'humor',
  },
  {
    id: 191,
    text: '我的人生確定感就是迷茫感',
    category: 'humor',
  },
  {
    id: 192,
    text: '我的人生方向感就是迷路感',
    category: 'humor',
  },
  {
    id: 193,
    text: '我的人生存在感就是虛無感',
    category: 'humor',
  },
  {
    id: 194,
    text: '我的人生現實感就是做夢感',
    category: 'humor',
  },
  {
    id: 195,
    text: '我的人生真實感就是虛幻感',
    category: 'humor',
  },
  {
    id: 196,
    text: '我的人生代入感就是局外人感',
    category: 'humor',
  },
  {
    id: 197,
    text: '我的人生沉浸感就是格格不入感',
    category: 'humor',
  },
  {
    id: 198,
    text: '我的人生融入感就是被排斥感',
    category: 'humor',
  },
  {
    id: 199,
    text: '我的人生融合感就是被孤立感',
    category: 'humor',
  },
  {
    id: 200,
    text: '我的人生和諧感就是衝突感',
    category: 'humor',
  },
  {
    id: 201,
    text: '我的人生平衡感就是失衡感',
    category: 'humor',
  },
  {
    id: 202,
    text: '我的人生穩定感就是動盪感',
    category: 'humor',
  },
  {
    id: 203,
    text: '我的人生安定感就是不安感',
    category: 'humor',
  },
  {
    id: 204,
    text: '我的人生踏實感就是虛浮感',
    category: 'humor',
  },
  {
    id: 205,
    text: '我的人生堅實感就是虛弱感',
    category: 'humor',
  },
  {
    id: 206,
    text: '我的人生牢固感就是脆弱感',
    category: 'humor',
  },
  {
    id: 207,
    text: '我的人生穩固感就是搖搖欲墜感',
    category: 'humor',
  },
  {
    id: 208,
    text: '我的人生堅固感就是岌岌可危感',
    category: 'humor',
  },
  {
    id: 209,
    text: '我的人生永恆感就是短暫感',
    category: 'humor',
  },
  {
    id: 210,
    text: '我的人生持久感就是轉瞬即逝感',
    category: 'humor',
  },
  {
    id: 211,
    text: '我的人生長久感就是稍縱即逝感',
    category: 'humor',
  },
  {
    id: 212,
    text: '我的人生永遠感就是一瞬間感',
    category: 'humor',
  },
  {
    id: 213,
    text: '我的人生無限感就是有限感',
    category: 'humor',
  },
  {
    id: 214,
    text: '我的人生無盡感就是有盡感',
    category: 'humor',
  },
  {
    id: 215,
    text: '我的人生無窮感就是有窮感',
    category: 'humor',
  },
  {
    id: 216,
    text: '我的人生無邊感就是有邊感',
    category: 'humor',
  },
  {
    id: 217,
    text: '我的人生無際感就是有際感',
    category: 'humor',
  },
  {
    id: 218,
    text: '我的人生無限制感就是受限感',
    category: 'humor',
  },
  {
    id: 219,
    text: '我的人生自由感就是被束縛感',
    category: 'humor',
  },
  {
    id: 220,
    text: '我的人生解放感就是被禁錮感',
    category: 'humor',
  },
  {
    id: 221,
    text: '我的人生釋放感就是被囚禁感',
    category: 'humor',
  },
  {
    id: 222,
    text: '我的人生放鬆感就是緊張感',
    category: 'humor',
  },
  {
    id: 223,
    text: '我的人生舒適感就是不適感',
    category: 'humor',
  },
  {
    id: 224,
    text: '我的人生愉快感就是痛苦感',
    category: 'humor',
  },
  {
    id: 225,
    text: '我的人生快樂感就是悲傷感',
    category: 'humor',
  },
  {
    id: 226,
    text: '我的人生歡樂感就是憂鬱感',
    category: 'humor',
  },
  {
    id: 227,
    text: '我的人生喜悅感就是沮喪感',
    category: 'humor',
  },
  {
    id: 228,
    text: '我的人生興奮感就是乏味感',
    category: 'humor',
  },
  {
    id: 229,
    text: '我的人生刺激感就是平淡感',
    category: 'humor',
  },
  {
    id: 230,
    text: '我的人生驚喜感就是失望感',
    category: 'humor',
  },
  {
    id: 231,
    text: '我的人生驚奇感就是平凡感',
    category: 'humor',
  },
  {
    id: 232,
    text: '我的人生奇妙感就是乏味感',
    category: 'humor',
  },
  {
    id: 233,
    text: '我的人生神奇感就是平庸感',
    category: 'humor',
  },
  {
    id: 234,
    text: '我的人生奇異感就是普通感',
    category: 'humor',
  },
  {
    id: 235,
    text: '我的人生新奇感就是陳舊感',
    category: 'humor',
  },
  {
    id: 236,
    text: '我的人生新鮮感就是老套感',
    category: 'humor',
  },
  {
    id: 237,
    text: '我的人生新穎感就是過時感',
    category: 'humor',
  },
  {
    id: 238,
    text: '我的人生創新感就是守舊感',
    category: 'humor',
  },
  {
    id: 239,
    text: '我的人生突破感就是停滯感',
    category: 'humor',
  },
  {
    id: 240,
    text: '我的人生進展感就是原地踏步感',
    category: 'humor',
  },
  {
    id: 241,
    text: '我的人生前進感就是後退感',
    category: 'humor',
  },
  {
    id: 242,
    text: '我的人生上升感就是下降感',
    category: 'humor',
  },
  {
    id: 243,
    text: '我的人生高升感就是跌落感',
    category: 'humor',
  },
  {
    id: 244,
    text: '我的人生飆升感就是暴跌感',
    category: 'humor',
  },
  {
    id: 245,
    text: '我的人生躍升感就是墜落感',
    category: 'humor',
  },
  {
    id: 246,
    text: '我的人生騰飛感就是墜毀感',
    category: 'humor',
  },
  {
    id: 247,
    text: '我的人生起飛感就是著陸感',
    category: 'humor',
  },
  {
    id: 248,
    text: '我的人生升空感就是降落感',
    category: 'humor',
  },
  {
    id: 249,
    text: '我的人生翱翔感就是俯衝感',
    category: 'humor',
  },
  {
    id: 250,
    text: '我的人生飛翔感就是墜落感',
    category: 'humor',
  },
  {
    id: 251,
    text: '我的人生展翅感就是收翅感',
    category: 'humor',
  },
  {
    id: 252,
    text: '我的人生自由翱翔感就是被困籠中感',
    category: 'humor',
  },
  {
    id: 253,
    text: '人生就像一部電影，我是龍套',
    category: 'humor',
  },
  {
    id: 254,
    text: '別人在寫傳奇，我在寫日記',
    category: 'humor',
  },
  {
    id: 255,
    text: '成功的人都在往上爬，我在往下挖',
    category: 'humor',
  },
  {
    id: 256,
    text: '我不是在混日子，我是在享受生活',
    category: 'humor',
  },
  {
    id: 257,
    text: '人生最大的成就就是活著',
    category: 'humor',
  },
  {
    id: 258,
    text: '別人在改變世界，我在改變頻道',
    category: 'humor',
  },
  {
    id: 259,
    text: '我的人生計畫就是沒有計畫',
    category: 'humor',
  },
  {
    id: 260,
    text: '別人在創造歷史，我在創造垃圾',
    category: 'humor',
  },
  {
    id: 261,
    text: '我的成功秘訣就是沒有秘訣',
    category: 'humor',
  },
  {
    id: 262,
    text: '別人在追求卓越，我在追求及格',
    category: 'humor',
  },
  {
    id: 263,
    text: '我不是在浪費時間，我是在投資未來',
    category: 'humor',
  },
  {
    id: 264,
    text: '別人在攀登高峰，我在平原散步',
    category: 'humor',
  },
  {
    id: 265,
    text: '我的理想職業是退休',
    category: 'humor',
  },
  {
    id: 266,
    text: '別人在改變人生，我在改變睡衣',
    category: 'humor',
  },
  {
    id: 267,
    text: '我的人生目標就是活著看到明天',
    category: 'humor',
  },
  {
    id: 268,
    text: '別人在追求完美，我在追求完成',
    category: 'humor',
  },
  {
    id: 269,
    text: '我不是在拖延，我是在醞釀靈感',
    category: 'humor',
  },
  {
    id: 270,
    text: '別人在開創事業，我在開創懶惰',
    category: 'humor',
  },
  {
    id: 271,
    text: '我的人生格言就是隨便',
    category: 'humor',
  },
  {
    id: 272,
    text: '別人在為國爭光，我在為沙發爭光',
    category: 'humor',
  },
  {
    id: 273,
    text: '我的人生就像一部電影，但沒有字幕',
    category: 'humor',
  },
  {
    id: 274,
    text: '別人在寫自傳，我在寫自嘲傳',
    category: 'humor',
  },
  {
    id: 275,
    text: '成功的人都在往上爬，我在往下滑',
    category: 'humor',
  },
  {
    id: 276,
    text: '我不是在混日子，我是在享受混亂',
    category: 'humor',
  },
  {
    id: 277,
    text: '人生最大的成就就是活著看到明天',
    category: 'humor',
  },
  {
    id: 278,
    text: '每天都是新的開始，我卻還在昨天',
    category: 'humor',
  },
  {
    id: 279,
    text: '別人的青春是詩，我的青春是打油詩',
    category: 'humor',
  },
  {
    id: 280,
    text: '我不是在逃避責任，我是在尋找逃生口',
    category: 'humor',
  },
  {
    id: 281,
    text: '生活就像一盒巧克力，我吃到的都是壞的',
    category: 'humor',
  },
  {
    id: 282,
    text: '別人在為夢想奮鬥，我在為午飯奮鬥',
    category: 'humor',
  },
  {
    id: 283,
    text: '我的座右銘是：明天再說',
    category: 'humor',
  },
  {
    id: 284,
    text: '人生如戲，全靠演技，我的演技爛透了',
    category: 'humor',
  },
  {
    id: 285,
    text: '我不是沒有野心，我的野心就是沒有野心',
    category: 'humor',
  },
  {
    id: 286,
    text: '我的人生就是一場馬拉松，但我在睡覺',
    category: 'humor',
  },
  {
    id: 287,
    text: '別人在追求真理，我在追求真睡',
    category: 'humor',
  },
  {
    id: 288,
    text: '我不是懶，我是在節能減排',
    category: 'humor',
  },
  {
    id: 289,
    text: '別人在改變命運，我在改變姿勢',
    category: 'humor',
  },
  {
    id: 290,
    text: '我的人生就是一部喜劇，但沒人笑',
    category: 'humor',
  },
  {
    id: 291,
    text: '別人在追求幸福，我在追求及格',
    category: 'humor',
  },
  {
    id: 292,
    text: '我不是在逃避，我是在尋找出口',
    category: 'humor',
  },
  {
    id: 293,
    text: '別人在創造價值，我在創造麻煩',
    category: 'humor',
  },
  {
    id: 294,
    text: '我的人生就是一場遊戲，但我不會玩',
    category: 'humor',
  },
  {
    id: 295,
    text: '別人在追求成功，我在追求睡眠',
    category: 'humor',
  },
  {
    id: 296,
    text: '我不是在放棄，我是在改變方向',
    category: 'humor',
  },
  {
    id: 297,
    text: '別人在改變世界，我在改變褲子',
    category: 'humor',
  },
];