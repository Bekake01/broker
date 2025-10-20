<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  },
])
</script>

<template>
  <UHeader>
    <template #title>
        <div class="flex-shrink-0 cursor-pointer backdrop-blur-sm rounded-full px-[2rem]" @click="navigateTo('/')">
            <NuxtImg src="/logo.png" class="h-14 w-auto" alt="First Line Transport"/>
        </div>
      <!-- <Logo class="h-6 w-auto" /> -->
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
    <UButton>Request a quote</UButton>

      <!-- <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip> -->
    </template>
  </UHeader>
</template>
