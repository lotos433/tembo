# Instagram-карусель «СНОУ-ГЛОБ»

Финальный продакшн-бриф для 3D-карусели о математике бинарных опционов.

- **Тема:** Финансовая грамотность — почему 87% теряют на бинарных опционах
- **ЦА:** 25–45 лет, потенциально интересующиеся «быстрым заработком»
- **Цель:** Переход в шапку профиля (лид-магнит: «5 инструментов с +EV»)
- **Стиль:** 3D, кинематографичный неон-нуар
- **Формат:** 1080×1350 px (4:5), 8 слайдов

---

## Концепция

Метафора **«трейдер внутри стеклянного шара»** (сноуглоб). С каждым слайдом камера отъезжает и раскрывает новый слой:

1. Крупный план человечка с кнопкой ▲
2. Виден весь шар на платформе-свече
3. Парящие плашки выплат «+80% / −100%»
4. Гигантская рука брокера держит шар
5. Внутри шара вихрь часов — фактор времени
6. Шар покрывается трещинами — мартингейл
7. Шок-отъезд: полка с сотнями одинаковых шаров
8. Один шар открыт, человечек выходит на дорожку света → CTA

Драйвер свайпа = «а что за пределами шара?». Драйвер сохранения = математика выплат и формула матожидания.

---

## Палитра и типографика

| Элемент | Цвет |
|---|---|
| Фон | `#0B1733` (deep navy) |
| «Вверх» (зелёный) | `#00FF87` |
| «Вниз» (алый) | `#FF2D55` |
| Акцент (золото) | `#F5C242` |
| Стекло-блик | `#9FD8FF` |

**Шрифты:** Inter Black / TT Norms Pro Bold / Manrope ExtraBold.
**Размеры:** хедлайны 96–140 pt; цифры-вспышки до 240 pt.
**Safe zone:** ≥ 120 px от низа.
**Экспорт:** PNG, sRGB, без сжатия.

---

## Слайд 1 — Хук

### Текст
> *(верх, мелко)* МАТЕМАТИКА БИНАРНЫХ ОПЦИОНОВ
>
> **87%**
>
> теряют всё.
> И дело **не в удаче.**
>
> *(низ)* свайп →

### Визуал
Крупный план — маленький 3D-человечек без лица внутри стеклянного шара жмёт зелёную кнопку ▲ на планшете. Иней по краям, лёгкая пыль внутри. Глубокий тёмно-синий фон, drama-свет сбоку.

### Промпт для генерации (Midjourney / SDXL)
```
ultra-detailed 3D render, tiny faceless minifigure character inside
a transparent glass snow globe, holding a tablet with glowing green
up-arrow button, dramatic cinematic side lighting, navy blue
background #0B1733, frost on glass edges, soft volumetric dust
inside globe, octane render, depth of field, 8k, 4:5 aspect,
moody neo-noir financial aesthetic --ar 4:5 --style raw --v 6.1
```

### Промпт для анимации (Runway / Kling / Pika)
```
slow push-in toward the glass globe, faint dust particles drifting
inside, the green up-arrow on tablet pulses softly with light,
subtle glass refraction shimmer, 3 seconds, loopable
```

---

## Слайд 2 — Развернуть контекст

### Текст
> БИНАР = СТАВКА «ВВЕРХ / ВНИЗ»
>
> Кажется честно.
> Кажется **50 на 50.**
>
> Подвох — в одной цифре.

### Визуал
Камера отъехала. Виден весь шар на платформе из 3D-биржевой свечи (половина зелёная, половина красная). По бокам — полупрозрачные знаки ▲ и ▼.

### Промпт для генерации
```
3D render of a transparent snow globe standing on a giant
3D candlestick chart pedestal (half green #00FF87, half red
#FF2D55), tiny faceless figure inside, translucent up and down
arrow icons floating beside the globe, navy blue studio background,
soft rim lighting, cinematic depth, octane, 4:5 --ar 4:5 --v 6.1
```

### Промпт для анимации
```
arrows ▲ and ▼ gently alternating glow left-right, globe slowly
rotating 5 degrees, ambient particle drift, 3 sec loop
```

---

## Слайд 3 — Ключевая математика

### Текст
> ВЫПЛАТА ЗА ПОБЕДУ: **+80%**
> ПОТЕРЯ ПРИ ПОРАЖЕНИИ: **−100%**
>
> На 100 ставок по $10 при 50/50:
> Выиграл 50 × $8 = **+$400**
> Проиграл 50 × $10 = **−$500**
>
> Итог: **−$100 на ровном месте.**
> Это называется «отрицательное матожидание».

### Визуал
Шар на втором плане; на переднем — две огромные парящие 3D-плашки: «+80%» (золото) и «−100%» (алый), между ними знак «=» и финальная плашка «−10%». Стрелочки потоков денег от человечка к невидимой руке.

### Промпт для генерации
```
cinematic 3D scene, two giant floating glossy 3D number plaques
"+80%" in gold and "-100%" in deep red hovering above a small
glass globe, equal sign between them, third plaque "-10%" glowing,
faceless tiny figure visible inside globe, navy background,
high-end editorial finance aesthetic, octane render, 4:5
--ar 4:5 --v 6.1
```

### Промпт для анимации
```
+80% plaque rises, -100% plaque drops heavier, then -10% plaque
materializes with subtle gold dust burst, 4 sec, no loop
```

---

## Слайд 4 — Раскрытие «руки»

### Текст
> Ты не **играешь с рынком.**
> Ты играешь **с брокером.**
>
> Он — твой контрагент.
> Каждый твой минус = его плюс.
>
> Это не биржа.
> Это **дом против тебя.**

### Визуал
Камера отъехала сильнее — гигантская безликая 3D-рука (полированный матовый материал) держит шар сверху, слегка наклоняя его. Внутри человечек теряет равновесие.

### Промпт для генерации
```
giant smooth matte mannequin 3D hand holding a glass snow globe
from above, slightly tilting it, tiny faceless figure inside
losing balance, dramatic top-down spotlight, dark navy void
background, cinematic chiaroscuro lighting, hyperreal materials,
octane render, sense of scale and helplessness, 4:5
--ar 4:5 --v 6.1
```

### Промпт для анимации
```
hand tilts the globe 8 degrees left then right, figure inside
sways, slow ominous motion, 4 sec
```

---

## Слайд 5 — Фактор времени

### Текст
> **60 секунд** — длина сделки.
>
> Это значит:
> **60 шансов проиграть** в час.
> **1 440** — в сутки.
>
> Скорость — не инструмент.
> Скорость — это **способ казино** забрать твой депозит **до того**, как ты подумаешь.

### Визуал
Внутри шара — десятки полупрозрачных 3D-часов с ускоряющимися стрелками, motion blur. Цифры мелькают на фоне. Человечек в центре вихря.

### Промпт для генерации
```
inside a glass snow globe — swirl of dozens of translucent 3D
analog clocks with motion-blurred spinning hands, ticker numbers
flickering in background, tiny faceless figure standing still in
the center of the vortex, cyan glow, navy ambient background,
hyperdetailed octane render, sense of overwhelming acceleration,
4:5 --ar 4:5 --v 6.1
```

### Промпт для анимации
```
clock hands spinning fast, number ticker accelerating, motion
blur intensifies for 2 sec then snaps to stillness on figure,
3 sec, dramatic
```

---

## Слайд 6 — Ловушка «отыграюсь»

### Текст
> «Сейчас удвою и **отыграюсь**».
>
> Это называется **мартингейл.**
>
> $10 → $20 → $40 → $80 → $160 → $320…
> **7 проигрышей подряд** = −$1 270
>
> Ты идёшь не к плюсу.
> Ты идёшь **к нулю быстрее.**

### Визуал
Шар покрыт паутиной трещин, но цел. Внутри — лестница из растущих стопок монет, обрывающаяся в пропасть. Человечек на верхней ступени.

### Промпт для генерации
```
3D glass snow globe covered in spiderweb cracks but intact,
inside — a staircase made of growing stacks of gold coins ending
in a black abyss, tiny faceless figure standing on top step
looking down, dramatic red rim light through cracks, navy
background, hyperreal octane render, ominous, 4:5
--ar 4:5 --v 6.1
```

### Промпт для анимации
```
new crack slowly forms across the glass with a soft sound-wave
ripple, coin stack at top wobbles, 3 sec
```

---

## Слайд 7 — Зум-аут-шок

### Текст
> Их не нужно обманывать **поштучно.**
>
> Один шар — твой.
> Остальные — точно такие же.
>
> Брокер не угадывает.
> Он **ждёт.**
> Математика делает всё **за него.**

### Визуал
Огромный отъезд — гигантский 3D-стеллаж, на котором сотни одинаковых шаров с одинаковыми человечками. Уходит вдаль в перспективу. Холодный свет музея/архива.

### Промпт для генерации
```
massive industrial 3D shelving unit stretching into deep
perspective, filled with hundreds of identical glass snow globes
each containing an identical tiny faceless figure, cold museum
archive lighting, navy and steel palette, hyperdetailed octane
render, overwhelming sense of repetition and scale, 4:5
--ar 4:5 --v 6.1
```

### Промпт для анимации
```
slow camera dolly pulling back, parallax through rows of globes,
soft cyan glow flickering across the shelf, 5 sec
```

---

## Слайд 8 — Выход / CTA

### Текст
> Хочешь, чтобы математика
> работала **на тебя**, а не против?
>
> У меня в профиле — разбор
> **5 инструментов с +EV**
> *(положительным матожиданием)*,
> в которые **я сам захожу** деньгами.
>
> 👉 **Ссылка в шапке профиля.**
> Сохрани, чтобы не потерять.

### Визуал
Один шар открыт — крышка снята, человечек выходит наружу, шагает по светящейся дорожке. На горизонте — рассвет цвета золота. На земле — мягкая 3D-стрелка-указатель «→ профиль».

### Промпт для генерации
```
one opened glass snow globe with lid removed, tiny faceless
figure stepping out onto a glowing path, warm gold sunrise on
horizon contrasted with cool navy foreground, soft 3D arrow
pointer on ground pointing forward, hopeful cinematic lighting,
octane render, sense of liberation, 4:5 --ar 4:5 --v 6.1
```

### Промпт для анимации
```
figure takes 2 slow steps forward out of the globe, gold light
intensifies on horizon, arrow pulses gently, 4 sec
```

---

## Подпись к посту

```
Я 6 лет в трейдинге. И каждый месяц мне в директ пишут:
«Дай сигнал на бинары, хочу удвоить депозит за неделю».

Отвечаю одним постом — с цифрами, а не лозунгами.

Бинарный опцион — не «рискованная торговля».
Это математически проигрышная сделка с того момента,
как ты нажал кнопку. Не потому что брокер «жулик»
(многие легальны). А потому что устройство продукта
такое: ты платишь 100% за шанс получить 80%.

Это не торговля. Это казино с красивым интерфейсом.

В карусели — разобрал по пунктам, ПОЧЕМУ 87% теряют:
выплаты, контрагент, скорость, мартингейл, масштаб.
Без морализаторства. Только арифметика.

А куда заходить ВМЕСТО — разобрал в закрепе профиля:
5 инструментов, в которые я сам кладу деньги.
Не реклама брокера. Не сигналы. Не «секретные стратегии».
Просто финансовая грамотность для взрослых.

🔗 Ссылка в шапке.
💾 Сохрани, если когда-нибудь подумывал «попробовать бинары».

#финграмотность #инвестиции #трейдинг #бинарныеопционы
#пассивныйдоход #финансы #деньги #личныефинансы
```

---

## CTA для комментариев

**Вариант 1 — провокация (лучше для охватов):**
> Напиши в комментариях: ты пробовал бинары?
> **«ДА»** — расскажу, как вытащить остатки депо.
> **«НЕТ»** — пришлю в директ чек-лист «как отличить трейдинг от казино».

**Вариант 2 — мягкий, на сохранение:**
> Какой из 7 фактов был для тебя новым?
> Пиши номер слайда в комментариях — обсудим.

**Вариант 3 — на вовлечение через спор:**
> Не согласен? Кидай в комменты свою математику —
> отвечу каждому с расчётом.

---

## Рекомендации по продакшну

1. **Картинки:** генерируй промпты в Midjourney v6.1 (лучший 3D-look) или Ideogram 2.0 (если нужен встроенный текст). Для консистентности персонажа — используй `--cref` (character reference) после первой удачной генерации.
2. **Анимация:** Runway Gen-3 / Kling 1.6 / Pika 2.0 — image-to-video по сгенерированным кадрам. Длительность 3–5 сек на кадр, итог можно отдать в Reels.
3. **Сборка слайдов:** Figma или Canva — туда вставляешь готовые рендеры и накладываешь текст указанными шрифтами и цветами.
4. **Альтернативный формат:** первый слайд можно отдельно адаптировать в 9:16 как обложку Reels.
