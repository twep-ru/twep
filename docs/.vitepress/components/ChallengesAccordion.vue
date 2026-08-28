<script setup>
import { ref } from 'vue'
import faqItems from '../data/ChallengesAccordion.json'

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="border border-gray-200 dark:border-neutral-800 p-4 rounded-lg overflow-hidden bg-white dark:bg-neutral-900/50"
    >
      <!-- Вопрос -->
      <button
        class="flex justify-between items-center w-full p-2 text-left bg-transparent transition-colors"
        @click="toggle(index)"
        :aria-expanded="openIndex === index"
      >
        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.question }}</span>
        <svg
          class="w-5 h-5 text-gray-500 transition-transform duration-200"
          :class="{ 'rotate-180': openIndex === index }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Ответ -->
      <div
        v-show="openIndex === index"
        class="pt-3 px-2 text-gray-600 dark:text-neutral-300 leading-relaxed text-sm"
        v-html="item.answer"
      ></div>
    </div>
  </div>
</template>