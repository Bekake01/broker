<template>
    <div class="w-full h-16 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out" :class="[isScrolled
        ? 'bg-black/50 backdrop-blur-md shadow-lg'
        : 'bg-transparent backdrop-blur-sm'
    ]">
        <!-- Desktop Layout -->
        <div class="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 xl:px-30">
            <!-- Logo -->
            <div class="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                @click="scrollto()">
                <NuxtImg src="/logo.png" class="h-14 w-auto"
                    alt="First Line Transport - Professional Auto Transport Services" loading="eager" />
            </div>

            <!-- Action Buttons -->
            <div class="flex-shrink-0 flex items-center gap-4">
                <!-- Phone Number -->
                <a href="tel:+19299237706"
                    class="group flex items-center gap-2 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
                    <div
                        class="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-blue-500/20 transition-all duration-300">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <span class="font-semibold text-sm sm:text-base tracking-wide">+1-929-923-7706</span>
                </a>

                <!-- Quote Button - Scrolled State -->
                <NuxtLink to="/quote" v-if="isScrolled"
                    class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold px-8 py-3 rounded-2xl cursor-pointer transition-all duration-500 flex items-center gap-3 group/btn shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-0.5 border border-blue-500/30">
                    <!-- Animated background overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out">
                    </div>

                    <!-- Button content -->
                    <div class="relative flex items-center gap-2">
                        <svg class="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="text-sm sm:text-base">Request Quote</span>
                        <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>

                    <!-- Pulse effect -->
                    <div
                        class="absolute inset-0 rounded-2xl bg-blue-400/30 animate-pulse opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    </div>
                </NuxtLink>

                <!-- Quote Button - Non-scrolled State -->
                <NuxtLink to="/quote" v-if="!isScrolled"
                    class="relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn border border-white/20 hover:border-white/40 transform hover:scale-105">
                    <svg class="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="text-sm">Get Quote</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Modal state removed - using direct navigation
const isScrolled = ref(false)


const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

function scrollto() {
    document.getElementById('maintop').scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    // Clean up body overflow style
    document.body.style.overflow = ''
})

</script>