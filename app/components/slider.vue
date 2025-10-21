<template>
  <div class="w-full h-full flex flex-col justify-center bg-white/20 backdrop-blur-sm">
    <UCarousel v-slot="{ item }" :items="doubledImages" :ui="{
      item: 'basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8',
      container: 'gap-2 sm:gap-3',
      viewport: 'overflow-hidden'
    }" :arrows="false" :dots="false" loop :auto-scroll="{ speed: 1 }" class="w-full">
      <div class="flex items-center justify-center h-13 sm:h-15">
        <NuxtImg :src="item"
          class="h-13 sm:h-15 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </UCarousel>
  </div>
</template>

<script setup>
const images = ref([
  'toyota.png', 'aston.png', 'hundai.gif', 'nissan.png', 'north.png', 'volsvagen.png', 'bmw.png', 'mersedes.png'
])

const doubledImages = computed(() => [...images.value, ...images.value])
</script>