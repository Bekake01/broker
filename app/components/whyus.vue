<template>
    <section class="relative w-full rounded-lg min-h-screen overflow-hidden">
        <!-- Background Video -->
        <video src="@/assets/video.webm" autoplay muted playsinline loop
            class="absolute inset-0 w-full h-full object-cover z-0"></video>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40 z-10"></div>

        <!-- Content -->
        <div class="relative z-20 px-4 py-16 sm:px-6 lg:px-8 xl:px-16">
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <div class="text-center mb-12 lg:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                        Why Choose First Line Transport?
                    </h2>
                    <p class="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        America's trusted car shipping experts delivering vehicles nationwide with unmatched
                        reliability,
                        safety, and customer service since day one.
                    </p>
                </div>
                <!-- Features Grid -->
                <div class="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
                    <div v-for="(item, index) in whyus" :key="index"
                        class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)] xl:w-[calc(50%-1.25rem)]">
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 h-full">
                            <!-- Icon -->
                            <div
                                class="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/80 backdrop-blur-sm border border-blue-400/30">
                                <Icon :name="item.icon" size="34" class="text-white sm:w-7 sm:h-7" />
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                    {{ item.title }}
                                </h3>
                                <p class="text-gray-200 text-base sm:text-lg leading-relaxed">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const whyus = ref([
    {
        icon: 'line-md:speedometer-loop',
        title: 'Lightning-Fast Delivery',
        description: `Skip the 2,000+ mile road trip. We handle everything from pickup to doorstep delivery across all 50 states. Our advanced logistics network ensures your vehicle arrives on time, every time—typically within 1-7 days nationwide.`
    },
    {
        icon: 'ic:round-health-and-safety',
        title: 'Vehicle Protection',
        description: `Your car travels with $1M+ insurance coverage and GPS tracking. From exotic supercars to family sedans, we use enclosed carriers for premium vehicles and trusted open transport for standard cars—all with white-glove care.`
    },
    {
        icon: 'healthicons:low-income-level',
        title: 'Guaranteed Lowest Prices',
        description: `Our TruePrice Guarantee locks in your rate for 30 days—no hidden fees, no surprises. Save thousands compared to driving (gas, hotels, wear & tear). Get instant quotes and pay only when your car is safely delivered.`
    },
    {
        icon: 'lets-icons:setting-fill',
        title: 'Custom Transport Solutions',
        description: `Door-to-door or terminal pickup, open or enclosed carriers, expedited or economy shipping. Whether you're relocating, buying online, or need seasonal transport—we customize every shipment to fit your timeline and budget.`
    },
])
</script>