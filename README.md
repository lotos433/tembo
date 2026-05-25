# VOYAGE — билеты и отели

Одностраничный лендинг для поиска авиабилетов и бронирования отелей.
Чистый HTML + CSS + JS, без сборщиков и зависимостей. Партнёрские (реферальные) ссылки на сторонние сервисы.

## Что внутри
- `index.html` — единственная страница: hero с 3D-сценой, поиск билетов, подборка полётов, грид отелей, фичи, направления, отзывы, CTA, футер
- `styles.css` — две темы (`data-theme="dark|light"`), плавающие орбы, мраморный градиентный планетарий, micro-interactions
- `script.js` — переключатель темы с сохранением в `localStorage`, parallax 3D-сцены, reveal-on-scroll, tilt-эффект на карточках, инъекция реферальных ссылок

## Запуск
Просто открой `index.html` в браузере или подними локальный сервер:
```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Реферальные ссылки
Все ссылки централизованы в верхней части `script.js`:
```js
const REF = {
  flightSearch: 'https://www.aviasales.ru/?marker=ВАШ_МАРКЕР',
  hotelSearch:  'https://search.hotellook.com/?marker=ВАШ_МАРКЕР',
  flight:       'https://www.aviasales.ru/?marker=ВАШ_МАРКЕР',
  hotel:        'https://www.booking.com/index.html?aid=ВАШ_AID',
};
```
Подставь свои маркеры партнёрских программ (Travelpayouts, Booking Affiliate Partner и т. п.) — клики по карточкам и кнопке «Искать» откроют партнёрский сайт в новой вкладке.

Карточки полётов и отелей также поддерживают индивидуальный `data-link="..."` прямо в HTML — он переопределит дефолт.

## Темы
Кнопка с иконкой солнца/луны в правом верхнем углу. По умолчанию используется системная тема пользователя (`prefers-color-scheme`), выбор сохраняется в `localStorage`.

## Фичи
- 3D-планета с орбитой самолёта, плавающие карточки билета/отеля/статистики
- Анимированные фоновые орбы + сетка
- Reveal-on-scroll через `IntersectionObserver`
- Tilt/parallax при наведении на карточки
- Marquee с топ-направлениями
- Адаптив до 720 px
- `prefers-reduced-motion` — анимации выключаются

## Технологии
Vanilla HTML/CSS/JS. Шрифты Google Fonts (`Space Grotesk`, `Inter`). Картинки — Unsplash hot-link.
