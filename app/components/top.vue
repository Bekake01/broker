<template>
    <div class="relative flex flex-col h-screen">
        <!-- Background Image (behind everything) -->
        <NuxtImg src="/first.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover -z-10" />

        <!-- Transparent Overlay -->
        <div class="absolute inset-0 bg-black/30 -z-10"></div>

        <!-- Main Content -->
        <div class="relative flex-1">
            <!-- Content Container -->
            <div class="relative container mx-auto px-4 h-full flex items-start pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                <div class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-24 w-full">
                    <div class="text-white space-y-4 sm:space-y-6 max-w-2xl lg:max-w-xl">
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Reliable Auto Transport Across America
                        </h1>
                        <p class="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
                            Ship your vehicle anywhere in the nation with confidence. Our TruePrice Guarantee locks in
                            your
                            quoted price for 30 days—no hidden fees, no surprises.
                        </p>
                        <div class="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span class="text-sm md:text-base">Nationwide Coverage</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span class="text-sm md:text-base">Price Guarantee</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span class="text-sm md:text-base">Trusted Service</span>
                            </div>
                        </div>
                    </div>
                    <TopForm />
                </div>
            </div>
        </div>

        <!-- Slider Section -->
        <div class="relative h-23 sm:h-27 w-full z-10">
            <Slider />
        </div>
    </div>
</template>
