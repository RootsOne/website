<template>
    <section
        class=" h-full max-h-full text-white body-font lg:bg-dark-shape pb-10 lg:pb-0 px-8 sm:px-9 lg:px-10 2xl:px-12 lg:pt-8 xl:pt-6">
        <div class="h-full w-full max-w-screen-xl mx-auto flex flex-col justify-center items-center">
            <Heading title="services" desc="" />

            <div class="px-6 lg:px-0 pt-8 lg:pt-6 pb-0 flex">
                <div class="w-full lg:w-3/4 flex flex-nowrap overflow-hidden">
                    <div class="w-fit flex-shrink-0">
                        <Swiper id="service-items" ref="serviceItems"
                            class="w-full flex-shrink-0 flex flex-wrap lg:flex-col justify-between lg:justify-start lg:items-start lg:space-y-6 2xl:space-y-10"
                            :navigation="false" :modules="modules" direction="vertical" :slides-per-view="services.length"
                            :loop="true" @swiper="setThumbsSwiper" watch-slides-progress>
                            <SwiperSlide v-for="(service, index) in services"
                                class="colorable [--thumbs-color:theme(colors.gray.50)] text-[--thumbs-color] hover:[--thumbs-color:theme(colors.yellow.500)] flex flex-col lg:flex-row lg:flex-nowrap items-center w-1/2 sm:w-1/3 lg:w-auto lg:py-4 flex-shrink-0 mb-7 sm:mb-0 cursor-pointer duration-200 transition-all">
                                <component :is="service.iconSmall"
                                    class="w-12 lg:w-9 h-12 lg:h-9 delay-100 duration-300 transition-all">
                                </component>
                                <h2 class="text-xl lg:font-normal mt-2 lg:mt-0 lg:ml-5 text-center sm:text-left">
                                    {{ service.title }}
                                </h2>
                            </SwiperSlide>
                        </Swiper>
                        <a href="#" class="flex items-center lg:hidden">
                            <span class="text-sm text-white font-medium inline-block mr-2">
                                Packages
                            </span>
                            <svg class="text-white" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.5 11H5.5M11.9167 6.41666L16.5 11L11.9167 6.41666ZM16.5 11L11.9167 15.5833L16.5 11Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div @mousewheel.stop="">
                        <Swiper id="service-list" ref="serviceList" :navigation="false" :mousewheel="true" effect="flip"
                            :thumbs="{ swiper: thumbsSwiper }" :modules="modules" @slideChange="onSlideChange"
                            @swiper="onSwiperinit" @reachEnd="onEnd" :init="false" class="w-full max-w-full xl:max-w-2xl">
                            <SwiperSlide v-for="(service, index) in services" class="pl-10 bg-transparent">
                                <ServiceDetail :title="service.title" :desc='service.description'>
                                    <component :is="service.iconLarge" class="w-80 animateable" />
                                </ServiceDetail>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="w-1/4 hidden lg:flex justify-between items-end">
                    <div class="w-full flex-shrink-0 max-w-xs pb-14 relative lg:-left-full">
                        <h3 class="text-3xl text-white font-extrabold mb-3">Stay Cool !</h3>
                        <p class="text-lg text-gray-50">
                            Loro ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus
                            vel, dapibus viverra neque.
                        </p>
                    </div>
                    <img class=" relative lg:-left-[70%] bottom-6" src="/img/Richie.png" alt="" srcset="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper as SwiperClass } from 'swiper';
import { Thumbs, Mousewheel } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { animate } from "motion"
import Vivus from 'vivus';

const props = defineProps<{
    activeSection: string,
    activeTarget?: string,
}>();

const modules = [EffectFlip, Thumbs, Mousewheel];
/* Declare element refs */
const serviceList = ref(null);
const serviceItems = ref(null);
const thumbsSwiper = ref<SwiperClass>();
const mainSwiper = ref<SwiperClass>();
const setThumbsSwiper = (swiper: SwiperClass) => {
    thumbsSwiper.value = swiper;
};
const onSwiperinit = (swiper: SwiperClass) => {
    console.log('init');
    mainSwiper.value = swiper;
    window.swiper = swiper;
    onSlideChange(swiper);
};
const fill = (svg: HTMLElement) => {
    Array.from(svg.querySelectorAll('path')).forEach((path: SVGPathElement) => {
        animate(
            path,
            {
                fill: [null, path.getAttribute('data-fill') || 'none'],
                stroke: ['none', 'none'],
            },
            { duration: 0.2 }
        )
    });
    return true;

};
const unfill = (svg: HTMLElement) => {
    Array.from(svg.querySelectorAll('path')).forEach((path: SVGPathElement) => {
        path.style.fill = 'none';
        path.style.stroke = path.getAttribute('data-stroke') || 'white';
    })
    return true;
};
let vivus: Vivus | undefined = undefined;
const onSlideChange = (swiper: SwiperClass) => {
    if (vivus) {
        vivus.finish();
        vivus.destroy();
        unfill(vivus.el)
    }
    const svg = swiper.slides[swiper.realIndex]?.querySelector('svg.animateable') as HTMLElement
    if (svg) {
        vivus = new Vivus(
            svg,
            {
                duration: 100
            },
            () => fill(svg)
        );
    }
};

const onEnd = (swiper: SwiperClass) => {
    console.log('end');
};

if (props.activeSection === 'services') {
    mainSwiper.value?.init();
}

onMounted(() => {
    mainSwiper.value?.init();
});

onUpdated(() => {
    mainSwiper.value?.init();
});

const services = [
    {
        title: 'Consulting',
        iconSmall: 'SvgConsultingWhite',
        iconLarge: 'SvgConsulting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Digital Marketing',
        iconSmall: 'SvgDigitalMarketingWhite',
        iconLarge: 'SvgDigitalMarketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Graphic Design',
        iconSmall: 'SvgGraphicDesignWhite',
        iconLarge: 'SvgGraphicDesign',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Organizational Audit',
        iconSmall: 'SvgOrganizationalAuditWhite',
        iconLarge: 'SvgOrganizationalAudit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Development',
        iconSmall: 'SvgDevelopmentWhite',
        iconLarge: 'SvgDevelopment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Training',
        iconSmall: 'SvgTrainingWhite',
        iconLarge: 'SvgTraining',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus massa, venenatis quis lacus vel, dapibus viverra neque. Loro ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]

</script>
<style scoped lang="css">
.swiper-slide {
    display: flex;
}

.colorable.swiper-slide-thumb-active {
    --thumbs-color: theme('colors.yellow.600');
}
</style>
