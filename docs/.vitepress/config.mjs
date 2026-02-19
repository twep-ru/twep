import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import { sidebarChallenges } from "./nav/challenges";
import { sidebarJs, sidebarRead } from "./nav/sidebars";
import { nav } from "./nav/nav";

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
      "/read/": { base: "/read/", items: sidebarRead() },
      // "/odin/": { base: "/odin/", items: sidebarOdin() },
      // "/modern-js/": { base: "/modern-js/", items: sidebarModernJs() },
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