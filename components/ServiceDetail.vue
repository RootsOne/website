<template>
  <div
    class="w-full max-w-full flex-shrink-0 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
    <slot></slot>
    <div class="description pt-3 lg:pt-0 lg:pl-10">
      <h2 class="text-3xl font-extrabold text-white mb-3">{{ title }}</h2>
      <p class="text-gray-50 mb-3 max-w-sm xl:max-w-md text-base xl:text-lg">
        {{ desc }}
      </p>
      <a href="#service-list" class="flex items-center lg:hidden">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 11H16.5M10.0833 15.5834L5.5 11L10.0833 15.5834ZM5.5 11L10.0833 6.41669L5.5 11Z" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-sm text-white font-medium inline-block ml-2">Back to services</span>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string,
  desc: string,
}>()
</script>
