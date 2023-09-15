<template>
    <div class="testimonials container mx-auto flex flex-wrap px-4 md:px-0 justify-around">
        <div class="w-full md:w-1/2 max-w-lg description" ref="description">
            <h4 class="text-pink-600 font-semibold uppercase text-base staggared">
                {{ $t('sucess_stories') }}
            </h4>
            <h2 class="font-extrabold flex flex-col text-sky-300 text-4xl pt-1 staggared">
                {{ $t('take_a_look_at_results') }}
            </h2>
            <p class="text-gray-500 text-xl pt-4 pb-8 border-b border-gray-200 staggared">
                {{ $t('sucess_stories_description') }}
            </p>
        </div>
        <div class="w-full md:w-1/2 max-w-2xl md:pl-10 flex justify-center items-center pt-10 md:pt-0 items" ref="items">
            <ul class="w-full flex flex-wrap space-y-8 md:space-y-0">
                <li class="w-full md:w-1/2 max-w-sm mx-auto md:mx-0 px-4 staggared">
                    <div
                        class="w-full h-96 md:h-72 rounded-lg shadow-lg relative group transition-all duration-1000 bg-cover bg-center bg-[url('https://synergy-learning.com/wp-content/uploads/2020/07/Amazon-Case-Study-Image-343x350.jpg')]">
                        <div class="bg-black bg-opacity-10 h-full w-full relative text-white rounded-lg">
                            <div
                                class="absolute bottom-0 py-4 px-4 rounded-lg group-hover:bg-indigo-600 group-hover:bg-opacity-100 group-hover:h-full transition-all duration-1000">
                                <h4 class="text-lg font-semibold w-full">
                                    {{ $t('sucess_story_1_title') }}
                                </h4>
                                <p class="h-0 overflow-hidden group-hover:h-64 duration-500 transition-all w-full">
                                    {{ $t('sucess_story_1_description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="w-full md:w-1/2 max-w-sm mx-auto md:mx-0 px-4 md:pt-16 staggared">
                    <div
                        class="w-full h-96 md:h-72 rounded-lg shadow-lg relative group transition-all duration-1000 bg-cover bg-center bg-[url('https://synergy-learning.com/wp-content/uploads/2020/07/Amazon-Case-Study-Image-343x350.jpg')]">
                        <div class="bg-black bg-opacity-10 h-full w-full relative text-white rounded-lg">
                            <div
                                class="absolute bottom-0 py-4 px-4 rounded-lg group-hover:bg-sky-400 group-hover:bg-opacity-100 group-hover:h-full transition-all duration-1000">
                                <h4 class="text-lg font-semibold w-full">
                                    {{ $t('sucess_story_2_title') }}
                                </h4>
                                <p class="h-0 overflow-hidden group-hover:h-64 duration-500 transition-all w-full">
                                    {{ $t('sucess_story_2_description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="w-full md:w-1/2 max-w-sm mx-auto md:mx-0 px-4 staggared">
                    <div
                        class="w-full h-96 md:h-72 rounded-lg shadow-lg relative group transition-all duration-1000 bg-cover bg-center bg-[url('https://synergy-learning.com/wp-content/uploads/2020/07/Amazon-Case-Study-Image-343x350.jpg')]">
                        <div class="bg-black bg-opacity-10 h-full w-full relative text-white rounded-lg">
                            <div
                                class="absolute bottom-0 py-4 px-4 rounded-lg group-hover:bg-primary group-hover:bg-opacity-100 group-hover:h-full transition-all duration-1000">
                                <h4 class="text-lg font-semibold w-full">
                                    {{ $t('sucess_story_3_title') }}
                                </h4>
                                <p class="h-0 overflow-hidden group-hover:h-64 duration-500 transition-all w-full">
                                    {{ $t('sucess_story_3_description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="w-full md:w-1/2 max-w-sm mx-auto md:mx-0 px-4 md:pt-16 staggared">
                    <div
                        class="w-full h-96 md:h-72 rounded-lg shadow-lg relative group transition-all duration-1000 bg-cover bg-center bg-[url('https://synergy-learning.com/wp-content/uploads/2020/07/Amazon-Case-Study-Image-343x350.jpg')]">
                        <div class="bg-black bg-opacity-10 h-full w-full relative text-white rounded-lg">
                            <div
                                class="absolute bottom-0 py-4 px-4 rounded-lg group-hover:bg-pink-600 group-hover:bg-opacity-100 group-hover:h-full transition-all duration-1000">
                                <h4 class="text-lg font-semibold w-full">
                                    {{ $t('sucess_story_4_title') }}
                                </h4>
                                <p class="h-0 overflow-hidden group-hover:h-64 duration-500 transition-all w-full">
                                    {{ $t('sucess_story_4_description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { animate, stagger, timeline } from "motion";
import { inView } from '../utils';
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize();
const margin = `0px 0px -${0.5 * height.value}px 0px`;
const description = ref<HTMLElement>();
const items = ref<HTMLElement>();

inView(description, ({ target }) => {
    timeline(
        [
            [
                target.querySelectorAll('.staggared'),
                { opacity: [0, 1], transform: ['translateY(100px)', 'none'] },
                { at: 0, delay: stagger(0.2, { start: 0 }), duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    rootMargin: margin,
});

inView(items, ({ target }) => {
    timeline(
        [
            [
                target.querySelectorAll('li.staggared'),
                { opacity: [0, 1], transform: ['translateY(100px)', 'none'] },
                { at: 0, delay: stagger(0.2, { start: 0 }), duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    rootMargin: margin,
});
</script>
