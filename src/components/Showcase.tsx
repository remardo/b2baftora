import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Techno-3",
    style: "Хай-тек",
    price: "4 200",
    retail: "7 900",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=2576&auto=format&fit=crop",
    specs: ["Экошпон (Германия)", "Царговая сборка", "Толщина 38мм"]
  },
  {
    id: 2,
    name: "Classic-L",
    style: "Неоклассика",
    price: "5 100",
    retail: "9 500",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2574&auto=format&fit=crop",
    specs: ["Soft Touch", "Фрезеровка ЧПУ", "Стекло Lacobel"]
  },
  {
    id: 3,
    name: "Office-Pro",
    style: "Офисная",
    price: "3 800",
    retail: "6 200",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
    specs: ["Износостойкая пленка", "Усиленный каркас", "Звукоизоляция"]
  },
];

export function Showcase() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-[#1a1a1a] mb-2">
              ХИТЫ ПРОДАЖ
            </h2>
            <p className="text-gray-500">Модели, которые не залеживаются на складе</p>
          </div>
          <a href="#contacts" className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors uppercase text-sm tracking-wider">
            Полный каталог (50+) <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-800 rounded-sm">
                  {product.style}
                </div>
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-[#1a1a1a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
                  <h4 className="text-white font-bold text-xl mb-4">Техническая карта</h4>
                  <ul className="space-y-3 mb-8">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2 text-sm">
                        <Box size={14} className="text-orange-500" /> {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white text-black font-bold py-3 uppercase text-sm hover:bg-gray-200 transition-colors">
                    Добавить в расчет
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="text-xs text-gray-400">Артикул: {product.name.slice(0,3).toUpperCase()}-0{product.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-1">Опт от:</div>
                    <div className="text-2xl font-display font-bold text-[#1a1a1a]">{product.price} ₽</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm text-gray-500">Рек. розница:</span>
                  <span className="font-bold text-gray-600 line-through decoration-orange-500/50">{product.retail} ₽</span>
                </div>
                
                <div className="mt-2 text-xs text-green-600 font-bold bg-green-50 inline-block px-2 py-1 rounded">
                  Ваша маржа: {((parseInt(product.retail.replace(' ', '')) - parseInt(product.price.replace(' ', ''))) / parseInt(product.price.replace(' ', '')) * 100).toFixed(0)}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <a href="#contacts" className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase text-sm tracking-wider">
            Полный каталог (50+) <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
