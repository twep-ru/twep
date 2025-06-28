import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  title: "twep.",
  description: "Жизнь слишком коротка для строгой типизации",
  lang: "ru-RU",
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
    },
  },
  appearance: false, // Тёмный режим
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  cleanUrls: true,
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
      "/js/": { base: "/js/", items: sidebarjs() },
      "/odin/": { base: "/odin/", items: sidebarOdin() },
      "/read/": { base: "/read/", items: sidebarRead() },
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

    socialLinks: [{ icon: "telegram", link: "https://t.me/twepru" }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  transformHead({ pageData }) {
    const baseUrl = "https://twep.ru";
    const ogImage = "/twep-og.png";

    const head = [];

    const title = pageData.title || "twep.";
    const description =
      pageData.description || "Жизнь слишком коротка для строгой типизации";
    const path = pageData.relativePath.replace(/\.md$/, "");
    const url = `${baseUrl}/${path}`.replace(/^\//, ""); // убираем лишний слеш

    head.push(["meta", { property: "og:type", content: "website" }]);
    head.push(["meta", { property: "og:title", content: title }]);
    head.push(["meta", { property: "og:description", content: description }]);
    head.push(["meta", { property: "og:url", content: url }]);
    head.push([
      "meta",
      { property: "og:image", content: `${baseUrl}${ogImage}` },
    ]);
    head.push(["meta", { property: "og:image:alt", content: "twep. logo" }]);
    head.push(["meta", { property: "og:locale", content: "ru_RU" }]);
    head.push([
      "meta",
      { name: "twitter:card", content: "summary_large_image" },
    ]);
    head.push(["meta", { name: "twitter:title", content: title }]);
    head.push(["meta", { name: "twitter:description", content: description }]);
    head.push([
      "meta",
      { name: "twitter:image", content: `${baseUrl}${ogImage}` },
    ]);

    return head;
  },
});

// Навигация в шапке сайта
function nav() {
  return [
    {
      text: "JavaScript",
      link: "/js/links/docs",
      activeMatch: "/js/",
    },
    {
      text: "The Odin Project",
      link: "/odin/articles/becoming-top",
      activeMatch: "/odin/",
    },
    {
      text: "Чтиво",
      link: "/read/code-tells-you-how-comments-tell-you-why",
      activeMatch: "/read/",
    },
  ];
}

function sidebarjs() {
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
      ],
    },
  ];
}

function sidebarRead() {
  return [
    {
      text: "Полезно знать",
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
      ],
    },
  ];
}