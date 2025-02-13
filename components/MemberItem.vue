<template>
  <div class="flex flex-col items-center">
    <img :src="image" alt=""
      class="object-cover object-top rounded-full w-32 sm:w-44 h-32 sm:h-44 lg:h-32 lg:w-32 border-2 border-gray-50 mb-4">
    <h2 class="text-gray-50 text-xl font-bold text-center mb-2">{{ name }}</h2>
    <h3 class="text-white text-sm font-medium text-center uppercase">{{ title }}</h3>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  image: string,
  name: string,
  title: string,
}>()
</script>
