<template>
    <section class="relative w-full rounded-lg min-h-screen mt-20 overflow-hidden" aria-labelledby="why-choose-heading">
        <!-- Background Video with optimization -->
        <video 
            src="@/assets/video.webm" 
            autoplay 
            muted 
            playsinline 
            loop
            class="absolute inset-0 w-full h-full object-cover z-0"
            aria-hidden="true"
            preload="metadata"
        ></video>

        <!-- Overlay with Gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" aria-hidden="true"></div>

        <!-- Content -->
        <div class="relative z-20 px-4 py-20 sm:px-6 lg:px-8 xl:px-16">
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <header class="text-center mb-16 lg:mb-20">
                    <h2 id="why-choose-heading" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
                        Why Choose First Line Transport?
                    </h2>
                    <p class="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        America's trusted car shipping experts delivering vehicles nationwide with unmatched
                        reliability, safety, and customer service since 2014.
                    </p>
                </header>

                <!-- Features Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" role="list">
                    <article 
                        v-for="(item, index) in whyus" 
                        :key="index"
                        class="group backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 lg:p-10 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400/40"
                        role="listitem"
                    >
                        <div class="flex flex-col h-full">
                            <!-- Icon and Title Row -->
                            <div class="flex items-start gap-5 mb-6">
                                <!-- Icon -->
                                <div
                                    class="flex-shrink-0 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm border border-blue-400/40 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                                    aria-hidden="true"
                                >
                                    <UIcon :name="item.icon" size="36" class="text-white" />
                                </div>

                                <!-- Title -->
                                <div class="flex-1 pt-2">
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                                        {{ item.title }}
                                    </h3>
                                    <div class="h-1 w-16 bg-gradient-to-r from-blue-400 to-transparent rounded-full group-hover:w-24 transition-all duration-500" aria-hidden="true"></div>
                                </div>
                            </div>

                            <!-- Description -->
                            <p class="text-gray-200 text-base lg:text-lg leading-relaxed flex-1">
                                {{ item.description }}
                            </p>
                        </div>
                    </article>
                </div>

                <!-- Bottom CTA -->
                <div class="mt-16 text-center">
                    <div class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 lg:p-10 inline-block">
                        <p class="text-white text-xl lg:text-2xl font-semibold mb-6">
                            Ready to ship your vehicle with confidence?
                        </p>
                        <button @click="openModal()" class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-10 py-4 rounded-xl cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
                            Get Free Quote Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const modal = useState('globalModal', () => false)

function openModal(){
    modal.value = !modal.value
}
const whyus = ref([
    {
        icon: 'entypo:rocket',
        title: 'Lightning-Fast Delivery',
        description: `Skip the 2,000+ mile road trip. We handle everything from pickup to doorstep delivery across all 50 states. Our advanced logistics network ensures your vehicle arrives on time, every time—typically within 1-7 days nationwide.`
    },
    {
        icon: 'famicons:shield-checkmark-sharp',
        title: 'Vehicle Protection',
        description: `Your car travels with $1M+ insurance coverage and GPS tracking. From exotic supercars to family sedans, we use enclosed carriers for premium vehicles and trusted open transport for standard cars—all with white-glove care.`
    },
    {
        icon: 'solar:dollar-bold',
        title: 'True Price Guarantee',
        description: `Our True Price Guarantee locks in your rate for 30 days—no hidden fees, no surprises. Save thousands compared to driving (gas, hotels, wear & tear). Get instant quotes and pay only when your car is safely delivered.`
    },
    {
        icon: 'mdi:gear',
        title: 'Custom Transport Solutions',
        description: `Door-to-door or terminal pickup, open or enclosed carriers, expedited or economy shipping. Whether you're relocating, buying online, or need seasonal transport—we customize every shipment to fit your timeline and budget.`
    },
])
</script>