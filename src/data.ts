export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  img: string;
  imgAlt: string;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'hoodie',
    name: 'Худи «Система сломана»',
    nameEn: 'SYSTEM HOODIE',
    price: 11900,
    img: '/img/product1.webp',
    imgAlt: '/img/hero.webp',
    tag: 'ХИТ ДРОПА',
  },
  {
    id: 'tee',
    name: 'Футболка «Взгляд»',
    nameEn: 'WATCHING TEE',
    price: 5900,
    img: '/img/product2.webp',
    imgAlt: '/img/collection2.webp',
  },
  {
    id: 'cargo',
    name: 'Карго «Разрыв»',
    nameEn: 'DISRUPT CARGO',
    price: 12900,
    img: '/img/product3.webp',
    imgAlt: '/img/product3_alt.webp',
    tag: 'ПОСЛЕДНИЕ РАЗМЕРЫ',
  },
  {
    id: 'cap',
    name: 'Кепка «Сигнал»',
    nameEn: 'SIGNAL CAP',
    price: 4900,
    img: '/img/product4.webp',
    imgAlt: '/img/product4_alt.webp',
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + ' ₽';

export interface CartItem {
  id: string;
  qty: number;
}

export const REVIEWS = [
  {
    stars: 5,
    text: 'Качество безумное. По вещи сразу видно — этот бренд другой.',
    author: '@DEMA.SRR',
  },
  {
    stars: 5,
    text: 'Наконец-то стритвир со смыслом. СЛОМ понимает.',
    author: '@KAY.DIF',
  },
  {
    stars: 5,
    text: 'Надел худи один раз — остановили трижды, спрашивали, где взял.',
    author: '@LONEWOLF77',
  },
];

export const NAV_LINKS = [
  { label: 'МАГАЗИН', href: '#shop' },
  { label: 'ДРОП', href: '#drop' },
  { label: 'ЛУКБУК', href: '#lookbook' },
  { label: 'МАНИФЕСТ', href: '#manifesto' },
  { label: 'КОНТАКТ', href: '#contact' },
];
