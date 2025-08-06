---
title: Оператор объединения с null
description: JavaScript представил оператор объединения с null — ??, он проверяет, является ли значение null или undefined
level: Начинающий
theme: Оператор объединения с null (Nullish Coalescing) в JavaScript
---

# {{ $frontmatter.title}}

<FastJsMeta :level="$frontmatter.level" :theme="$frontmatter.theme"/>

## Проблема
  
В JavaScript есть неочевидное поведение при определении, какие значения считаются *истинными* (**truthy**), а какие — *ложными* (**falsy**). Это влияет на выполнение условий и логических операций.

Например:

```js
if (true) { 
  // выполнится
}
if (false) { 
  // не выполнится
}
```

Это логично. Но JavaScript — слабо типизированный язык, и он автоматически приводит типы при проверках. Из-за этого некоторые значения, которые **не являются `false`**, всё равно считаются **falsy**:

### 🚫 Значения, которые считаются **falsy**:
- `false`
- `0`
- `''` (пустая строка)
- `null`
- `undefined`
- `NaN`

А вот **всё остальное** — **truthy**, включая:
- `'0'` (строка с нулём)
- `' '` (строка с пробелом)
- `[]` (пустой массив)
- `{}` (пустой объект)

### Проблема с оператором `||` (логическое ИЛИ)

Часто используется для установки значения по умолчанию:

```js
const name = userName || 'Аноним';
```

Казалось бы, логично: если `userName` не задан — использовать `'Аноним'`.  
Но что, если `userName = ''` (пустая строка)?

```js
const userName = '';
const name = userName || 'Аноним';
console.log(name); // 'Аноним'
```

Хотя `userName` определён, он пустой — и поскольку пустая строка **falsy**, JavaScript выбирает значение по умолчанию. То же самое происходит с `0`, `false`, и т.д.

Это может привести к **неожиданному поведению**, особенно если вы хотите сохранить нулевые или пустые значения как валидные.

## Решение

**✅ Nullish Coalescing (`??`)**

JavaScript представил **оператор объединения с `null`** — `??`.  
Он проверяет, является ли значение **`null`** или **`undefined`**.  
**Только эти два значения** считаются "отсутствующими".

###  Как работает `??`
- Если левое значение **не** `null` и **не** `undefined`, оно возвращается.
- Иначе — используется правое значение.

Пример:

```js
const name = userName ?? 'Аноним';
```

Теперь:

```js
let userName = '';
const name = userName ?? 'Аноним';
console.log(name); // '' — пустая строка сохраняется!
```

Ещё примеры:

```js
console.log(0 ?? 10);        // 0 (0 — валидное значение)
console.log(false ?? true);  // false (false — валидное значение)
console.log(null ?? 'default');   // 'default'
console.log(undefined ?? 'default'); // 'default'
console.log('' ?? 'default'); // '' (пустая строка — валидна)
```

### Разница между `||` и `??`

<table>
  <thead>
    <tr>
      <th>Выражение</th>
      <th>Результат <code>||</code></th>
      <th>Результат <code>??</code></th>
      <th>Почему?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>'' || 'default'</code></td>
      <td><code>'default'</code></td>
      <td><code>''</code></td>
      <td><code>||</code> считает пустую строку falsy, <code>??</code> — нет</td>
    </tr>
    <tr>
      <td><code>0 || 5</code></td>
      <td><code>5</code></td>
      <td><code>0</code></td>
      <td><code>0</code> — falsy для <code>||</code>, но валидное значение для <code>??</code></td>
    </tr>
    <tr>
      <td><code>null || 'default'</code></td>
      <td><code>'default'</code></td>
      <td><code>'default'</code></td>
      <td>Оба оператора реагируют на <code>null</code></td>
    </tr>
    <tr>
      <td><code>undefined ?? 'test'</code></td>
      <td><code>'test'</code></td>
      <td><code>'test'</code></td>
      <td><code>??</code> подхватывает только <code>null</code> и <code>undefined</code></td>
    </tr>
  </tbody>
</table>

## Важно

- `??` **не работает** с другими falsy-значениями, кроме `null` и `undefined`.
- Нельзя использовать `??` вместе с `&&` или `||` без скобок:

```js
// ❌ Ошибка
let x = 1 && 2 ?? 3;

// ✅ Правильно
let x = (1 && 2) ?? 3;
```

## Вывод

✅ Используйте **`??`**, когда хотите задать значение по умолчанию **только если значение отсутствует** (`null` или `undefined`).

❌ Не используйте `||`, если вам важно сохранить `0`, `''`, `false` как валидные данные.

🔹 **Nullish Coalescing (`??`)** — это более предсказуемый способ обработки значений по умолчанию в современном JavaScript.

## Мем дня

<video playsinline autoplay muted loop width="50%" src="/assets/fast-js/nullish-coalescing.mp4" type="video/mp4"/>
