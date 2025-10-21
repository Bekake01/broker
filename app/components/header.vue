<template>
    <div 
        class="w-full h-16 fixed top-0 left-0 z-200 transition-all duration-300 ease-in-out"
        :class="[isScrolled 
                ? 'bg-white/80 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        ]"
    >
        <!-- Desktop Layout -->
        <div class="hidden lg:flex items-center justify-between h-full px-8">
            <!-- Logo -->
            <div class="flex-shrink-0 cursor-pointer rounded-full px-[2rem]" @click="navigateTo('/')">
                <NuxtImg src="/logo.png" class="h-14 w-auto" alt="First Line Transport"/>
            </div>
            
            <!-- Navigation Links -->
            <!-- <nav class="flex items-center space-x-8 px-10 py-2 rounded-3xl">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.link"
                class="hover:text-blue-600 transition-colors font-medium" :class="[isScrolled ? 'text-black/80' : 'text-white/80']">
                    {{ link.name }}
                </NuxtLink>
            </nav> -->
            
            <!-- Get Quote Button -->
            <div class="flex-shrink-0">
                <UButton>Request a quote</UButton>
            </div>
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden flex items-center justify-between h-full px-4">
            <!-- Menu Icon -->
            <button 
                @click="toggleMobileMenu"
                class="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            
            <!-- Logo -->
            <div class="flex-shrink-0">
                <NuxtImg src="/logo.png" class="h-10 w-auto" alt="First Line Transport"/>
            </div>
            
            <!-- Get Quote Button -->
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Quote
            </button>
        </div>
    </div>

    <!-- Mobile Menu Modal -->
    <Teleport to="body">
        <div 
            v-if="isMobileMenuOpen"
            class="fixed inset-0 z-50 lg:hidden"
            @click="closeMobileMenu"
        >
            <!-- Backdrop -->
            <div 
                class="absolute inset-0 bg-black/50 transition-opacity duration-300"
                :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0'"
            ></div>
            
            <!-- Modal Content -->
            <div 
                class="relative bg-white h-full w-full overflow-y-auto transition-transform duration-300 ease-in-out"
                :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
                @click.stop
            >
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-4 border-b">
                    <NuxtImg src="/logo.png" class="h-10 w-auto" alt="First Line Transport"/>
                    <button 
                        @click="closeMobileMenu"
                        class="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Navigation Links -->
                <nav class="p-4 space-y-4">
                    <NuxtLink v-for="link in links" :key="link.name" :to="link.link" @click="closeMobileMenu"
                    class="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100">
                        {{ link.name }}
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </Teleport>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const links = ref([
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/about',
        name: 'About'
    },
    {
        link: '/contact',
        name: 'Contact'
    }
])

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    // Prevent body scroll when modal is open
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
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

// Close mobile menu on route change
watch(() => useRoute().path, () => {
    closeMobileMenu()
})
</script>