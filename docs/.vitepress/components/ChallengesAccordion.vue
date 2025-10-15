<script setup>
import { ref } from 'vue'

const faqItems = [
  { question: 'Что делать с решением?', answer: 'Оставьте ссылки на код и на просмотр вашего решения в комментариях' },
  { question: 'Нужна помощь в выполнении задачи?', answer: 'Спрашивайте совета в комментариях ниже' },
  { question: 'Могу ли я использовать этот проект в своём портфолио?', answer: 'Безусловно! Пожалуйста, добавляйте всё, что вы создадите, в своё портфолио. Одна из главных идей создания этой платформы — помочь разработчикам пополнить портфолио профессионально выглядящими проектами!' },
  { question: 'Есть ли официальное решение, с которым я могу ознакомиться?', answer: 'Мы не предоставляем «официальных» решений для заданий, потому что не существует единственно правильного способа выполнить задание. Вместо этого мы рекомендуем изучать код других участников сообщества. Вы многому научитесь, наблюдая, как другие люди подходили к тем же заданиям, и давая им обратную связь.' },
  { question: 'Получу ли я ревью кода, когда опубликую своё решение?', answer: 'Twep.ru — это сообщество совместного обучения, где каждый может давать друг другу обратную связь. Если вы хотите получить отзывы от сообщества, обязательно задайте конкретный вопрос при отправке своего решения. Чем точнее вы сформулируете свой вопрос, тем выше вероятность получить полезные комментарии от других участников.' },
  { question: 'Могу ли я использовать библиотеки или фреймворки в этих проектах?', answer: 'Конечно! Наши задания включают профессиональные макеты, но никаких ограничений на используемые инструменты нет. Вы можете использовать всё, что вам нравится, чтобы реализовать проект.' }
]


const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-3">
    <div v-for="(item, index) in faqItems" :key="index" class="border border-gray-200 p-4 rounded-lg overflow-hidden">

      <!-- Вопрос -->
      <button class="flex justify-between items-center w-full p-4 text-left bg-white " @click="toggle(index)"
        :aria-expanded="openIndex === index">
        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.question }}</span>
        <svg class="w-5 h-5 text-gray-500" :class="{ 'rotate-180': openIndex === index }" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Ответ -->
      <div v-show="openIndex === index" class="pt-4 px-4 text-gray-600" v-html="item.answer"></div>
    </div>
  </div>
</template>