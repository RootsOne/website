<template>
    <section class=" h-full text-white body-font w-full max-w-full pb-10 md:pb-0 pt-4">
        <GlobalEvents v-if="activeSection === 'portfolio'" @keydown.up="scrollXByY($event)"
            @keydown.left="scrollXByY($event)" @keydown.down="scrollXByY($event)" @keydown.right="scrollXByY($event)"
            target="window" />
        <div class="w-full max-w-full h-full"
            @wheel.stop="handleScroll($event, { prev: async (event) => scrollXByY(event), next: async (event) => scrollXByY(event), axis: ['y'], timeout: willNavigate ? null : 0 })">
            <Heading title="Portfolio" desc="" />
            <div ref="scrollContainer" @swipe.left="scrollXByY($event)" @swipe.right="scrollXByY($event)"
                @wheel="handleScroll($event, { prev: async (event) => scrolled(event), next: async (event) => scrolled(event), axis: ['x'] })"
                class="pt-6 sm:pt-8 md:pt-6 px-8 md:pl-24 lg:pl-16 w-full flex flex-nowrap overflow-x-scroll no-scrollbar space-x-10 sm:space-x-20 md:space-x-40 flex-grow h-full">
                <PortfolioItem class="max-w-lg w-full" v-for="item in portfolioItems" :image="item.image"
                    :title="item.title" :desc="item.desc" :authorName="item.authorName" :authorImage="item.authorImage"
                    :authorTitle="item.authorTitle" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useScroll } from '@vueuse/core';
import { GlobalEvents } from 'vue-global-events'
import { handleScroll, Navigation } from '~/lib/utils';

const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();
const scrollContainer = ref(null);
const { x, arrivedState, isScrolling } = useScroll(scrollContainer);
const { left, right, top, bottom } = toRefs(arrivedState)
const scrollXByY = (event: Event) => {
    x.value += event instanceof WheelEvent ? event.deltaY : 0;
    scrolled(event);
}

let willNavigate = false;
const scrolled = (event?: Event) => {
    if (!willNavigate && event instanceof WheelEvent) {
        if (right.value && (event.deltaY > 0 || event.deltaX > 0)) {
            willNavigate = true;
        } else if (left.value && (event.deltaY < 0 || event.deltaX < 0)) {
            willNavigate = true;
        }
        return;
    }

    if (willNavigate && right.value) {
        willNavigate = false;
        Navigation.next();
    } else if (willNavigate && left.value) {
        willNavigate = false;
        Navigation.prev();
    } else {
        willNavigate = false;
        return;
    }
}

const portfolioItems = [
    {
        image: '/img/around.png',
        title: 'Around',
        desc: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90\'s microdosing.Tacos pinterest fanny pack venmo, post - ironic heirloom try-hard pabst authentic iceland.',
        authorName: 'Mohammad Khaksarmadani',
        authorImage: '/img/users/mohammad-khaksarmadani-4FDsNcCR8iQ-unsplash.jpg',
        authorTitle: 'CTO Around',
    },
    {
        image: '/img/norway_visit.png',
        title: 'Norway Visit',
        desc: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90\'s microdosing.Tacos pinterest fanny pack venmo, post - ironic heirloom try-hard pabst authentic iceland.',
        authorName: 'Jake Nackos',
        authorImage: '/img/users/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
        authorTitle: 'CEO App Inspiration',
    },
    {
        image: '/img/app_inspiration.jpg',
        title: 'Think Loud',
        desc: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90\'s microdosing.Tacos pinterest fanny pack venmo, post - ironic heirloom try-hard pabst authentic iceland.',
        authorName: 'Mona Lisa',
        authorImage: '/img/users/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
        authorTitle: 'Founder Think Loud',
    },
    {
        image: '/img/around.png',
        title: 'Around',
        desc: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90\'s microdosing.Tacos pinterest fanny pack venmo, post - ironic heirloom try-hard pabst authentic iceland.',
        authorName: 'Mohammad Khaksarmadani',
        authorImage: '/img/users/mohammad-khaksarmadani-4FDsNcCR8iQ-unsplash.jpg',
        authorTitle: 'CTO Around',
    },
];

</script>
