import { Star } from 'lucide-react';

const cases = [
  {
    id: 1,
    role: "Дилер (г. Химки)",
    title: "Сеть магазинов 'ДвериТут'",
    result: "Маржа выросла на 15%",
    desc: "Заменили поставщика на фабрику «Афтора». Снизили закупочную цену, сохранив качество. Теперь могут делать скидки клиентам и оставаться в плюсе.",
    image: "/dveritut_aftora.jpg"
  },
  {
    id: 2,
    role: "Корпоративный заказчик",
    title: "Офисы Сбербанка",
    result: "Объект сдан в срок без рекламаций",
    desc: "Отзыв Сбербанка: «Фабрика “Афтора” выполнила поставку и комплектацию дверных блоков для офисных помещений строго по графику. Качество изделий стабильное, монтаж без замечаний, документы предоставлены в полном объеме».",
    image: "/sberbank_aftora.jpg"
  }
];

export function Cases() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-[#1a1a1a]">
            ОНИ УЖЕ ЗАРАБАТЫВАЮТ С НАМИ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-[#1a1a1a] text-white px-4 py-1 text-xs font-bold uppercase">
                  {item.role}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-green-600 font-bold text-sm mb-4 uppercase tracking-wide">{item.result}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
