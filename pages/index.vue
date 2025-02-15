<template>
    <div class="hero container mx-auto px-4 sm:px-0" ref="hero">
        <div class="pt-6 pb-16 flex flex-wrap justify-around">
            <div class="w-full md:w-3/5 self-end pb-10 order-2 md:order-1 pt-10 md:pt-0">
                <h1 class="text-4xl md:text-6xl font-extrabold flex flex-col">
                    <span class="text-primary staggered">
                        {{ $t('leading_digital_revolution') }}
                    </span>
                    <span class="text-sky-300 staggered">
                        {{ $t('with_quality_change') }}.
                    </span>
                </h1>
                <p class="text-gray-500 text-xl pt-6 staggered">
                    {{ $t('hero_text') }}
                </p>
                <div class="pt-10 flex">
                    <NuxtLink :to="localePath('about') + '#contact_us'"
                        class="text-white bg-secondary py-3 px-5 justify-center items-center rounded-lg staggered">
                        {{ $t('join_the_revolution') }}
                    </NuxtLink>
                </div>
            </div>
            <div class="w-full md:w-2/5 pl-10 flex order-1 md:order-2">
                <img format="webp" preload class="w-full max-w-lg h-auto img" src="/images/smart_city_3d.png" alt="" />
            </div>
        </div>
    </div>
    <div class="bg-white py-24">
        <div class="container mx-auto px-4">
            <div id="features-1" class="features flex flex-wrap justify-around">
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 order-2 md:order-1 pt-10 md:pt-0 one"
                    ref="features11">
                    <h2 class="font-extrabold flex flex-col text-indigo-700 text-4xl">
                        {{ $t('e_learning') }}
                    </h2>
                    <h4 class="text-primary font-semibold uppercase text-base pt-1">
                        {{ $t('the_right_way') }}
                    </h4>
                    <p class="text-gray-500 text-xl pt-1 pb-8 border-b border-gray-200">
                        {{ $t('e_learning_description') }}
                    </p>
                    <ul class="pt-8 space-y-4">
                        <ListCircleItem v-for="item in [
                            $t('tailor_made_e_learning'),
                            $t('private_e_learning'),
                            $t('e_learning_infrastructure'),
                            $t('laahtech_academy'),
                        ]" :key="item" :title="item" />
                    </ul>
                </div>
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 md:pl-10 flex order-1 md:order-2 two"
                    ref="features12">
                    <img format="webp" preload class="w-auto h-auto" src="/images/elearning_images.png" alt="" />
                </div>
            </div>
            <div id="features-2" class="features flex flex-wrap pt-20 justify-around">
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 md:pl-10 flex two" ref="features22">
                    <div id="picart" class="relative w-full">
                        <img format="webp" preload class="w-full max-w-lg h-auto" src="/images/framework_logos.png"
                            alt="framework logos" />
                    </div>
                </div>
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 one" ref="features21">
                    <h2 class="font-extrabold flex flex-col text-indigo-700 text-4xl">
                        {{ $t('digitalisation') }}
                    </h2>
                    <h4 class="text-primary font-semibold uppercase text-base pt-1">
                        {{ $t('made_easy') }}
                    </h4>
                    <p class="text-gray-500 text-xl pt-1 pb-8 border-b border-gray-200">
                        {{ $t('digitalisation_description') }}
                    </p>
                    <ul class="pt-8 space-y-4">
                        <ListCircleItem v-for="item in [
                            $t('custom_web_solutions'),
                            $t('bring_your_own_stack'),
                            $t('specification_engineering'),
                            $t('embedded_systems'),
                            $t('smart_devices'),
                        ]" :key="item" :title="item" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto py-20 px-4 flex flex-wrap justify-around projects">
        <div class="w-full md:w-1/2 max-w-xl mx-auto md:mx-0 description" ref="description">
            <h4 class="text-primary font-semibold uppercase text-base staggered">
                {{ $t('projects') }}
            </h4>
            <h2 class="font-extrabold flex flex-col text-indigo-700 text-4xl pt-1 staggered">
                {{ $t('over_20_years') }}
            </h2>
            <p class="text-gray-500 text-xl pt-4 pb-6 mb-6 border-b border-gray-200 staggered">
                {{ $t('projects_description') }}
            </p>
            <NuxtLink :to="localePath('/projects')" class="text-sky-500 hover:text-sky-600 flex items-center staggered">
                {{ $t('explore_all') }}
                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                    fill="none">
                    <path d="M14 8.00001H2H14Z" fill="#0EA5E9" />
                    <path d="M9.33333 3.33334L14 8.00001M14 8.00001L9.33333 12.6667M14 8.00001H2" stroke="#0EA5E9"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NuxtLink>
        </div>
        <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 md:pl-10 px-10 md:pr-0 flex justify-center items-center pt-10 md:pt-0 slides"
            ref="slides">
            <Swiper :navigation="true" :effect="'cards'" :grabCursor="true" :modules="modules"
                class="w-full max-w-full xl:max-w-xl h-auto aspect-video flex-grow px-4">
                <SwiperSlide class="w-full rounded-xl">
                    <img format="webp" preload class="w-full h-full object-cover object-center"
                        src="/images/fliger_project.png" alt="" />
                </SwiperSlide>
                <SwiperSlide class="w-full rounded-xl">
                    <img format="webp" preload class="w-full h-full object-cover object-center"
                        src="/images/fliger_project_2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide class="w-full rounded-xl">
                    <img format="webp" preload class="w-full h-full object-cover object-center"
                        src="/images/fliger_project_3.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <div class="bg-white py-24">
        <Testimonials />
    </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { animate, stagger, timeline } from "motion";
import { inView, heroInView } from '../lib/utils';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const modules = [EffectCards, Navigation];
const localePath = useLocalePath();
const emit = defineEmits<{
    (e: 'bg', value: string): void
}>();
emit('bg', 'bg-sky-50');

const features11 = ref<HTMLElement[] | null>(null);
const features12 = ref<HTMLElement[] | null>(null);
const features21 = ref<HTMLElement[] | null>(null);
const features22 = ref<HTMLElement[] | null>(null);
const description = ref<HTMLElement[] | null>(null);
const slides = ref<HTMLElement[] | null>(null);
const hero = ref<HTMLElement | null>(null);

heroInView(hero);
inView([features11, features21], ({ target }) => {
    timeline(
        [
            [
                target,
                { opacity: [0, 1], transform: ['translateX(-100px)', 'none'] },
                { at: 0, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
            [
                target.querySelectorAll('.staggered'),
                { opacity: [0, 1], transform: ['translateY(50px)', 'none'] },
                { at: 0.5, delay: stagger(0.1, { start: 0 }), duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.9,
});

inView([features12, features22], ({ target }) => {
    timeline(
        [
            [
                target,
                { opacity: [0, 1], transform: ['translateX(100px)', 'none'] },
                { at: 0, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
            [
                target.querySelectorAll('.staggered'),
                { opacity: [0, 1], transform: ['translateY(50px)', 'none'] },
                { at: 0.5, delay: stagger(0.1, { start: 0 }), duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.9,
});

inView(description, ({ target }) => {
    timeline(
        [
            [
                target.querySelectorAll('.staggered'),
                { opacity: [0, 1], transform: ['translateY(60px)', 'none'] },
                { at: 0, delay: stagger(0.2, { start: 0 }), duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.9,
});

inView(slides, ({ target }) => {
    timeline(
        [
            [
                target,
                { opacity: [0, 1], transform: ['rotate(30deg)', 'none'] },
                { at: 0, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.9,
});


</script>
<style>
:root {
    --swiper-navigation-size: 20px;
    --swiper-navigation-sides-offset: -50px;
}
</style>
