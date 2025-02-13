<template>
    <section class=" h-full text-white body-font w-full max-w-full pb-10 md:pb-0 pt-4">
        <GlobalEvents v-if="activeSection === 'portfolio'" @keydown.up="scroll(-100)" @keydown.left="scroll(-100)"
            @keydown.down="scroll(100)" @keydown.right="scroll(100)" target="window" />
        <div class="w-full max-w-full">
            <Heading title="Portfolio" desc="" />
            <div ref="scrollContainer" @mousewheel.stop="onWheel" @swipe.left="scroll(-100)" @swipe.right="scroll(100)"
                class="pt-6 sm:pt-8 md:pt-6 px-8 md:pl-24 lg:pl-16 w-full flex flex-nowrap overflow-x-scroll no-scrollbar space-x-10 sm:space-x-20 md:space-x-40">
                <PortfolioItem class="max-w-lg w-full" v-for="item in portfolioItems" :image="item.image"
                    :title="item.title" :desc="item.desc" :authorName="item.authorName" :authorImage="item.authorImage"
                    :authorTitle="item.authorTitle" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useScroll, useElementSize } from '@vueuse/core';
import { GlobalEvents } from 'vue-global-events'

const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();
const scrollContainer = ref(null);
const { x } = useScroll(scrollContainer);
const { width, height } = useElementSize(scrollContainer);
const onWheel = (event: WheelEvent) => {
    scroll(event.deltaY);
}
const scroll = (offset: number) => {
    const isZero = x.value === 0;
    if (width.value - x.value) {
        console.log('sliding');
    }
    x.value += offset;
    console.log(width.value, height.value, x.value);
    if (isZero && x.value === 0) {
        console.log('sliding');
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
