<template>
  <div class="flex flex-col mt-4 gap-3">
    <span v-if="level" class="text-gray-500">Уровень: {{ level }}</span>
    <span v-if="theme" class="text-gray-500">Тема: {{ theme }}</span>
  </div>
</template>

<script setup>
  defineProps({
    level: String,
    theme: String
  })
</script>