'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Get contact from sessionStorage if available
    const storedContact = sessionStorage.getItem('userContact');
    const shouldShowNotification = sessionStorage.getItem('showSuccessNotification');
    if (storedContact) {
      setFormData(prev => ({
        ...prev,
        email: storedContact
      }));
      if (shouldShowNotification) {
        setShowNotification(true);
        sessionStorage.removeItem('showSuccessNotification');
      }
      sessionStorage.removeItem('userContact');
    }
  }, []);

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

    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('submit_form', { props: { form: 'contact' } });
    }

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'form_submit',
        form_name: 'contact',
        form_data: {
          goal: formData.goal
        }
      });
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const subject = `Заявка на консультацию от ${formData.name}`;
    const body = `
Имя: ${formData.name}
Email: ${formData.email}
Цель консультации: ${formData.goal}

Сообщение:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:work-mentor@rambler.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const consultationGoals = [
    'Карьерная консультация',
    'Разбор резюме и профиля на HeadHunter',
    'Подготовка к собеседованию',
    'Индивидуальная стратегия развития',
    'Сопровождение в поиске работы до трудоустройства',
    'Другое'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-neutral-900 mb-4">
            Спасибо за заявку!
          </h1>
          <p className="text-lg text-neutral-900 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            Мы получили вашу заявку. Мы свяжемся с вами в течение 24 часов для обсуждения деталей консультации.
          </p>
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto border border-neutral-200 shadow-sm">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              На этой странице вы можете уточнить детали
            </h2>
              <ul className="text-base text-neutral-900 space-y-3 text-left font-semibold">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Проверим вашу заявку и ответим в течение 24 часов
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Обсудим удобное время для консультации
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Подготовим персональный план работы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {showNotification && formData.email && (
        <div className="bg-green-50 border-b-2 border-green-200 py-3 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-green-800 font-bold">
              ✓ Мы получили вашу заявку. Мы свяжемся с вами на <strong>{formData.email}</strong>
            </p>
            <button
              onClick={() => setShowNotification(false)}
              className="text-green-600 hover:text-green-800 font-bold"
            >
              ✗
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-semibold">
            Готовы начать строить карьеру? Заполните форму, и мы свяжемся с вами для обсуждения деталей консультации.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-neutral-200 shadow-sm">
            <h2 className="text-3xl font-black text-neutral-900 mb-8">
              Записаться на консультацию
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 font-semibold"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 font-semibold"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                  Цель консультации *
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 font-semibold"
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
                <label htmlFor="message" className="block text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 resize-none font-semibold"
                  placeholder="Расскажите о вашей ситуации, целях и вопросах..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white px-8 py-4 rounded-lg font-black text-lg hover:from-neutral-800 hover:to-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mt-8 uppercase tracking-wide"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправляем...
                  </span>
                ) : (
                  'Отправить заявку'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black text-neutral-900 mb-10">
              Контактная информация
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Email
                  </h3>
                  <p className="text-neutral-900 font-bold">
                  work-mentor@rambler.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Время ответа
                  </h3>
                  <p className="text-neutral-900 font-bold">
                    В течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Гарантии
                  </h3>
                  <p className="text-neutral-900 font-bold">
                    Конфиденциальность и индивидуальный подход
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-neutral-200">
              <h3 className="text-xl font-black text-neutral-900 mb-5">
                Почему выбирают нас?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-900 font-bold">Более 50 успешных кейсов</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-900 font-bold">Индивидуальный подход к каждому клиенту</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-900 font-bold">Гарантия результата для услуги сопровождения</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neutral-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-900 font-bold">Работаем со всеми сферами и профессиями</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
