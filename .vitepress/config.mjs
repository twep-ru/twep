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

    nav: nav(),

    sidebar: {
      "/js/": { base: "/js/", items: sidebarjs() },
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

function nav() {
  return [
    {
      text: "Главная",
      link: "/",
      activeMatch: "/",
    },
    {
      text: "JavaScript",
      link: "/js/links/docs",
      activeMatch: "/js",
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
          text: "Руководства",
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
      ],
    },
  ];
}
