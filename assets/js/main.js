// Здесь лежат все наши секреты. Их два: цена на наггетсы и расписание турниров. Удачи.
const DATA = {
    places: [
        { id: 1, name: 'Standard', type: 'standard', hall: 'Arena', price: 150, gpu: 'RTX 4060', cpu: 'i5-13400F', mon: '24" 165 Гц', img: 'standard-1.webp', tags: ['Новичкам', 'Свободно'], desc: 'Базовое место для ежедневных сессий и первой игры.' },
        { id: 2, name: 'Standard Pro', type: 'standard', hall: 'Arena', price: 200, gpu: 'RTX 4070', cpu: 'Ryzen 5 7600', mon: '27" 240 Гц', img: 'standard-pro.webp', tags: ['Хит'], desc: 'Быстрый монитор для шутеров и соревновательных игр.' },
        { id: 3, name: 'VIP Royal', type: 'vip', hall: 'Lounge', price: 450, gpu: 'RTX 4080', cpu: 'i7-14700K', mon: '32" 4K 144 Гц', img: 'VIP-Royal.webp', tags: ['VIP', 'Хит', 'Свободно'], desc: 'Закрытая комната с диваном и кондиционером под компанию.' },
        { id: 4, name: 'VIP Duo', type: 'vip', hall: 'Lounge', price: 380, gpu: 'RTX 4070 Ti', cpu: 'Ryzen 7 7700', mon: '27" 240 Гц', img: 'VIP-Duo.webp', tags: ['VIP'], desc: 'Уютная комната на двоих с двумя ПК.' },
        { id: 5, name: 'Bootcamp', type: 'bootcamp', hall: 'Pro', price: 1200, gpu: 'RTX 4070', cpu: 'i5-14600K', mon: '27" 240 Гц', img: 'Bootcamp.webp', tags: ['Хит'], desc: 'Комната на пять человек: маркерная доска и ТВ для разбора.' },
        { id: 6, name: 'Стримерская', type: 'stream', hall: 'Pro', price: 500, gpu: 'RTX 4080S', cpu: 'Ryzen 9 7900X', mon: '2×27" 165 Гц', img: 'STREAM.webp', tags: ['Свободно'], desc: 'Звукоизоляция, свет и микрофон для стримов и записи.' },
        { id: 7, name: 'PlayStation 5', type: 'console', hall: 'Lounge', price: 250, gpu: 'RDNA 2', cpu: 'Zen 2', mon: 'ТВ 55" 4K', img: 'PlayStation5.webp', tags: ['Новичкам'], desc: 'Диван, большой ТВ и два геймпада.' },
        { id: 8, name: 'Xbox Series X', type: 'console', hall: 'Lounge', price: 250, gpu: 'RDNA 2', cpu: 'Zen 2', mon: 'ТВ 55" 4K', img: 'Xbox-SeriesX.webp', tags: ['Свободно'], desc: 'Game Pass и два геймпада в комплекте.' }
    ],
    types: { standard: 'Стандарт', vip: 'VIP', bootcamp: 'Bootcamp', stream: 'Стримерская', console: 'Консольная' },
    nav: [
        ['index.html', 'Главная', 'home'],
        ['catalog.html', 'Каталог', 'catalog'],
        ['bar.html', 'Бар', 'bar'],
        ['kontakty.html', 'Контакты', 'contacts'],
        ['about.html', 'О нас', 'about']
    ],
    events: [
        { d: '08', m: 'ноя', title: 'CS2 Open Cup', meta: 'взнос 500 ₽ · формат 5×5', badge: 'Анонс' },
        { d: '15', m: 'ноя', title: 'Valorant 5×5', meta: 'призовой 30 000 ₽', badge: 'Регистрация' },
        { d: '22', m: 'ноя', title: 'FC 26 на PS5', meta: 'вход свободный', badge: 'Анонс' }
    ],
    promos: [
        { d: '00', m: 'до 08', title: 'Ночной тариф', meta: 'скидка 30% на все места', badge: '−30%' },
        { d: '03', m: 'часа', title: 'Приведи друга', meta: 'в подарок вам обоим', badge: 'Бонус' },
        { d: '15', m: '%', title: 'Студентам', meta: 'по будням до 16:00', badge: 'Скидка' }
    ],
    crumbs: {
        catalog: [['Главная', 'index.html'], ['Каталог']],
        contacts: [['Главная', 'index.html'], ['Контакты']],
        about: [['Главная', 'index.html'], ['О нас']],
        bar: [['Главная', 'index.html'], ['Бар']]
    },
    halls: {
        Arena: { label: 'Arena', seats: 40 },
        Pro: { label: 'Pro', seats: 12 },
        Lounge: { label: 'Lounge', seats: 8 }
    },
    icons: {
        bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
        bottle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 2h4v3l2 3v13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8l2-3V2Z"/><path d="M8 13h8"/></svg>',
        juice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l-1.5 18h-9L6 3Z"/><path d="M6.6 9h10.8"/></svg>',
        lemonade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1.5 13h-9L6 8Z"/><path d="M12 8V4M12 4c0-1 1-2 2.5-2"/></svg>',
        flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 2h6M10 2v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19L14 8V2"/><path d="M7 15h10"/></svg>',
        glass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3h14l-1 6a6 6 0 0 1-12 0L5 3Z"/><path d="M12 15v6M9 21h6"/></svg>',
        moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8 8 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"/></svg>',
        coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h13v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z"/><path d="M16 9h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M3 21h13"/></svg>',
        cocoa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6h16v11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z"/><path d="M4 10h16"/><path d="M8 3v3M12 3v3M16 3v3"/></svg>',
        tea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9h14v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9Z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M7 2v4M11 2v4"/></svg>',
        coconut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="13" r="8"/><path d="M12 5c0-2 1-3 3-3"/></svg>',
        nuggets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="8" cy="10" rx="5" ry="4"/><ellipse cx="16" cy="14" rx="5" ry="4"/></svg>',
        popcorn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 9h14l-1.5 12h-11L5 9Z"/><path d="M5 9a3 3 0 0 1 2-5 3 3 0 0 1 5-1 3 3 0 0 1 5 1 3 3 0 0 1 2 5"/></svg>',
        fries: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 11h12l-1 10H7L6 11Z"/><path d="M9 11V5M12 11V3M15 11V6"/></svg>',
        skewer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20 20 4"/><circle cx="9" cy="15" r="2.5"/><circle cx="15" cy="9" r="2.5"/></svg>'
    },
    menu: {
        drinks: [
            { name: 'Энергия GG', desc: 'Цитрусовый энергетик с таурином, подаём ледяным. Держит фокус до конца рана.', fx: '+20 к скорости', price: 199, icon: 'bolt', badge: 'ХИТ' },
            { name: 'Крафтовый сидр', desc: 'Полусухой яблочный сидр из локальной сидрерии. Три вида на выбор.', fx: 'освежает', price: 250, icon: 'bottle' },
            { name: 'Нектар небес', desc: 'Морс из клюквы и малины, чуть подслащённый мёдом. Витамины для геймера.', fx: '+HP', price: 150, icon: 'juice', badge: 'NEW', badgeType: 'new' },
            { name: 'Лимонад «Респаун»', desc: 'Мята, лайм и холодный чай. Без сахара, без дебаффов.', fx: 'без дебаффов', price: 180, icon: 'lemonade' }
        ],
        cocktails: [
            { name: 'Зелье регенерации', desc: 'Малина, мёд, лимон и газировка. Красный, как полоска здоровья после боя.', fx: '+10 HP', price: 280, icon: 'flask', badge: 'ХИТ' },
            { name: 'Тёмный эликсир', desc: 'Кола, эспрессо и ваниль. Двойной кофеин для третьего периода.', fx: '+30 концентрации', price: 260, icon: 'glass' },
            { name: 'Фиолетовый дым', desc: 'Лимонад с бабл-гум, лёд и ароматный пар над бокалом. Для скринов.', fx: 'эффект: вау', price: 290, icon: 'glass' },
            { name: 'Зелье маны', desc: 'Лимонад с блю-кюрасао, лаймом и пузырьками. Цвет — как у маны в RPG.', fx: '+15 к мане', price: 270, icon: 'flask' },
            { name: 'Лунный туман', desc: 'Груша, жасмин и содовая. Нежный вкус для спокойного вечернего гринда.', fx: 'хилит стресс', price: 260, icon: 'moon' },
            { name: 'Кровавый рассвет', desc: 'Виски, гранатовый сироп и лайм. Крепкий, как пистолетный выстрел.', fx: 'только в баре', price: 450, icon: 'glass', badge: '18+', badgeType: 'hot' },
            { name: 'Синий экран', desc: 'Джин, блю-кюрасао и тоник. Ошибка системы — но вкусная.', fx: 'только в баре', price: 470, icon: 'glass', badge: '18+', badgeType: 'hot' },
            { name: 'Лавовый поток', desc: 'Рум, шоколадный сироп и щепотка чили. Горит после первого глотка.', fx: 'режим агрессии', price: 480, icon: 'glass', badge: '18+', badgeType: 'hot' }
        ],
        coffee: [
            { name: 'Кофе программиста', desc: 'Крепкий эспрессо с шоколадом. Сахар — только если попросите.', fx: 'без багов', price: 180, icon: 'coffee' },
            { name: 'Какао с маршмеллоу', desc: 'Густое какао и тающие маршмеллоу. Уютный сет для проигрыша.', fx: '+комфорт', price: 200, icon: 'cocoa' },
            { name: 'Чай сбора на турнир', desc: 'Облепиха, имбирь и лимон. Подаём в чайнике на двоих.', fx: 'прогрев', price: 220, icon: 'tea' },
            { name: 'Латте соло-рана', desc: 'Кокосовое молоко и карамель. Мягкий старт для утренней сессии.', fx: 'мягкий старт', price: 240, icon: 'coconut', badge: 'NEW', badgeType: 'new' }
        ],
        snacks: [
            { name: 'Боул наггетсов', desc: 'Девять штук и три соуса на выбор. Классика к любому режиму.', fx: '+сытость', price: 250, icon: 'nuggets', badge: 'ХИТ' },
            { name: 'Попкорн с сыром', desc: 'Большая порция, солёный сыр и паприка. Салфетки рядом.', fx: 'фарм под фарм', price: 220, icon: 'popcorn' },
            { name: 'Фри с двойным соусом', desc: 'Хрустящий картофель, сырный и чесночный соусы.', fx: '+5 к настроению', price: 200, icon: 'fries' },
            { name: 'Вобла-сет', desc: 'Сухарики, вобла и острый соус. Для ветеранов ночных сессий.', fx: 'баланс соли', price: 170, icon: 'skewer', badge: 'ОСТРОЕ', badgeType: 'hot' }
        ]
    }
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const page = document.body.dataset.page;
const param = new URLSearchParams(location.search);
const current = DATA.places.find(p => p.id == param.get('id')) || DATA.places[0];
const rub = n => n.toLocaleString('ru') + ' ₽';
const pad = n => String(n).padStart(2, '0');
const today = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pic = (file, alt) => `<img src="assets/img/${file}" alt="${alt}" loading="lazy" decoding="async" width="1000" height="563">`;

const LOGO = `<span class="logo__mark"></span><span class="logo__text">GameArena<i class="logo__dot">.</i></span>`;

function renderHeader() {
    const on = n => n[2] === page || (page === 'booking' && n[2] === 'catalog');
    const links = DATA.nav.map(n => `<a class="nav__link${on(n) ? ' nav__link--active' : ''}" href="${n[0]}">${n[1]}</a>`).join('');
    const crumb = DATA.crumbs[page];
    const trail = crumb ? `<div class="wrap"><nav class="crumbs" aria-label="Хлебные крошки">${crumb.map(c => c[1] ? `<a href="${c[1]}">${c[0]}</a>` : c[0]).join('<span>/</span>')}</nav></div>` : '';
    return `<header class="site-header">
    <div class="wrap site-header__bar">
      <a class="logo" href="index.html" aria-label="GameArena — на главную">${LOGO}</a>
      <button class="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Меню"><span></span><span></span><span></span></button>
      <nav class="nav" id="nav" aria-label="Основная навигация">
        ${links}
        <a class="btn btn--accent btn--sm nav__cta" href="booking.html">Забронировать</a>
      </nav>
    </div>
    ${trail}
  </header>`;
}

function renderFooter() {
    return `<footer class="site-footer">
    <div class="wrap">
      <div class="site-footer__grid">
        <div>
          <a class="logo" href="index.html">${LOGO}</a>
          <p style="margin:.9rem 0 0;max-width:23rem;line-height:1.65">Киберспортивный клуб в Москве. 60 игровых мест, VIP-комнаты, бар и турниры каждые выходные.</p>
        </div>
        <div>
          <h4>Разделы</h4>
          <a href="catalog.html">Каталог мест</a>
          <a href="bar.html">Бар</a>
          <a href="kontakty.html#faq">Вопросы и ответы</a>
          <a href="about.html">О нас</a>
        </div>
        <div>
          <h4>Клуб</h4>
          <a href="tel:+74950000000">+7 495 000-00-00</a>
          <a href="mailto:hello@gamearena.ru">hello@gamearena.ru</a>
          <p style="margin:.7rem 0 0;line-height:1.7">г. Москва, ул. Игровая, 15<br>Пн–Чт 10:00–02:00<br>Пт–Вс круглосуточно</p>
        </div>
      </div>
      <div class="site-footer__bottom"><span>© 2026 GameArena</span><span>Москва · ул. Игровая, 15</span></div>
    </div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Наверх">↑</button>
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal__box">
      <div class="modal__head"><h2 id="modalTitle"></h2><button class="modal__close" id="modalClose" aria-label="Закрыть">×</button></div>
      <div class="modal__body" id="modalBody"></div>
      <div class="modal__foot" id="modalFoot"></div>
    </div>
  </div>`;
}

document.body.insertAdjacentHTML('afterbegin', renderHeader());
document.body.insertAdjacentHTML('beforeend', renderFooter());

$('#burger').addEventListener('click', e => {
    const nav = $('#nav');
    const open = nav.dataset.open === 'true';
    nav.dataset.open = String(!open);
    e.currentTarget.setAttribute('aria-expanded', String(!open));
});

const toTop = $('#toTop');
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
addEventListener('scroll', () => toTop.classList.toggle('to-top--show', scrollY > 560), { passive: true });

const modal = $('#modal');
let lastFocus = null;

function openModal(title, body, foot) {
    lastFocus = document.activeElement;
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = body;
    $('#modalFoot').innerHTML = foot || '';
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
}

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
}

$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('modal--open')) closeModal(); });

const specRows = p => `<li>GPU <span>${p.gpu}</span></li><li>CPU <span>${p.cpu}</span></li><li>Монитор <span>${p.mon}</span></li>`;

function placeCard(p) {
    return `<article class="card">
    <div class="card__media">${pic(p.img, p.name)}
      <div class="card__tags">${p.tags.map(t => `<span class="tag${t === 'Свободно' ? ' tag--free' : ''}">${t}</span>`).join('')}</div>
    </div>
    <div class="card__body">
      <span class="card__type">${DATA.types[p.type]} · ${p.hall}</span>
      <h3 class="card__title">${p.name}</h3>
      <ul class="specs">${specRows(p)}</ul>
      <div class="card__foot">
        <b class="card__price">${p.price} ₽<small> /час</small></b>
        <button class="btn btn--ghost btn--sm" type="button" data-info="${p.id}">Детали</button>
        <a class="btn btn--accent btn--sm" href="booking.html?id=${p.id}">Бронь</a>
      </div>
    </div>
  </article>`;
}

document.addEventListener('click', e => {
    const btn = e.target.closest('[data-info]');
    if (!btn) return;
    const p = DATA.places.find(x => x.id == btn.dataset.info);
    if (!p) return;
    openModal(
        p.name,
        `${pic(p.img, p.name)}<span class="card__type">${DATA.types[p.type]} · ${p.hall}</span><p style="margin-top:.6rem">${p.desc}</p><ul class="specs">${specRows(p)}<li>Цена <span>${p.price} ₽ / час</span></li></ul>`,
        `<a class="btn btn--accent btn--block" href="booking.html?id=${p.id}">Перейти к бронированию</a>`
    );
});

const watcher = 'IntersectionObserver' in window ? new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal--in');
        obs.unobserve(entry.target);
    });
}, { threshold: .08, rootMargin: '0px 0px -36px 0px' }) : null;

function reveal() {
    $$('.reveal:not(.reveal--in)').forEach(el => watcher ? watcher.observe(el) : el.classList.add('reveal--in'));
}

const row = item => `<div class="row">
    <div class="row__date"><b>${item.d}</b><span>${item.m}</span></div>
    <div><div class="row__title">${item.title}</div><div class="row__meta">${item.meta}</div></div>
    <span class="row__badge">${item.badge}</span>
  </div>`;

function initHome() {
    const grid = $('#places');
    if (grid) grid.innerHTML = DATA.places.filter(p => p.tags.includes('Хит')).map(placeCard).join('');
    if ($('#events')) $('#events').innerHTML = DATA.events.map(row).join('');
    if ($('#promos')) $('#promos').innerHTML = DATA.promos.map(row).join('');

    const free = [2, 5, 9, 10, 14, 19, 21];
    const seatmap = $('#seatmap');
    if (seatmap) {
        seatmap.innerHTML = Array.from({ length: 24 }, (_, i) => {
            const n = pad(i + 1);
            const isFree = free.includes(i);
            return `<button class="seat${isFree ? ' seat--free' : ''}" type="button" aria-label="Место A-${n}: ${isFree ? 'свободно' : 'занято'}"></button>`;
        }).join('');
        seatmap.addEventListener('click', e => {
            const seat = e.target.closest('.seat');
            if (seat) seat.classList.toggle('seat--free');
        });
    }

    const nums = $$('.stat b[data-count]');
    if (watcher && nums.length) {
        const counter = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = +el.dataset.count;
                const suffix = el.dataset.suffix || '';
                const width = el.dataset.pad ? +el.dataset.pad : 0;
                let start = null;
                const step = ts => {
                    if (start === null) start = ts;
                    const progress = Math.min((ts - start) / 900, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const value = Math.round(target * eased);
                    el.textContent = (width ? String(value).padStart(width, '0') : value) + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
                obs.unobserve(el);
            });
        }, { threshold: .5 });
        nums.forEach(n => counter.observe(n));
    }
}

function initCatalog() {
    const state = { type: '', hall: '', sort: '' };
    const list = $('#list');
    const countEl = $('#count');
    const hallName = $('#hallName');
    const map = $('#hallmap');

    map.innerHTML = Object.keys(DATA.halls).map((key, i) => {
        const hall = DATA.halls[key];
        const total = DATA.places.filter(p => p.hall === key).length;
        const bars = Array.from({ length: 12 }, (_, n) => `<i class="${(i * 4 + n) % 5 === 0 ? 'occ' : ''}"></i>`).join('');
        return `<button type="button" class="hall-zone" data-hall="${key}" aria-pressed="false">
            <span class="hall-zone__name">${hall.label}</span>
            <span class="hall-zone__meta">${total} позиции · ${hall.seats} мест</span>
            <span class="hall-zone__seats" aria-hidden="true">${bars}</span>
        </button>`;
    }).join('');

    const paint = () => {
        let items = DATA.places.filter(p => (!state.type || p.type === state.type) && (!state.hall || p.hall === state.hall));
        if (state.sort === 'asc') items.sort((a, b) => a.price - b.price);
        if (state.sort === 'desc') items.sort((a, b) => b.price - a.price);
        list.innerHTML = items.length ? items.map(placeCard).join('') : '<p class="lead" style="grid-column:1/-1;margin:0">Ничего не найдено. Снимите фильтры.</p>';
        countEl.textContent = items.length;
        hallName.textContent = state.hall ? 'зал ' + state.hall : 'весь клуб';
        reveal();
    };

    $('#typeChips').addEventListener('click', e => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        state.type = chip.dataset.type;
        $$('#typeChips .chip').forEach(c => c.classList.toggle('is-on', c === chip));
        paint();
    });

    map.addEventListener('click', e => {
        const zone = e.target.closest('.hall-zone');
        if (!zone) return;
        state.hall = state.hall === zone.dataset.hall ? '' : zone.dataset.hall;
        $$('.hall-zone').forEach(z => {
            const on = z.dataset.hall === state.hall;
            z.classList.toggle('is-on', on);
            z.setAttribute('aria-pressed', String(on));
        });
        paint();
    });

    $('#f-sort').addEventListener('change', e => {
        state.sort = e.target.value;
        paint();
    });

    paint();
}

function initBar() {
    const panel = $('#menuPanel');
    const render = cat => {
        panel.innerHTML = DATA.menu[cat].map((item, i) => `<article class="dish-card" style="animation-delay:${i * .05}s">
            ${item.badge ? `<span class="dish-card__badge${item.badgeType ? ' dish-card__badge--' + item.badgeType : ''}">${item.badge}</span>` : ''}
            <span class="dish-card__ico" aria-hidden="true">${DATA.icons[item.icon] || DATA.icons.glass}</span>
            <h3 class="dish-card__name">${item.name}</h3>
            <p class="dish-card__desc">${item.desc}</p>
            <div class="dish-card__foot"><span class="dish-card__fx">${item.fx}</span><b class="dish-card__price">${item.price} ₽</b></div>
          </article>`).join('');
    };
    $$('.menu-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.menu-tab').forEach(t => {
                t.classList.toggle('is-on', t === tab);
                t.setAttribute('aria-selected', String(t === tab));
            });
            render(tab.dataset.cat);
        });
    });
    render('drinks');
}

// Настоящая бронь живёт в голове администратора и в его блокноте.
// Мы пытались оцифровать блокнот, но он сопротивляется.
function initBooking() {
    document.title = current.name + ' — бронирование · GameArena';
    $('#p-img').innerHTML = pic(current.img, current.name);
    $('#p-name').textContent = current.name;
    $('#p-meta').textContent = `${DATA.types[current.type]} · зал ${current.hall} · ${current.price} ₽/час`;
    $('#p-desc').textContent = current.desc;
    $('#p-specs').innerHTML = specRows(current);
    $('#b-place').innerHTML = DATA.places.map(p => `<option value="${p.id}"${p.id === current.id ? ' selected' : ''}>${p.name} — ${p.price} ₽/ч</option>`).join('');
    $('#b-place').addEventListener('change', e => { location.href = 'booking.html?id=' + e.target.value; });
    $('#b-pl').innerHTML = [1, 2, 3, 4, 5].map(n => `<option>${n}</option>`).join('');
    const hours = $('#b-h');
    hours.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1} ч</option>`).join('');
    const recalc = () => {
        const h = +hours.value;
        $('#total').textContent = rub(current.price * h);
        $('#total-note').textContent = h >= 6 ? 'ночной тариф −10%' : `итог за ${h} ч`;
    };
    hours.addEventListener('change', recalc);
    recalc();
}

// Валидация на клиенте. Да, её можно обойти через консоль.
// Нет, данные всё равно никуда не отправляются — сервера-то нет.
function initForms() {
    $$('input[type="date"]').forEach(input => { input.min = today(); });

    const messages = {
        tel: 'Формат: +7 900 123-45-67',
        email: 'Введите корректный e-mail',
        date: 'Дата не раньше сегодняшней',
        time: 'Это время уже прошло'
    };

    const checkForm = form => {
        let valid = true;
        const dateField = form.querySelector('input[type="date"]');
        form.querySelectorAll('[required]').forEach(field => {
            const v = field.value.trim();
            const digits = v.split('').filter(c => c >= '0' && c <= '9').length;
            let error = !v ? (field.type === 'hidden' ? 'Выберите оценку' : 'Заполните поле') : '';
            if (!error && field.type === 'tel' && !(digits >= 10 && digits <= 12 && v.split('').every(c => '+0123456789 ()-'.includes(c)))) error = messages.tel;
            if (!error && field.type === 'email') {
                const at = v.indexOf('@'), dot = v.lastIndexOf('.');
                if (v.split('@').length !== 2 || at < 1 || dot < at + 2 || dot === v.length - 1 || v.includes(' ')) error = messages.email;
            }
            if (!error && field.type === 'date' && v < today()) error = messages.date;
            if (!error && field.type === 'time' && dateField && dateField.value === today()) {
                const now = new Date();
                if (v <= pad(now.getHours()) + ':' + pad(now.getMinutes())) error = messages.time;
            }
            let hint = field.parentElement.querySelector('.err');
            if (!hint) {
                hint = document.createElement('div');
                hint.className = 'err';
                field.after(hint);
            }
            hint.textContent = error;
            field.classList.toggle('is-invalid', !!error);
            if (error) valid = false;
        });
        return valid;
    };

    $$('form[data-validate]').forEach(form => {
        const box = document.createElement('div');
        box.className = 'alert';
        form.append(box);
        form.addEventListener('submit', e => {
            e.preventDefault();
            const valid = checkForm(form);
            let text = 'Сообщение отправлено. Мы ответим в течение дня.';
            if (form.id === 'review') text = 'Спасибо! Отзыв отправлен — после проверки он появится на сайте.';
            if (page === 'booking') text = `Бронь принята: ${current.name}, ${$('#b-date').value} в ${$('#b-time').value}, ${$('#total').textContent}. Подтверждение придёт на почту.`;
            box.className = 'alert' + (valid ? '' : ' alert--error');
            box.textContent = valid ? text : 'Проверьте поля, отмеченные красным.';
            if (valid) {
                form.reset();
                form.querySelectorAll('.is-invalid').forEach(f => f.classList.remove('is-invalid'));
                form.querySelectorAll('.err').forEach(f => f.textContent = '');
                if (page === 'booking') $('#total').textContent = rub(current.price);
            }
        });
    });

    const rate = $('.rate');
    if (rate) {
        const input = $('#r-rate');
        const stars = $$('.rate__star', rate);
        const paint = n => stars.forEach(s => s.classList.toggle('rate__star--on', +s.dataset.v <= n));
        const mark = el => stars.forEach(s => s.setAttribute('aria-checked', String(s === el)));
        stars.forEach(star => {
            star.addEventListener('click', () => {
                input.value = star.dataset.v;
                paint(+input.value);
                mark(star);
                input.classList.remove('is-invalid');
                const hint = input.parentElement.querySelector('.err');
                if (hint) hint.textContent = '';
            });
            star.addEventListener('mouseenter', () => paint(+star.dataset.v));
        });
        rate.addEventListener('mouseleave', () => paint(+input.value || 0));
        input.closest('form').addEventListener('reset', () => {
            input.value = '';
            setTimeout(() => { paint(0); mark(null); }, 0);
        });
    }
}

function initTransitions() {
    const names = { home: 'главная', catalog: 'каталог', bar: 'бар', contacts: 'контакты', about: 'о нас', booking: 'бронь' };
    const target = link => {
        const url = new URL(link.href, location.href);
        if (url.origin !== location.origin) return null;
        if (url.pathname === location.pathname && url.search === location.search && url.hash) return null;
        if (!/\.html$/.test(url.pathname) && url.pathname !== '/') return null;
        const file = (url.pathname.split('/').pop() || 'index.html').replace('.html', '');
        if (file === 'index' && page === 'home' && !url.search && !url.hash) return null;
        return file;
    };

    const veil = document.createElement('div');
    veil.className = 'page-veil';
    veil.id = 'veil';
    veil.setAttribute('aria-hidden', 'true');
    veil.innerHTML = '<i class="page-veil__mark"></i><p class="page-veil__label">GameArena</p>';
    document.body.append(veil);

    document.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        const link = e.target.closest('a[href]');
        if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
        const dest = target(link);
        if (!dest) return;
        e.preventDefault();
        veil.querySelector('.page-veil__label').textContent = names[dest] || 'GameArena';
        veil.classList.remove('page-veil--out');
        veil.classList.add('page-veil--in');
        document.documentElement.classList.add('is-leaving');
        setTimeout(() => { location.href = link.href; }, reduced ? 0 : 380);
    });

    const reset = () => {
        veil.classList.remove('page-veil--in', 'page-veil--out');
        document.documentElement.classList.remove('is-leaving');
    };
    addEventListener('pageshow', reset);
    addEventListener('pagehide', reset);
    addEventListener('beforeunload', reset);
}

// Дальше не читайте, тут спойлеры к пасхалкам.
// Хотя вы уже их нашли, раз дошли до этой строки.
function initEasterEggs() {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const physical = { KeyB: 'b', KeyA: 'a' };
    let index = 0;
    addEventListener('keydown', e => {
        const pressed = physical[e.code] || e.key.toLowerCase();
        if (pressed === konami[index].toLowerCase()) {
            index++;
            if (index === konami.length) {
                index = 0;
                document.body.classList.toggle('cheat-mode');
                openModal('GG', '<p style="margin:0">Пасхалка найдена. Вольт-режим включён — интерфейс теперь светится ярче.</p>', '<button class="btn btn--accent btn--block" data-close>Продолжить</button>');
            }
        } else {
            index = 0;
        }
    });

    const banner = [
        '%c GameArena %c v2.0 ',
        'background:#c6ff2e;color:#08090a;font:800 26px/1.5 sans-serif;padding:10px 6px;border-radius:4px 0 0 4px',
        'background:#1b1d22;color:#c6ff2e;font:700 26px/1.5 ui-monospace,monospace;padding:10px 8px 10px 0;border-radius:0 4px 4px 0'
    ];
    const joke = [
        '%cВам здесь делать нечего.',
        'font:700 16px/2 sans-serif;color:#f5f6f8'
    ];
    const jokeBody = [
        '%cНаши данные — это отзывы и расписание мест.\nНи куки, ни трекеров, ни одной строчки про вас.\n\nНо раз уж открыли консоль — приходите поиграть.\n60 мест, 240 Гц, бар к столу. :3',
        'font:400 13px/1.8 ui-monospace,monospace;color:#8d939e'
    ];
    const consoleJoke = () => {
        console.log(...banner);
        console.log(...joke);
        console.log(...jokeBody);
    };
    consoleJoke();

    const consoleModal = () => openModal('GG WP',
        '<p style="margin:0 0 .8rem">Наши данные — это отзывы и расписание мест. Ни куки, ни трекеров, ни одной строчки про вас.</p><p style="margin:0">Но раз уж открыли консоль — приходите поиграть. 60 мест, 240 Гц, бар к столу. :3</p>',
        '<button class="btn btn--accent btn--block" data-close>Приду играть</button>');
    addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()))) consoleModal();
    });

    const sniffWords = ['password', 'parol', 'admin', 'hack', 'secret', 'token', 'db', 'root', 'exploit', 'sql', 'inject', 'cookie', 'auth', 'login'];
    const sniff = text => {
        const low = String(text).toLowerCase();
        return sniffWords.some(w => low.includes(w));
    };
    const scold = () => openModal('Ай-яй',
        '<p style="margin:0 0 .8rem">Ищем пароли? Их нет. Есть наггетсы и 240 Гц.</p><p style="margin:0">Приходите — тут хотя бы кормят.</p>',
        '<button class="btn btn--accent btn--block" data-close>Ладно, приду</button>');

    const bait = ['password', 'passwd', 'admin', 'secret', 'secrets', 'token', 'login', 'auth', 'db', 'database', 'config', 'env', 'apikeys', 'root'];
    const trapped = new Set();
    bait.forEach(word => {
        if (word in window) return;
        Object.defineProperty(window, word, {
            configurable: true,
            get() {
                if (!trapped.has(word)) {
                    trapped.add(word);
                    console.log('%cОго, вы добрались до данных. Это цены и расписание.\nПаролей нет, извините.', 'font:400 13px/1.8 ui-monospace,monospace;color:#c6ff2e');
                }
                return undefined;
            },
            set() {
                scold();
            }
        });
    });

    const nativeFetch = window.fetch;
    if (nativeFetch) {
        window.fetch = function (input, init) {
            const url = String(typeof input === 'string' ? input : (input && input.url) || '');
            if (/admin|login|auth|secret|passw|api\/v\d|wp-admin|\.env/i.test(url)) {
                scold();
                return Promise.resolve(new Response(JSON.stringify({ ok: false, joke: 'Админки нет. Есть бармен.' }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                }));
            }
            return nativeFetch.apply(this, arguments);
        };
    }

    const title = $('.hero__title');
    if (title) {
        let clicks = 0;
        let timer = null;
        title.addEventListener('click', () => {
            clicks++;
            clearTimeout(timer);
            timer = setTimeout(() => { clicks = 0; }, 1300);
            if (clicks === 5) {
                clicks = 0;
                document.body.classList.add('cheat-mode');
                openModal('Пасхалка', '<p style="margin:0">Пять кликов по заголовку — и клуб включил вольт-режим. Приятной игры!</p>', '<button class="btn btn--accent btn--block" data-close>Забрать</button>');
            }
        });
    }
}

document.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) closeModal();
});

if (page === 'home') initHome();
if (page === 'catalog') initCatalog();
if (page === 'bar') initBar();
if (page === 'booking') initBooking();
initForms();
initEasterEggs();
initTransitions();
reveal();

// Пароль от вайфая: спросите у бармена.
// Он его знает наизусть, но заставляет купить лимонад.
