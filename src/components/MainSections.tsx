import { motion } from 'motion/react';
import { ShoppingBag, Instagram, Send, Star, CheckCircle } from 'lucide-react';
import { SITE_INFO } from '../constants';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-brand-accent h-8 w-8" />
          <h1 className="text-2xl font-display font-bold tracking-tight text-gray-900">
            {SITE_INFO.name}
          </h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-sm font-medium hover:text-brand-accent transition-colors">Ana Sayfa</a>
          <a href="#products" className="text-sm font-medium hover:text-brand-accent transition-colors">Koleksiyonlar</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-accent transition-colors">İletişim</a>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href={SITE_INFO.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Instagram className="h-5 w-5 text-gray-600" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-soft py-20 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-brand-accent font-medium tracking-wider uppercase text-sm mb-4"
          >
            Zarafet ve Şıklığın Adresi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold leading-tight text-gray-900 mb-8"
          >
            Yaşamınıza Şıklık <br /> <span className="italic text-brand-accent">Bir Dokunuşla</span> Gelir
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
          >
            Büşra Giyim olarak, hem sizin hem de çocuklarınızın tarzını yansıtacak en kaliteli kumaşları ve en modern tasarımları bir araya getiriyoruz. Her detayda özen, her dikişte sevgi var.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#products" 
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Koleksiyonu Keşfet
            </a>
            <a 
              href={`https://wa.me/90${SITE_INFO.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-2"
            >
              WhatsApp ile Sorun
              <Send className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-brand-accent/20 rounded-full hidden lg:block" />
    </section>
  );
}

export function Features() {
  const features = [
    { icon: Star, title: "Kaliteli Malzeme", text: "En iyi kumaşlar ve aksesuarlar." },
    { icon: CheckCircle, title: "Özel Tasarım", text: "Size ve çocuğunuza özel modeller." },
    { icon: ShoppingBag, title: "Hızlı Gönderim", text: "Siparişleriniz en kısa sürede kapınızda." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-6">
                <f.icon className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-500">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
