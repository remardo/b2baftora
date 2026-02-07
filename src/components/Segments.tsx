import { useState } from 'react';
import { Building2, Store, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Segments() {
  const [activeTab, setActiveTab] = useState<'dealer' | 'developer'>('dealer');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">
            УСЛОВИЯ ПОД ВАШУ БИЗНЕС-МОДЕЛЬ
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('dealer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase transition-all ${
                activeTab === 'dealer'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Store size={18} />
              Дилерам и Салонам
            </button>
            <button
              onClick={() => setActiveTab('developer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase transition-all ${
                activeTab === 'developer'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Building2 size={18} />
              Застройщикам
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <AnimatePresence mode="wait">
            {activeTab === 'dealer' ? (
              <motion.div
                key="dealer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">Вам нужно продавать красиво и дорого</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Выставочные образцы -50%</strong>
                        <span className="text-gray-500 text-sm">Оборудуем ваш шоурум за полцены, чтобы вы могли показать товар лицом.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Обучение ваших менеджеров</strong>
                        <span className="text-gray-500 text-sm">Zoom-конференция с нашим технологом. Расскажем, как продавать именно наши двери.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Защита проекта</strong>
                        <span className="text-gray-500 text-sm">Если вы завели клиента — мы не отгрузим ему напрямую.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden h-64 md:h-80 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop" alt="Showroom" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="developer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                 <div>
                  <h3 className="text-2xl font-bold mb-6">Вам нужно сдать объект вовремя и в бюджет</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Фиксация цены</strong>
                        <span className="text-gray-500 text-sm">Подписываем спецификацию — цена не меняется до конца строительства, даже если материалы подорожают.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Двери в сборе (Pre-hung)</strong>
                        <span className="text-gray-500 text-sm">Поставляем дверной блок с врезанной фурнитурой. Монтаж занимает 15 минут вместо 1 часа.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-1"><Check size={16} /></div>
                      <div>
                        <strong className="block text-gray-900">Полный пакет документов</strong>
                        <span className="text-gray-500 text-sm">Сертификаты соответствия, пожарные сертификаты, паспорта качества.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden h-64 md:h-80 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1590333203407-c5332f7a6375?q=80&w=2673&auto=format&fit=crop" alt="Construction site" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
