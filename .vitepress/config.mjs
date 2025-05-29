import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  title: "twep.",
  description: "Жизнь слишком коротка для строгой типизации",
  lang: 'ru-RU',
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
  },
  appearance: false,

  themeConfig: {
    logo: {
      light: '/twep-logotype.svg', dark: '/twep-logotype-dark.svg', logoAlt: 'twep.'
    },
    siteTitle: false,

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
      copyright: "2025"
    },

    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/twepru' }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
})

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
      activeMatch: "/js/",
    },
  ];
}

function sidebarjs() {
  return [
    {
      text: "Полезные ссылки",
      collapsed: false,
      items: [
        {
          text: "Руководства по изучению",
          link: "links/docs",
        },
      ],
    },
  ];
}
