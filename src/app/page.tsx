'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

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
    },
    {
      name: "Мария",
      role: "экономист → аналитик данных",
      description: "Мы собрали план перехода, обновили профиль на HH и подготовили к собеседованиям. Через 5 недель Мария получила оффер в продуктовую компанию.",
    },
    {
      name: "Илья",
      role: "менеджер → продакт-менеджер",
      description: "После 3 встреч разобрали логику собеседований и составили портфолио. Сейчас Илья работает в крупном финтехе.",
    },
  ];

  const services = [
    { name: "Карьерная консультация", href: "/services#career-consultation" },
    { name: "Разбор резюме и профиля на HeadHunter", href: "/services#resume-review" },
    { name: "Подготовка к собеседованию", href: "/services#interview-prep" },
    { name: "Индивидуальная стратегия развития", href: "/services#career-strategy" },
    { name: "Анализ сильных сторон и позиционирование", href: "/services#positioning" },
    { name: "Доведение до оффера (постоплата)", href: "/services#offer-guarantee" },
  ];

  const sectors = [
    {
      name: "IT",
      professions: ["разработчики", "аналитики", "тестировщики", "продакты", "проджекты", "ML/AI"]
    },
    {
      name: "Маркетинг",
      professions: ["SMM", "контент-маркетинг", "перформанс", "бренд-менеджмент"]
    },
    {
      name: "Бизнес",
      professions: ["менеджеры проектов", "HR", "консультанты", "операционные директора"]
    },
    {
      name: "Финансы",
      professions: ["аналитики", "бухгалтеры", "инвестиционные специалисты"]
    },
    {
      name: "Дизайн",
      professions: ["UX/UI", "графический", "продуктовый"]
    },
    {
      name: "Наука и образование",
      professions: ["исследователи", "преподаватели", "тьюторы"]
    },
    {
      name: "Продажи",
      professions: ["B2B", "B2C", "customer success"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Наставник
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto">
              Помогаем не искать работу, а строить карьеру
            </p>
            <Link
              href="/contact"
              onClick={handleCTAClick}
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              О сервисе Наставник
            </h2>
            <div className="prose prose-lg mx-auto text-neutral-600">
              <p className="text-xl leading-relaxed">
                Меня зовут <strong>Артём</strong>, я основатель сервиса <strong>Наставник</strong>.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Мы помогаем специалистам на любом этапе — от первых шагов в вашей сфере до выхода на уровень руководителя.
                Вместе мы разбираем цели, сильные стороны и стратегию развития, чтобы вы не просто нашли новую работу,
                а осознанно двигались по карьерному пути.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Истории успеха
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {story.role}
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Услуги
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Комплексная поддержка на всех этапах карьерного развития
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block bg-white rounded-lg p-6 shadow-sm border border-neutral-200 hover:shadow-md hover:border-primary-300 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-primary-600 text-sm">
                  Подробнее →
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Сферы и профессии
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Работаем со специалистами из разных областей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                <button
                  onClick={() => setExpandedSector(expandedSector === sector.name ? null : sector.name)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {sector.name}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedSector === sector.name ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSector === sector.name && (
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2">
                      {sector.professions.map((profession, profIndex) => (
                        <span
                          key={profIndex}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {profession}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать строить карьеру?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Запишитесь на консультацию и получите персональную стратегию развития
          </p>
          <Link
            href="/contact"
            onClick={handleCTAClick}
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors duration-200"
          >
            Записаться на консультацию
          </Link>
        </div>
      </section>
    </div>
  );
}
