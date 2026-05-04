import { Product, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: 'Büşra Giyim',
  whatsapp: '0505 143 86 33',
  instagram: 'busragiyim.2',
  instagramLink: 'https://www.instagram.com/busragiyim.2/',
};

const WA_PHONE = '905051438633';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Prenses Çocuk Elbisesi',
    price: '₺450',
    category: 'cocuk',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop',
    description: 'Özel günler için şık ve zarif çocuk elbisesi.'
  },
  {
    id: '2',
    name: 'Fırfırlı Çocuk Eteği',
    price: '₺250',
    category: 'cocuk',
    image: 'https://images.unsplash.com/photo-1519233157297-969f64879207?q=80&w=800&auto=format&fit=crop',
    description: 'Günlük kullanım için rahat ve şık fırfırlı etek.'
  },
  {
    id: '3',
    name: 'Zarif Yetişkin Elbisesi',
    price: '₺850',
    category: 'yetiskin',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e62f85a97?q=80&w=800&auto=format&fit=crop',
    description: 'Modern ve şık tasarımlı kadın elbisesi.'
  },
  {
    id: '4',
    name: 'Çiçekli Toka Seti',
    price: '₺75',
    category: 'aksesuar',
    image: 'https://images.unsplash.com/photo-1615397441865-0210082729a6?q=80&w=800&auto=format&fit=crop',
    description: 'Saçlara renk katan zarif çiçekli tokalar.'
  },
  {
    id: '5',
    name: 'Sevimli Çocuk Çantası',
    price: '₺180',
    category: 'aksesuar',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    description: 'Çocuklar için özel tasarlanmış mini çanta.'
  },
  {
    id: '6',
    name: 'Lüks Yetişkin Çantası',
    price: '₺1200',
    category: 'aksesuar',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    description: 'Yüksek kaliteli malzemeden üretilmiş şık omuz çantası.'
  },
  {
    id: '7',
    name: 'Günlük Şık Çocuk Elbisesi',
    price: '₺320',
    category: 'cocuk',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
    description: 'Yumuşak dokusuyla çocukların favorisi olacak günlük elbise.'
  },
  {
    id: '8',
    name: 'Modern Kesim Yetişkin Takımı',
    price: '₺1100',
    category: 'yetiskin',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    description: 'Zarafeti ve konforu bir arada sunan özel tasarım takım.'
  }
];
