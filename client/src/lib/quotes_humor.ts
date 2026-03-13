/**
 * 每金 - humor 類別金句
 */

export type QuoteCategory = 'humor' | 'serious' | 'lunyu' | 'zhuangzi' | 'laozi';

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
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 22,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 23,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 24,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 25,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 26,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 27,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 28,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 29,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 30,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 31,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 32,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 33,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 34,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 35,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 36,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 37,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 38,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 39,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 40,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 41,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 42,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 43,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 44,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 45,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 46,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 47,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 48,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 49,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 50,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 51,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 52,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 53,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 54,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 55,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 56,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 57,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 58,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 59,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 60,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 61,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 62,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 63,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 64,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 65,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 66,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 67,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 68,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 69,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 70,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 71,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 72,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 73,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 74,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 75,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 76,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 77,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 78,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 79,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 80,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 81,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 82,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 83,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 84,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 85,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 86,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 87,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 88,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 89,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 90,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 91,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 92,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 93,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 94,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 95,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 96,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 97,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 98,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 99,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 100,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 101,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 102,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 103,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 104,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 105,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 106,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 107,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 108,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 109,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 110,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 111,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 112,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 113,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 114,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 115,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 116,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 117,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 118,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 119,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 120,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 121,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 122,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 123,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 124,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 125,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 126,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 127,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 128,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 129,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 130,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 131,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 132,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 133,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 134,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 135,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 136,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 137,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 138,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 139,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 140,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 141,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 142,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 143,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 144,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 145,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 146,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 147,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 148,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 149,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 150,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 151,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 152,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 153,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 154,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 155,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 156,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 157,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 158,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 159,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 160,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 161,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 162,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 163,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 164,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 165,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 166,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 167,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 168,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 169,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 170,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 171,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 172,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 173,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 174,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 175,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 176,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 177,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 178,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 179,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 180,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 181,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 182,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 183,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 184,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 185,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 186,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 187,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 188,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 189,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 190,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 191,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 192,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 193,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 194,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 195,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 196,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 197,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 198,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 199,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 200,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 201,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 202,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 203,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 204,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 205,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 206,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 207,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 208,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 209,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 210,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 211,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 212,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 213,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 214,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 215,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 216,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 217,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 218,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 219,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 220,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 221,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 222,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 223,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 224,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 225,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 226,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 227,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 228,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 229,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 230,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 231,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 232,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 233,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 234,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 235,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 236,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 237,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 238,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 239,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 240,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 241,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 242,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 243,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 244,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 245,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 246,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 247,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 248,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 249,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 250,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 251,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 252,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 253,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 254,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 255,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 256,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 257,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 258,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 259,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 260,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 261,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 262,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 263,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 264,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 265,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 266,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 267,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 268,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 269,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 270,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 271,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 272,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 273,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 274,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 275,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 276,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 277,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 278,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 279,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 280,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 281,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 282,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 283,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 284,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 285,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 286,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 287,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 288,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 289,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 290,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 291,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 292,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 293,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 294,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 295,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 296,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 297,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 298,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 299,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 300,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 301,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 302,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 303,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 304,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 305,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 306,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 307,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 308,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 309,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 310,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 311,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 312,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 313,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 314,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 315,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 316,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 317,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 318,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 319,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 320,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 321,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 322,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 323,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 324,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 325,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 326,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 327,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 328,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 329,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 330,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 331,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 332,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 333,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 334,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 335,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 336,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 337,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 338,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 339,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 340,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 341,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 342,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 343,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 344,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 345,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 346,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 347,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 348,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 349,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 350,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 351,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 352,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 353,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 354,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 355,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 356,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 357,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 358,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 359,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 360,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 361,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 362,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 363,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 364,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 365,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 366,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 367,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 368,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 369,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 370,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 371,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 372,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 373,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 374,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 375,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 376,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 377,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 378,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 379,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 380,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 381,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 382,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 383,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 384,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 385,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 386,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 387,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 388,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 389,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 390,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 391,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 392,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 393,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 394,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 395,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 396,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 397,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 398,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 399,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 400,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 401,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 402,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 403,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 404,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 405,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 406,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 407,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 408,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 409,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 410,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 411,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 412,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 413,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 414,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 415,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 416,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 417,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 418,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 419,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 420,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 421,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 422,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 423,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 424,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 425,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 426,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 427,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 428,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 429,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 430,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 431,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 432,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 433,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 434,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 435,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 436,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 437,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 438,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 439,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 440,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 441,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 442,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 443,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 444,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 445,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 446,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 447,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 448,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 449,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 450,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 451,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 452,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 453,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 454,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 455,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 456,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 457,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 458,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 459,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 460,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 461,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 462,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 463,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 464,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 465,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 466,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 467,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 468,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 469,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 470,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 471,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 472,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 473,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 474,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 475,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 476,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 477,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 478,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 479,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 480,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
  {
    id: 481,
    text: '人生如夢，放下才是真諦。',
    category: 'humor',
  },
  {
    id: 482,
    text: '我前進，因此我改變。',
    category: 'humor',
  },
  {
    id: 483,
    text: '旅程不會改變，但我會。',
    category: 'humor',
  },
  {
    id: 484,
    text: '生活就是山河，深刻而已。',
    category: 'humor',
  },
  {
    id: 485,
    text: '別人的時光，我的心靈。',
    category: 'humor',
  },
  {
    id: 486,
    text: '人生如心靈，追求才是真諦。',
    category: 'humor',
  },
  {
    id: 487,
    text: '我放棄，因此我開始。',
    category: 'humor',
  },
  {
    id: 488,
    text: '道路不會開始，但我會。',
    category: 'humor',
  },
  {
    id: 489,
    text: '生活就是目標，勇敢而已。',
    category: 'humor',
  },
  {
    id: 490,
    text: '別人的希望，我的愛。',
    category: 'humor',
  },
  {
    id: 491,
    text: '人生如愛，停留才是真諦。',
    category: 'humor',
  },
  {
    id: 492,
    text: '我逃離，因此我擁抱。',
    category: 'humor',
  },
  {
    id: 493,
    text: '勇氣不會擁抱，但我會。',
    category: 'humor',
  },
  {
    id: 494,
    text: '生活就是智慧，深刻而已。',
    category: 'humor',
  },
  {
    id: 495,
    text: '別人的力量，我的光芒。',
    category: 'humor',
  },
  {
    id: 496,
    text: '人生如光芒，失去才是真諦。',
    category: 'humor',
  },
  {
    id: 497,
    text: '我得到，因此我給予。',
    category: 'humor',
  },
  {
    id: 498,
    text: '故事不會給予，但我會。',
    category: 'humor',
  },
  {
    id: 499,
    text: '生活就是記憶，勇敢而已。',
    category: 'humor',
  },
  {
    id: 500,
    text: '別人的未來，我的夢。',
    category: 'humor',
  },
];
