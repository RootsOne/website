<template>
    <section ref="scrollContainer"
        class="h-full max-h-full text-white body-font w-full max-w-full flex pt-6 sm:pt-20 lg:pt-8 overflow-x-scroll no-scrollbar pb-10 sm:pb-0"
        @mousewheel.stop="onWheel">
        <GlobalEvents v-if="activeSection === 'us'" @keydown.up="scroll(-100)" @keydown.left="scroll(-100)"
            @keydown.down="scroll(100)" @keydown.right="scroll(100)" target="window" />
        <div class="shrink-0 flex flex-col lg:flex-row max-w-full pl-6 sm:pl-8 md:pl-12 lg:pl-0 pr-4 sm:pr-0 ">
            <div id="about" ref="about" class="pl-4 lg:pl-4 sm:flex-shrink-0 maw-x-full">
                <SvgLogoFull class="w-64 sm:w-80 xl:w-96 h-auto mb-4 relative lg:static -left-10 sm:-left-20 -z-10" />
                <h6 class="lg:text-center text-white text-sm xl:text-lg font-medium mb-3">
                    © {{ new Date().getFullYear() }}, All rights reserved.
                </h6>
                <SocialLinks />
            </div>
            <div
                class="pt-10 lg:pt-10 lg:pl-10 2xl:pl-16 text-sm sm:text-base md:text-lg xl:text-xl font-normal text-white w-full max-w-md sm:max-w-lg xl:max-w-2xl sm:flex-shrink-0">
                <p>
                    We are a Digital Agency Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non elementum
                    ligula.
                    Praesent cursus nunc mollis blandit iaculis. Quisque vulputate, ligula eget blandit convallis, sapien
                    quam
                    ultricies ante, sit amet luctus lacus urna sit amet dolor. Quisque aliquet massa quis mattis lobortis.
                    Curabitur
                    laoreet varius turpis, a molestie tortor porta eget. Mauris aliquet sagittis volutpat. Cras a purus eget
                    sem
                    porta tincidunt.
                </p>
                <h6 class="text-white text-base 2xl:text-lg font-bold pt-5 pb-3 uppercase">
                    partners
                </h6>
                <p></p>
            </div>
        </div>
        <div class=" flex-shrink-0 pl-20 md:pl-24 xl:pl-36">
            <h1 class="text-white text-2xl font-bold mb-12 lg:mb-8">Team</h1>
            <div class="grid gap-x-24 lg:gap-x-20 xl:gap-x-24 gap-y-10 grid-rows-2 grid-cols-2 2xl:flex 2xl:space-x-24">
                <MemberItem v-for="item in members" :name="item.name" :title="item.title" :image="item.image" />
            </div>
        </div>
        <div id="contact" ref="contact" class=" flex-shrink-0 ml-24 xl:ml-36 mr-0 w-screen lg:w-auto px-6 ">
            <h1 class="text-white text-2xl font-bold mb-4">Contact Us</h1>
            <div class="w-full max-w-3xl h-auto relative mb-3">
                <img class="w-full h-auto rounded" src="/img/map.png" alt="">
                <div
                    class="flex-wrap space-y-6 sm:space-y-0 bg-gray-900 bg-opacity-50 rounded mt-6 sm:mt-0 px-5 py-3 sm:absolute bottom-3 left-5 right-5 flex justify-between">
                    <div class="sm:max-w-52">
                        <h3 class="text-white text-base font-bold uppercase">ADDRESS</h3>
                        <p class="text-gray-50 text-sm font-normal">
                            PI and Ju College, Biteng - Maetur
                            Yaounde, Cameroon
                        </p>
                    </div>
                    <div>
                        <h3 class="text-white text-base font-bold uppercase">email</h3>
                        <p class="text-gray-50 text-sm font-medium ">
                            info@roots.cm
                        </p>
                    </div>
                    <div>
                        <h3 class="text-white text-base font-bold uppercase">mobile</h3>
                        <p class="text-gray-50 text-sm font-normal ">
                            +237 698-298-873
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-fit">
                <SocialLinks />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { GlobalEvents } from 'vue-global-events'

const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();

const scrollContainer = ref(null);
const { x } = useScroll(scrollContainer);
const onWheel = (event: WheelEvent) => {
    scroll(event.deltaY);
}
const scroll = (offset: number) => {
    console.log(x.value);
    x.value += offset;
}
const contact = ref(null);
const about = ref(null);
const members = [
    {
        name: 'Scott Matson',
        title: 'UI/UX Designer',
        image: '/img/users/stefan-stefancik-QXevDflbl8A-unsplash.jpg',
    },
    {
        name: 'James Holman',
        title: 'developer / copywriter',
        image: '/img/users/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
    },
    {
        name: 'Helene Cruz',
        title: 'Marketing expert',
        image: '/img/users/mohammad-khaksarmadani-4FDsNcCR8iQ-unsplash.jpg',
    },
    {
        name: 'Xiang Ying',
        title: 'CTO',
        image: '/img/users/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
    },
];
</script>
