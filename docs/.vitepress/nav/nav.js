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
      text: "Практика по JS",
      link: "/js/practice/guess-number",
      activeMatch: "/js/",
    },
    {
      text: "Заметки",
      link: "https://stuffcheck-eta.vercel.app/",
    },
  ];
}

export { nav };