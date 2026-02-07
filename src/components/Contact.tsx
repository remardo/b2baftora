import { FileText, Gift, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacts" className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 -skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              ПОЛУЧИТЕ "СТАРТОВЫЙ ПАКЕТ ПАРТНЕРА"
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Заполните форму, и мы автоматически отправим вам на почту или в мессенджер архив со всеми материалами.
            </p>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-8">
              <h4 className="font-bold text-orange-500 mb-4 flex items-center gap-2">
                <FileText size={20} />
                Что внутри архива (ZIP, 45Mb):
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  Актуальный оптовый прайс (XLS с фото)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  Каталог моделей 2024-2025 (PDF)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  Технические карты монтажа (DWG/PDF)
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-900/40 to-transparent border-l-4 border-orange-600 rounded-r-lg">
              <Gift className="text-orange-500 shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-white text-sm">Бонус для новых партнеров</p>
                <p className="text-gray-400 text-xs mt-1">
                  Купон на бесплатный выставочный образец при первом заказе от 50 000 руб.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Скачать прайс и каталог</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Как вас зовут?</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Иван Иванов" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="+7 (999) 000-00-00" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Куда отправить материалы?</label>
                <div className="grid grid-cols-3 gap-2">
                  <label className="cursor-pointer">
                    <input type="radio" name="messenger" className="peer sr-only" />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 hover:bg-gray-50 transition-all">
                      WhatsApp
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="messenger" className="peer sr-only" />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 hover:bg-gray-50 transition-all">
                      Telegram
                    </div>
                  </label>
                   <label className="cursor-pointer">
                    <input type="radio" name="messenger" className="peer sr-only" defaultChecked />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-orange-50 peer-checked:border-orange-500 peer-checked:text-orange-700 hover:bg-gray-50 transition-all">
                      Email
                    </div>
                  </label>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/25 mt-4">
                <span>Получить цены и каталог</span>
                <Send size={18} />
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Ваши данные не будут переданы третьим лицам.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
