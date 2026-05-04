import { useState } from 'react';
import { Category } from './types';
import { PRODUCTS } from './constants';
import { Header, Hero, Features } from './components/MainSections';
import { ProductGrid, Sidebar } from './components/ProductCatalog';
import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  return (
    <div className="min-h-screen bg-brand-soft">
      <Header />
      
      <main>
        <Hero />
        
        <Features />

        {/* Brand Story Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop" 
                    alt="Store Interior" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent rounded-[2rem] -z-10 hidden md:block" />
                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-gray-900 border-8 border-white rounded-full flex items-center justify-center p-6 -z-10 shadow-xl lg:flex items-center justify-center hidden">
                   <Star className="text-white w-full h-full fill-white" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-brand-accent font-semibold tracking-widest uppercase text-sm">Bizim Hikayemiz</h3>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
                    Moda Sadece Giyinmek Değil, <span className="text-brand-accent italic">Kendini İfade Etmektir.</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "Büşra Giyim olarak inanıyoruz ki; her yaşın bir ışıltısı, her tarzın bir ruhu vardır. Çocuklarınızın oyun alanındaki rahatlığından, sizin en özel anlarınızdaki şıklığınıza kadar yanınızdayız."
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-display font-bold text-gray-900">1000+</div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Mutlu Müşteri</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-display font-bold text-gray-900">500+</div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Özgün Tasarım</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section id="products" className="py-24 bg-brand-soft scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-display font-bold text-gray-900">Yeni Sezon Koleksiyonu</h2>
              <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
              <p className="text-gray-500 max-w-xl mx-auto italic">En sevilen modeller ve şık aksesuarlar şimdi mağazamızda.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Product Grid - Desktop (Left) */}
              <div className="lg:w-3/4 order-2 lg:order-1">
                <ProductGrid products={PRODUCTS} activeCategory={activeCategory} />
              </div>
              
              {/* Sidebar - Desktop (Right) */}
              <div className="lg:w-1/4 order-1 lg:order-2">
                <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center max-w-5xl mx-auto shadow-sm border border-gray-100">
               <motion.div 
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 rounded-full mb-8"
               >
                 <Heart className="h-10 w-10 text-brand-accent fill-brand-accent/20" />
               </motion.div>
               <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 text-gray-900">Sizden Haber Almayı <br /> Çok İsteriz!</h2>
               <p className="text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
                 Hangi ürünümüz ilginizi çekiyor? Merak ettiğiniz her şey için bize bir mesaj uzağınızdayız. WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a 
                   href="https://wa.me/905051438633" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                 >
                   WhatsApp ile Hemen Yazın
                 </a>
                 <a 
                   href="https://www.instagram.com/busragiyim.2/" 
                   className="px-10 py-5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                 >
                   Instagram'da Takip Edin
                 </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase">Büşra Giyim</h2>
            <div className="flex gap-6 text-sm underline-offset-4 decoration-brand-accent">
              <a href="#" className="hover:text-white hover:underline transition-colors">Ana Sayfa</a>
              <a href="#products" className="hover:text-white hover:underline transition-colors">Mağaza</a>
              <a href="#contact" className="hover:text-white hover:underline transition-colors">İletişim</a>
            </div>
            <p className="text-xs max-w-md">© {new Date().getFullYear()} Büşra Giyim. Tüm Hakları Saklıdır. Şıklığın ve zarafetin tek adresi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
