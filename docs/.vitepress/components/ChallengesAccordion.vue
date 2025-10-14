<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(item => item.question && item.answer)
    }
  }
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-3">
    <div v-for="(item, index) in items" :key="index" class="border border-gray-200 p-4 rounded-lg overflow-hidden">

      <!-- Вопрос -->
      <button class="flex justify-between items-center w-full p-4 text-left bg-white " @click="toggle(index)"
        :aria-expanded="openIndex === index">
        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.question }}</span>
        <svg class="w-5 h-5 text-gray-500"
          :class="{ 'rotate-180': openIndex === index }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Ответ -->
      <div v-show="openIndex === index"
        class="pt-4 px-4 text-gray-600"
        v-html="item.answer"></div>
    </div>
  </div>
</template>