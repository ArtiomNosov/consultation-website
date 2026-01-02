'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getImagePath } from '@/lib/paths';

export default function Home() {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Store contact in sessionStorage for contact page
      sessionStorage.setItem('userContact', email);
      sessionStorage.setItem('showSuccessNotification', 'true');
      // Immediate redirect
      window.location.href = '/contact';
    }
  };

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('click_cta');
    }
  };

  const successStories = [
    {
      name: "Артём",
      role: "из джуна в медла ML-инженера",
      description: "После консультаций мы определили карьерный вектор, обновили портфолио и резюме. Через 3 месяца он сменил компанию и увеличил зарплату в 2,5 раза.",
      avatar: getImagePath("/images/avatar-client-artem.jpg"),
    },
    {
      name: "Мария",
      role: "экономист → аналитик данных",
      description: "Мы собрали план перехода, обновили профиль на HH и подготовили к собеседованиям. Через 5 недель Мария получила оффер в продуктовую компанию.",
      avatar: getImagePath("/images/avatar-maria.jpg"),
    },
    {
      name: "Илья",
      role: "менеджер → продакт-менеджер",
      description: "После 3 встреч разобрали логику собеседований и составили портфолио. Сейчас Илья работает в крупном финтехе.",
      avatar: getImagePath("/images/avatar-ilya.jpg"),
    },
  ];

  const services = [
    { name: "Карьерная консультация", href: "/services#career-consultation" },
    { name: "Разбор резюме", href: "/services#resume-review" },
    { name: "Подготовка к собеседованию", href: "/services#interview-prep" },
    { name: "Стратегия развития", href: "/services#career-strategy" },
    { name: "Сопровождение до трудоустройства", href: "/services#offer-guarantee" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Optimized for mobile */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32 sm:-ml-48 -mb-32 sm:-mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Помогаем построить карьеру мечты
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-neutral-900 leading-relaxed font-semibold mb-5 sm:mb-6 md:mb-8">
              Персональный наставник поможет вам определить цели, развить нужные навыки и получить работу мечты с достойной зарплатой
            </p>

            {/* Email capture form */}
            <form onSubmit={handleEmailSubmit} className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш контакт"
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 font-medium text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  Начать
                </button>
              </div>
            </form>

            <div className="space-y-1 text-xs sm:text-sm font-semibold text-neutral-900">
              <p>✓ Первая консультация бесплатна</p>
              <p>✓ Ответим в течение 24 часов</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/cases"
            className="inline-block text-primary-600 font-black text-base sm:text-lg hover:text-primary-700 transition-colors duration-200 underline decoration-2 underline-offset-4"
          >
            Смотреть все истории успеха →
          </Link>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Результаты
            </h2>
            <p className="text-lg sm:text-xl text-neutral-900 max-w-2xl mx-auto font-semibold">
              Реальные истории людей, которые изменили свою карьеру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-neutral-900 text-sm sm:text-base">{story.name}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-bold">{story.role}</p>
                  </div>
                </div>
                <p className="text-neutral-900 leading-relaxed font-semibold text-sm sm:text-base">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/cases"
              className="inline-block text-primary-600 font-black text-base sm:text-lg hover:text-primary-700 transition-colors duration-200 underline decoration-2 underline-offset-4"
            >
              Ещё →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Наши услуги
            </h2>
            <p className="text-lg sm:text-xl text-neutral-900 max-w-2xl mx-auto font-semibold">
              Поддержка на всех этапах карьерного развития
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                onClick={handleCTAClick}
                className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-200 group"
              >
                <h3 className="text-lg sm:text-xl font-black text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-primary-600 font-bold mt-2 group-hover:translate-x-1 transition-transform duration-200">
                  Подробнее →
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              onClick={handleCTAClick}
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/images/avatar-artem.jpg")}
                alt="Артём"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-4 sm:mb-6 leading-tight">
                Об основателе
              </h2>
              <p className="text-base sm:text-lg text-neutral-900 mb-4 sm:mb-6 leading-relaxed font-semibold">
                Привет! Я Артём, основатель сервиса «Наставник». Я помогаю людям строить карьеру, которую они действительно хотят.
              </p>
              <p className="text-base sm:text-lg text-neutral-900 mb-6 sm:mb-8 leading-relaxed font-semibold">
                За 5 лет работы я помог более 50 специалистам найти работу мечты. Средний рост зарплаты моих клиентов — 2,5 раза.
              </p>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base font-bold text-neutral-900">
                <p>✓ 50+ успешных кейсов</p>
                <p>✓ Рост зарплаты в 2.5x в среднем</p>
                <p>✓ Средний срок поиска — 2 месяца</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Готовы начать?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-900 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            Запишитесь на бесплатную консультацию и давайте обсудим вашу карьеру
          </p>
          <Link
            href="/contact"
            onClick={handleCTAClick}
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-black hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Записаться на консультацию
          </Link>
        </div>
      </section>
    </div>
  );
}
