import { Truck, Clock, Package, MapPin } from 'lucide-react';

export function Logistics() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] mb-4">
            ЧЕБОКСАРЫ БЛИЖЕ, ЧЕМ КАЖЕТСЯ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Иногда быстрее, чем со склада в Подмосковье. Отлаженная логистика позволяет доставлять грузы за одну ночь.
          </p>
        </div>

        <div className="relative">
          {/* Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">День 1, 12:00</h3>
              <p className="text-sm text-gray-500">Прием заявки и проверка наличия на складе</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-orange-500 transition-colors">
                <Package className="text-gray-600 group-hover:text-orange-500 transition-colors" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">День 1, 16:00</h3>
              <p className="text-sm text-gray-500">Комплектация и жесткая упаковка (обрешетка)</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-orange-500 transition-colors">
                <Truck className="text-gray-600 group-hover:text-orange-500 transition-colors" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ночь</h3>
              <p className="text-sm text-gray-500">Фура в пути (700 км). Водители работают в паре.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-orange-500 transition-colors">
                <MapPin className="text-gray-600 group-hover:text-orange-500 transition-colors" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">День 2, 09:00</h3>
              <p className="text-sm text-gray-500">Разгрузка на вашем складе или объекте</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
