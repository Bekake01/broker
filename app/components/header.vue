<template>
    <div 
        class="w-full h-16 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out"
        :class="[isScrolled 
                ? 'bg-black/50 backdrop-blur-md shadow-lg' 
                : 'bg-transparent backdrop-blur-sm'
        ]"
    >
        <!-- Desktop Layout -->
        <div class="hidden lg:flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 xl:px-30">
            <!-- Logo -->
            <div class="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300" @click="scrollto()">
                <NuxtImg src="/logo.png" class="h-14 w-auto" alt="First Line Transport"/>
            </div>
            
            <!-- Navigation Links -->
            <!-- <nav class="flex items-center space-x-2 px-8 py-2 rounded-3xl border transition-all duration-300"
                :class="[isScrolled 
                    ? ' border-white/20 shadow-sm' 
                    : ' border-white/20'
                ]">
                <NuxtLink v-for="link in links" :key="link.name"
                    class="px-4 py-2 rounded-2xl text-white font-medium transition-all duration-300 relative group"
                    :class="[isScrolled 
                        ? 'hover:text-blue-600 hover:bg-blue-50' 
                        : 'hover:text-blue-400 hover:bg-white/10'
                    ]">
                    {{ link.name }}
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
                </NuxtLink>
            </nav> -->
            
            <!-- Action Buttons -->
            <div class="flex-shrink-0 flex gap-3" v-if="isScrolled">
                <button @click="openModal()"
                    class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn shadow-md hover:shadow-xl hover:scale-105">
                    <span>Request a Quote</span>
                </button>
            </div>
        </div>

        <div class="lg:hidden flex items-center justify-between h-full px-4">
            <!-- Menu Icon -->
            <!-- <button 
                @click="toggleMobileMenu"
                class="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                :class="[isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                ]"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button> -->
            
            <!-- Logo -->
            <div class="flex-shrink-0">
                <NuxtImg src="/logo.png" class="h-10 w-auto" alt="First Line Transport"/>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-2">
                <button class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                @click="openConsultantModal()">
                        Expert
                </button>
                <button class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                @click="openModal()">
                        Get Quote
                </button>
            </div>
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
                <div class="flex items-center bg-black/25 justify-between p-4 ">
                    <NuxtImg src="/logo.png" class="h-10 w-auto" alt="First Line Transport"/>
                    <UButton icon="heroicons:x-mark" variant="ghost" color="white" @click="closeMobileMenu" />
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
const modal = useState('globalModal', () => false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const links = ref([
    {
        // link: '/',
        name: 'Home'
    },
    {
        // link: '/about',
        name: 'About'
    },
    {
        // link: '/contact',
        name: 'Contact'
    },
    {
        // link: '/blogs',
        name: 'Blogs'
    }
])

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

function scrollto(){
    document.getElementById('maintop').scrollIntoView({behavior: 'smooth'})
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

const openModal = () => {
    console.log('openModal')
    modal.value = !modal.value
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