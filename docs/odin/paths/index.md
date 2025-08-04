---
title: The Odin Project на русском языке
aside: false
sidebar: false
---

<script setup>
  import ContactCard from '/.vitepress/components/ContactCard.vue';
</script>

# {{ $frontmatter.title }}

## Как проходить курс

::: raw

<div class="flex flex-col gap-6">

  <h2 class="text-xl bold">Сперва изучите «Основы»</h2>

  <div class="info-card flex flex-col border-1 border-stone-200 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div class="flex items-center p-8 pb-0 border-stone-200 md:border-b md:pb-8">
      <img class="mr-4 w-24 h-24 md:mr-6" src="./badge-foundations.svg" alt="Бейдж направления «Основы»">
      <div class="flex flex-col">
        <h3 class="mt-0 mb-3 text-orange-800">Основы</h3>
        <a href="/foundations/introduction/how-this-course-will-work">Смотреть</a>
      </div>
    </div>
    <div class="p-8 py-6 max-sm:p-6 max-sm:py-2">
      <p class="text-stone-500">Здесь берёт начало ваш путь! Практическое введение в основной инструментарий для разработки функциональных веб-сайтов. Вы освоите реальные задачи разработчиков и базовые концепции для продвинутых курсов.</p>
    </div>
  </div>

  <h2>Затем выберите дальнейший путь</h2>

  <div class="flex flex-col gap-6 mb-6 sm:flex-row">
    <div class="info-card flex flex-1 flex-col border-1 border-stone-200 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div class="flex items-center p-8 pb-0 border-stone-200 md:border-b md:pb-8">
        <img class="mr-4 w-24 h-24 md:mr-6" src="./badge-ruby-on-rails.svg" alt="Бейдж направления «Фулстек Ruby on Rails»">
        <div class="flex flex-col">
          <h3 class="text-stone-800">Фулстек Ruby on Rails</h3>
          <a href="/">Смотреть</a>
        </div>
      </div>
      <div class="p-8 py-6 max-sm:p-6 max-sm:py-2">
        <p class="text-stone-500">Данный курс представляет собой полный цикл обучения Ruby on Rails. Для максимальной эффективности изучайте материалы в предложенной последовательности. В результате вы овладеете навыками разработки отзывчивых веб-приложений, начиная с основ.</p>
      </div>
    </div>
    <div class="info-card flex flex-1 flex-col border-1 border-stone-200 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div class="flex items-center p-8 pb-0 border-stone-200 md:border-b md:pb-8">
        <img class="mr-4 w-24 h-24 md:mr-6" src="./badge-javascript.svg" alt="Бейдж направления «Фулстек JavaScript»">
        <div class="flex flex-col">
          <h3 class="text-stone-800">Фулстек JavaScript</h3>
          <a href="/">Смотреть</a>
        </div>
      </div>
      <div class="p-8 py-6 max-sm:p-6 max-sm:py-2">
        <p class="text-stone-500">Этот путь проведёт вас через всю нашу программу по JavaScript. Проходите курсы в указанном порядке — и вы освоите всё необходимое для создания современных адаптивных веб-приложений с нуля на JavaScript и Node.js.</p>
      </div>
    </div>
  </div>

  <ContactCard />
  
</div>

:::
