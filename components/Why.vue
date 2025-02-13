<template>
    <section
        class=" flex h-full overflow-x-scroll no-scrollbar md:overflow-hidden text-white body-font pb-10 lg:pb-0 px-8 sm:px-9 lg:px-14 lg:pt-8 xl:pt-8">
        <div class="w-full max-w-lg md:max-w-screen-xl mx-auto relative flex flex-col justify-center items-center pb-10">
            <Heading title="Why us"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque." />
            <div
                class="w-full overflow-x-hidden flex md:flex-wrap justify-between lg:items-center md:w-full mx-auto text-center md:space-y-0 pt-4 2xl:pt-8 ">
                <div id="secured" ref="secured" class="p-4 shrink-0 w-full md:w-1/3 md:max-w-xs">
                    <div class="rounded-lg  mx-auto overflow-hidden flex items-center justify-center -mb-4">
                        <img alt="content" class="w-40 2xl:w-48 aspect-square relative left-6 object-cover object-center"
                            src="/img/Security-icon.png">
                    </div>
                    <h2 class="text-3xl font-extrabold mt-5 font-proxima">
                        Secured
                    </h2>
                    <p class="text-base leading-relaxed text-gray-50 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus
                        vel,
                        dapibus viverra neque.
                    </p>
                </div>
                <div id="personalized" ref="personalized" class="p-4 shrink-0 w-full md:w-1/3 md:max-w-xs">
                    <div class="rounded-lg mx-auto overflow-hidden flex items-center justify-center">
                        <img alt="content" class="w-40 aspect-square object-cover object-center h-auto transform scale-5000"
                            src="/img/Settings-icon.png">
                    </div>
                    <h2 class="text-3xl font-extrabold mt-5">
                        Personalized
                    </h2>
                    <p class="text-base leading-relaxed text-gray-50 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus
                        vel,
                        dapibus viverra neque.
                    </p>
                </div>
                <div id="effective" ref="effective" class="p-4 shrink-0 w-full md:w-1/3 md:max-w-xs">
                    <div class="rounded-lg mx-auto overflow-hidden flex items-center justify-center">
                        <img alt="content" class="w-40 md:aspect-square object-cover object-center "
                            src="/img/Chart-icon.png">
                    </div>
                    <h2 class="text-3xl font-extrabold mt-5">
                        Effective
                    </h2>
                    <p class="text-base leading-relaxed text-gray-50 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus
                        vel,
                        dapibus viverra neque.
                    </p>
                </div>
            </div>
            <div class="w-full flex justify-center space-x-2 absolute md:hidden">
                <a href="#section=why&target=secured"
                    class="outline-offset-2 outline outline-1 outline-white bg-white w-2.5 h-2.5 rounded-full"></a>
                <a href="#section=why&target=personalized"
                    class="outline-offset-2 outline outline-1 outline-transparent bg-gray-50 w-2.5 h-2.5 rounded-full"></a>
                <a href="#section=why&target=effective"
                    class="outline-offset-2 outline outline-1 outline-transparent bg-gray-50 w-2.5 h-2.5 rounded-full"></a>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();
</script>
