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
  html: 'text-orange-500',
  css: 'text-blue-700',
  js: 'text-yellow-500'
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