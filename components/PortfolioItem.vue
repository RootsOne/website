<template>
  <div class="max-w-lg w-full flex-shrink-0 flex flex-col">
    <img alt="content" class="object-cover object-center max-w-full aspect-video sm:h-80 w-full sm:w-auto mb-5"
      :src="image">
    <h3 class="text-xl text-white font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-50 font-medium text-sm mb-4">
      {{ desc }}
    </p>
    <div class="flex items-center">
      <img :src="authorImage" alt="" class="object-cover object-top rounded-full w-12 h-12 border-2 border-gray-50">
      <div class="ml-4">
        <h4 class="text-base text-white font-medium">{{ authorName }}</h4>
        <h5 class="text-sm text-white font-light uppercase">{{ authorTitle }}</h5>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  image: string,
  title: string,
  desc: string,
  authorImage: string,
  authorName: string,
  authorTitle: string,
}>()
</script>
