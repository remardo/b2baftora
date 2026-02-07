import { useState } from 'react';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display font-bold text-white tracking-tighter">
              ЧЕБ<span className="text-orange-500">ДВЕРИ</span>
              <span className="text-xs text-gray-400 ml-2 font-sans font-normal tracking-wide">ЗАВОД №4</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#calculator" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Калькулятор</a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Каталог</a>
            <a href="#production" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Производство</a>
            <a href="#contacts" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Контакты</a>
            
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-sm font-bold hover:bg-gray-200 transition-colors uppercase text-sm">
              <Phone size={16} />
              <span>Заказать звонок</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a] border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <a href="#calculator" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Калькулятор</a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Каталог</a>
              <a href="#production" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Производство</a>
              <a href="#contacts" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Контакты</a>
              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-3 rounded-sm font-bold uppercase">
                <FileText size={18} />
                <span>Скачать прайс</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
