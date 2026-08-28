<script setup>
import { ref } from 'vue'
import faqItems from '../data/ChallengesAccordion.json'

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="faq-accordion">
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="faq-item"
      :class="{ 'is-open': openIndex === index }"
    >
      <!-- Вопрос -->
      <button
        class="faq-question"
        @click="toggle(index)"
        :aria-expanded="openIndex === index"
      >
        <span class="faq-question-text">{{ item.question }}</span>
        <svg
          class="faq-icon"
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
        class="faq-answer"
        v-html="item.answer"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.faq-item {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.25s, background-color 0.25s;
}

.faq-item:hover {
  border-color: var(--vp-c-brand-1);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.25rem;
  text-align: left;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.faq-question:hover {
  color: var(--vp-c-brand-1);
}

.faq-question-text {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
}

.faq-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.25s ease;
}

.faq-icon.rotate-180 {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0.75rem 1.25rem 1.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.6;
  border-top: 1px solid var(--vp-c-divider);
}
</style>