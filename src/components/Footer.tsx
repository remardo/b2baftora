import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-display font-bold text-white tracking-tighter block mb-4">
              ЧЕБ<span className="text-orange-500">ДВЕРИ</span>
            </span>
            <p className="text-sm">
              Производство межкомнатных дверей полного цикла в Чебоксарах. Работаем с 2012 года.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <a href="tel:+78000000000" className="hover:text-white transition-colors">8 (800) 000-00-00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:opt@chebdveri.ru" className="hover:text-white transition-colors">opt@chebdveri.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-500 mt-1" />
                <span>г. Чебоксары, <br />Проезд Машиностроителей, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор выгоды</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Каталог дверей</a></li>
              <li><a href="#production" className="hover:text-white transition-colors">Экскурсия по цеху</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Скачать прайс</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Документы</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Договор оферты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Реквизиты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 ООО "Чебоксарская Фабрика Дверей". Все права защищены.</p>
          <p className="mt-2 md:mt-0 opacity-50">Сайт разработан для профессионалов рынка.</p>
        </div>
      </div>
    </footer>
  );
}
