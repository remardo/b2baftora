export function Production() {
  return (
    <section id="production" className="py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-4">
            ВЫ ВИДИТЕ ЭТО НА МОНИТОРЕ, <br />
            <span className="text-gray-500">МЫ ВИДИМ ЭТО В ЦЕХУ</span>
          </h2>
          <p className="text-gray-400">
            Никаких стоковых фото. Только реальное производство. 
            Площадь 4500 м². Выпуск 12 000 дверей в месяц.
          </p>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden border border-white/10 bg-black">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-bold uppercase tracking-wide">Видео с производства</h3>
            <a
              href="https://vkvideo.ru/video-199460765_456239280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 text-sm font-bold hover:text-orange-300 transition-colors"
            >
              Открыть в VK Видео
            </a>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://vk.com/video_ext.php?oid=-199460765&id=456239280&hd=2&autoplay=0"
              title="Видео производства Афтора"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {/* Main Video/Photo */}
          <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop" 
              alt="Цех деревообработки"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-orange-600 text-white px-2 py-1 text-xs font-bold uppercase">Участок сборки</span>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
              alt="Склад"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-4">
              <p className="font-bold text-sm">Склад сырья</p>
              <p className="text-xs text-gray-400">Запас на 3 месяца</p>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop" 
              alt="Контроль качества"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-4">
              <p className="font-bold text-sm">Зона ОТК</p>
              <p className="text-xs text-gray-400">Проверка геометрии</p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-[#222] p-8 rounded-lg flex items-center relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
               </svg>
            </div>
            <div className="relative z-10">
              <div className="text-orange-500 text-4xl font-serif mb-4">"</div>
              <p className="text-lg italic text-gray-300 mb-4">
                Мы не делаем "дизайнерские шедевры" для выставок. Мы делаем "рабочих лошадок", которые приносят вам деньги каждый день. Качество стабильное, как бетон.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" alt="Director" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Алексей Петров</div>
                  <div className="text-xs text-gray-500">Директор производства</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
