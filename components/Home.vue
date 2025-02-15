<template>
    <section class="max-w-screen-2xl mx-auto h-full w-full" @scroll.prevent.stop="handleScroll"
        @wheel.prevent.stop="handleScroll($event, { timeout: 3000 })">
        <div
            class="h-full w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center px-5 sm:px-9 lg:pr-0 xl:px-14 pb-10 lg:pb-0 2xl:pt-10">
            <div
                class="w-full lg:w-3/5 xl:w-4/6 max-w-3xl flex flex-col justify-center text-white order-2 lg:order-1  font-proxima">
                <h1
                    class="text-4.5xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold sm:font-bold md:font-extrabold xl:font-black leading-none sm:leading-tight capitalize mb-6 font-proxima">
                    A <span class="inline-block font-proxima">coalition</span> of industry
                    leading experts
                </h1>
                <p class="text-base sm:text-lg text-gray-50 mb-8 lg:mb-10 xl:mb-16 font-proxima-alt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus
                    vel,
                    dapibus
                    viverra neque. Etiam sed finibus nulla. Pellentesque a laoreet eros. Aenean luctus mattis tellus ac
                    pellentesque. Curabitur porttitor odio vitae risus viverra tincidunt.
                </p>
                <div class="">
                    <a href="#section=services"
                        class="inline-block mx-2 text-white border-white border py-2 px-4 sm:px-6 lg:px-8 hover:bg-white hover:text-green-900 rounded-md text-base sm:text-lg">
                        Get started
                    </a>
                    <a href="#section=us&target=contact"
                        class="inline-block mx-2 border-white border py-2 px-4 sm:px-6 lg:px-8 bg-white text-green-900 hover:bg-green-900 hover:border-green-900 hover:text-white rounded-md text-base sm:text-lg">
                        Contact Us
                    </a>
                </div>
            </div>
            <div
                class="aspect-[10/8] w-full lg:w-2/5 xl:w-2/6 order-1 lg:order-2 pb-8 md:pb-10 lg:pb-0 lg:mb-20 sm:max-w-md lg:max-w-xl mx-auto lg:mx-0">
                <video ref="metalBall" @load="metalBall?.play()" autoplay loop muted
                    class="w-full h-full object-cover mx-auto -z-10" alt="" srcset="">
                    <source src="/img/Metaball_transparent_lower.webm" type="video/webm">
                    <!-- <source src="/img/Metaball_transparent_lower.mov" type='video/mp4; codecs="hvc1"'> -->
                </video>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { handleScroll } from '~/lib/utils';

const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();
const metalBall = ref<HTMLVideoElement | null>(null);
</script>
