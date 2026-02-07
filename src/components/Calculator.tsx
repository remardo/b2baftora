import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, ArrowRight } from 'lucide-react';

export function Calculator() {
  const [volume, setVolume] = useState(150);
  const averageSavingPerDoor = 1200; // Примерная экономия в рублях с одной двери
  const monthlySaving = volume * averageSavingPerDoor;
  const yearlySaving = monthlySaving * 12;

  return (
    <section id="calculator" className="py-20 bg-[#f3f4f6] text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#1a1a1a]">
              МАТЕМАТИКА ВАШЕГО БИЗНЕСА: <br />
              <span className="text-gray-400">КУДА УХОДИТ 20% ПРИБЫЛИ?</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Работая с посредниками, вы оплачиваете не только дверь, но и аренду их склада в Москве, 
              зарплату менеджеров и их маржу. Мы предлагаем убрать лишние звенья.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-400 uppercase tracking-wider text-sm">Схема "Посредник"</span>
                  <span className="text-red-500 font-bold">+30% к цене</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="px-3 py-1 bg-gray-100 rounded text-gray-500">Завод</span>
                  <ArrowRight size={16} className="text-gray-400" />
                  <span className="px-3 py-1 bg-gray-100 rounded text-gray-500">Агент</span>
                  <ArrowRight size={16} className="text-gray-400" />
                  <span className="px-3 py-1 bg-gray-100 rounded text-gray-500">Склад МСК</span>
                  <ArrowRight size={16} className="text-gray-400" />
                  <span className="px-3 py-1 border border-red-200 bg-red-50 text-red-700 font-bold rounded">Вы</span>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transform md:translate-x-4 transition-transform">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-400 uppercase tracking-wider text-sm">Схема "ЧебДвери"</span>
                  <span className="text-green-400 font-bold">Честная цена</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-white">
                  <span className="px-3 py-1 bg-white/10 rounded">Завод Чебоксары</span>
                  <ArrowRight size={16} className="text-gray-500" />
                  <div className="flex-1 border-b border-dashed border-gray-600 relative h-1">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 uppercase">Логистика 24ч</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-500" />
                  <span className="px-3 py-1 bg-green-600 font-bold rounded shadow-[0_0_15px_rgba(22,163,74,0.5)]">Вы</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Wallet className="text-orange-500" />
              Калькулятор упущенной выгоды
            </h3>

            <div className="mb-10">
              <div className="flex justify-between mb-4">
                <label className="text-gray-600 font-medium">Объем закупки в месяц</label>
                <span className="text-2xl font-bold text-[#1a1a1a]">{volume} шт.</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-700 transition-all"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>10 шт</span>
                <span>1000 шт</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Экономия в месяц</div>
                <div className="text-2xl font-bold text-gray-900">{monthlySaving.toLocaleString()} ₽</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <div className="text-sm text-orange-600/80 mb-1 font-medium">Экономия в год</div>
                <div className="text-2xl font-bold text-orange-600">{yearlySaving.toLocaleString()} ₽</div>
              </div>
            </div>

            <motion.div 
              key={yearlySaving}
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 bg-zinc-900 text-white text-center rounded-lg"
            >
              <div className="flex items-center justify-center gap-2 mb-1 text-gray-400 text-sm">
                <TrendingUp size={16} />
                <span>Это примерно</span>
              </div>
              <div className="text-lg font-bold text-white">
                {(yearlySaving / 1500000).toFixed(1)} новых а/м LADA Vesta
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
