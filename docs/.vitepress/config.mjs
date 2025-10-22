import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // head
  lang: 'ru-RU',
  title: "twep. // проекты для портфолио, которые впечатляют работодателей",
  description: "Развивайте свои навыки фронтенд-разработки, создавая реальные проекты. Решайте практические задачи по HTML, CSS и JavaScript, работая с профессиональными дизайн-макетами.",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ['meta', { property: 'og:title', content: 'twep. // проекты для портфолио, которые впечатляют работодателей' }],
    ['meta', { property: 'og:description', content: 'Практические задания по вёрстке и фронтенду, основанные на реальных рабочих процессах' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://twep.ru/' }],
    ['meta', { property: 'og:image', content: 'https://www.twep.ru/twep-og.png' }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
  ],

  // Чистые ссылки
  cleanUrls: true,

  // Настройки темы
  appearance: false,
  markdown: {
    lazyLoading: true,
  },
  themeConfig: {
    logo: {
      light: "/twep-logotype.svg",
      dark: "/twep-logotype-dark.svg",
      logoAlt: "twep.",
    },
    siteTitle: false,

    externalLinkIcon: true,

    // Ссылка на навигацию в шапке сайта
    nav: nav(),

    // Ссылки на сайдбары
    sidebar: {
      "/challenges/": { base: "/challenges/", items: sidebarChallenges() },
      "/js/": { base: "/js/", items: sidebarJs() },
      "/odin/": { base: "/odin/", items: sidebarOdin() },
      "/read/": { base: "/read/", items: sidebarRead() },
      "/modern-js/": { base: "/modern-js/", items: sidebarModernJs() },
    },

    docFooter: {
      prev: "Назад",
      next: "Далее",
    },

    outline: {
      label: "Содержание",
    },

    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",

    footer: {
      message: "twep.",
      copyright: "2025",
    },

    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",

    socialLinks: [
      {
        icon: "telegram",
        link: "https://t.me/twepru"
      },
      {
        icon: "vk",
        link: "https://vkvideo.ru/@twepru"
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

// Навигация в шапке сайта
function nav() {
  return [
    // {
    //   text: "The Odin Project",
    //   link: "/odin/articles/becoming-top",
    //   activeMatch: "/odin/",
    // },
    {
      text: "Челленджи",
      link: "/challenges/newbee/qr-code/",
      activeMatch: "/challenges/",
    },
    {
      text: "Заметки",
      link: "/read/about-js/the-weird-history-of-javascript/",
      activeMatch: "/read/",
    },
    {
      text: "Гайды по JS",
      link: "/js/links/docs",
      activeMatch: "/js/",
    },
  ];
}

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
      ],
    }
  ]
}

function sidebarJs() {
  return [
    {
      text: "Практика",
      collapsed: false,
      items: [
        {
          text: "Игра «Угадай число»",
          link: "practice/guess-number",
        },
        {
          text: "Изменение цвета фона",
          link: "practice/bg-color-changer",
        },
        {
          text: "Простой калькулятор",
          link: "practice/calculator",
        },
      ],
    },
    {
      text: "Полезные ссылки",
      collapsed: false,
      items: [
        {
          text: "Онлайн-учебники",
          link: "links/docs",
        },
        {
          text: "Telegram-чаты",
          link: "links/community",
        },
      ],
    },
    {
      text: "grammY",
      collapsed: false,
      items: [
        {
          text: "Эхо-бот",
          link: "grammy/echo",
        },
        {
          text: "Приветственный бот",
          link: "grammy/hello",
        },
        {
          text: "Бот с подсказками",
          link: "grammy/hints",
        },
        {
          text: "Бот-калькулятор",
          link: "grammy/calculator",
        },
        {
          text: "Бот случайных фактов",
          link: "grammy/random",
        },
      ],
    },
  ];
}

function sidebarOdin() {
  return [
    {
      text: "Основы JavaScript",
      collapsed: false,
      items: [
        {
          text: "Переменные и операторы",
          link: "js-basics/variables-operators/",
        },
        {
          text: "Установка Node.js",
          link: "js-basics/installing-node-js",
        },
        {
          text: "Типы данных и условные конструкции",
          link: "js-basics/data-types-сonditionals",
        },
        {
          text: "Инструменты разработчика JavaScript",
          link: "js-basics/javascript-developer-tools",
        },
        {
          text: "Основы функций",
          link: "js-basics/function-basics/",
        },
        {
          text: "Решение задач",
          link: "js-basics/problem-solving",
        },
        {
          text: "Понимание ошибок",
          link: "js-basics/understanding-errors",
        },
        {
          text: "Проект: Камень, ножницы, бумага",
          link: "js-basics/rock-paper-scissors",
        },
        {
          text: "Чистый код",
          link: "js-basics/clean-code",
        },
        {
          text: "Циклы и массивы",
          link: "js-basics/loops-arrays/",
        },
        {
          text: "Манипуляции с DOM и события",
          link: "js-basics/dom-manipulation-events",
        },
        {
          text: "Возвращаемся к «Камню, ножницам, бумаге»",
          link: "js-basics/revisiting-rock-paper-scissors/",
        },
        {
          text: "Проект: Волшебный экран",
          link: "js-basics/etch-a-sketch",
        },
        {
          text: "Основы объектов",
          link: "js-basics/object-basics",
        },
        {
          text: "Проект: калькулятор",
          link: "js-basics/calculator",
        },
        {
          text: "Выберите своё направление",
          link: "js-basics/choose-your-path",
        },
      ],
    },
    {
      text: "Чтиво",
      collapsed: false,
      items: [
        {
          text: "Как пройти The Odin Project и преуспеть",
          link: "articles/becoming-top",
        },
        {
          text: "Выбор правильного языка программирования",
          link: "articles/choosing-the-right-language/",
        },
        {
          text: "Ruby on Rails против JavaScript",
          link: "articles/ruby-on-rails-vs-javascript/",
        },
      ],
    },
  ];
}

function sidebarRead() {
  return [
    {
      text: "Про JavaScript",
      collapsed: false,
      items: [
        {
          text: "Странная история JavaScript",
          link: "about-js/the-weird-history-of-javascript/",
        },
      ],
    },
    {
      text: "Про программирование",
      collapsed: false,
      items: [
        {
          text: "Код говорит как, комментарии — почему",
          link: "code-tells-you-how-comments-tell-you-why",
        },
        {
          text: "Программирование без комментариев",
          link: "coding-without-comments",
        },
        {
          text: "Код как документация",
          link: "code-as-documentation",
        },
        {
          text: "Каскадные методы для выразительности",
          link: "cascading-methods-for-expressiveness",
        },
      ],
    },
  ];
}

function sidebarModernJs() {
  return [
    {
      text: "Продвинутые концепции",
      collapsed: false,
      items: [
        {
          text: "Прототипное наследование",
          link: "advanced-concepts/prototype-chain",
        },
        {
          text: "Деструктуризация",
          link: "advanced-concepts/destructuring",
        },
        {
          text: "Оператор расширения",
          link: "advanced-concepts/spread",
        },
        {
          text: "Опциональная цепочка",
          link: "advanced-concepts/optional-chaining",
        },
        {
          text: "Оператор объединения с null",
          link: "advanced-concepts/nullish-coalescing",
        },
        {
          text: "Функции высшего порядка",
          link: "advanced-concepts/higher-order-functions",
        },
        {
          text: "Замыкания",
          link: "advanced-concepts/closures",
        },
        {
          text: "Хитрости с массивами",
          link: "advanced-concepts/array-tricks",
        },
        {
          text: "История JavaScript",
          link: "advanced-concepts/history-of-js",
        },
      ],
    },
    {
      text: "ИИ-приложение",
      collapsed: false,
      items: [
        {
          text: "Знакомство с проектом",
          link: "ai-app/initial-setup/",
        },
        {
          text: "Основы RESTful API",
          link: "ai-app/restful-api/",
        },
        {
          text: "Настройка сервера",
          link: "ai-app/text-to-image-server/",
        },
      ],
    },
  ];
}
