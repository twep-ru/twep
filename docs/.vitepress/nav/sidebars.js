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

// Один
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

export { sidebarJs };