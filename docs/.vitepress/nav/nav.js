// Навигация в шапке сайта
function nav() {
  return [
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