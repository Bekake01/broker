<template>
    <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tailored Transport Services for All Vehicle Types
            </h2>
            <div class="max-w-4xl mx-auto">
                <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Not all vehicles can ride standard - yours deserves expert care. We offer white-glove transport
                    services tailored to your classic, luxury, or specialty vehicle, with carriers specifically equipped
                    to handle what makes yours unique.
                </p>
            </div>
        </div>

        <!-- Carousel Section -->
        <div class="relative select-none">
            <UCarousel ref="carousel" v-slot="{ item }" :items="cars" :ui="{
                container: 'transition-[height] duration-300',
                controls: 'hidden',
                item: 'basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'
            }" class="w-full" :autoplay="{ delay: 4000 }" loop>
                <div class="p-3 sm:p-4">
                    <div
                        class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 hover:border-blue-200">
                        
                        <!-- Image with Gradient Overlay -->
                        <div class="relative aspect-square overflow-hidden">
                            <img :src="item.img" :alt="item.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <!-- Icon Badge -->
                            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <UIcon :name="item.icon" class="text-blue-600" size="20" />
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-5 sm:p-6">
                            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {{ item.title }}
                            </h3>
                            <p class="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                                {{ item.description }}
                            </p>
                            
                            <!-- Learn More Link -->
                            <div class="mt-4 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Learn More</span>
                                <UIcon name="heroicons-solid:arrow-right" size="16" 
                                    class="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

        <!-- Bottom Info Banner -->
        <div class="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
            <div class="flex items-center justify-center gap-3 mb-4">
                <UIcon name="heroicons:shield-check-solid" class="text-blue-600" size="32" />
                <h3 class="text-2xl font-bold text-gray-900">All Vehicles Fully Insured</h3>
            </div>
            <p class="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                Every vehicle type is covered with comprehensive insurance during transport. Your peace of mind is our priority.
            </p>
            <button class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
                View Insurance Details
            </button>
        </div>
    </section>
</template>
<script setup>

const cars = [
    {
        img: '/luxury.jpg',
        icon: 'heroicons:sparkles-solid',
        title: 'Luxury Vehicles',
        description: 'Premium enclosed transport for high-end vehicles with climate control, soft-tie systems, and white-glove handling. Perfect for exotic cars, classics, and luxury automobiles requiring maximum protection.'
    },
    {
        img: '/sportcar.webp',
        icon: 'heroicons:bolt-solid',
        title: 'Sports Cars',
        description: 'Specialized low-clearance loading for performance vehicles with custom tie-down points. Our enclosed trailers protect your investment with hydraulic lift gates and padded interiors.'
    },
    {
        img: '/modern.jpg',
        icon: 'heroicons:star-solid',
        title: 'Modern Sedans',
        description: 'Reliable transport for contemporary vehicles using both open and enclosed carriers. Cost-effective solutions with comprehensive insurance coverage and real-time tracking throughout delivery.'
    },
    {
        img: '/suv1.jpg',
        icon: 'heroicons:cube-solid',
        title: 'SUVs & Crossovers',
        description: 'Secure transport for larger passenger vehicles with reinforced tie-down systems. Our carriers accommodate various SUV sizes while ensuring safe loading and unloading procedures.'
    },
    {
        img: '/standard.avif',
        icon: 'heroicons:check-badge-solid',
        title: 'Standard Vehicles',
        description: 'Affordable open-carrier transport for everyday cars, trucks, and vans. Professional drivers with years of experience ensure your vehicle arrives safely and on schedule.'
    },
    {
        img: '/motorcylce.jpeg',
        icon: 'heroicons:fire-solid',
        title: 'Motorcycles',
        description: 'Specialized motorcycle transport with custom cradle systems and soft straps. Enclosed trailers protect your bike from weather and road debris during long-distance shipping.'
    },
    {
        img: '/truck.jpg',
        icon: 'heroicons:wrench-screwdriver-solid',
        title: 'Pickup Trucks',
        description: 'Heavy-duty transport solutions for full-size trucks and commercial vehicles. Our equipment handles oversized loads with proper weight distribution and secure anchoring systems.'
    },
]
</script>