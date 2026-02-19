// Задания
function sidebarChallenges() {
  return [
    {
      text: "Новичок",
      collapsed: false,
      items: [
        {
          text: "QR-код",
          link: "newbee/qr-code/",
        },
        {
          text: "Карточка блога",
          link: "newbee/blog-card/",
        },
        {
          text: "Linktree",
          link: "newbee/linktree/",
        },
        {
          text: "Чек",
          link: "newbee/receipt-page/",
        },
        {
          text: "Погодный виджет",
          link: "newbee/weather-widget/",
        },
        {
          text: "Адаптивная таблица",
          link: "newbee/responsive-table/",
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