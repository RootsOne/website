<template>
    <div class="flex flex-col items-center w-full mb-4">
        <div class="w-full text-center mb-2">
            <h1 class="text-3xl font-extrabold mb-2 text-white capitalize">
                {{ title }}
            </h1>
            <div class="flex justify-center">
                <div class="h-1 w-20 bg-white rounded"></div>
                <div class="h-1 w-1 mx-2 rounded-full bg-white"></div>
            </div>
        </div>
        <p
            class="w-full max-w-screen-sm text-base px-4 sm:px-0 sm:text-xl font-normal leading-tight text-gray-50 text-center">
            {{ desc }}
        </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string,
    desc: string,
}>()
</script>
