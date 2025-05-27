<template>
  <a :href="href"
    class="block rounded-lg no-underline text-gray-900 dark:text-gray-100 hover:**:data-title:text-orange-600 hover:**:data-image:shadow-lg hover:**:data-image:outline-0 hover:**:data-number:-translate-y-2"
    target="_blank" rel="noopener noreferrer">
    <div
      class="relative overflow-hidden mb-2 min-h-24 rounded-2xl outline outline-stone-100 transition-all duration-300 ease-in-out"
      data-image>
      <img :src="image" :alt="title" class="w-full h-auto object-cover" />
      <div
        class="absolute left-3 -bottom-2 text-4xl font-bold italic leading-10 text-stone-900 stroke-stone-100 text-stroke transition-transform duration-300 ease-in-out"
        data-number>
        {{ number }}
      </div>
    </div>
    <div class="m-0 px-3">
      <h3
        class="mb-0 text-sm font-medium text-stone-900 dark:text-gray-300 transition-colors duration-300 ease-in-out"
        data-title>
        {{ title }}
      </h3>
      <p class="m-0 text-sm font-normal text-stone-600 dark:text-stone-300">
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
  number: {
    type: Number,
    required: false
  }
})
</script>

<style scoped>
.text-stroke {
  text-shadow:
    -1px -1px 0 whitesmoke,
    1px -1px 0 whitesmoke,
    -1px 1px 0 whitesmoke,
    1px 1px 0 whitesmoke;
}
</style>