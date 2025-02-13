<template>
    <header class="w-full fixed z-30">
        <nav class="max-w-screen-2xl mx-auto flex items-center justify-center sm:justify-between flex-wrap pl-2 pr-4 sm:px-8 md:px-10 lg:px-14 2xl:px-8 py-2"
            @keydown.escape="open = false" @click.away="open = false">
            <!--Logo etc-->
            <div class="flex items-center">
                <a href="/" class="">
                    <SvgLogo class="w-20 2xl:w-20 h-20 2xl:h-20" />
                </a>
            </div>

            <!--Toggle button (hidden on large screens)-->
            <button @click.prevent.stop="open = true" type="button"
                class="mb-6 ml-auto block sm:hidden px-2 text-primary-500 hover:text-primary-500 focus:outline-none focus:text-primary-500"
                aria-label="Menu" :class="{ 'transition transform-180': open }" v-if="!open">
                <SvgMenu class="h-6 w-7 text-white" />
            </button>

            <!--Menu-->
            <div class="fixed sm:static sm:block top-0 bottom-0 left-0 right-0 bg-black sm:bg-transparent bg-opacity-30 sm:pb-6"
                @click="open = false" :class="{ 'block shadow-3xl': open, 'hidden': !open }">
                <div @click.stop
                    class="bg-black sm:bg-transparent w-full flex-grow sm:flex sm:items-center sm:w-auto text-center pt-6 sm:pt-0 max-w-xs sm:max-w-full ml-auto sm:ml-0 h-full sm:h-auto">
                    <!--Toggle button (hidden on large screens)-->
                    <button @click="open = !open" type="button" v-if="open" :class="{ 'transition transform-180': open }"
                        class="mr-2 ml-auto block lg:hidden px-2 text-primary-500 hover:text-primary-500 focus:outline-none focus:text-primary-500"
                        aria-label="Menu">
                        <SvgTimes class="h-7 w-7 text-white" />
                    </button>

                    <ul v-if="navlinks.length"
                        class="pt-6 sm:pt-0 list-reset sm:flex justify-end flex-1 items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-3">
                        <li v-for="item in navlinks" class="text-left flex border-b border-zinc-900 sm:border-0">
                            <a @click="open = false"
                                :class="item.url.includes(activeSection) && item.url.includes(activeTarget || '') ? 'text-yellow-600' : 'text-gray-50'"
                                class="text-base sm:text-sm block w-full h-full sm:inline-block no-underline hover:text-yellow-500 active:text-yellow-600 py-2 px-4"
                                :href="item.url">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- navigation buttons -->
    <div class="lg:fixed bottom-5 right-8 z-10 order-2 py-4">
        <div class="flex flex-row justify-center space-x-4 lg:space-x-2">
            <a v-for="(item, index) in buttons" :key="item.text" :href="item.url"
                :class="item.url.includes(activeSection) ? 'outline-white' : 'outline-transparent'"
                class="outline-offset-2 outline outline-1  bg-white w-2.5 h-2.5 rounded-full"></a>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();

const open = ref(false);
const links = [
    {
        url: '#section=home',
        text: 'Home',
        nav: true,
        button: true,
    },
    {
        url: '#section=why',
        text: 'Why',
        nav: false,
        button: true,
    },
    {
        url: '#section=services',
        text: 'Services',
        nav: true,
        button: true,
    },
    {
        url: '#section=portfolio',
        text: 'Portfolio',
        nav: true,
        button: true,
    },
    {
        url: '#section=us&target=about',
        text: 'About us',
        nav: true,
        button: true,
    },
    {
        url: '#section=us&target=contact',
        text: 'Contact us',
        nav: true,
        button: false,
    },
];
const navlinks = computed(() => links.filter((link) => link.nav));
const buttons = computed(() => links.filter((link) => link.button));
</script>
