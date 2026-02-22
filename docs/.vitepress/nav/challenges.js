// Задания
function sidebarChallenges() {
  return [
    {
      text: "Новичок",
      collapsed: false,
      items: [
        {
          text: "QR-код",
          link: "newbie/qr-code/",
        },
        {
          text: "Карточка блога",
          link: "newbie/blog-card/",
        },
        {
          text: "Linktree",
          link: "newbie/linktree/",
        },
        {
          text: "Чек",
          link: "newbie/receipt-page/",
        },
        {
          text: "Погодный виджет",
          link: "newbie/weather-widget/",
        },
        {
          text: "Адаптивная таблица",
          link: "newbie/responsive-table/",
        },
        {
          text: "Клавиатура",
          link: "newbie/keyboard/",
        },
        {
          text: "Газетная полоса",
          link: "newbie/magazine/",
        },
      ],
    },
    {
      text: "Джун",
      collapsed: false,
      items: [
        {
          text: "Бенто-сетка",
          link: "junior/bento-grid/",
        },
        {
          text: "Бенто-компоненты",
          link: "junior/bento-components/",
        },
        {
          text: "Лендинг для стартапа",
          link: "junior/startup-landing/",
        },
        {
          text: "Мобильный бургер",
          link: "junior/hamburger/",
        },
      ],
    },
    {
      text: "Средний",
      collapsed: false,
      items: [
        {
          text: "Минималистичный сайт-портфолио",
          link: "intermediate/minimalist-portfolio/",
        },
        {
          text: "SaaS-лендинг",
          link: "intermediate/saas-landing/",
        },
        {
          text: "Генератор паролей",
          link: "intermediate/password-generator/",
        },
      ],
    },
  ]
}

export { sidebarChallenges }