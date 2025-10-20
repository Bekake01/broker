<template>
    <div class="relative min-h-[calc(100vh-4rem)]">
        <!-- Background Image -->
        <NuxtImg src="/back.jpeg" alt="Background" class="absolute inset-0 w-full h-full object-cover -z-10" />

        <!-- Content Container -->
        <div class="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

                <!-- Left Side: Header & Description -->
                <div class="text-white space-y-6">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Reliable Auto Transport Across America
                    </h1>
                    <p class="text-lg md:text-xl text-gray-100 leading-relaxed">
                        Ship your vehicle anywhere in the nation with confidence. Our TruePrice Guarantee locks in your
                        quoted price for 30 days—no hidden fees, no surprises.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
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
                <!-- Right Side: Quote Form -->
                <TopForm />
                
            </div>
        </div>
    </div>
</template>
