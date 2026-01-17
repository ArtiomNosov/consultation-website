'use client';

import Link from 'next/link';

export default function Cases() {
  const successStories = [
    {
      id: 1,
      name: "Артём",
      role: "ML-инженер",
      transition: "из джуна в мидла",
      duration: "3 месяца",
      salaryIncrease: "2.5x",
      industry: "IT / Машинное обучение",
      challenge: "Артём работал джуном в небольшой компании и не видел перспектив роста. Зарплата была низкой, а интересных проектов не было.",
      solution: "Мы провели комплексную работу: определили карьерный вектор в ML, обновили портфолио с реальными проектами, переписали резюме под требования рынка и подготовили к собеседованиям в крупных компаниях.",
      result: "Через 3 месяца Артём получил оффер в продуктовую IT-компанию на позицию Middle ML-инженера с увеличением зарплаты в 2.5 раза. Сейчас он работает над интересными проектами и планирует дальнейший рост.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Data Science"],
      quote: "Благодаря консультациям я понял, что нужно делать для карьерного роста. Теперь у меня есть четкий план развития на следующие 2 года."
    },
    {
      id: 2,
      name: "Мария",
      role: "Аналитик данных",
      transition: "экономист → аналитик данных",
      duration: "5 недель",
      salaryIncrease: "40%",
      industry: "Финансы / Продуктовая аналитика",
      challenge: "Мария работала экономистом в банке, но хотела перейти в продуктовую аналитику. Не знала, как правильно позиционировать себя и какие навыки развивать.",
      solution: "Мы составили план перехода: изучили требования к аналитикам данных, обновили профиль на HeadHunter, подготовили портфолио с проектами по анализу данных и провели интенсивную подготовку к собеседованиям.",
      result: "Через 5 недель Мария получила оффер в продуктовую компанию на позицию аналитика данных с повышением зарплаты на 40%. Сейчас она работает с большими данными и строит дашборды для продуктовой команды.",
      skills: ["SQL", "Python", "Tableau", "A/B тестирование", "Статистика"],
      quote: "Переход казался невозможным, но с правильным планом и поддержкой все получилось. Теперь я занимаюсь тем, что действительно нравится."
    },
    {
      id: 3,
      name: "Илья",
      role: "Продакт-менеджер",
      transition: "менеджер → продакт-менеджер",
      duration: "2 месяца",
      salaryIncrease: "60%",
      industry: "Финтех / Продуктовый менеджмент",
      challenge: "Илья работал обычным менеджером в консалтинге, но мечтал стать продакт-менеджером. Не понимал, как перейти в продуктовую сферу и что нужно знать.",
      solution: "Мы разобрали логику собеседований на продакт-менеджера, составили портфолио с продуктовыми кейсами, подготовили презентацию о продуктах и провели несколько пробных собеседований.",
      result: "Сейчас Илья работает продакт-менеджером в крупном финтехе. Он управляет командой из 8 человек и отвечает за развитие мобильного приложения с аудиторией 2+ млн пользователей.",
      skills: ["Продуктовая аналитика", "A/B тестирование", "Roadmap", "Stakeholder management", "Agile"],
      quote: "Консультации помогли понять, что продакт-менеджмент — это не только про идеи, но и про данные, процессы и команду. Теперь я чувствую себя уверенно в новой роли."
    },
    {
      id: 4,
      name: "Анна",
      role: "UX/UI дизайнер",
      transition: "графический дизайнер → UX/UI",
      duration: "6 недель",
      salaryIncrease: "50%",
      industry: "E-commerce / UX/UI дизайн",
      challenge: "Анна работала графическим дизайнером в рекламном агентстве, но хотела перейти в UX/UI. Не знала, как показать свои навыки и получить первый опыт в продуктовом дизайне.",
      solution: "Мы создали портфолио с UX-кейсами, обновили резюме под требования рынка, подготовили к собеседованиям и помогли найти стажировку в продуктовой компании.",
      result: "Анна получила оффер на позицию UX/UI дизайнера в крупном e-commerce проекте. Сейчас она проектирует пользовательские интерфейсы и работает с продуктовой командой.",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      quote: "Переход в UX/UI казался сложным, но с правильным подходом все получилось. Теперь я занимаюсь тем, что приносит реальную пользу пользователям."
    },
    {
      id: 5,
      name: "Дмитрий",
      role: "HR-директор",
      transition: "HR-менеджер → HR-директор",
      duration: "4 месяца",
      salaryIncrease: "80%",
      industry: "IT / HR-менеджмент",
      challenge: "Дмитрий работал HR-менеджером в IT-компании, но хотел стать HR-директором. Не понимал, какие компетенции нужно развивать и как позиционировать себя для руководящей роли.",
      solution: "Мы определили ключевые компетенции HR-директора, составили план развития лидерских навыков, подготовили к собеседованиям на руководящие позиции и помогли с нетворкингом в HR-сообществе.",
      result: "Дмитрий получил оффер на позицию HR-директора в быстрорастущей IT-компании. Сейчас он управляет HR-командой из 12 человек и отвечает за HR-стратегию компании.",
      skills: ["HR-стратегия", "Лидерство", "Организационное развитие", "Talent Management", "Change Management"],
      quote: "Консультации помогли понять, что нужно для перехода на руководящую позицию. Теперь я руковожу командой и строю HR-процессы в компании."
    },
    {
      id: 6,
      name: "Елена",
      role: "Маркетинг-директор",
      transition: "SMM-менеджер → маркетинг-директор",
      duration: "5 месяцев",
      salaryIncrease: "100%",
      industry: "SaaS / Маркетинг",
      challenge: "Елена работала SMM-менеджером в стартапе, но хотела стать маркетинг-директором. Не знала, как развить стратегическое мышление и получить опыт управления командой.",
      solution: "Мы составили план развития маркетинговых компетенций, подготовили к собеседованиям на руководящие позиции, помогли с нетворкингом и дали рекомендации по управлению командой.",
      result: "Елена получила оффер на позицию маркетинг-директора в SaaS-компании. Сейчас она управляет маркетинг-командой из 8 человек и отвечает за маркетинг-стратегию компании.",
      skills: ["Маркетинг-стратегия", "Performance Marketing", "Content Marketing", "Team Management", "Analytics"],
      quote: "Переход от тактики к стратегии был непростым, но с правильным планом все получилось. Теперь я строю маркетинг-процессы и руковожу командой."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Результаты
          </h1>
          <p className="text-xl text-neutral-900 max-w-3xl mx-auto font-semibold">
            Реальные кейсы наших клиентов. Узнайте, как мы помогли им построить карьеру мечты.
          </p>
        </div>

        {/* Success Stories */}
        <div className="space-y-16">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600">
                        {story.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-900">
                        {story.name}
                      </h2>
                      <p className="text-lg text-primary-600 font-medium">
                        {story.transition}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="text-sm text-neutral-600 mb-1">Отрасль</div>
                      <div className="font-semibold text-neutral-900">{story.industry}</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="text-sm text-neutral-600 mb-1">Время до результата</div>
                      <div className="font-semibold text-neutral-900">{story.duration}</div>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-4">
                      <div className="text-sm text-neutral-900 mb-1 font-bold">Рост зарплаты</div>
                      <div className="font-black text-neutral-900">{story.salaryIncrease}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">!</span>
                    Проблема
                  </h3>
                  <p className="text-neutral-900 leading-relaxed font-semibold">
                    {story.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">💡</span>
                    Решение
                  </h3>
                  <p className="text-neutral-900 leading-relaxed font-semibold">
                    {story.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-2">✓</span>
                    Результат
                  </h3>
                  <p className="text-neutral-900 leading-relaxed font-semibold">
                    {story.result}
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Ключевые навыки:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-lg p-4 max-w-md">
                    <p className="text-sm text-neutral-600 italic">
                      "{story.quote}"
                    </p>
                    <p className="text-xs text-neutral-500 mt-2">— {story.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-black mb-4">
              Хотите так же?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Запишитесь на консультацию и начните строить карьеру мечты
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors duration-200"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}