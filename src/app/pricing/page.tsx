'use client';

import Link from 'next/link';

export default function Pricing() {
  const handleViewPricing = () => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('view_pricing');
    }
  };

  const pricingData = [
    {
      service: 'Карьерная консультация',
      price: '3 000 ₽',
      format: '1 час онлайн',
      description: 'Комплексная консультация по карьерному развитию',
      features: [
        'Анализ текущей ситуации',
        'Определение целей',
        'План развития',
        'Рекомендации по поиску работы'
      ]
    },
    {
      service: 'Разбор резюме',
      price: '2 000 ₽',
      format: 'асинхронно + рекомендации',
      description: 'Детальный анализ резюме и профиля на HeadHunter',
      features: [
        'Анализ структуры резюме',
        'Проверка профиля на HH',
        'Рекомендации по ключевым словам',
        'Шаблоны для улучшения'
      ]
    },
    {
      service: 'Подготовка к собеседованию',
      price: '4 000 ₽',
      format: '90 минут онлайн',
      description: 'Полная подготовка к собеседованию',
      features: [
        'Изучение компании',
        'Отработка ответов',
        'Технические задания',
        'Психологическая подготовка'
      ]
    },
    {
      service: 'Индивидуальная стратегия',
      price: '6 000 ₽',
      format: '2 встречи + чек-лист',
      description: 'Персональная стратегия развития на 1-2 года',
      features: [
        'Анализ карьерных целей',
        'Roadmap развития',
        'План развития навыков',
        'Стратегия нетворкинга'
      ]
    },
    {
      service: 'Позиционирование и сильные стороны',
      price: '4 000 ₽',
      format: '1,5 часа онлайн',
      description: 'Анализ сильных сторон и профессионального позиционирования',
      features: [
        'Анализ компетенций',
        'Создание личного бренда',
        'Позиционирование в LinkedIn',
        'План развития экспертизы'
      ]
    },
    {
      service: 'Доведение до оффера (постоплата)',
      price: '10% от итогового оффера',
      format: 'по результату',
      description: 'Полное сопровождение до получения оффера',
      features: [
        'Сопровождение поиска',
        'Подготовка к отбору',
        'Переговоры о зарплате',
        'Выбор между офферами'
      ],
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Тарифы
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Прозрачные цены на все услуги. Выберите то, что подходит именно вам.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    Услуга
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    Стоимость
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    Формат
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    Описание
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    Действие
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {pricingData.map((item, index) => (
                  <tr key={index} className={item.highlight ? 'bg-primary-50' : 'hover:bg-neutral-50'}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-neutral-900">
                        {item.service}
                        {item.highlight && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            Популярно
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-semibold text-primary-600">
                        {item.price}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600">
                        {item.format}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-neutral-600 max-w-xs">
                        {item.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href="/contact"
                        onClick={handleViewPricing}
                        className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors duration-200"
                      >
                        Записаться
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden mt-8 space-y-4">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border p-6 ${
                item.highlight ? 'border-primary-300 bg-primary-50' : 'border-neutral-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.service}
                </h3>
                {item.highlight && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Популярно
                  </span>
                )}
              </div>
              
              <div className="text-2xl font-bold text-primary-600 mb-2">
                {item.price}
              </div>
              
              <div className="text-sm text-neutral-600 mb-4">
                {item.format}
              </div>
              
              <p className="text-sm text-neutral-600 mb-4">
                {item.description}
              </p>
              
              <ul className="text-sm text-neutral-600 mb-4 space-y-1">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                onClick={handleViewPricing}
                className="block w-full bg-primary-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Записаться
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              💰 Гарантия результата
            </h3>
            <p className="text-neutral-600 mb-4">
              Услуга "Доведение до оффера" оплачивается только после получения работы. 
              Это наша гарантия того, что мы заинтересованы в вашем успехе.
            </p>
            <p className="text-sm text-neutral-500">
              * Применяется к услуге "Доведение до оффера"
            </p>
          </div>
          
          <div className="bg-neutral-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              🎯 Индивидуальный подход
            </h3>
            <p className="text-neutral-600 mb-4">
              Каждая консультация адаптируется под ваши потребности и цели. 
              Мы не используем шаблоны — только персональные решения.
            </p>
            <p className="text-sm text-neutral-500">
              * Все услуги включают персональную адаптацию
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Выберите подходящую услугу или получите бесплатную консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors duration-200"
              >
                Записаться на консультацию
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Посмотреть услуги
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}