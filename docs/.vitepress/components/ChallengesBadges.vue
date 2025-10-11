<!-- .vitepress/theme/components/TechBadge.vue -->
<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value) {
      return ['html', 'css', 'js'].includes(value.toLowerCase());
    }
  }
});

const badgeClasses = {
  html: 'text-rose-700',
  css: 'text-indigo-600',
  js: 'text-amber-500'
};

const text = {
  html: 'HTML',
  css: 'CSS',
  js: 'JS'
};

const badgeClass = badgeClasses[props.type.toLowerCase()];
const badgeText = text[props.type.toLowerCase()];
</script>

<template>
  <span class="inline-block mt-4 mr-2 text-lg font-bold" :class="badgeClass">
    {{ badgeText }}
  </span>
</template>