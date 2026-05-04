export type Category = 'cocuk' | 'yetiskin' | 'aksesuar';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: Category;
  description: string;
}

export interface SiteInfo {
  name: string;
  whatsapp: string;
  instagram: string;
  instagramLink: string;
}
