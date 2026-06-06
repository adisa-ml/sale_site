// 1) Вставь свой Telegram сюда:
const TELEGRAM_LINK = "https://t.me/your_username";

// 2) Добавляй товары в этот список.
// category: clothes / auto / other
// id должен быть уникальным, латиницей, без пробелов.
const PRODUCTS = [
  {
    id: "green-dress",
    category: "clothes",
    title: "Платье зеленое",
    price: "1500 ₽",
    short: "Хорошее состояние, размер S-M.",
    description: "Красивое зеленое платье в хорошем состоянии. Подойдет на размер S-M. Фото и дополнительные замеры могу отправить в Telegram.",
    photos: [
      "images/placeholder-1.jpg",
      "images/placeholder-2.jpg"
    ]
  },
  {
    id: "car-organizer",
    category: "auto",
    title: "Органайзер в машину",
    price: "900 ₽",
    short: "Удобный органайзер для багажника.",
    description: "Органайзер для автомобиля. Помогает хранить мелочи, автохимию и аксессуары в порядке. Состояние хорошее.",
    photos: [
      "images/placeholder-1.jpg"
    ]
  },
  {
    id: "home-lamp",
    category: "other",
    title: "Настольная лампа",
    price: "700 ₽",
    short: "Рабочая лампа для дома.",
    description: "Настольная лампа в рабочем состоянии. Подойдет для рабочего стола, спальни или дачи.",
    photos: [
      "images/placeholder-2.jpg"
    ]
  }
];

const CATEGORIES = {
  clothes: "Одежда",
  auto: "Авто товары",
  other: "Остальное"
};
