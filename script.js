// ===== Каталог товаров =====
const PRODUCTS = [
  { id: 1, name: 'Худи Neon Wave', cat: 'hoodie', price: 5490, oldPrice: 6990, tag: 'NEW', meta: 'Оверсайз · 100% хлопок', gradient: 'linear-gradient(135deg,#ff5ea8,#7a3cff)' },
  { id: 2, name: 'Карго City Run', cat: 'pants', price: 4290, tag: 'HOT', meta: 'Свободный крой · 6 карманов', gradient: 'linear-gradient(135deg,#00e0c6,#0a84ff)' },
  { id: 3, name: 'Тиш Oversize Skate', cat: 'tee', price: 1990, oldPrice: 2490, tag: '-20%', meta: 'Принт ручной работы', gradient: 'linear-gradient(135deg,#ffd166,#ef476f)' },
  { id: 4, name: 'Шопер Loop', cat: 'acc', price: 1290, meta: 'Парусина · вместительный', gradient: 'linear-gradient(135deg,#7a3cff,#ff2d75)' },
  { id: 5, name: 'Худи Acid Bloom', cat: 'hoodie', price: 5990, tag: 'NEW', meta: 'Кислотный принт · флис', gradient: 'linear-gradient(135deg,#06d6a0,#118ab2)' },
  { id: 6, name: 'Бомбер Nightline', cat: 'hoodie', price: 7490, meta: 'Утеплённый · водоотталкивающий', gradient: 'linear-gradient(135deg,#1a1a2e,#7a3cff)' },
  { id: 7, name: 'Тиш Glitch Code', cat: 'tee', price: 2190, meta: 'Принт цифровой глитч', gradient: 'linear-gradient(135deg,#ef476f,#ffd166)' },
  { id: 8, name: 'Карго Tape Pro', cat: 'pants', price: 4990, tag: 'NEW', meta: 'Светоотражающие лампасы', gradient: 'linear-gradient(135deg,#0a84ff,#06d6a0)' },
  { id: 9, name: 'Кепка Visor', cat: 'acc', price: 1490, meta: 'Регулируемая · вышивка', gradient: 'linear-gradient(135deg,#ff7eb3,#7a3cff)' },
  { id: 10, name: 'Тиш Rave Mode', cat: 'tee', price: 2290, tag: 'HOT', meta: 'Светится в УФ', gradient: 'linear-gradient(135deg,#7a3cff,#00e0c6)' },
  { id: 11, name: 'Худи Storm Grey', cat: 'hoodie', price: 4990, meta: 'Минимализм · унисекс', gradient: 'linear-gradient(135deg,#43464b,#a1a1b3)' },
  { id: 12, name: 'Носки Set x3', cat: 'acc', price: 890, meta: '3 пары · хлопок', gradient: 'linear-gradient(135deg,#ffd166,#06d6a0)' },
];

const RUB = n => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

// ===== Состояние =====
const state = {
  filter: 'all',
  cart: loadCart(),
  favs: new Set(),
};

function loadCart() {
  try { return JSON.parse(localStorage.getItem('pulse_cart') || '[]'); }
  catch { return []; }
}
function saveCart() {
  try { localStorage.setItem('pulse_cart', JSON.stringify(state.cart)); } catch {}
}

// ===== Рендер каталога =====
const productsEl = document.getElementById('products');

function renderProducts() {
  const items = state.filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === state.filter);

  productsEl.innerHTML = items.map(p => `
    <article class="product" data-id="${p.id}">
      <div class="product-img" style="background:${p.gradient}">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        <button class="fav-btn ${state.favs.has(p.id) ? 'active' : ''}" aria-label="В избранное" data-fav="${p.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${state.favs.has(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <span>${p.name.toUpperCase()}</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-meta">${p.meta}</div>
        <div class="product-bottom">
          <div class="product-price">${p.oldPrice ? `<s>${RUB(p.oldPrice)}</s>` : ''}${RUB(p.price)}</div>
          <button class="add-btn" data-add="${p.id}">В корзину</button>
        </div>
      </div>
    </article>
  `).join('');
}

// ===== Фильтры =====
document.querySelectorAll('.filter-bar .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-bar .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.filter = chip.dataset.filter;
    renderProducts();
  });
});
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const f = card.dataset.filter;
    state.filter = f;
    document.querySelectorAll('.filter-bar .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.filter === f);
    });
    renderProducts();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Корзина =====
const cartCountEl = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('show');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

function addToCart(id) {
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  showToast('Добавлено в корзину');
}
function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}
function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); renderCart(); }
}

function renderCart() {
  const total = state.cart.reduce((sum, item) => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  const totalQty = state.cart.reduce((s, i) => s + i.qty, 0);

  cartCountEl.textContent = totalQty;
  cartCountEl.style.display = totalQty ? 'inline-flex' : 'none';
  cartTotalEl.textContent = RUB(total);

  if (!state.cart.length) {
    cartItemsEl.innerHTML = `<div class="cart-empty">Корзина пуста.<br/>Самое время выбрать что-то крутое 🔥</div>`;
    return;
  }

  cartItemsEl.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="background:${p.gradient}">${p.name.split(' ')[0][0]}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${RUB(p.price)}</div>
          <div class="cart-qty">
            <button data-qty="-1" data-id="${p.id}">−</button>
            <span>${item.qty}</span>
            <button data-qty="1" data-id="${p.id}">+</button>
            <button class="cart-remove" data-remove="${p.id}">удалить</button>
          </div>
        </div>
        <strong>${RUB(p.price * item.qty)}</strong>
      </div>
    `;
  }).join('');
}

// Делегирование кликов
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) {
    addToCart(Number(add.dataset.add));
    add.classList.add('added');
    add.textContent = '✓ Добавлено';
    setTimeout(() => { add.classList.remove('added'); add.textContent = 'В корзину'; }, 1200);
    return;
  }
  const fav = e.target.closest('[data-fav]');
  if (fav) {
    const id = Number(fav.dataset.fav);
    if (state.favs.has(id)) state.favs.delete(id);
    else state.favs.add(id);
    renderProducts();
    return;
  }
  const q = e.target.closest('[data-qty]');
  if (q) { changeQty(Number(q.dataset.id), Number(q.dataset.qty)); return; }
  const rm = e.target.closest('[data-remove]');
  if (rm) { removeFromCart(Number(rm.dataset.remove)); return; }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!state.cart.length) { showToast('Сначала добавь что-нибудь в корзину'); return; }
  showToast('Демо-режим: оформление недоступно');
});

// ===== Toast =====
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== Подписка =====
const subForm = document.getElementById('subForm');
const subStatus = document.getElementById('subStatus');
subForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = subForm.querySelector('input').value.trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    subStatus.textContent = 'Похоже, в email опечатка 👀';
    subStatus.classList.add('visible');
    return;
  }
  subStatus.textContent = `Готово! Ждём тебя в пятницу, ${email}`;
  subStatus.classList.add('visible');
  subForm.reset();
});

// ===== Бургер-меню =====
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ===== Поиск (демо) =====
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = prompt('Что ищем?');
  if (!q) return;
  const found = PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  if (!found.length) { showToast('Ничего не нашли 🥲'); return; }
  showToast(`Нашли ${found.length} товаров`);
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
});

// ===== Init =====
renderProducts();
renderCart();
