---
title: Игра «Угадай число» на JavaScript
description: Инструкция по созданию игры «Угадай число» на JavaScript
---

# {{ $frontmatter.title}}

## Идея

Практика — лучший способ закрепить знания, поэтому предлагаем выполнить практическое задание для отработки пройденного материала.

Вам предстоит реализовать функционал веб-приложения, связав HTML-элементы с логикой на JavaScript. Если вы столкнётесь с непонятными частями кода — у вас будет возможность разобраться самостоятельно перейдя по выделенным ссылкам в тексте урока.

Такой подход поможет вам научиться писать чистый и эффективный код, ориентироваться в документации и применять теорию на реальных примерах.

## О проекте

<video playsinline autoplay muted loop width="100%" src="/assets/js/practice/guess-number.mp4" type="video/mp4" />

Вы создадите интерактивную игру в браузере, где пользователь должен угадать случайное число от 1 до 100 за ограниченное количество попыток.

## Необходимые знания

- Работа с переменными
- Условия
- Цикл while
- Приведение типов
- Строковые методы
- Функции prompt() и alert()
- Генерация случайных чисел (Math.random(), Math.floor())

> Ссылки на необходимые знания можно найти в разделе «Документация» внизу страницы.

## Структура

- index.html
- script.js

## Вёрстка

Создайте HTML-файл у себя на компьютере и скопируйте вёрстку проекта:

```html [index.html]
<!DOCTYPE html>
<html lang="ru">
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Игра «Угадай число»</title>
    </head>

    <body
      style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: Arial, Helvetica, sans-serif; background-color: cornsilk;"
    >
      <h1>Игра «Угадай число»</h1>
      <p>Обновите страницу, чтобы начать заново</p>
      <script src="script.js"></script>
    </body>
  </html>
</html>
```

## Инструкция

### Шаг 1: Загадайте случайное число от 1 до 100

Сначала нужно выбрать случайное число от 1 до 100. Это число будет загадано компьютером, и игрок должен его угадать.

Для этого используйте комбинацию функций [Math.random()](#документация) и [Math.floor()](#документация).

- `Math.random()` создаёт случайное число от 0 до 1.
- Умножая его на 100, мы получаем диапазон от 0 до 99.
- Добавляя 1, мы получаем диапазон от 1 до 100.
- `Math.floor()` округляет число вниз до целого.

[Создайте переменную](#документация) `secretNumber` и присвойте ей это значение.

<details>
<summary>Показать код</summary>

```javascript
let secretNumber = Math.floor(Math.random() * 100) + 1;
```

</details>

### Шаг 2: Установите максимальное количество попыток

Чтобы сделать игру интереснее, добавьте ограничение на количество попыток. Например, 10.

Так как это число не меняется, лучше использовать `const`.

<details>
<summary>Показать код</summary>

```javascript
const maxAttempts = 10;
```

</details>

### Шаг 3: Подготовьте переменные для хранения данных

Создайте несколько переменных, которые помогут вам управлять игрой:

- `attempts` — счётчик попыток. Начинается с 0.
- `guessedCorrectly` — [флаг](#документация), показывающий, угадал ли пользователь. По умолчанию `false`.
- `guessesHistory` — строка, которая будет содержать список всех введённых чисел.

Эти переменные нужны, чтобы отслеживать состояние игры и давать пользователю обратную связь.

<details>
<summary>Показать код</summary>

```javascript
let attempts = 0;
let guessedCorrectly = false;
let guessesHistory = "";
```

</details>

### Шаг 4: Создайте основной игровой цикл

Теперь вы напишете цикл, в котором будут происходить все действия игры.

Используйте цикл [while](#документация). Он будет работать, пока количество попыток меньше максимального.

Внутри цикла:

1. Запрашивайте число через [prompt()]
   - Сообщение должно показывать:
     - Текст задачи
     - Оставшееся количество попыток
     - Историю введённых чисел
2. Проверяйте, нажата ли кнопка «Отмена»
   - Если да — выведите сообщение и прервите игру
3. Преобразуйте ввод в число
   - Используйте [Number(input)](#документация)
4. Проверяйте корректность ввода
   - Если введено не число или вне диапазона 1–100 — покажите ошибку
5. Проверяйте, не вводилось ли это число ранее
   - Используйте метод [includes()](#документация) для строки `guessesHistory`
6. Добавляйте число в историю
   - Если это не первое число, добавьте перед ним запятую и пробел
7. Увеличивайте счётчик попыток
   - После каждой успешной попытки увеличивайте `attempts` на 1
8. Сравнивайте число с загаданным
   - Если меньше — сообщите, что загаданное число больше
   - Если больше — сообщите, что загаданное число меньше
   - Если равно — пометьте, что пользователь угадал, и завершите цикл

<details>
<summary>Показать код</summary>

```javascript
while (attempts < maxAttempts) {
  let input = prompt(
    "Угадайте число от 1 до 100.\n" +
      "У вас осталось " +
      (maxAttempts - attempts) +
      " попыток.\n" +
      "Введённые числа: " +
      guessesHistory
  );

  if (input === null) {
    alert("Игра прервана пользователем.");
    break;
  }

  let guess = Number(input);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Введите число от 1 до 100!");
    continue;
  }

  if (guessesHistory.includes(String(guess))) {
    alert("Вы уже вводили это число. Попробуйте другое.");
    continue;
  }

  guessesHistory += (guessesHistory ? ", " : "") + guess;
  attempts++;

  if (guess < secretNumber) {
    alert("Загаданное число больше!");
  } else if (guess > secretNumber) {
    alert("Загаданное число меньше!");
  } else {
    guessedCorrectly = true;
    break;
  }
}
```

</details>

### Шаг 5: Выведите результат игры

После окончания цикла проверьте, угадал ли пользователь число.

Если `guessedCorrectly` равно `true`:

- Покажите поздравление с количеством попыток

Если нет:

- Сообщите, какое было число

<details>
<summary>Показать код</summary>

```javascript
if (guessedCorrectly) {
  alert(
    '🎉 Поздравляем! Вы угадали число "' +
      secretNumber +
      '" за ' +
      attempts +
      " попыток!"
  );
} else {
  alert("😢 Вы не угадали. Загаданным числом было: " + secretNumber);
}
```

</details>

## Результат

Когда вы выполните все шаги правильно, у вас будет работающая игра:

- Игрок видит историю своих вводов
- Получает подсказки после каждой попытки
- Не может ввести одно и то же число дважды
- В конце получает красивое сообщение о победе или проигрыше

<details>
<summary>Показать полный рабочий код</summary>

```javascript
// Загадываем случайное число от 1 до 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Максимальное количество попыток
const maxAttempts = 10;

// Счётчик попыток
let attempts = 0;

// Переменная для угаданного числа
let guessedCorrectly = false;

// История введённых чисел (опционально)
let guessesHistory = "";

// Основной цикл игры
while (attempts < maxAttempts) {
  let input = prompt(
    "Угадайте число от 1 до 100.\n" +
      "У вас осталось " +
      (maxAttempts - attempts) +
      " попыток.\n" +
      "Введённые числа: " +
      guessesHistory
  );

  // Проверяем, не прервал ли пользователь игру
  if (input === null) {
    alert("Игра прервана пользователем.");
    break;
  }

  let guess = Number(input);

  // Проверяем корректность ввода
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Введите число от 1 до 100!");
    continue;
  }

  // Проверяем повторный ввод числа
  if (guessesHistory.includes(String(guess))) {
    alert("Вы уже вводили это число. Попробуйте другое.");
    continue;
  }

  guessesHistory += (guessesHistory ? ", " : "") + guess;
  attempts++;

  // Сравниваем с загаданным числом
  if (guess < secretNumber) {
    alert("Загаданное число больше!");
  } else if (guess > secretNumber) {
    alert("Загаданное число меньше!");
  } else {
    guessedCorrectly = true;
    break; // Выходим из цикла, если угадали
  }
}

// Вывод результата
if (guessedCorrectly) {
  alert(
    '🎉 Поздравляем! Вы угадали число "' +
      secretNumber +
      '" за ' +
      attempts +
      " попыток!"
  );
} else {
  alert("😢 Вы не угадали. Загаданным числом было: " + secretNumber);
}
```

</details>

## Документация

::: info Ссылки на руководства и онлайн-учебники

[Переменные](https://learn.javascript.ru/variables) `Javascript.ru`  

[while](https://doka.guide/js/while/) `Дока`  

[Условное ветвление: if, '?'](https://learn.javascript.ru/ifelse) `Javascript.ru`  

[Базовые операторы, математика](https://learn.javascript.ru/operators) `Javascript.ru`  

[Math.random()](https://doka.guide/js/math-random/) `Дока`  

[Метод Math.floor](https://code.mu/ru/javascript/manual/math/Math.floor/) `Трепачёв Дмитрий`  

[Работа с флагами в JavaScript](https://code.mu/ru/javascript/book/prime/loops/flags/) `Трепачёв Дмитрий`  

[prompt()](https://doka.guide/js/prompt/) `Дока`  

[alert()](https://doka.guide/js/alert/) `Дока`  

[Преобразование типов](https://learn.javascript.ru/type-conversions) `Javascript.ru`  

[.includes()](https://doka.guide/js/includes/) `Дока`  

[isNaN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN) `MDN`  

:::
