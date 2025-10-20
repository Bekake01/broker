<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/320?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/320?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/320?random=6'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    auto-height
    arrows
    dots
    :items="items"
    :ui="{
      container: 'transition-[height]',
      controls: 'absolute -bottom-8 inset-x-12',
      dots: '-bottom-1',
      dot: 'w-6 h-1'
    }"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg">
  </UCarousel>
</template>

