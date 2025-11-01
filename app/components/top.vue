<template>
    <div class="relative flex flex-col min-h-screen" id="maintop">
        <!-- Background Image with optimization -->
        <NuxtImg 
            src="/first.jpg" 
            alt="Professional auto transport truck carrying vehicles across America" 
            class="absolute inset-0 w-full h-full object-cover -z-10" 
            loading="eager"
            />
            
            <!-- width="1920"
            height="1080"
            format="webp"
            quality="85"
            sizes="100vw" -->
        <!-- Transparent Overlay -->
        <div class="absolute inset-0 bg-black/30 -z-10" aria-hidden="true"></div>

        <!-- Main Content -->
        <div class="relative flex-1 pt-16 sm:pt-20">
            <!-- Content Container -->
            <div class="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div class="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 xl:gap-12 w-full">
                    <!-- Hero Content -->
                    <div class="text-white space-y-4 sm:space-y-6 max-w-2xl lg:max-w-xl lg:pt-8">
                        <!-- Main Heading - Only H1 on page -->
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Fast &amp; Reliable Auto Transport Across the USA
                        </h1>
                        
                        <!-- Supporting Description -->
                        <p class="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
                            Move your vehicle anywhere across the United States with confidence. At First Line Transport, our TruePrice Guarantee locks in your quote for 30 days — no hidden fees, no surprises, just smooth delivery from start to finish.
                        </p>
                        
                        <!-- Key Benefits -->
                        <div class="flex flex-wrap gap-3 sm:gap-4 pt-2" role="list">
                            <div class="flex items-center gap-2" role="listitem">
                                <div class="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                                <span class="text-sm md:text-base">Lightning-fast delivery</span>
                            </div>
                            <div class="flex items-center gap-2" role="listitem">
                                <div class="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                                <span class="text-sm md:text-base">TruePrice guarantee</span>
                            </div>
                            <div class="flex items-center gap-2" role="listitem">
                                <div class="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                                <span class="text-sm md:text-base">Trusted nationwide</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quote Form -->
                    <LazyTopForm />
                </div>
            </div>
        </div>

        <!-- Slider Section -->
        <div class="relative h-20 sm:h-24 w-full z-10">
            <LazySlider />
        </div>
    </div>
</template>
