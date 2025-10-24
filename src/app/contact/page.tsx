'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Plausible Analytics event
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('submit_form', { props: { form: 'contact' } });
    }

    // Google Tag Manager event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'form_submit',
        form_name: 'contact',
        form_data: {
          goal: formData.goal
        }
      });
    }

    // Simulate form submission (in real app, this would send to backend)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create mailto link
    const subject = `Заявка на консультацию от ${formData.name}`;
    const body = `
Имя: ${formData.name}
Email: ${formData.email}
Цель консультации: ${formData.goal}

Сообщение:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:artem@nastavnik.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const consultationGoals = [
    'Карьерная консультация',
    'Разбор резюме и профиля на HeadHunter',
    'Подготовка к собеседованию',
    'Индивидуальная стратегия развития',
    'Анализ сильных сторон и позиционирование',
    'Доведение до оффера (постоплата)',
    'Другое'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              Спасибо за заявку!
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Ваша заявка отправлена. Мы свяжемся с вами в течение 24 часов для обсуждения деталей консультации.
            </p>
            <div className="bg-primary-50 rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                Что дальше?
              </h2>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li>• Проверим вашу почту и ответим в течение 24 часов</li>
                <li>• Обсудим удобное время для консультации</li>
                <li>• Подготовим персональный план работы</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Готовы начать строить карьеру? Заполните форму, и мы свяжемся с вами для обсуждения деталей консультации.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Записаться на консультацию
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-neutral-700 mb-2">
                  Цель консультации *
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">Выберите цель консультации</option>
                  {consultationGoals.map((goal, index) => (
                    <option key={index} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Расскажите о вашей ситуации, целях и вопросах..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Контактная информация
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Email
                  </h3>
                  <p className="text-neutral-600">
                    artem@nastavnik.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Время ответа
                  </h3>
                  <p className="text-neutral-600">
                    В течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Гарантии
                  </h3>
                  <p className="text-neutral-600">
                    Конфиденциальность и индивидуальный подход
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Почему выбирают нас?
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Более 50 успешных кейсов
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Индивидуальный подход к каждому клиенту
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Гарантия результата для услуги "Доведение до оффера"
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Работаем со всеми сферами и профессиями
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}