'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 3;

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
        'Психологическая подготовка'
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
      id: 'positioning',
      title: 'Анализ сильных сторон и профессионального позиционирования',
      price: '4 000 ₽',
      duration: '1,5 часа онлайн',
      description: 'Определение ваших уникальных преимуществ и создание сильного профессионального позиционирования на рынке труда.',
      features: [
        'Анализ уникальных компетенций',
        'Создание личного бренда',
        'Позиционирование в LinkedIn',
        'Стратегия самопрезентации',
        'План развития экспертизы'
      ],
      format: '1,5-часовая онлайн-встреча'
    },
    {
      id: 'offer-guarantee',
      title: 'Доведение до оффера (постоплата)',
      price: '10% от итогового оффера',
      duration: 'по результату',
      description: 'Полное сопровождение до получения оффера с оплатой только после успешного результата. Максимальная мотивация на результат.',
      features: [
        'Полное сопровождение процесса поиска',
        'Подготовка ко всем этапам отбора',
        'Переговоры о зарплате',
        'Помощь в выборе между офферами',
        'Оплата только после получения работы'
      ],
      format: 'Длительное сопровождение до результата'
    }
  ];

  const totalPages = Math.ceil(allServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const currentServices = allServices.slice(startIndex, startIndex + servicesPerPage);

  const handleViewService = (serviceId: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('view_service', { props: { service: serviceId } });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Наши услуги
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Комплексная поддержка на всех этапах карьерного развития
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {currentServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8"
              onClick={() => handleViewService(service.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    {service.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-neutral-600">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                    <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Что входит:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Формат работы:
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {service.format}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-neutral-500 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Назад
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPage === page
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-neutral-500 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Вперед
              </button>
            </nav>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Не знаете, какая услуга подходит?
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Запишитесь на бесплатную 15-минутную консультацию
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}