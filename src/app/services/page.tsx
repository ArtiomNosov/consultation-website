'use client';

import Link from 'next/link';

export default function Services() {
  const allServices = [
    {
      id: 'career-consultation',
      title: 'Карьерная консультация',
      price: '3 000 ₽',
      duration: '1 час онлайн',
      description: 'Комплексная консультация по карьерному развитию. Разбираем ваши цели, анализируем текущую ситуацию и составляем план действий.',
      features: [
        'Анализ текущей карьерной ситуации',
        'Определение целей и приоритетов',
        'Оценка сильных сторон и зон роста',
        'Составление плана развития',
        'Рекомендации по поиску работы'
      ],
      format: 'Онлайн-встреча в удобное время'
    },
    {
      id: 'resume-review',
      title: 'Разбор резюме и профиля на HeadHunter',
      price: '2 000 ₽',
      duration: 'асинхронно + рекомендации',
      description: 'Детальный анализ вашего резюме и профиля на HeadHunter. Получите конкретные рекомендации по улучшению и повышению привлекательности для работодателей.',
      features: [
        'Анализ структуры и содержания резюме',
        'Проверка профиля на HeadHunter',
        'Рекомендации по ключевым словам',
        'Советы по оформлению и подаче',
        'Шаблоны для улучшения'
      ],
      format: 'Асинхронная работа + детальный отчет'
    },
    {
      id: 'interview-prep',
      title: 'Подготовка к собеседованию',
      price: '4 000 ₽',
      duration: '90 минут онлайн',
      description: 'Полная подготовка к собеседованию: от изучения компании до отработки ответов на сложные вопросы. Повышаем ваши шансы на успех.',
      features: [
        'Изучение компании и позиции',
        'Отработка ответов на типовые вопросы',
        'Подготовка к техническим заданиям',
        'Советы по самопрезентации',
        'Психологическая подготовка',
        'Мок-собеседования для части направлений'
      ],
      format: '90-минутная онлайн-встреча'
    },
    {
      id: 'career-strategy',
      title: 'Индивидуальная стратегия карьерного развития',
      price: '6 000 ₽',
      duration: '2 встречи + чек-лист',
      description: 'Разработка персональной стратегии карьерного развития на 1-2 года. Детальный план с конкретными шагами и метриками успеха.',
      features: [
        'Анализ карьерных целей',
        'Составление roadmap развития',
        'План развития навыков',
        'Стратегия нетворкинга',
        'Чек-лист для отслеживания прогресса'
      ],
      format: '2 встречи + детальный план действий'
    },
    {
      id: 'offer-guarantee',
      title: 'Сопровождение в поиске работы до трудоустройства',
      price: '50% от первой зарплаты',
      duration: 'по результату',
      description: 'Полное сопровождение до получения оффера с оплатой только после успешного результата. Максимальная мотивация на результат.',
      features: [
        'Полное сопровождение процесса поиска',
        'Подготовка ко всем этапам отбора',
        'Переговоры о зарплате',
        'Помощь в выборе между офферами',
        'Оплата только после трудоустройства'
      ],
      format: 'Длительное сопровождение до результата',
      note: 'Процент и условия могут варьироваться от конкретной ситуации и обсуждаются с клиентом'
    }
  ];

  const handleViewService = (serviceId: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('view_service', { props: { service: serviceId } });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
            Наши услуги
          </h1>
          <p className="text-xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-semibold">
            Поддержка на всех этапах карьерного развития
          </p>
        </div>

        {/* CTA Block - Help Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-neutral-200 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Не знаете, какая услуга подходит?
          </h2>
          <p className="text-lg text-neutral-900 mb-8 max-w-2xl font-semibold">
            Запишитесь на бесплатную 15-минутную консультацию и мы подберём оптимальное решение для вас
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg text-lg font-black hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Получить консультацию
          </Link>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {allServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-xl shadow-sm border border-neutral-200 p-10 hover:shadow-lg transition-all duration-200"
              onClick={() => handleViewService(service.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-neutral-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="bg-white border-2 border-neutral-900 text-neutral-900 px-4 py-2 rounded-lg font-black text-sm">
                      {service.price}
                    </span>
                    <span className="bg-neutral-100 text-neutral-900 px-4 py-2 rounded-lg font-bold text-sm">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-neutral-900 mb-8 leading-relaxed font-semibold">
                {service.description}
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-black text-neutral-900 mb-5">
                    Что входит:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-neutral-900 mt-0 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-900 font-bold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.note && (
                    <p className="text-xs text-neutral-700 mt-6 font-semibold italic">
                      * {service.note}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-black text-neutral-900 mb-5">
                    Формат работы:
                  </h3>
                  <p className="text-neutral-900 mb-8 leading-relaxed font-semibold">
                    {service.format}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-black hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services disclaimer */}
        <div className="text-center mt-16">
          <p className="text-sm text-neutral-700 font-semibold">
            * Все услуги включают индивидуальный подход
          </p>
        </div>
      </div>
    </div>
  );
}
