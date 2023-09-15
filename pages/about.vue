<template>
    <div class="hero container mx-auto px-4 sm:px-0" ref="hero">
        <div class="pt-6 pb-16 flex flex-wrap justify-around">
            <div class="w-full md:w-3/5 self-end pb-10 order-2 md:order-1 pt-10 md:pt-0">
                <h1 class="text-4xl md:text-6xl font-extrabold flex flex-col">
                    <span class="text-primary staggared">
                        {{ $t('about_hero_title_1') }} <br>
                        {{ $t('about_hero_title_2') }}
                    </span>
                </h1>
                <p class="text-gray-500 text-xl pt-6 staggared">
                    {{ $t('about_description') }}
                </p>
                <div class="pt-10 flex">
                    <NuxtLink :to="localePath('about') + '#contact_us'"
                        class="text-white bg-secondary py-3 px-5 justify-center items-center rounded-lg staggared">
                        {{ $t('join_the_revolution') }}
                    </NuxtLink>
                </div>
            </div>
            <div class="w-full md:w-2/5 pl-10 flex justify-center items-center order-1 md:order-2">
                <img format="webp" preload class="w-full max-w-xs h-auto img" src="/images/team.png" alt="" />
            </div>
        </div>
    </div>
    <div class="bg-gray-50 py-24">
        <div class="features container mx-auto px-4">
            <div class="flex flex-wrap justify-around items-center">
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 md:pl-10 flex items-center justify-center one"
                    ref="features11">
                    <img format="webp" preload class="w-full max-w-lg h-auto" src="/images/smart_city_3d.png"
                        alt="framework logos" />
                </div>
                <div class="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 two" ref="features12">
                    <h2 class="font-extrabold flex flex-col text-indigo-700 text-4xl capitalize">
                        {{ $t('our_vision') }}
                    </h2>
                    <h4 class="text-primary font-semibold uppercase text-base pt-1">
                        {{ $t('how_it_all_begun') }}
                    </h4>
                    <p class="text-gray-500 text-xl pt-1">
                        {{ $t('our_vision_description') }}
                        <br>
                        <br>
                        {{ $t('how_it_all_begun_description') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white pb-11 pt-11">
        <div class="container mx-auto px-4">
            <LogoCloud :title="$t('our_partners')" />
            <Testimonials class="pt-24" />
        </div>
    </div>
    <div id="contact_us" class="bg-gray-50 py-24">
        <div class="features container mx-auto px-4 flex flex-wrap">
            <div class="md:w-1/2 two" ref="features22">
                <h2 class="font-extrabold flex flex-col text-indigo-700 text-4xl capitalize">
                    {{ $t('contact_us') }}
                </h2>
                <h4 class="text-primary font-medium uppercase text-base pt-1">
                    {{ $t('we_are_one_click_away') }}
                </h4>
                <p class="text-xl text-gray-500  pt-2">
                    {{ $t('contact_us_description') }}
                </p>
                <div class="bg-sky-50 border border-gray-100 rounded-2xl space-y-5 mt-8 p-9 shadow-sm">
                    <div class="">
                        <h2 class="title-font font-semibold text-primary tracking-widest text-lg uppercase">
                            {{ $t('address') }}
                        </h2>
                        <p class="mt-1 flex items-start text-gray-500 font-normal text-xl">
                            <MapPinIcon class="h-7 w-7 text-gray-700 mr-2.5 flex-shrink-0" />
                            Unit 18, The Innovation CentreQueen’s RoadBelfast - Cameroon
                        </p>
                    </div>
                    <div class="">
                        <h2 class="title-font font-semibold text-primary tracking-widest text-lg uppercase">
                            {{ $t('contact') }}
                        </h2>
                        <p class="mt-1 flex items-center text-gray-500 font-normal text-xl">
                            <PhoneArrowUpRightIcon class="h-6 w-6 text-gray-700 mr-2.5 flex-shrink-0" />
                            <a class="" href="tel:+237 698 298 873">
                                +237 698 298 873
                            </a>
                        </p>
                        <p class="mt-4 flex items-center text-gray-500 font-normal text-xl">
                            <EnvelopeIcon class="h-6 w-6 text-gray-700 mr-2.5 flex-shrink-0" />
                            <a class="underline" href="mailto:info@laahtech.com">
                                info@laahtech.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 md:pl-16 one" ref="features21">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    {{ $t('tell_us_what_is_on_your_mind') }}
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                    {{ $t('tell_us_description') }}
                </p>
                <div class="relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                        {{ $t('name') }}
                    </label>
                    <input type="text" id="name" name="name"
                        class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                        {{ $t('email') }}
                    </label>
                    <input type="email" id="email" name="email"
                        class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-600">
                        {{ $t('message') }}
                    </label>
                    <textarea id="message" name="message"
                        class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button
                    class="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    {{ $t('send') }}
                </button>
                <p class="text-xs text-gray-500 mt-3">
                    {{ $t('we_keep_your_data_safe_and_anonymous') }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { EnvelopeIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/vue/24/outline';
import { animate, stagger, timeline } from "motion";
import { inView, heroInView } from '../utils';


const localePath = useLocalePath();
const emit = defineEmits<{
    (e: 'bg', value: string): void
}>();
emit('bg', 'bg-indigo-50');

const features11 = ref<HTMLElement[] | null>(null);
const features12 = ref<HTMLElement[] | null>(null);
const features21 = ref<HTMLElement[] | null>(null);
const features22 = ref<HTMLElement[] | null>(null);
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
                target.querySelectorAll('.staggared'),
                { opacity: [0, 1], transform: ['translateY(50px)', 'none'] },
                { at: 0.5, delay: stagger(0.1, { start: 0 }), duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.8,
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
                target.querySelectorAll('.staggared'),
                { opacity: [0, 1], transform: ['translateY(50px)', 'none'] },
                { at: 0.5, delay: stagger(0.1, { start: 0 }), duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
            ],
        ],
        { delay: 0, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
    );
}, {
    threshold: 0.5,
});
</script>
<style>
</style>
