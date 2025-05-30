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
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  cleanUrls: true,

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
  transformHead({ pageData }) {
    const ogImage = '/twep-og.png'
    const urlBase = 'https://twep.ru'

    return [
      // Open Graph
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: pageData.title || 'Главная' }],
      ['meta', { property: 'og:description', content: pageData.description || 'Жизнь слишком коротка для строгой типизации' }],
      ['meta', { property: 'og:url', content: `${urlBase}${pageData.relativePath.replace(/\.md$/, '')}` }],
      ['meta', { property: 'og:image', content: `${urlBase}${ogImage}` }],

      // Twitter Card
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageData.title || 'Главная' }],
      ['meta', { name: 'twitter:description', content: pageData.description || 'Жизнь слишком коротка для строгой типизации' }],
      ['meta', { name: 'twitter:image', content: `${urlBase}${ogImage}` }],
    ]
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
          text: "Руководства",
          link: "links/docs",
        },
      ],
    },
  ];
}
