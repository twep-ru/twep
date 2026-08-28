// Практика
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
  ];
}

export { sidebarJs };