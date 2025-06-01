<template>
  <a :href="href"
    class="block rounded-lg no-underline hover:**:data-title:text-rose-600 hover:**:data-image:shadow-lg"
    target="_blank" rel="noopener noreferrer">
    <div
      class="overflow-hidden mb-2 rounded-2xl transition-all duration-300 ease-in-out"
      data-image>
      <img :src="image" :alt="title" class="w-15 h-15 object-cover" />
    </div>
    <div class="m-0 px-1">
      <h3
        class="mb-0 text-sm font-medium text-stone-900 transition-colors duration-300 ease-in-out"
        data-title>
        {{ title }}
      </h3>
      <p class="m-0 text-sm font-normal text-stone-600">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: [String, Object],
    required: true
  },
  href: {
    type: String,
    required: true
  },
})
</script>