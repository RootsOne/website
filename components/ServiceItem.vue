<template>
  <a href="#{{link}}" class="flex flex-col lg:flex-row items-center w-1/2 sm:w-1/3 lg:w-auto mb-7 sm:mb-0"
    title="Details">
    <h2 class="text-gray-50 text-xl lg:font-normal mt-2 lg:ml-5 text-center sm:text-left">{{ title }}</h2>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  link: string,
  title: string,
}>()
</script>
