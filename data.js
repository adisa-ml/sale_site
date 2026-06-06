// 1) Вставь свой Telegram сюда:
const TELEGRAM_LINK = "https://t.me/VerbitskayaAF";

// 2) Добавляй товары в этот список.
// category: clothes / auto / other
// id должен быть уникальным, латиницей, без пробелов.
const PRODUCTS = [
  {
  id: "ck-red-hat",
  category: "clothes",
  title: "Шапка Calvin Klein",
  price: "1000 ₽",
  short: "Красная шапка Calvin Klein.",
  description: "Красная шапка Calvin Klein. Состояние и детали можно уточнить в Telegram.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "r18-wheels",
  category: "auto",
  title: "Колеса в сборе R18 летние",
  price: "33999 ₽ за 4 шт.",
  short: "Летние колеса R18 в сборе.",
  description: "Летние колеса R18 в сборе, комплект 4 штуки.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "air-jordan-1-pink",
  category: "clothes",
  title: "Air Jordan 1 Retro High OG",
  price: "5000 ₽",
  short: "Кроссовки Air Jordan 1 Retro High OG.",
  description: "Кроссовки Air Jordan 1 Retro High OG. Детали и дополнительные фото можно получить в Telegram.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "lime-sweatshirt",
  category: "clothes",
  title: "Свитшот Lime размер S, оверсайз",
  price: "2400 ₽",
  short: "Свитшот Lime, размер S, оверсайз.",
  description: "Свитшот Lime размер S, оверсайз.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "napapijri-sweatshirt-xs",
  category: "clothes",
  title: "Свитшот Napapijri размер XS",
  price: "2472 ₽",
  short: "Свитшот Napapijri, размер XS.",
  description: "Свитшот Napapijri размер XS.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "lexus-gs300-front-brakes",
  category: "auto",
  title: "Передние тормоза Lexus GS300",
  price: "4750 ₽",
  short: "Передние тормоза для Lexus GS300.",
  description: "Передние тормоза Lexus GS300.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "rayban-smart-glasses",
  category: "tech",
  title: "Умные очки Ray-Ban фотохромные Wayfarer",
  price: "34425 ₽",
  short: "Умные очки Ray-Ban Wayfarer.",
  description: "Умные фотохромные очки Ray-Ban Wayfarer.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "lexus-gs300-washer-tank",
  category: "auto",
  title: "Бачок омывателя Lexus GS300",
  price: "3000 ₽",
  short: "Бачок омывателя для Lexus GS300.",
  description: "Бачок омывателя Lexus GS300.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "hdmi-cable",
  category: "tech",
  title: "Провод HDMI 2.5 и 1.7",
  price: "439 ₽",
  short: "Провод HDMI.",
  description: "Провод HDMI 2.5 и 1.7.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "usb-type-c-cables",
  category: "tech",
  title: "Кабель USB Type-C",
  price: "133 ₽",
  short: "Кабель USB Type-C, 4 шт.",
  description: "Кабель USB Type-C, 4 штуки в наличии.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "apple-lightning-jack-adapter",
  category: "tech",
  title: "Переходник Apple Lightning 3.5 jack",
  price: "300 ₽",
  short: "Переходник Apple Lightning на 3.5 jack.",
  description: "Переходник Apple Lightning 3.5 jack.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "logitech-wireless-mouse",
  category: "tech",
  title: "Мышь беспроводная Logitech",
  price: "384 ₽",
  short: "Беспроводная мышь Logitech.",
  description: "Беспроводная мышь Logitech.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "minimo-pink-hoodie",
  category: "clothes",
  title: "Розовый худи Minimo оверсайз",
  price: "1164 ₽",
  short: "Розовый худи Minimo, оверсайз.",
  description: "Розовый худи Minimo оверсайз.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "all-we-need-leather-jacket",
  category: "clothes",
  title: "Косуха All We Need",
  price: "5500 ₽",
  short: "Косуха All We Need.",
  description: "Косуха All We Need.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "rivacase-laptop-bag",
  category: "other",
  title: "Сумка для ноутбука Rivacase 16” или документов",
  price: "500 ₽",
  short: "Сумка для ноутбука Rivacase 16”.",
  description: "Сумка для ноутбука Rivacase 16” или документов.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "foam-roller-purple",
  category: "other",
  title: "МФР ролик 30×10 см средняя жесткость",
  price: "224 ₽",
  short: "МФР ролик, средняя жесткость.",
  description: "МФР ролик 30×10 см, средняя жесткость.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "stingray-floor-fan",
  category: "tech",
  title: "Вентилятор напольный Stingray",
  price: "1777 ₽",
  short: "Напольный вентилятор Stingray.",
  description: "Вентилятор напольный Stingray.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "status-for-life-heater",
  category: "tech",
  title: "Обогреватель электрический Status for Life",
  price: "2666 ₽",
  short: "Электрический обогреватель Status for Life.",
  description: "Обогреватель электрический Status for Life.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "lexus-gs300-mirror-control",
  category: "auto",
  title: "Блок управления зеркалами Lexus GS300",
  price: "441 ₽",
  short: "Блок управления зеркалами Lexus GS300.",
  description: "Блок управления зеркалами Lexus GS300.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "lexus-gs-grs190-transmission",
  category: "auto",
  title: "АКПП 4WD Lexus GS GRS190 3GRFSE",
  price: "14250 ₽",
  short: "АКПП 4WD Lexus GS GRS190 3GRFSE.",
  description: "АКПП 4WD Lexus GS GRS190 3GRFSE.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  },
  {
  id: "redmi-monitor",
  category: "tech",
  title: "Монитор Redmi",
  price: "6375 ₽",
  short: "Монитор Redmi.",
  description: "Монитор Redmi.",
  photos: ["images/IMG_0612 Крупный.jpeg"]
  }
];

const CATEGORIES = {
  clothes: "Одежда",
  auto: "Авто товары",
  tech: "Техника",
  other: "Остальное"
};
