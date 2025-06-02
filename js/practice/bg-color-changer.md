---
title: Изменение цвета фона с помощью JavaScript
description: Этот проект научит легко изменять фоновый цвет веб-страниц
---

# {{ $frontmatter.title}}

## Идея

Практика — лучший способ закрепить знания, поэтому предлагаем выполнить практическое задание для отработки пройденного материала.

Вам предстоит реализовать функционал веб-приложения, связав HTML-элементы с логикой на JavaScript. Если вы столкнётесь с непонятными частями кода — у вас будет возможность разобраться самостоятельно перейдя по выделенным ссылкам в тексте урока.

Такой подход поможет вам научиться писать чистый и эффективный код, ориентироваться в документации и применять теорию на реальных примерах.

## О проекте

<video playsinline autoplay muted loop width="100%" src="/assets/js/practice/bg-color-changer.mp4" type="video/mp4" />

В этом уроке вы создадите интерактивную палитру цветов, где при нажатии на любую из кнопок, цвет фона страницы будет меняться на выбранный оттенок.

## Необходимые знания

- Базовый HTML/CSS
- Понимание структуры JS-кода
- Умение искать информацию в документации

> Ссылки на необходимые знания можно найти в разделе «Документация» внизу страницы.

## Структура

- index.html
- style.css
- script.js

## Вёрстка

Создайте HTML- и CSS-файлы у себя на компьютере и скопируйте вёрстку проекта:

::: code-group

```html [index.html]
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Hexorcist</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1>Hexorcist</h1>
    <div id="colorbox"></div>

    <script src="script.js"></script>
  </body>
</html>
```

```css [style.css]
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

h1 {
  color: #6203e0;
  margin-bottom: 1rem;
}

#colorbox {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  gap: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.color-button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-button:hover {
  transform: scale(1.1);
}
```

:::

## Инструкция

### Шаг 1: Создайте массив с цветами

[Объявите переменную](#документация) `colors` и сохраните в неё массив из нескольких HEX-цветов, например: `"#e58e26"`, `"#f9b4ab"`, `"#B1FB17"`, `"#78e08f"`, `"#fd79a8"`.

Эти цвета будут использоваться для создания кнопок и изменения фона страницы.

### Шаг 2: Найдите контейнер для кнопок

Объявите переменную `colorBox`. С помощью метода [document.getElementById()](#документация), получите доступ к HTML-элементу, у которого ID равен `"colorbox"`.

Этот элемент будет служить контейнером для цветных кнопок.

### Шаг 3: Создайте кнопки и добавьте их на страницу

Используя [метод forEach()](#документация), пройдитесь по каждому цвету из массива `colors`. У каждого элемента есть цвет и его номер (index).

Для каждой итерации сделайте следующее:

1. Создайте новый HTML-элемент `<button>` с помощью [document.createElement](#документация).
2. [Добавьте этому элементу класс](#документация) `'color-button'`, чтобы можно было стилизовать его через CSS.
3. Установите фоновый цвет кнопки с помощью свойства [style.backgroundColor](#документация).
4. Добавьте [обработчик события "клик"](#документация): при клике на кнопку фон страницы должен меняться на текущий цвет.
5. Добавьте созданную кнопку внутрь контейнера `colorBox` с помощью метода [append](#документация).

## Подсказки

- Используйте стрелочные функции, чтобы сделать код короче и понятнее.
- Внутри `addEventListener` также используйте стрелочную функцию для передачи нужного цвета.

## Результат

Когда всё сделано правильно, на странице появятся красивые цветные кнопки, и при нажатии на любую из них фон будет меняться.

Старайтесь не смотреть ответ, пока собираете проект. Вся соль задумки — в самостоятельном изучении документации.

<details>
<summary>Готовый скрипт</summary>

```js
const colors = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
const colorBox = document.getElementById("colorbox");

colors.forEach((color, index) => {
  const colorButton = document.createElement("button");
  colorButton.className = "color-button";
  colorButton.style.backgroundColor = color;
  colorButton.addEventListener("click", () => {
    document.body.style.background = color;
  });
  colorBox.append(colorButton);
});
```

</details>

## Документация

::: info Ссылки на руководства и онлайн-учебники

[Переменные](https://learn.javascript.ru/variables) `Javascript.ru`  

[getElementById](https://code.mu/ru/javascript/manual/dom/getElementById/) `Code.mu`  

[forEach()](https://learnjs.ru/lessons/foreach/) `LearnJS`  

[document.createElement, append](https://learn.javascript.ru/modifying-document) `Javascript.ru`  

[className](https://learn.javascript.ru/styles-and-classes) `Javascript.ru`  

[style.backgroundColor](https://doka.guide/js/element-style/) `Дока`  

[addEventListener](https://learn.javascript.ru/introduction-browser-events) `Javascript.ru`  

:::