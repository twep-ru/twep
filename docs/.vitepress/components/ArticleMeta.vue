<template>
  <div class="flex flex-col mt-4 gap-3">
    <span v-if="author" class="text-gray-500">Автор: {{ author }}</span>
    <span v-if="source" class="text-gray-500">
      Источник: <a :href="source.url" target="_blank">{{ source.name }}</a>
    </span>
  </div>
</template>

<script setup>
  defineProps({
    author: String,
    source: Object
  })
</script>