import { FormEvent, useState } from 'react';
import { FileText, Gift, LoaderCircle, Send } from 'lucide-react';
import { reachGoal } from '../utils/metrika';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState<'whatsapp' | 'telegram' | 'email'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResultMessage('');

    const botToken = import.meta.env.VITE_TG_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TG_CHAT_ID;

    if (!botToken || !chatId) {
      setIsSuccess(false);
      setResultMessage('Интеграция временно недоступна. Позвоните: 8 (8352) 600-460 или напишите на aftora@yandex.ru.');
      return;
    }

    const text = [
      'Новый лид с сайта aftora',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Канал: ${messenger}`,
      `Источник: ${window.location.href}`,
      `Время: ${new Date().toLocaleString('ru-RU')}`,
    ].join('\n');

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });

      if (!response.ok) {
        throw new Error('Telegram API error');
      }

      setIsSuccess(true);
      setResultMessage('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      reachGoal('lead_form_success', { messenger });
      setName('');
      setPhone('');
      setMessenger('email');
    } catch {
      setIsSuccess(false);
      setResultMessage('Не удалось отправить заявку. Позвоните: 8 (8352) 600-460 или напишите на aftora@yandex.ru.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
                  Каталог (300+ моделей дверей)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  300+ видов ПВХ пленок, скрытые двери, панели и рейки
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
            <form id="lead-form" data-metrika-goal="lead_form_submit" className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">Как вас зовут?</label>
                <input 
                  id="lead-name"
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Иван Иванов" 
                />
              </div>
              
              <div>
                <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input 
                  id="lead-phone"
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="+7 (8352) 600-460" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Куда отправить материалы?</label>
                <div className="grid grid-cols-3 gap-2">
                  <label className="cursor-pointer" htmlFor="messenger-whatsapp">
                    <input id="messenger-whatsapp" type="radio" name="messenger" className="peer sr-only" value="whatsapp" checked={messenger === 'whatsapp'} onChange={() => setMessenger('whatsapp')} />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 hover:bg-gray-50 transition-all">
                      WhatsApp
                    </div>
                  </label>
                  <label className="cursor-pointer" htmlFor="messenger-telegram">
                    <input id="messenger-telegram" type="radio" name="messenger" className="peer sr-only" value="telegram" checked={messenger === 'telegram'} onChange={() => setMessenger('telegram')} />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 hover:bg-gray-50 transition-all">
                      Telegram
                    </div>
                  </label>
                   <label className="cursor-pointer" htmlFor="messenger-email">
                    <input id="messenger-email" type="radio" name="messenger" className="peer sr-only" value="email" checked={messenger === 'email'} onChange={() => setMessenger('email')} />
                    <div className="text-center py-2 px-1 border border-gray-200 rounded-md text-sm font-medium text-gray-500 peer-checked:bg-orange-50 peer-checked:border-orange-500 peer-checked:text-orange-700 hover:bg-gray-50 transition-all">
                      Email
                    </div>
                  </label>
                </div>
              </div>

              <button disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/25 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                <span>{isSubmitting ? 'Отправка...' : 'Получить цены и каталог'}</span>
                {isSubmitting ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Ваши данные не будут переданы третьим лицам.
              </p>

              {resultMessage && (
                <p className={`text-sm text-center mt-2 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {resultMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
