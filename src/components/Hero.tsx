import { ArrowDown, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-[#111] text-white pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615875932822-e78982a53d33?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/95 to-[#111]/70" />
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 z-10 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#111] via-[#111] to-transparent pointer-events-none md:hidden" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Прямые поставки B2B
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
            ХВАТИТ КОРМИТЬ ПЕРЕКУПОВ, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              ПОКУПАЙТЕ ДВЕРИ НАПРЯМУЮ С ФАБРИКИ
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Фабрика дверей «Афтора» производит межкомнатные двери (щитовые и сборные в ПВХ пленке),
            скрытые двери, панели и рейки для оформления порталов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contacts" className="flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-700 transition-all uppercase tracking-wide group">
              <Download className="group-hover:translate-y-1 transition-transform" size={20} />
              <span>Скачать прайс (PDF)</span>
            </a>
            <a href="#calculator" className="flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/5 transition-all uppercase tracking-wide">
              <span>Рассчитать выгоду</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
              <div>
                <div className="font-bold text-white">Отгрузка за 24ч</div>
                <div className="text-sm text-gray-500">Со склада готовой продукции</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
              <div>
                <div className="font-bold text-white">Брак &lt; 0.8%</div>
                <div className="text-sm text-gray-500">Двойной контроль ОТК</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Visual */}
      <div className="w-full md:w-1/2 absolute md:relative inset-0 h-full bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615875932822-e78982a53d33?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:bg-gradient-to-l" />
        
        {/* Animated particles or details to simulate activity */}
        <div className="absolute bottom-10 right-10 hidden md:block">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-sm border border-white/10 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-gray-300 uppercase">Live: Цех окутывания</span>
            </div>
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[70%] animate-[progress_2s_ease-in-out_infinite]" />
            </div>
            <div className="flex justify-between mt-2 text-xs font-mono text-white">
              <span>Смена А</span>
              <span>План: 100%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce cursor-pointer">
        <span className="text-xs uppercase tracking-widest">Посчитайте разницу</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
