<script setup>
const props = defineProps({
  types: {
    type: Array,
    required: true,
    validator(value) {
      return Array.isArray(value) && value.every(t => ['html', 'css', 'js'].includes(t.toLowerCase()));
    }
  }
});

const badgeClasses = {
  html: 'text-orange-500',
  css: 'text-blue-700',
  js: 'text-yellow-500'
};

const text = {
  html: 'HTML',
  css: 'CSS',
  js: 'JS'
};
</script>

<template>
  <span
    v-for="tech in types"
    :key="tech"
    class="inline-block mt-4 mr-2 text-lg font-bold"
    :class="badgeClasses[tech.toLowerCase()]"
  >
    {{ text[tech.toLowerCase()] }}
  </span>
</template>