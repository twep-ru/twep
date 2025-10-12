<script setup>
import { useData } from 'vitepress'
import { onMounted, nextTick, watch, ref } from 'vue'

const { page } = useData()
const isLoading = ref(true)

const loadGiscus = () => {
  isLoading.value = true
  
  // Очищаем предыдущий контент
  const existingGiscus = document.querySelector('.giscus')
  if (existingGiscus) {
    existingGiscus.innerHTML = ''
  }

  // Создаем скрипт для загрузки Giscus
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'twep-ru/twep')
  script.setAttribute('data-repo-id', 'R_kgDOOw5ecA')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOOw5ecM4CwhCW')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'ru')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  // Обработчик загрузки
  script.onload = () => {
    isLoading.value = false
  }

  script.onerror = () => {
    isLoading.value = false
    console.error('Ошибка загрузки Giscus')
  }

  // Добавляем скрипт в контейнер
  const container = document.querySelector('.giscus')
  if (container) {
    container.appendChild(script)
  }
}

onMounted(() => {
  nextTick(() => {
    loadGiscus()
  })
})

// Перезагружаем Giscus при смене страницы
watch(() => page.value.relativePath, () => {
  nextTick(() => {
    loadGiscus()
  })
})
</script>

<template>
  <div class="comments-container">
    <div v-if="isLoading" class="loading-indicator">
      <p>Загрузка комментариев...</p>
    </div>
    <div class="giscus"></div>
  </div>
</template>

<style scoped>
.comments-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.loading-indicator {
  text-align: center;
  padding: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.loading-indicator p {
  margin: 0;
}

.giscus {
  max-width: 100%;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .comments-container {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
  
  .loading-indicator {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
}
</style>