import { Product, Category } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_INFO } from '../constants';
import { Phone, Instagram, MapPin } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  activeCategory: Category | 'all';
}

export function ProductGrid({ products, activeCategory }: ProductGridProps) {
  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <AnimatePresence mode="popLayout">
        {filtered.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-700 shadow-sm">
                  {product.category === 'cocuk' ? 'Çocuk' : product.category === 'yetiskin' ? 'Yetişkin' : 'Aksesuar'}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-brand-accent transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                <a 
                  href={`https://wa.me/90${SITE_INFO.whatsapp.replace(/\s/g, '')}?text=Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="bg-brand-accent text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-brand-accent/90 transition-colors"
                >
                  Sipariş Ver
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: Category | 'all', 
  setActiveCategory: (c: Category | 'all') => void 
}) {
  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'Tüm Ürünler' },
    { id: 'cocuk', label: 'Çocuk Koleksiyonu' },
    { id: 'yetiskin', label: 'Yetişkin Koleksiyonu' },
    { id: 'aksesuar', label: 'Aksesuar & Çanta' },
  ];

  return (
    <aside className="space-y-12">
      <div>
        <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-6 bg-brand-accent rounded-full" />
          Kategoriler
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`text-left px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                activeCategory === c.id 
                  ? 'bg-brand-accent text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <h3 className="text-xl font-display font-bold mb-6 relative">İletişim Bilgileri</h3>
        <div className="space-y-6 relative">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Phone className="h-5 w-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">WhatsApp</p>
              <a 
                href={`https://wa.me/90${SITE_INFO.whatsapp.replace(/\s/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-brand-accent transition-colors"
              >
                {SITE_INFO.whatsapp}
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Instagram className="h-5 w-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Instagram</p>
              <a href={SITE_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-accent transition-colors">
                @{SITE_INFO.instagram}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <MapPin className="h-5 w-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Konum</p>
              <p className="font-medium">Türkiye</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-400 italic">
            "Her tarzın bir hikayesi vardır, Büşra Giyim ile kendi hikayenizi yazın."
          </p>
        </div>
      </div>
    </aside>
  );
}
