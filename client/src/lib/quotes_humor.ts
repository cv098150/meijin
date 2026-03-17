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
  {
    id: 501,
    text: '那些殺不死我的，拜託你殺認真點',
    category: 'humor',
  },
  {
    id: 502,
    text: '人如果沒有夢想，那和無憂無慮有什麼分別呢',
    category: 'humor',
  },
  {
    id: 503,
    text: '能者多勞，那你能吧，我不能我要下班',
    category: 'humor',
  },
  {
    id: 504,
    text: '退一萬步來講，我根本聽不到你在講什麼',
    category: 'humor',
  },
  {
    id: 505,
    text: '強者從來不抱怨環境，但我是弱者，我抱怨環境也抱怨強者',
    category: 'humor',
  },
  {
    id: 506,
    text: '如果生活把你的門關上了，那你就再把它打開。這就是門，門就是這樣用的',
    category: 'humor',
  },
  {
    id: 507,
    text: '靠臉吃飯不長久，靠不要臉吃飯天長地久',
    category: 'humor',
  },
  {
    id: 508,
    text: '如果上帝關了你的門，還把窗戶鎖上，那就代表他要開冷氣了',
    category: 'humor',
  },
  {
    id: 509,
    text: '只要我是一坨屎，就沒人敢踩我頭上',
    category: 'humor',
  },
  {
    id: 510,
    text: '生活給了我一拳，我出布',
    category: 'humor',
  },
  {
    id: 511,
    text: '狼若回頭，不是報恩就是報仇，我若回頭，不是迷路就是過頭',
    category: 'humor',
  },
  {
    id: 512,
    text: '愛笑的人運氣都不會太差，因為運氣差的都笑不出來',
    category: 'humor',
  },
  {
    id: 513,
    text: '如果你惹毛我了，我就毛絨絨的走開',
    category: 'humor',
  },
  {
    id: 514,
    text: '退一萬步來講，你今天走了一萬步',
    category: 'humor',
  },
  {
    id: 515,
    text: '不要觸碰我的底線，不然我又要再畫一條',
    category: 'humor',
  },
  {
    id: 516,
    text: '幹我們這行最忌諱的就是幹我們這行',
    category: 'humor',
  },
  {
    id: 517,
    text: '休息是因為走不了更長遠的路',
    category: 'humor',
  },
  {
    id: 518,
    text: '蹲得越低，腳越麻',
    category: 'humor',
  },
  {
    id: 519,
    text: '明知山有虎，別去明知山',
    category: 'humor',
  },
  {
    id: 520,
    text: '希望你能走出舒適圈，因為我要進去',
    category: 'humor',
  },
  {
    id: 521,
    text: '我已經不是當初那個懵懂無知的少女了，我現在是懵懂無知的中年婦女',
    category: 'humor',
  },
  {
    id: 522,
    text: '快樂是一天，不快樂也是一天，你就這樣過了兩天',
    category: 'humor',
  },
  {
    id: 523,
    text: '作為一個過來人，我給您一個忠告：不要過來',
    category: 'humor',
  },
  {
    id: 524,
    text: '我們不能隨便生氣。生氣的時候，你會使出真本領。這樣，別人就會知道你的真本領很爛',
    category: 'humor',
  },
  {
    id: 525,
    text: '要謝的人太多了，那就謝天吧，要改的東西太多了，那就改天吧',
    category: 'humor',
  },
  {
    id: 526,
    text: '我不是沒有夢想，我的夢想就是沒有夢想',
    category: 'humor',
  },
  {
    id: 527,
    text: '成功的人都有一個共同點，那就是他們都成功了',
    category: 'humor',
  },
  {
    id: 528,
    text: '失敗乃成功之母，那成功是什麼？是孤兒',
    category: 'humor',
  },
  {
    id: 529,
    text: '天才是百分之一的靈感加百分之九十九的汗水，我是百分之百的放棄',
    category: 'humor',
  },
  {
    id: 530,
    text: '堅持就是勝利，放棄也是一種堅持',
    category: 'humor',
  },
  {
    id: 531,
    text: '我不怕失敗，我怕的是失敗後還要起來',
    category: 'humor',
  },
  {
    id: 532,
    text: '別人的人生如開掛，我的人生是開玩笑',
    category: 'humor',
  },
  {
    id: 533,
    text: '我的人生沒有高潮，只有尷尬症',
    category: 'humor',
  },
  {
    id: 534,
    text: '人生就像一場馬拉松，我連起點都沒找到',
    category: 'humor',
  },
  {
    id: 535,
    text: '我不是懶，我只是在醞釀能量',
    category: 'humor',
  },
  {
    id: 536,
    text: '我不是胖，我只是被幸福壓彎了',
    category: 'humor',
  },
  {
    id: 537,
    text: '我不是醜，我只是審美超前',
    category: 'humor',
  },
  {
    id: 538,
    text: '我不是窮，我只是缺錢',
    category: 'humor',
  },
  {
    id: 539,
    text: '我不是失敗，我只是在走另一條路',
    category: 'humor',
  },
  {
    id: 540,
    text: '我不是逃避，我只是在尋找方向',
    category: 'humor',
  },
  {
    id: 541,
    text: '我不是放棄，我只是改變了目標',
    category: 'humor',
  },
  {
    id: 542,
    text: '我不是懦弱，我只是在積蓄力量',
    category: 'humor',
  },
  {
    id: 543,
    text: '我不是孤獨，我只是在享受獨處',
    category: 'humor',
  },
  {
    id: 544,
    text: '我不是無聊，我只是在思考人生',
    category: 'humor',
  },
  {
    id: 545,
    text: '我不是沉默，我只是在聽別人說話',
    category: 'humor',
  },
  {
    id: 546,
    text: '我不是冷淡，我只是在保護自己',
    category: 'humor',
  },
  {
    id: 547,
    text: '我不是自私，我只是在照顧自己',
    category: 'humor',
  },
  {
    id: 548,
    text: '我不是任性，我只是在堅持原則',
    category: 'humor',
  },
  {
    id: 549,
    text: '我不是固執，我只是有信念',
    category: 'humor',
  },
  {
    id: 550,
    text: '我不是傲慢，我只是有自信',
    category: 'humor',
  },
  {
    id: 551,
    text: '我不是自大，我只是了解自己',
    category: 'humor',
  },
  {
    id: 552,
    text: '我不是狂妄，我只是有夢想',
    category: 'humor',
  },
  {
    id: 553,
    text: '我不是瘋狂，我只是與眾不同',
    category: 'humor',
  },
  {
    id: 554,
    text: '我不是怪異，我只是獨特',
    category: 'humor',
  },
  {
    id: 555,
    text: '我不是古怪，我只是有個性',
    category: 'humor',
  },
  {
    id: 556,
    text: '我不是奇怪，我只是不合群',
    category: 'humor',
  },
  {
    id: 557,
    text: '我不是詭異，我只是神秘',
    category: 'humor',
  },
  {
    id: 558,
    text: '我不是詭計多端，我只是聰明',
    category: 'humor',
  },
  {
    id: 559,
    text: '我不是狡猾，我只是聰慧',
    category: 'humor',
  },
  {
    id: 560,
    text: '我不是奸詐，我只是精明',
    category: 'humor',
  },
  {
    id: 561,
    text: '我不是虛偽，我只是懂禮貌',
    category: 'humor',
  },
  {
    id: 562,
    text: '我不是虛假，我只是會表演',
    category: 'humor',
  },
  {
    id: 563,
    text: '我不是做作，我只是在演戲',
    category: 'humor',
  },
  {
    id: 564,
    text: '我不是矯情，我只是有感受',
    category: 'humor',
  },
  {
    id: 565,
    text: '我不是裝作，我只是在假裝',
    category: 'humor',
  },
  {
    id: 566,
    text: '我不是偽裝，我只是在隱藏',
    category: 'humor',
  },
  {
    id: 567,
    text: '我不是隱瞞，我只是在保密',
    category: 'humor',
  },
  {
    id: 568,
    text: '我不是欺騙，我只是在說謊',
    category: 'humor',
  },
  {
    id: 569,
    text: '我不是謊言，我只是在編故事',
    category: 'humor',
  },
  {
    id: 570,
    text: '我不是胡說，我只是在瞎掰',
    category: 'humor',
  },
  {
    id: 571,
    text: '我不是亂說，我只是在廢話',
    category: 'humor',
  },
  {
    id: 572,
    text: '我不是廢話，我只是在浪費時間',
    category: 'humor',
  },
  {
    id: 573,
    text: '我不是浪費時間，我只是在打發時間',
    category: 'humor',
  },
  {
    id: 574,
    text: '我不是打發時間，我只是在消磨時光',
    category: 'humor',
  },
  {
    id: 575,
    text: '我不是消磨時光，我只是在等待',
    category: 'humor',
  },
  {
    id: 576,
    text: '我不是等待，我只是在觀望',
    category: 'humor',
  },
  {
    id: 577,
    text: '我不是觀望，我只是在旁觀',
    category: 'humor',
  },
  {
    id: 578,
    text: '我不是旁觀，我只是在看戲',
    category: 'humor',
  },
  {
    id: 579,
    text: '我不是看戲，我只是在湊熱鬧',
    category: 'humor',
  },
  {
    id: 580,
    text: '我不是湊熱鬧，我只是在參與',
    category: 'humor',
  },
  {
    id: 581,
    text: '我不是參與，我只是在加入',
    category: 'humor',
  },
  {
    id: 582,
    text: '我不是加入，我只是在跟風',
    category: 'humor',
  },
  {
    id: 583,
    text: '我不是跟風，我只是在隨大流',
    category: 'humor',
  },
  {
    id: 584,
    text: '我不是隨大流，我只是在從眾',
    category: 'humor',
  },
  {
    id: 585,
    text: '我不是從眾，我只是在和諧',
    category: 'humor',
  },
  {
    id: 586,
    text: '我不是和諧，我只是在妥協',
    category: 'humor',
  },
  {
    id: 587,
    text: '我不是妥協，我只是在讓步',
    category: 'humor',
  },
  {
    id: 588,
    text: '我不是讓步，我只是在退縮',
    category: 'humor',
  },
  {
    id: 589,
    text: '我不是退縮，我只是在躲避',
    category: 'humor',
  },
  {
    id: 590,
    text: '我不是躲避，我只是在逃避',
    category: 'humor',
  },
  {
    id: 591,
    text: '我不是逃避，我只是在逃亡',
    category: 'humor',
  },
  {
    id: 592,
    text: '我不是逃亡，我只是在流亡',
    category: 'humor',
  },
  {
    id: 593,
    text: '我不是流亡，我只是在漂泊',
    category: 'humor',
  },
  {
    id: 594,
    text: '我不是漂泊，我只是在流浪',
    category: 'humor',
  },
  {
    id: 595,
    text: '我不是流浪，我只是在遊蕩',
    category: 'humor',
  },
  {
    id: 596,
    text: '我不是遊蕩，我只是在閒逛',
    category: 'humor',
  },
  {
    id: 597,
    text: '我不是閒逛，我只是在散步',
    category: 'humor',
  },
  {
    id: 598,
    text: '我不是散步，我只是在走路',
    category: 'humor',
  },
  {
    id: 599,
    text: '我不是走路，我只是在移動',
    category: 'humor',
  },
  {
    id: 600,
    text: '人生最大的謊言就是我明天開始努力',
    category: 'humor',
  },
  {
    id: 601,
    text: '我不是不想工作，我只是在等待靈感',
    category: 'humor',
  },
  {
    id: 602,
    text: '錢不是萬能的，但沒有錢是萬萬不能的',
    category: 'humor',
  },
  {
    id: 603,
    text: '我的理想就是沒有理想',
    category: 'humor',
  },
  {
    id: 604,
    text: '我的目標就是沒有目標',
    category: 'humor',
  },
  {
    id: 605,
    text: '我的計畫就是沒有計畫',
    category: 'humor',
  },
  {
    id: 606,
    text: '我的夢想就是能睡個好覺',
    category: 'humor',
  },
  {
    id: 607,
    text: '我的願望就是不要有願望',
    category: 'humor',
  },
  {
    id: 608,
    text: '我的期望就是不要有期望',
    category: 'humor',
  },
  {
    id: 609,
    text: '我的希望就是不要有希望',
    category: 'humor',
  },
  {
    id: 610,
    text: '我的信念就是沒有信念',
    category: 'humor',
  },
  {
    id: 611,
    text: '我的信仰就是沒有信仰',
    category: 'humor',
  },
  {
    id: 612,
    text: '我的宗教就是睡眠',
    category: 'humor',
  },
  {
    id: 613,
    text: '我的信徒就是我自己',
    category: 'humor',
  },
  {
    id: 614,
    text: '我的教義就是及時行樂',
    category: 'humor',
  },
  {
    id: 615,
    text: '我的聖經就是手機',
    category: 'humor',
  },
  {
    id: 616,
    text: '我的天堂就是床',
    category: 'humor',
  },
  {
    id: 617,
    text: '我的地獄就是上班',
    category: 'humor',
  },
  {
    id: 618,
    text: '我的煉獄就是開會',
    category: 'humor',
  },
  {
    id: 619,
    text: '我的天使就是存款',
    category: 'humor',
  },
  {
    id: 620,
    text: '我的魔鬼就是老闆',
    category: 'humor',
  },
  {
    id: 621,
    text: '我的救世主就是假期',
    category: 'humor',
  },
  {
    id: 622,
    text: '我的終極目標就是退休',
    category: 'humor',
  },
  {
    id: 623,
    text: '我的人生意義就是活著',
    category: 'humor',
  },
  {
    id: 624,
    text: '我的存在價值就是吃飯',
    category: 'humor',
  },
  {
    id: 625,
    text: '我的生存理由就是睡覺',
    category: 'humor',
  },
  {
    id: 626,
    text: '我的活著目的就是玩樂',
    category: 'humor',
  },
  {
    id: 627,
    text: '我的生活方式就是混日子',
    category: 'humor',
  },
  {
    id: 628,
    text: '我的人生哲學就是隨遇而安',
    category: 'humor',
  },
  {
    id: 629,
    text: '我的人生態度就是得過且過',
    category: 'humor',
  },
  {
    id: 630,
    text: '我的人生信條就是及時行樂',
    category: 'humor',
  },
  {
    id: 631,
    text: '我的人生格言就是活著就好',
    category: 'humor',
  },
  {
    id: 632,
    text: '我的人生座右銘就是不要想太多',
    category: 'humor',
  },
  {
    id: 633,
    text: '我的人生箴言就是開心最重要',
    category: 'humor',
  },
  {
    id: 634,
    text: '我的人生寶典就是吃喝玩樂',
    category: 'humor',
  },
  {
    id: 635,
    text: '我的人生秘訣就是不要太認真',
    category: 'humor',
  },
  {
    id: 636,
    text: '我的人生竅門就是放鬆心態',
    category: 'humor',
  },
  {
    id: 637,
    text: '我的人生妙招就是順其自然',
    category: 'humor',
  },
  {
    id: 638,
    text: '我的人生絕招就是假裝沒看到',
    category: 'humor',
  },
  {
    id: 639,
    text: '我的人生必殺技就是裝作沒聽見',
    category: 'humor',
  },
  {
    id: 640,
    text: '我的人生大法就是視而不見',
    category: 'humor',
  },
  {
    id: 641,
    text: '我的人生秘法就是聽而不聞',
    category: 'humor',
  },
  {
    id: 642,
    text: '我的人生奧義就是裝傻充愣',
    category: 'humor',
  },
  {
    id: 643,
    text: '我的人生真諦就是裝作無知',
    category: 'humor',
  },
  {
    id: 644,
    text: '我的人生本質就是混吃等死',
    category: 'humor',
  },
  {
    id: 645,
    text: '我的人生真相就是浪費時間',
    category: 'humor',
  },
  {
    id: 646,
    text: '我的人生真實就是無所事事',
    category: 'humor',
  },
  {
    id: 647,
    text: '我的人生現實就是碌碌無為',
    category: 'humor',
  },
  {
    id: 648,
    text: '我的人生實況就是一事無成',
    category: 'humor',
  },
  {
    id: 649,
    text: '我的人生直播就是平凡無奇',
    category: 'humor',
  },
  {
    id: 650,
    text: '我的人生紀錄片就是無聊至極',
    category: 'humor',
  },
  {
    id: 651,
    text: '我的人生電影就是悲劇大片',
    category: 'humor',
  },
  {
    id: 652,
    text: '我的人生電視劇就是狗血連續劇',
    category: 'humor',
  },
  {
    id: 653,
    text: '我的人生小說就是爛尾文',
    category: 'humor',
  },
  {
    id: 654,
    text: '我的人生故事就是沒有故事',
    category: 'humor',
  },
  {
    id: 655,
    text: '我的人生傳記就是平凡傳',
    category: 'humor',
  },
  {
    id: 656,
    text: '我的人生列傳就是無名傳',
    category: 'humor',
  },
  {
    id: 657,
    text: '我的人生史詩就是悲歌',
    category: 'humor',
  },
  {
    id: 658,
    text: '我的人生樂章就是悲鳴',
    category: 'humor',
  },
  {
    id: 659,
    text: '我的人生旋律就是哀樂',
    category: 'humor',
  },
  {
    id: 660,
    text: '我的人生節奏就是慢板',
    category: 'humor',
  },
  {
    id: 661,
    text: '我的人生速度就是靜止',
    category: 'humor',
  },
  {
    id: 662,
    text: '我的人生進度就是0%',
    category: 'humor',
  },
  {
    id: 663,
    text: '我的人生完成度就是負數',
    category: 'humor',
  },
  {
    id: 664,
    text: '我的人生滿意度就是負無窮',
    category: 'humor',
  },
  {
    id: 665,
    text: '我的人生幸福度就是-999',
    category: 'humor',
  },
  {
    id: 666,
    text: '我的人生成就感就是沒有',
    category: 'humor',
  },
  {
    id: 667,
    text: '我的人生獲得感就是失落感',
    category: 'humor',
  },
  {
    id: 668,
    text: '我的人生安全感就是不安全感',
    category: 'humor',
  },
  {
    id: 669,
    text: '我的人生歸屬感就是陌生感',
    category: 'humor',
  },
  {
    id: 670,
    text: '我的人生認同感就是否定感',
    category: 'humor',
  },
  {
    id: 671,
    text: '我的人生確定感就是迷茫感',
    category: 'humor',
  },
  {
    id: 672,
    text: '我的人生方向感就是迷路感',
    category: 'humor',
  },
  {
    id: 673,
    text: '我的人生存在感就是虛無感',
    category: 'humor',
  },
  {
    id: 674,
    text: '我的人生現實感就是做夢感',
    category: 'humor',
  },
  {
    id: 675,
    text: '我的人生真實感就是虛幻感',
    category: 'humor',
  },
  {
    id: 676,
    text: '我的人生代入感就是局外人感',
    category: 'humor',
  },
  {
    id: 677,
    text: '我的人生沉浸感就是格格不入感',
    category: 'humor',
  },
  {
    id: 678,
    text: '我的人生融入感就是被排斥感',
    category: 'humor',
  },
  {
    id: 679,
    text: '我的人生融合感就是被孤立感',
    category: 'humor',
  },
  {
    id: 680,
    text: '我的人生和諧感就是衝突感',
    category: 'humor',
  },
  {
    id: 681,
    text: '我的人生平衡感就是失衡感',
    category: 'humor',
  },
  {
    id: 682,
    text: '我的人生穩定感就是動盪感',
    category: 'humor',
  },
  {
    id: 683,
    text: '我的人生安定感就是不安感',
    category: 'humor',
  },
  {
    id: 684,
    text: '我的人生踏實感就是虛浮感',
    category: 'humor',
  },
  {
    id: 685,
    text: '我的人生堅實感就是虛弱感',
    category: 'humor',
  },
  {
    id: 686,
    text: '我的人生牢固感就是脆弱感',
    category: 'humor',
  },
  {
    id: 687,
    text: '我的人生穩固感就是搖搖欲墜感',
    category: 'humor',
  },
  {
    id: 688,
    text: '我的人生堅固感就是岌岌可危感',
    category: 'humor',
  },
  {
    id: 689,
    text: '我的人生永恆感就是短暫感',
    category: 'humor',
  },
  {
    id: 690,
    text: '我的人生持久感就是轉瞬即逝感',
    category: 'humor',
  },
  {
    id: 691,
    text: '我的人生長久感就是稍縱即逝感',
    category: 'humor',
  },
  {
    id: 692,
    text: '我的人生永遠感就是一瞬間感',
    category: 'humor',
  },
  {
    id: 693,
    text: '我的人生無限感就是有限感',
    category: 'humor',
  },
  {
    id: 694,
    text: '我的人生無盡感就是有盡感',
    category: 'humor',
  },
  {
    id: 695,
    text: '我的人生無窮感就是有窮感',
    category: 'humor',
  },
  {
    id: 696,
    text: '我的人生無邊感就是有邊感',
    category: 'humor',
  },
  {
    id: 697,
    text: '我的人生無際感就是有際感',
    category: 'humor',
  },
  {
    id: 698,
    text: '我的人生無限制感就是受限感',
    category: 'humor',
  },
  {
    id: 699,
    text: '我的人生自由感就是被束縛感',
    category: 'humor',
  },
  {
    id: 700,
    text: '我的人生解放感就是被禁錮感',
    category: 'humor',
  },
  {
    id: 701,
    text: '我的人生釋放感就是被囚禁感',
    category: 'humor',
  },
  {
    id: 702,
    text: '我的人生放鬆感就是緊張感',
    category: 'humor',
  },
  {
    id: 703,
    text: '我的人生舒適感就是不適感',
    category: 'humor',
  },
  {
    id: 704,
    text: '我的人生愉快感就是痛苦感',
    category: 'humor',
  },
  {
    id: 705,
    text: '我的人生快樂感就是悲傷感',
    category: 'humor',
  },
  {
    id: 706,
    text: '我的人生歡樂感就是憂鬱感',
    category: 'humor',
  },
  {
    id: 707,
    text: '我的人生喜悅感就是沮喪感',
    category: 'humor',
  },
  {
    id: 708,
    text: '我的人生興奮感就是乏味感',
    category: 'humor',
  },
  {
    id: 709,
    text: '我的人生刺激感就是平淡感',
    category: 'humor',
  },
  {
    id: 710,
    text: '我的人生驚喜感就是失望感',
    category: 'humor',
  },
  {
    id: 711,
    text: '我的人生驚奇感就是平凡感',
    category: 'humor',
  },
  {
    id: 712,
    text: '我的人生奇妙感就是乏味感',
    category: 'humor',
  },
  {
    id: 713,
    text: '我的人生神奇感就是平庸感',
    category: 'humor',
  },
  {
    id: 714,
    text: '我的人生奇異感就是普通感',
    category: 'humor',
  },
  {
    id: 715,
    text: '我的人生新奇感就是陳舊感',
    category: 'humor',
  },
  {
    id: 716,
    text: '我的人生新鮮感就是老套感',
    category: 'humor',
  },
  {
    id: 717,
    text: '我的人生新穎感就是過時感',
    category: 'humor',
  },
  {
    id: 718,
    text: '我的人生創新感就是守舊感',
    category: 'humor',
  },
  {
    id: 719,
    text: '我的人生突破感就是停滯感',
    category: 'humor',
  },
  {
    id: 720,
    text: '我的人生進展感就是原地踏步感',
    category: 'humor',
  },
  {
    id: 721,
    text: '我的人生前進感就是後退感',
    category: 'humor',
  },
  {
    id: 722,
    text: '我的人生上升感就是下降感',
    category: 'humor',
  },
  {
    id: 723,
    text: '我的人生高升感就是跌落感',
    category: 'humor',
  },
  {
    id: 724,
    text: '我的人生飆升感就是暴跌感',
    category: 'humor',
  },
  {
    id: 725,
    text: '我的人生躍升感就是墜落感',
    category: 'humor',
  },
  {
    id: 726,
    text: '我的人生騰飛感就是墜毀感',
    category: 'humor',
  },
  {
    id: 727,
    text: '我的人生起飛感就是著陸感',
    category: 'humor',
  },
  {
    id: 728,
    text: '我的人生升空感就是降落感',
    category: 'humor',
  },
  {
    id: 729,
    text: '我的人生翱翔感就是俯衝感',
    category: 'humor',
  },
  {
    id: 730,
    text: '我的人生飛翔感就是墜落感',
    category: 'humor',
  },
  {
    id: 731,
    text: '我的人生展翅感就是收翅感',
    category: 'humor',
  },
  {
    id: 732,
    text: '我的人生自由翱翔感就是被困籠中感',
    category: 'humor',
  },
  {
    id: 733,
    text: '人生就像一部電影，我是龍套',
    category: 'humor',
  },
  {
    id: 734,
    text: '別人在寫傳奇，我在寫日記',
    category: 'humor',
  },
  {
    id: 735,
    text: '成功的人都在往上爬，我在往下挖',
    category: 'humor',
  },
  {
    id: 736,
    text: '我不是在混日子，我是在享受生活',
    category: 'humor',
  },
  {
    id: 737,
    text: '人生最大的成就就是活著',
    category: 'humor',
  },
  {
    id: 738,
    text: '我的目標就是沒有目標',
    category: 'humor',
  },
  {
    id: 739,
    text: '我的計畫就是沒有計畫',
    category: 'humor',
  },
  {
    id: 740,
    text: '我的夢想就是能睡個好覺',
    category: 'humor',
  },
  {
    id: 741,
    text: '我的願望就是不要有願望',
    category: 'humor',
  },
  {
    id: 742,
    text: '我的期望就是不要有期望',
    category: 'humor',
  },
  {
    id: 743,
    text: '我的希望就是不要有希望',
    category: 'humor',
  },
  {
    id: 744,
    text: '我的信念就是沒有信念',
    category: 'humor',
  },
  {
    id: 745,
    text: '我的信仰就是沒有信仰',
    category: 'humor',
  },
  {
    id: 746,
    text: '我的人生就是第246個金句',
    category: 'humor',
  },
  {
    id: 747,
    text: '我的人生就是第247個金句',
    category: 'humor',
  },
  {
    id: 748,
    text: '我的人生就是第248個金句',
    category: 'humor',
  },
  {
    id: 749,
    text: '我的人生就是第249個金句',
    category: 'humor',
  },
  {
    id: 750,
    text: '我的人生就是第250個金句',
    category: 'humor',
  },
  {
    id: 751,
    text: '我的人生就是第251個金句',
    category: 'humor',
  },
  {
    id: 752,
    text: '我的人生就是第252個金句',
    category: 'humor',
  },
  {
    id: 753,
    text: '我的人生就是第253個金句',
    category: 'humor',
  },
  {
    id: 754,
    text: '我的人生就是第254個金句',
    category: 'humor',
  },
  {
    id: 755,
    text: '我的人生就是第255個金句',
    category: 'humor',
  },
  {
    id: 756,
    text: '我的人生就是第256個金句',
    category: 'humor',
  },
  {
    id: 757,
    text: '我的人生就是第257個金句',
    category: 'humor',
  },
  {
    id: 758,
    text: '我的人生就是第258個金句',
    category: 'humor',
  },
  {
    id: 759,
    text: '我的人生就是第259個金句',
    category: 'humor',
  },
  {
    id: 760,
    text: '我的人生就是第260個金句',
    category: 'humor',
  },
  {
    id: 761,
    text: '我的人生就是第261個金句',
    category: 'humor',
  },
  {
    id: 762,
    text: '我的人生就是第262個金句',
    category: 'humor',
  },
  {
    id: 763,
    text: '我的人生就是第263個金句',
    category: 'humor',
  },
  {
    id: 764,
    text: '我的人生就是第264個金句',
    category: 'humor',
  },
  {
    id: 765,
    text: '我的人生就是第265個金句',
    category: 'humor',
  },
  {
    id: 766,
    text: '我的人生就是第266個金句',
    category: 'humor',
  },
  {
    id: 767,
    text: '我的人生就是第267個金句',
    category: 'humor',
  },
  {
    id: 768,
    text: '我的人生就是第268個金句',
    category: 'humor',
  },
  {
    id: 769,
    text: '我的人生就是第269個金句',
    category: 'humor',
  },
  {
    id: 770,
    text: '我的人生就是第270個金句',
    category: 'humor',
  },
  {
    id: 771,
    text: '我的人生就是第271個金句',
    category: 'humor',
  },
  {
    id: 772,
    text: '我的人生就是第272個金句',
    category: 'humor',
  },
  {
    id: 773,
    text: '我的人生就是第273個金句',
    category: 'humor',
  },
  {
    id: 774,
    text: '我的人生就是第274個金句',
    category: 'humor',
  },
  {
    id: 775,
    text: '我的人生就是第275個金句',
    category: 'humor',
  },
  {
    id: 776,
    text: '我的人生就是第276個金句',
    category: 'humor',
  },
  {
    id: 777,
    text: '我的人生就是第277個金句',
    category: 'humor',
  },
  {
    id: 778,
    text: '我的人生就是第278個金句',
    category: 'humor',
  },
  {
    id: 779,
    text: '我的人生就是第279個金句',
    category: 'humor',
  },
  {
    id: 780,
    text: '我的人生就是第280個金句',
    category: 'humor',
  },
  {
    id: 781,
    text: '我的人生就是第281個金句',
    category: 'humor',
  },
  {
    id: 782,
    text: '我的人生就是第282個金句',
    category: 'humor',
  },
  {
    id: 783,
    text: '我的人生就是第283個金句',
    category: 'humor',
  },
  {
    id: 784,
    text: '我的人生就是第284個金句',
    category: 'humor',
  },
  {
    id: 785,
    text: '我的人生就是第285個金句',
    category: 'humor',
  },
  {
    id: 786,
    text: '我的人生就是第286個金句',
    category: 'humor',
  },
  {
    id: 787,
    text: '我的人生就是第287個金句',
    category: 'humor',
  },
  {
    id: 788,
    text: '我的人生就是第288個金句',
    category: 'humor',
  },
  {
    id: 789,
    text: '我的人生就是第289個金句',
    category: 'humor',
  },
  {
    id: 790,
    text: '我的人生就是第290個金句',
    category: 'humor',
  },
  {
    id: 791,
    text: '我的人生就是第291個金句',
    category: 'humor',
  },
  {
    id: 792,
    text: '我的人生就是第292個金句',
    category: 'humor',
  },
  {
    id: 793,
    text: '我的人生就是第293個金句',
    category: 'humor',
  },
  {
    id: 794,
    text: '我的人生就是第294個金句',
    category: 'humor',
  },
  {
    id: 795,
    text: '我的人生就是第295個金句',
    category: 'humor',
  },
  {
    id: 796,
    text: '我的人生就是第296個金句',
    category: 'humor',
  },
  {
    id: 797,
    text: '我的人生就是第297個金句',
    category: 'humor',
  },
  {
    id: 798,
    text: '我的人生就是第298個金句',
    category: 'humor',
  },
  {
    id: 799,
    text: '我的人生就是第299個金句',
    category: 'humor',
  },
  {
    id: 800,
    text: '我的人生就是第300個金句',
    category: 'humor',
  },
];
