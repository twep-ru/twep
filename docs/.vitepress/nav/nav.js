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
      link: "/challenges/newbie/qr-code/",
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

export { nav };