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
  description: "Красная шапка Calvin Klein. Состояние отличное. Детали можно уточнить в Telegram.",
  photos: ["images/clothes/calvin/IMG_0457 Крупный.jpeg"]
  },
  {
  id: "r18-wheels",
  category: "auto",
  title: "Колеса в сборе R18 летние",
  price: "33999 ₽ за 4 шт.",
  short: "Летние колеса R18 в сборе.",
  description: "Летние колеса R18 в сборе, комплект 4 штуки.",
  photos: ["images/auto/r18-wheels/FullSizeRender 9 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 2 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 3 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 4 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 5 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 6 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 7 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 8 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 10 Крупный.jpeg"
          ,"images/auto/r18-wheels/FullSizeRender 11 Крупный.jpeg"
        ]
  },
  {
  id: "air-jordan-1-pink",
  category: "clothes",
  title: "Air Jordan 1 Retro High OG",
  price: "5000 ₽",
  short: "Кроссовки Air Jordan 1 Retro High OG.",
  description: "Кроссовки Air Jordan 1 Retro High OG. Детали и дополнительные фото можно получить в Telegram.",
  photos: ["images/clothes/air_jordan/IMG_0429 Крупный.jpeg"
          ,"images/clothes/air_jordan/IMG_0430 Крупный.jpeg"
          ,"images/clothes/air_jordan/IMG_0431 Крупный.jpeg"
          ,"images/clothes/air_jordan/IMG_0432 Крупный.jpeg"
          ,"images/clothes/air_jordan/IMG_0435 Крупный.jpeg"
          ]
  },
  {
  id: "lime-sweatshirt",
  category: "clothes",
  title: "Свитшот Lime размер S, оверсайз",
  price: "2400 ₽",
  short: "Свитшот Lime, размер S, оверсайз.",
  description: "Свитшот Lime размер S, оверсайз.",
  photos: ["images/clothes/lime_sweatshirt_ski/IMG_0420 Крупный.jpeg"
          ,"images/clothes/lime_sweatshirt_ski/IMG_0421 Крупный.jpeg"
          ,"images/clothes/lime_sweatshirt_ski/IMG_0422 Крупный.jpeg"
          ]
  },
  {
  id: "napapijri-sweatshirt-xs",
  category: "clothes",
  title: "Свитшот Napapijri размер XS",
  price: "2472 ₽",
  short: "Свитшот Napapijri, размер XS.",
  description: "Свитшот Napapijri размер XS оверсайз",
  photos: ["images/clothes/napapijri/IMG_0413 Крупный.jpeg"
          ,"images/clothes/napapijri/IMG_0414 Крупный.jpeg"
          ,"images/clothes/napapijri/IMG_0415 Крупный.jpeg"
          ,"images/clothes/napapijri/IMG_0417 Крупный.jpeg"
          ,"images/clothes/napapijri/IMG_0419 Крупный.jpeg"
          ]
  },
  {
  id: "lexus-gs300-front-brakes",
  category: "auto",
  title: "Передние тормоза Lexus GS300",
  price: "4750 ₽",
  short: "Передние тормоза для Lexus GS300.",
  description: "Передние тормоза Lexus GS300.",
  photos: ["images/auto/lexus-gs300-front-brakes/IMG_8670 Крупный.jpeg"
          ,"images/auto/lexus-gs300-front-brakes/IMG_8671 Крупный.jpeg"
          ,"images/auto/lexus-gs300-front-brakes/IMG_8672 Крупный.jpeg"
          ,"images/auto/lexus-gs300-front-brakes/IMG_8673 Крупный.jpeg"
          ,"images/auto/lexus-gs300-front-brakes/IMG_8674 Крупный.jpeg"
          ,"images/auto/lexus-gs300-front-brakes/IMG_8675 Крупный.jpeg"
          ]
  },
  {
  id: "rayban-smart-glasses",
  category: "tech",
  title: "Умные очки Ray-Ban фотохромные Wayfarer",
  price: "34425 ₽",
  short: "Умные очки Ray-Ban Wayfarer.",
  description: ["Умные очки Ray-Ban Wayfarer в классическом дизайне Wayfarer. Оснащены фотохромными линзами Clear/Graphite Green - прозрачные в помещении и затемняются на солнце, что делает их удобными для повседневного использования."
          ,"Размер: 50-22-150"
          ,"• Цвет оправы: Matte Black (матовый черный)"
          ,"• Линзы: Transitions Clear/Graphite Green"
          ,"(фотохромные)"
          ,"• Встроенная камера для фото и видео от первого лица"
          ,"• Встроенные динамики и микрофоны"
          ,"• Прослушивание музыки и звонки без наушников"
          ,"• Подключение к смартфону через приложение"
          ,"• Зарядка и хранение в фирменном зарядном кейсе"
          ],
  photos: ["images/tech/rayban/IMG_0401 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0402 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0403 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0406 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0407 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0408 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0409 Крупный.jpeg"
          ,"images/tech/rayban/IMG_0411 Крупный.jpeg"
          ]
  },
  {
  id: "lexus-gs300-washer-tank",
  category: "auto",
  title: "Бачок омывателя Lexus GS300",
  price: "3000 ₽",
  short: "Бачок омывателя для Lexus GS300.",
  description: "Бачок омывателя Lexus GS300.",
  photos: ["images/auto/lexus-gs300-washer-tank/IMG_0367 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0368 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0369 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0370 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0371 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0372 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0373 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0374 Крупный.jpeg"
          ,"images/auto/lexus-gs300-washer-tank/IMG_0375 Крупный.jpeg"
        ]
  },
  {
  id: "hdmi-cable",
  category: "tech",
  title: "Провод HDMI 2.5 и 1.7",
  price: "439 ₽",
  short: "Провод HDMI.",
  description: "Провод HDMI 2.5 и 1.7.",
  photos: ["images/tech/hdmi/IMG_0316 Крупный.jpeg"]
  },
  {
  id: "usb-type-c-cables",
  category: "tech",
  title: "Кабель USB Type-C",
  price: "133 ₽",
  short: "Кабель USB Type-C, 4 шт.",
  description: "Кабель USB Type-C, 4 штуки в наличии.",
  photos: ["images/tech/usb_type-c/IMG_0313 Крупный.jpeg"]
  },
  {
  id: "apple-lightning-jack-adapter",
  category: "tech",
  title: "Переходник Apple Lightning 3.5 jack",
  price: "300 ₽",
  short: "Переходник Apple Lightning на 3.5 jack.",
  description: "Переходник Apple Lightning 3.5 jack.",
  photos: ["images/tech/jack/IMG_0315 Крупный.jpeg"
          ,"images/tech/jack/IMG_0318 Крупный.jpeg"
          ]
  },
  {
  id: "logitech-wireless-mouse",
  category: "tech",
  title: "Мышь беспроводная Logitech",
  price: "384 ₽",
  short: "Беспроводная мышь Logitech.",
  description: "Беспроводная мышь Logitech.",
  photos: ["images/tech/mouse/IMG_0302 Крупный.jpeg"
          ,"images/tech/mouse/IMG_0303 Крупный.jpeg"
          ]
  },
  {
  id: "minimo-pink-hoodie",
  category: "clothes",
  title: "Розовый худи Minimo оверсайз",
  price: "1164 ₽",
  short: "Розовый худи Minimo, оверсайз.",
  description: "Розовый худи Minimo оверсайз.",
  photos: ["images/clothes/minimo/IMG_0279 Крупный.jpeg"
          ,"images/clothes/minimo/IMG_0280 Крупный.jpeg"
          ,"images/clothes/minimo/IMG_0281 Крупный.jpeg"
          ,"images/clothes/minimo/IMG_0282 Крупный.jpeg"
          ]
  },
  {
  id: "all-we-need-leather-jacket",
  category: "clothes",
  title: "Новая косуха All We Need",
  price: "5500 ₽",
  short: "Косуха All We Need.",
  description: "Косуха All We Need.",
  photos: ["images/clothes/all_we_need/IMG_0219 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0219 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0220 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0221 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0222 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0223 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0224 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0225 Крупный.jpeg"
    ,"images/clothes/all_we_need/IMG_0226 Крупный.jpeg"
          ]
  },
  {
  id: "rivacase-laptop-bag",
  category: "other",
  title: "Сумка для ноутбука Rivacase 16” или документов",
  price: "500 ₽",
  short: "Сумка для ноутбука Rivacase 16”.",
  description: "Сумка для ноутбука Rivacase 16” или документов.",
  photos: ["images/other/laptop_bag/IMG_0203 Малый Крупный.jpeg"
          ,"images/other/laptop_bag/IMG_0204 Малый Крупный.jpeg"
          ,"images/other/laptop_bag/IMG_0206 Малый Крупный.jpeg"
          ,"images/other/laptop_bag/IMG_0208 Малый Крупный.jpeg"
          ]
  },
  {
  id: "vest-2mood-grey",
  category: "clothes",
  title: "Жилетка серая 2MOOD размер М",
  price: "2500 ₽",
  short: "Жилетка 2MOOD",
  description: "Жилетка 2MOOD в отличном состоянии.",
  photos: ["images/clothes/vest-2mood-grey/IMG_0727 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0728 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0729 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0730 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0731 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0732 Малый.jpeg"
          ,"images/clothes/vest-2mood-grey/IMG_0733 Малый.jpeg"
          ]
  },
  {
  id: "stingray-floor-fan",
  category: "tech",
  title: "Вентилятор напольный Stingray",
  price: "1777 ₽",
  short: "Напольный вентилятор Stingray.",
  description: "Вентилятор напольный Stingray.",
  photos: ["images/tech/fan/IMG_0171.jpg"
          ,"images/tech/fan/IMG_0172.jpg"
          ,"images/tech/fan/IMG_0173.jpeg"
          ]
  },
  {
  id: "status-for-life-heater",
  category: "tech",
  title: "Обогреватель электрический Status for Life",
  price: "2666 ₽",
  short: "Электрический обогреватель Status for Life.",
  description: "Обогреватель электрический Status for Life.",
  photos: ["images/tech/heater/IMG_0150 Крупный.jpeg"]
  },
  {
  id: "lexus-gs300-mirror-control",
  category: "auto",
  title: "Блок управления зеркалами Lexus GS300",
  price: "441 ₽",
  short: "Блок управления зеркалами Lexus GS300 на запчасти.",
  description: "Блок управления зеркалами Lexus GS300 на запчасти.",
  photos: ["images/auto/lexus-gs300-mirror-control/IMG_0156 Крупный.jpeg"
          ,"images/auto/lexus-gs300-mirror-control/IMG_0157 Крупный.jpeg"
          ,"images/auto/lexus-gs300-mirror-control/IMG_0158 Крупный.jpeg"
          ,"images/auto/lexus-gs300-mirror-control/IMG_0159 Крупный.jpeg"
          ,"images/auto/lexus-gs300-mirror-control/IMG_0160 Крупный.jpeg"
          ,"images/auto/lexus-gs300-mirror-control/IMG_0161 Крупный.jpeg"
        ]
  },
  {
  id: "lexus-gs-grs190-transmission",
  category: "auto",
  title: "АКПП 4WD Lexus GS GRS190 3GRFSE",
  price: "14250 ₽",
  short: "АКПП 4WD Lexus GS GRS190 3GRFSE.",
  description: "АКПП 4WD Lexus GS GRS190 3GRFSE.",
  photos: ["images/auto/lexus-gs-grs190-transmission/IMG_8594.jpg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8134 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8135 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8136 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8137 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8138 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8139 Крупный.jpeg"
          ,"images/auto/lexus-gs-grs190-transmission/IMG_8140 Крупный.jpeg"
        ]
  },
  {
  id: "redmi-monitor",
  category: "tech",
  title: "Монитор Redmi",
  price: "6375 ₽",
  short: "Монитор Redmi.",
  description: "Монитор Redmi.",
  photos: ["images/tech/screen/IMG_0098 Крупный.jpeg"
          ,"images/tech/screen/IMG_0099 Крупный.jpeg"
          ,"images/tech/screen/IMG_0100 Крупный.jpeg"
        ]
  },
  {
  id: "zara-leather-pants",
  category: "clothes",
  title: "Кожаные брюки Zara размер 40-42",
  price: "300 ₽",
  short: "Кожаные брюки Zara, размер 40-42.",
  description: "Женские кожаные брюки Zara. Размер 40-42.",
  photos: ["images/clothes/zara-leather-pants_(кож_брюки)/IMG_0600 Крупный.jpeg"
          ,"images/clothes/zara-leather-pants_(кож_брюки)/IMG_0590 Крупный.jpeg"
          ,"images/clothes/zara-leather-pants_(кож_брюки)/IMG_0591 Крупный.jpeg"
          ,"images/clothes/zara-leather-pants_(кож_брюки)/IMG_0592 Крупный.jpeg"
          ]
  },
  {
  id: "ostin1-leather-pants",
  category: "clothes",
  title: "Кожаные брюки O'Stin размер 40-42",
  price: "300 ₽",
  short: "Кожаные брюки O'Stin, размер 40-42.",
  description: "Женские кожаные брюки O'Stin. Размер 40-42.",
  photos: ["images/clothes/ostin1-leather-pants/IMG_0596 Крупный.jpeg"
          ,"images/clothes/ostin1-leather-pants/IMG_0597 Крупный.jpeg"
          ,"images/clothes/ostin1-leather-pants/IMG_0598 Крупный.jpeg"
          ,"images/clothes/ostin1-leather-pants/IMG_0599 Крупный.jpeg"
          ]
  },
  {
  id: "ostin2-leather-pants",
  category: "clothes",
  title: "Кожаные кюлоты O'Stin размер 40-42",
  price: "300 ₽",
  short: "Кожаные кюлоты O'Stin, размер 40-42.",
  description: "Женские кюлоты O'Stin. Размер 40-42.",
  photos: ["images/clothes/ostin2-leather-pants/IMG_0589 Крупный.jpeg"]
  },

  {
  id: "calista-summer-dress",
  category: "clothes",
  title: "Платье летнее Calista размер 42",
  price: "1648 ₽",
  short: "Летнее платье Calista, размер 42.",
  description: "Легкое летнее платье Calista, размер 42.",
  photos: ["images/clothes/calista/IMG_1368 Крупный.jpeg"
          ,"images/clothes/calista/IMG_1369 Крупный.jpeg"
          ,"images/clothes/calista/IMG_1370 Крупный.jpeg"
          ,"images/clothes/calista/IMG_1371 Крупный.jpeg"
          ,"images/clothes/calista/IMG_1372 Крупный.jpeg"  
          ,"images/clothes/calista/IMG_1373 Крупный.jpeg"  
          ,"images/clothes/calista/IMG_1375 Крупный.jpeg"  
          ,"images/clothes/calista/IMG_1376 Крупный.jpeg"
          ,"images/clothes/calista/IMG_1377 Крупный.jpeg"                    
        ]
  },

  {
  id: "lime-slit-dress-xs",
  category: "clothes",
  title: "Новое платье Lime с разрезом размер XS",
  price: "1098 ₽",
  short: "Новое платье Lime с разрезом, размер XS.",
  description: "Новое платье Lime с разрезом, размер XS.",
  photos: ["images/clothes/lime-slit-dress-xs/IMG_0641 Крупный.jpeg"
          ,"images/clothes/lime-slit-dress-xs/IMG_0642 Крупный.jpeg"
          ,"images/clothes/lime-slit-dress-xs/IMG_0643 Крупный.jpeg"
          ,"images/clothes/lime-slit-dress-xs/IMG_0644 Крупный.jpeg"
          ]
  },

  {
  id: "mango-zarina-tops",
  category: "clothes",
  title: "Топ Mango и Zarina",
  price: "329 ₽",
  short: "Топы Mango и Zarina.",
  description: "Женские топы Mango и Zarina.",
  photos: ["images/clothes/mango-zarina-tops/IMG_0623 Крупный.jpeg"
          ,"images/clothes/mango-zarina-tops/IMG_0624 Крупный.jpeg"
          ,"images/clothes/mango-zarina-tops/IMG_0625 Крупный.jpeg"
          ,"images/clothes/mango-zarina-tops/IMG_0626 Крупный.jpeg"
          ,"images/clothes/mango-zarina-tops/IMG_0637.jpg"
          ,"images/clothes/mango-zarina-tops/IMG_0638.jpg"
          ]
  },

  {
  id: "zarina-knit-skirts",
  category: "clothes",
  title: "Юбка трикотажная Zarina/Befree/Noname размер XS-S",
  price: "384 ₽ / 1шт",
  short: "Трикотажная юбка Zarina.",
  description: "Трикотажная юбка Zarina размер XS-S.",
  photos: ["images/clothes/lime_sweatshirt_ski/IMG_0420 Крупный.jpeg"
          ,"images/clothes/lime_sweatshirt_ski/IMG_0421 Крупный.jpeg"
          ,"images/clothes/lime_sweatshirt_ski/IMG_0422 Крупный.jpeg"
          ]
  },

  {
  id: "ribbed-leggings-m",
  category: "clothes",
  title: "Новые легинсы в рубчик Noname размер M",
  price: "274 ₽",
  short: "Новые легинсы в рубчик, размер M.",
  description: "Женские легинсы в рубчик размер M.",
  photos: ["images/clothes/leggins/IMG_1410 Крупный.jpeg"]
  },

  {
  id: "uniqlo-mango-shirts",
  category: "clothes",
  title: "Рубашки женские Uniqlo и Mango",
  price: "329 ₽ / 1шт",
  short: "Женские рубашки Uniqlo и Mango.",
  description: "Женские рубашки убашек Uniqlo и Mango.",
  photos: ["images/clothes/uniqlo-mango-shirts_рубаш/IMG_1400 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1401 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1402 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1403 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1404 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1405 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1406 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1407 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1408 Крупный.jpeg"
          ,"images/clothes/uniqlo-mango-shirts_рубаш/IMG_1409 Крупный.jpeg"
          ]
  },

  {
  id: "maag-blazer-xs",
  category: "clothes",
  title: "Новый пиджак MAAG укороченный размер XS",
  price: "769 ₽",
  short: "Укороченный новый пиджак MAAG.",
  description: "Новый пиджак MAAG укороченный, размер XS.",
  photos: ["images/clothes/maag_blazer/IMG_1395 Крупный.jpeg"
          ,"images/clothes/maag_blazer/IMG_1396 Крупный.jpeg"
          ,"images/clothes/maag_blazer/IMG_1397 Крупный.jpeg"
          ,"images/clothes/maag_blazer/IMG_1398 Крупный.jpeg"
          ,"images/clothes/maag_blazer/IMG_1399 Крупный.jpeg"
          ]
  },

  {
  id: "zara-transparent-blouse",
  category: "clothes",
  title: "Блузка Zara женская полупрозрачная",
  price: "730 ₽",
  short: "Полупрозрачная блузка Zara.",
  description: "Женская полупрозрачная блузка Zara.",
  photos: ["images/clothes/zara-transparent-blouse_полупрозр/IMG_1378 Крупный.jpeg"
          ,"images/clothes/zara-transparent-blouse_полупрозр/IMG_1379 Крупный.jpeg"
          ,"images/clothes/zara-transparent-blouse_полупрозр/IMG_1380 Крупный.jpeg"
          ,"images/clothes/zara-transparent-blouse_полупрозр/IMG_1381 Крупный.jpeg"
          ,"images/clothes/zara-transparent-blouse_полупрозр/IMG_1382 Крупный.jpeg"
          ,"images/clothes/zara-transparent-blouse_полупрозр/IMG_1383 Крупный.jpeg"
          ]
  },

  {
  id: "river-island-swimsuit",
  category: "clothes",
  title: "Купальник River Island размер S",
  price: "350 ₽",
  short: "Купальник River Island размер S.",
  description: "Купальник River Island, размер S.",
  photos: ["images/clothes/river-island-swimsuit/IMG_0620 Крупный.jpeg"
          ,"images/clothes/river-island-swimsuit/IMG_0621 Крупный.jpeg"
          ,"images/clothes/river-island-swimsuit/IMG_0622 Крупный.jpeg"
          ]
  },

  {
  id: "tezenis-swimsuit",
  category: "clothes",
  title: "Купальник tezenis размер S",
  price: "350 ₽",
  short: "Купальник tezenis размер S.",
  description: "Купальник tezenis, размер S.",
  photos: ["images/clothes/tezenis-swimsuit/IMG_0618 Крупный.jpeg"
          ,"images/clothes/tezenis-swimsuit/IMG_0619 Крупный.jpeg"
          ]
  },

  {
  id: "macbook-pro-2016",
  category: "tech",
  title: "Apple MacBook Pro 15 2016 Retina Touch Bar",
  price: "38000 ₽",
  short: "MacBook Pro 15 Retina Touch Bar 2016.",
  description: "Apple MacBook Pro 15 Retina Touch Bar, 2016 год.",
  photos: ["images/tech/macbook/IMG_0753 Крупный.jpeg"
          ,"images/tech/macbook/IMG_0755 Крупный.jpeg"
          ,"images/tech/macbook/IMG_0756 Крупный.jpeg"
          ,"images/tech/macbook/IMG_0757 Крупный.jpeg"
          ,"images/tech/macbook/IMG_0758 Крупный.jpeg"
          ,"images/tech/macbook/IMG_0759 Крупный.jpeg"
          ]   
  },

  {
  id: "zaporozhets-anorak-l",
  category: "clothes",
  title: "Анорак Запорожец размер L",
  price: "4000 ₽",
  short: "Анорак Запорожец, размер L.",
  description: "Анорак Запорожец размер L.",
  photos: ["images/clothes/zaporozhets-anorak-l/IMG_0743 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0744 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0745 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0746 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0747 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0748 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0749 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0750 Крупный.jpeg"
          ,"images/clothes/zaporozhets-anorak-l/IMG_0751 Крупный.jpeg"
          ]
  },

  {
  id: "oxelo-scooter",
  category: "other",
  title: "Самокат Oxelo взрослый",
  price: "3000 ₽",
  short: "Взрослый самокат Oxelo.",
  description: "Самокат Oxelo для взрослых.",
  photos: ["images/other/oxelo/IMG_0689 Крупный.jpeg"
          ,"images/other/oxelo/IMG_0690 Крупный.jpeg"
          ,"images/other/oxelo/IMG_0691 Крупный.jpeg"
          ,"images/other/oxelo/IMG_0692 Крупный.jpeg"
          ,"images/other/oxelo/IMG_0693 Крупный.jpeg"
          ,"images/other/oxelo/IMG_0694 Крупный.jpeg"
          ]
  },

  {
  id: "zara-denim-shirt",
  category: "clothes",
  title: "Рубашка джинсовая Zara размер M",
  price: "300 ₽",
  short: "Рубашка Zara.",
  description: "Джинсовая рубашка Zara размер M.",
  photos: ["images/clothes/zara-denim-shirt_рубашк/IMG_0708 Крупный.jpeg"
          ,"images/clothes/zara-denim-shirt_рубашк/IMG_0709 Крупный.jpeg"
          ,"images/clothes/zara-denim-shirt_рубашк/IMG_0710 Крупный.jpeg"
          ,"images/clothes/zara-denim-shirt_рубашк/IMG_0711 Крупный.jpeg"
          ,"images/clothes/zara-denim-shirt_рубашк/IMG_0712 Крупный.jpeg"
          ]     
  },

  {
  id: "uniqlo-sweater",
  category: "clothes",
  title: "Джемпер Uniqlo",
  price: "300 ₽",
  short: "Джемпер Uniqlo.",
  description: "Джемпер Uniqlo.",
  photos: ["images/clothes/uniqlo-sweater/IMG_0713 Крупный.jpeg"
          ,"images/clothes/uniqlo-sweater/IMG_0714 Крупный.jpeg"
          ,"images/clothes/uniqlo-sweater/IMG_0715 Крупный.jpeg"
          ]
  },
  {
  id: "lime-dress-cotton-xs",
  category: "clothes",
  title: "Платье Lime размер XS хлопок",
  price: "1000 ₽",
  short: "Хлопковое платье Lime размер XS.",
  description: "Платье Lime из хлопка, размер XS.",
  photos: ["images/clothes/lime_dress_xs_gray/IMG_0632 Крупный.jpeg"
          ,"images/clothes/lime_dress_xs_gray/IMG_0633 Крупный.jpeg"
          ,"images/clothes/lime_dress_xs_gray/IMG_0634 Крупный.jpeg" 
          ,"images/clothes/lime_dress_xs_gray/IMG_0635.jpeg" 
          ,"images/clothes/lime_dress_xs_gray/IMG_0636.jpeg" 
          ]
  },

  {
  id: "lime-dress-gathered-s",
  category: "clothes",
  title: "Платье Lime размер S, со сборкой",
  price: "879 ₽",
  short: "Платье Lime со сборкой, размер S.",
  description: "Женское платье Lime со сборкой, размер S.",
  photos: ["images/clothes/lime-dress-gathered-s_сборка/IMG_0573 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0575 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0576 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0577 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0578 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0579 Крупный.jpeg"
          ,"images/clothes/lime-dress-gathered-s_сборка/IMG_0580 Крупный.jpeg"
          ]
  },

  {
  id: "befree-red-jacket-xs",
  category: "clothes",
  title: "Куртка демисезонная Befree размер XS",
  price: "887 ₽",
  short: "Демисезонная куртка Befree.",
  description: "Куртка Befree размер XS.",
  photos: ["images/clothes/befree_red_jacket/IMG_0568 Крупный.jpeg"
    ,"images/clothes/befree_red_jacket/IMG_0569 Крупный.jpeg"
    ,"images/clothes/befree_red_jacket/IMG_0570 Крупный.jpeg"
    ,"images/clothes/befree_red_jacket/IMG_0571 Крупный.jpeg"
    ,"images/clothes/befree_red_jacket/IMG_0572 Крупный.jpeg"
          ]
  },

  {
  id: "lime-red-dress-xs",
  category: "clothes",
  title: "Платье Lime размер XS",
  price: "800 ₽",
  short: "Красное платье Lime размер XS.",
  description: "Платье Lime размер XS.",
  photos: ["images/clothes/lime-red-dress-xs_платье/IMG_0556 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0558 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0559 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0561 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0562 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0563 Крупный.jpeg"
          ,"images/clothes/lime-red-dress-xs_платье/IMG_0564 Крупный.jpeg"
          ]     
  },

  {
  id: "charmstore-pantsuit-xs-s",
  category: "clothes",
  title: "Брючный костюм Charmstore XS/S",
  price: "5868 ₽",
  short: "Брючный костюм Charmstore.",
  description: "Брючный костюм Charmstore размер XS/S.",
  photos: ["images/clothes/charmstore-pantsuit-xs-s/IMG_0444 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0446 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0461 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0514 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0515 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0516 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0517 Крупный.jpeg"
          ,"images/clothes/charmstore-pantsuit-xs-s/IMG_0518 Крупный.jpeg"
          ]
  },

  {
  id: "lime-palazzo-pants-xs",
  category: "clothes",
  title: "Брюки-палаццо Lime XS",
  price: "1760 ₽",
  short: "Брюки-палаццо Lime.",
  description: "Брюки-палаццо Lime размер XS.",
  photos: ["images/clothes/lime-palazzo-pants-xs_кожан/IMG_0494 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0495 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0497 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0498 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0499 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0500 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0501 Крупный.jpeg"
          ,"images/clothes/lime-palazzo-pants-xs_кожан/IMG_0502 Крупный.jpeg"
          ]
  },

  {
  id: "uniqlo-baggy-curve-jeans",
  category: "clothes",
  title: "Новые широкие джинсы Uniqlo Baggy Curve оригинал",
  price: "2500 ₽",
  short: "Оригинальные джинсы Uniqlo Baggy Curve.",
  description: "Широкие джинсы Uniqlo Baggy Curve Original. Ни разу не носились.",
  photos: ["images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0487 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0488 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0489 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0490 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0491 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0492 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0540 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0541 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0542 Крупный.jpeg"
          ,"images/clothes/uniqlo-baggy-curve-jeans_юникло/IMG_0543 Крупный.jpeg"
  ]
  },

  {
  id: "lime-blazer-l",
  category: "clothes",
  title: "Блейзер-пиджак Lime размер L",
  price: "4157 ₽",
  short: "Блейзер Lime размер L",
  description: "Пиджак-блейзер Lime размер L.",
  photos: ["images/clothes/lime_blazer/IMG_0510 Крупный.jpeg"
          ,"images/clothes/lime_blazer/IMG_0511 Крупный.jpeg"
          ,"images/clothes/lime_blazer/IMG_0512 Крупный.jpeg"
          ,"images/clothes/lime_blazer/IMG_0513 Крупный.jpeg"
          ]
  },
  {
  id: "tranch-zarina",
  category: "clothes",
  title: "Тренч zarina большого размера XL (52)",
  price: "1100 ₽",
  short: "Почти новый тренч zarina большого размера XL (52)",
  description: "Почти новый тренч zarina большого размера XL (52)",
  photos: ["images/clothes/tranch_zarina/IMG_0717 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0718 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0719 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0720 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0721 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0723 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0771 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0772 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0773 Крупный.jpeg"
          ,"images/clothes/tranch_zarina/IMG_0774 Крупный.jpeg"
  ]
  }
];

const CATEGORIES = {
  clothes: "Одежда",
  auto: "Авто товары",
  tech: "Техника",
  other: "Остальное"
};
