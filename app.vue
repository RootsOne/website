<template>
  <div id="bg" ref="bg" class="w-screen lg:h-screen">
    <div id="gradient" class="bg-gradient-to-br from-green-900 to-black">
      <Header :activeSection="activeSection" :activeTarget="activeTarget" />

      <div
        class="h-auto lg:h-screen max-h-none lg:max-h-screen min-h-none lg:min-h-screen lg:overflow-y-hidden lg:overflow-x-scroll no-scrollbar pt-20 sm:pt-10 order-1">
        <Home id="home" ref="home" :activeSection="activeSection" :activeTarget="activeTarget"
          :class="{ 'hidden': activeSection != 'home' }" />
        <Why id="why" ref="why" :activeSection="activeSection" :activeTarget="activeTarget"
          :class="{ 'hidden': activeSection != 'why' }" />
        <Services id="services" :activeSection="activeSection" :activeTarget="activeTarget" ref="services"
          :class="{ 'hidden': activeSection != 'services' }" />
        <Portfolio id="portfolio" ref="portfolio" :activeSection="activeSection" :activeTarget="activeTarget"
          :class="{ 'hidden': activeSection != 'portfolio' }" />
        <Us id="us" ref="us" :activeSection="activeSection" :activeTarget="activeTarget"
          :class="{ 'hidden': activeSection != 'us' }" />
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import { trigger, activeSection, activeTarget } from "./lib/utils";

trigger();

/* Declare element refs */
const bg = ref(null);
const home = ref(null);
const why = ref(null);
const services = ref(null);
const portfolio = ref(null);
const us = ref(null);

onMounted(() => {
  window.THREE = THREE;
  WAVES({
    el: bg.value,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x063e30,
    shininess: 10.00,
    waveHeight: 18.00,
    waveSpeed: 0.85,
    zoom: 0.9,
    THREE: window.THREE
  });

});
</script>

<style>
:root {
  scroll-behavior: smooth;
  @apply font-proxima duration-300
}

.staggered,
.one,
.two,
.slides,
.img,
.partners {
  @apply opacity-0;
}

#gradient {
  --tw-gradient-from: #064e3b5c;
  --tw-gradient-to: #064e3b00;
  --tw-gradient-stops: var(--tw-gradient-from), #0000009c;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
