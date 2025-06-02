---
title: Простой калькулятор на JavaScript
description: Инструкция по созданию базового калькулятора на JavaScript 
---

# {{ $frontmatter.title}}

## Идея

Практика — лучший способ закрепить знания, поэтому предлагаем выполнить практическое задание для отработки пройденного материала.

Вам предстоит реализовать функционал веб-приложения, связав HTML-элементы с логикой на JavaScript. Если вы столкнётесь с непонятными частями кода — у вас будет возможность разобраться самостоятельно перейдя по выделенным ссылкам в тексте урока.

Такой подход поможет вам научиться писать чистый и эффективный код, ориентироваться в документации и применять теорию на реальных примерах.

## О проекте

<video playsinline autoplay muted loop width="100%" src="/assets/js/practice/calculator.mp4" type="video/mp4" />

Вы создадите базовый калькулятор, который умеет выполнять четыре арифметических действия: сложение, вычитание, умножение и деление + кнопка сброса (CE). Калькулятор будет работать в браузере без использования сторонних библиотек.

## Необходимые знания

- Базовые понятия HTML и CSS
- Переменные в JavaScript
- Условия if
- Циклы while
- Работа с DOM: поиск элементов, изменение текста и стилей
- События: «клик»

> Ссылки на необходимые знания можно найти в разделе «Документация» внизу страницы.

## Структура

- index.html
- style.css
- script.js

## Вёрстка

Создайте HTML- и CSS-файлы у себя на компьютере и скопируйте вёрстку проекта:

::: code-group

```html [index.html]
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Простой калькулятор</title>
    <link
      rel="stylesheet"
      href="https://meyerweb.com/eric/tools/css/reset/reset.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main class="calculator">
      <div class="calculator__display">
        <p class="calculator__input">0</p>
      </div>

      <div class="calculator__buttons">
        <button class="calculator__button calculator__button--number">7</button>
        <button class="calculator__button calculator__button--number">8</button>
        <button class="calculator__button calculator__button--number">9</button>
        <button class="calculator__button calculator__button--symbol">×</button>

        <button class="calculator__button calculator__button--number">4</button>
        <button class="calculator__button calculator__button--number">5</button>
        <button class="calculator__button calculator__button--number">6</button>
        <button class="calculator__button calculator__button--symbol">/</button>

        <button class="calculator__button calculator__button--number">1</button>
        <button class="calculator__button calculator__button--number">2</button>
        <button class="calculator__button calculator__button--number">3</button>
        <button class="calculator__button calculator__button--symbol">−</button>

        <button class="calculator__button calculator__button--equally">
          =
        </button>
        <button class="calculator__button calculator__button--number">0</button>
        <button class="calculator__button calculator__button--action">
          CE
        </button>
        <button class="calculator__button calculator__button--symbol">+</button>
      </div>
    </main>

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
  height: 100vh;
  background: #686868;
}

.calculator {
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.25);
  background: #202020;
}

.calculator__display {
  padding: 10px;
}

.calculator__input {
  max-width: 300px;
  direction: rtl;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 48px;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: #ffffff;
}

.calculator__buttons {
  display: flex;
  flex-wrap: wrap;
  width: calc(4 * 78px + 3 * 4px);
  gap: 4px;
}

.calculator__button {
  width: 78px;
  height: 48px;
  padding: 10px;
  border-radius: 4px;
  border: 0;

  font-size: 18px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #ffffff;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;
}

.calculator__button:focus-visible {
  outline: 2px solid #ffb680;
  outline-offset: 2px;
}

.calculator__button--number {
  background-color: #3b3b3b;
}

.calculator__button--number:hover {
  background-color: #323232;
}

.calculator__button--number:active {
  background-color: #262626;
}

.calculator__button--symbol,
.calculator__button--action {
  background-color: #323232;
}

.calculator__button--symbol:hover,
.calculator__button--action:hover {
  background-color: #262626;
}

.calculator__button--symbol:active,
.calculator__button--action:active {
  background-color: #1a1a1a;
}

.calculator__button--equally {
  color: #473324;
  background-color: #ffb680;
}

.calculator__button--equally:hover {
  background-color: #f2a66f;
}

.calculator__button--equally:active {
  background-color: #e09661;
}
```

:::

## Инструкция

### Шаг 1: Подключитесь к элементам на странице

Откройте файл `script.js`.  
Сначала вам нужно получить доступ к экрану калькулятора и ко всем кнопкам.

- [Создайте переменную](#документация) `inputDisplay`, которая будет хранить ссылку на экран калькулятора. Используйте метод [document.querySelector()](#документация) и передайте класс `.calculator__input`.
- Создайте переменную `buttons`, которая получает все кнопки с классом `.calculator__button` через метод [document.querySelectorAll()](#документация).

Теперь у вас есть доступ к экрану и ко всем кнопкам.

<details>
<summary>Показать код</summary>

```javascript
let inputDisplay = document.querySelector(".calculator__input");
let buttons = document.querySelectorAll(".calculator__button");
```

</details>

### Шаг 2: Подготовьте переменные для работы калькулятора

Далее вы будете хранить в памяти текущее число `current`, предыдущее число `previous`, оператор `operator` и результат `result`.

Создайте их:

- `current` — для хранения числа, которое пользователь набирает сейчас.
- `previous` — для хранения первого числа до нажатия оператора.
- `operator` — для хранения знака операции (+, −, ×, ÷).
- `result` — для результата вычисления.
- `i` — для счётчика в цикле.

Присвойте им начальные значения:

```javascript
let current = "";
let previous = "";
let operator = "";
let result = 0;
let i = 0;
```

### Шаг 3: Добавьте обработчики событий на каждую кнопку

Теперь вы пройдётесь по каждой кнопке и свяжете её с функцией, которая будет реагировать на клик.

Используйте [цикл while](#документация):

- Начните с `i = 0`
- Пока `i` меньше количества кнопок (`buttons.length`)
- Каждому элементу `buttons[i]` присвойте [функцию onclick](#документация)

Пока не беспокойтесь о содержании этой функции, просто задайте её:

```javascript
buttons[i].onclick = function () {
  // Здесь будет логика
};
```

<details>
<summary>Показать код</summary>

```javascript
while (i < buttons.length) {
  buttons[i].onclick = function () {
    // Логика будет здесь
  };
  i = i + 1;
}
```

</details>

### Шаг 4: Получите значение кнопки

Внутри функции `onclick` создайте переменную `value`, которая будет хранить текст кнопки. Для этого используйте [this.innerText](#документация).

Теперь у вас есть доступ к символу, который нажал пользователь.

<details>
<summary>Показать код</summary>

```javascript
let value = this.innerText;
```

</details>

### Шаг 5: Реализуйте логику для цифр

[Если](#документация) нажатая кнопка — цифра (от "0" до "9"), то:

- Добавьте эту цифру к строке `current`
- Обновите отображение на экране калькулятора, установив `innerText` равным `current`

<details>
<summary>Показать код</summary>

```javascript
if (value >= "0" && value <= "9") {
  current = current + value;
  inputDisplay.innerText = current;
}
```

</details>

### Шаг 6: Реализуйте логику для операторов

Если нажатый символ — один из операторов (`+`, `−`, `×`, `/`), то:

- Проверьте, введено ли уже первое число (`current` не пустое)
- Если да, сохраните его в `previous`, очистите `current` и запомните оператор в переменной `operator`

<details>
<summary>Показать код</summary>

```javascript
if (value === "+" || value === "−" || value === "×" || value === "/") {
  if (current !== "") {
    previous = current;
    current = "";
    operator = value;
  }
}
```

</details>

### Шаг 7: Реализуйте логику кнопки равно

Если нажата кнопка `=`, то:

- Проверьте, есть ли оба числа (`previous` и `current`) и оператор
- Преобразуйте строки в числа с помощью `parseFloat()`
- Выполните нужное действие в зависимости от оператора
- Сохраните результат и покажите его на экране
- Обновите переменные: `current` станет результатом, а `previous` и `operator` очистятся

Не забудьте проверку деления на ноль!

<details>
<summary>Показать код</summary>

```javascript
if (value === "=") {
  if (previous !== "" && current !== "") {
    let a = parseFloat(previous);
    let b = parseFloat(current);

    if (operator === "+") {
      result = a + b;
    }
    if (operator === "−") {
      result = a - b;
    }
    if (operator === "×") {
      result = a * b;
    }
    if (operator === "/") {
      if (b !== 0) {
        result = a / b;
      } else {
        result = "Ошибка";
      }
    }

    inputDisplay.innerText = result;
    current = "" + result;
    previous = "";
    operator = "";
  }
}
```

</details>

### Шаг 8: Реализуйте логику кнопки CE

Если нажата кнопка `CE`, то:

- Очистите все переменные (`current`, `previous`, `operator`, `result`)
- Верните экран калькулятора к значению `'0'`

<details>
<summary>Показать код</summary>

```javascript
if (value === "CE") {
  current = "";
  previous = "";
  operator = "";
  result = 0;
  inputDisplay.innerText = "0";
}
```

</details>

### Шаг 9: Завершите цикл

После всех действий в теле цикла увеличьте счётчик `i` на 1 (`i = i + 1;`). Это важно, чтобы цикл завершился.

<details>
<summary>Показать полный рабочий код</summary>

```javascript
let inputDisplay = document.querySelector(".calculator__input");
let buttons = document.querySelectorAll(".calculator__button");

let current = "";
let previous = "";
let operator = "";
let result = 0;

let i = 0;
while (i < buttons.length) {
  buttons[i].onclick = function () {
    let value = this.innerText;

    // Если нажата цифра
    if (value >= "0" && value <= "9") {
      current = current + value;
      inputDisplay.innerText = current;
    }

    // Если нажат оператор
    if (value === "+" || value === "−" || value === "×" || value === "/") {
      if (current !== "") {
        previous = current;
        current = "";
        operator = value;
      }
    }

    // Если нажато равно
    if (value === "=") {
      if (previous !== "" && current !== "") {
        let a = parseFloat(previous);
        let b = parseFloat(current);

        if (operator === "+") {
          result = a + b;
        }
        if (operator === "−") {
          result = a - b;
        }
        if (operator === "×") {
          result = a * b;
        }
        if (operator === "/") {
          if (b !== 0) {
            result = a / b;
          } else {
            result = "Ошибка";
          }
        }

        inputDisplay.innerText = result;
        current = "" + result;
        previous = "";
        operator = "";
      }
    }

    // Если нажато CE
    if (value === "CE") {
      current = "";
      previous = "";
      operator = "";
      result = 0;
      inputDisplay.innerText = "0";
    }
  };
  i = i + 1;
}
```

</details>

## Результат

Когда вы выполните все шаги правильно, у вас будет работающий калькулятор, который:

- Отображает вводимые цифры
- Выполняет арифметические операции
- Корректно обрабатывает ошибки (например, деление на ноль)
- Сбрасывает данные при нажатии на CE

## Документация

::: info Ссылки на руководства и онлайн-учебники

[Переменные](https://learn.javascript.ru/variables) `Javascript.ru`

[document.querySelector() и document.querySelectorAll()](https://learnjs.ru/lessons/queryselector/)   `LearnJS`

[while](https://doka.guide/js/while/) `Дока`

[Событие onclick в JS на примерах](https://htmlacademy.ru/blog/js/onclick) `Доктайп`

[this: контекст выполнения функций](https://doka.guide/js/function-context/) `Дока`

[Условное ветвление: if, '?'](https://learn.javascript.ru/ifelse) `Javascript.ru`

[Базовые операторы, математика](https://learn.javascript.ru/operators) `Javascript.ru`

[parseFloat()](https://doka.guide/js/parsefloat/) `Дока`
:::
