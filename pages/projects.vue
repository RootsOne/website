<template>
    <div class="hero container mx-auto px-4" ref="hero">
        <div class="pt-6 pb-16 flex flex-wrap justify-around">
            <div class="w-full md:w-1/2 self-end pb-10 order-2 md:order-1 pt-10 md:pt-0">
                <h1 class="text-4xl md:text-6xl font-extrabold flex flex-col">
                    <span class="text-sky-300 staggared">
                        {{ $t('over_20_years') }}
                    </span>
                </h1>
                <p class="text-gray-500 text-xl pt-6 staggared">
                    {{ $t('projects_description_detail') }}
                </p>
                <div class="pt-10 flex">
                    <NuxtLink :to="localePath('about') + '#contact_us'"
                        class="text-white bg-secondary py-3 px-5 justify-center items-center rounded-lg staggared">
                        {{ $t('join_the_revolution') }}
                    </NuxtLink>
                </div>
            </div>
            <div class="w-full md:w-1/2 pl-10 flex order-1 md:order-2 relative px-10">
                <div
                    class="w-full max-w-lg mx-auto h-auto bg-blend-luminosity mix-blend-luminosity bg-cover bg-[url('/images/projcets.png')] relative img">
                    <div class="absolute w-full h-full"
                        style="background: radial-gradient(63.76% 63.20% at 52.24% 50.00%, rgba(238, 242, 255, 0.00) 0%, rgba(238, 242, 255, 0.47) 48.10%, #EEF2FF 100%);">
                    </div>
                </div>
            </div>
        </div>
        <LogoCloud class="pb-11 sm:pb-11 pt-20" />
    </div>
    <div class="bg-white py-24">
        <div class="container mx-auto px-4">
            <masonry-wall :items="[
                'https://source.unsplash.com/random/?code',
                'https://source.unsplash.com/random/?netflix',
                'https://source.unsplash.com/random/600x700/?+google+home+smart',
                'https://source.unsplash.com/random/?amazon+alexa',
                'https://source.unsplash.com/random/900x600/?etherum+crypto',
                'https://source.unsplash.com/random/?stranger+things',
                'https://source.unsplash.com/random/?apple+macos+osx',
                'https://source.unsplash.com/random/?app',
                'https://source.unsplash.com/random/600x700/?banking+app',
                'https://source.unsplash.com/random/?banking',
                'https://source.unsplash.com/random/?analytics',
                'https://source.unsplash.com/random/?pinterest',
                'https://source.unsplash.com/random/?artifical+intelligence',
                'https://source.unsplash.com/random/?football',
            ]" :gap="16">
                <template #default="{ item, index }">
                    <img loading="lazy" class="w-auto h-auto rounded-lg shadow cursor-pointer" :src="item" alt="" srcset=""
                        @click="showItemDetails(item)" />
                </template>
            </masonry-wall>
        </div>
    </div>
    <TransitionRoot appear :show="!!detailedItem" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md max-h-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                            </DialogTitle>
                            <img class="w-full h-auto max-h-96 object-cover object-top" :src="detailedItem" alt="" />
                            <div class="p-8">
                                <h2 class="text-3xl font-extrabold text-sky-300">
                                    Coinview
                                </h2>
                                <h3 class="text-indigo-700 text-lg uppercase font-semibold pt-0">
                                    SWIRL LLC
                                </h3>
                                <p class="text-base text-gray-500 pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen ipsum risus, lacinia
                                    id
                                    tempor id, feugiat eget massa. Morbi congue tempus porta. Sed varius risus et est
                                    luctus
                                    accumsan. Nullam aliquam iaculis nunc ac molestie. Quisque quis quam et sem sodales
                                    vehicula sed nec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque ipsum risus, lacinia id tempor id, feugiat eget assa. Morbi congue
                                    tempus
                                    porta. Sed varius risus et est luctus asan. Nullam aliquam iaculis nunc ac molestie.
                                    Quisque quis quam et sem sodales vehicula sed nec ipsum.
                                </p>
                                <div class="flex justify-end pt-8">
                                    <button
                                        class="text-white text-base bg-primary py-2 px-3 flex justify-center items-center rounded-lg">
                                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M13.5 5H5.25C4.65326 5 4.08097 5.23705 3.65901 5.65901C3.23705 6.08097 3 6.65326 3 7.25V17.75C3 18.3467 3.23705 18.919 3.65901 19.341C4.08097 19.7629 4.65326 20 5.25 20H15.75C16.3467 20 16.919 19.7629 17.341 19.341C17.7629 18.919 18 18.3467 18 17.75V9.5M7.5 15.5L21 2M21 2H15.75M21 2V7.25"
                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        {{ $t('open_app') }}
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue';
import { inView, heroInView } from '../utils';

const localePath = useLocalePath();
const emit = defineEmits<{
    (e: 'bg', value: string): void
}>();
emit('bg', 'bg-indigo-50');

const hero = ref<HTMLElement | null>(null);

heroInView(hero);

const detailedItem = ref('');
function showItemDetails(item: string) {
    detailedItem.value = item;
}

function closeModal() {
    detailedItem.value = ''
}

</script>
<style>
</style>
