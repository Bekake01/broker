<template>
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-8 lg:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Tailored Transport Services for All Vehicle Types
            </h2>
            <div class="max-w-4xl mx-auto">
                <p class="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
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
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                        <div class="aspect-square overflow-hidden">
                            <img :src="item.img" :alt="item.title"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-4 sm:p-6">
                            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                {{ item.title }}
                            </h3>
                            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

    </section>
</template>
<script setup>

const cars = [
    {
        img: '/luxury.jpg',
        title: 'Luxury Vehicles',
        description: 'Premium enclosed transport for high-end vehicles with climate control, soft-tie systems, and white-glove handling. Perfect for exotic cars, classics, and luxury automobiles requiring maximum protection.'
    },
    {
        img: '/sportcar.webp',
        title: 'Sports Cars',
        description: 'Specialized low-clearance loading for performance vehicles with custom tie-down points. Our enclosed trailers protect your investment with hydraulic lift gates and padded interiors.'
    },
    {
        img: '/modern.jpg',
        title: 'Modern Sedans',
        description: 'Reliable transport for contemporary vehicles using both open and enclosed carriers. Cost-effective solutions with comprehensive insurance coverage and real-time tracking throughout delivery.'
    },
    {
        img: '/suv1.jpg',
        title: 'SUVs & Crossovers',
        description: 'Secure transport for larger passenger vehicles with reinforced tie-down systems. Our carriers accommodate various SUV sizes while ensuring safe loading and unloading procedures.'
    },
    {
        img: '/standard.avif',
        title: 'Standard Vehicles',
        description: 'Affordable open-carrier transport for everyday cars, trucks, and vans. Professional drivers with years of experience ensure your vehicle arrives safely and on schedule.'
    },
    {
        img: '/motorcylce.jpeg',
        title: 'Motorcycles',
        description: 'Specialized motorcycle transport with custom cradle systems and soft straps. Enclosed trailers protect your bike from weather and road debris during long-distance shipping.'
    },
    {
        img: '/truck.jpg',
        title: 'Pickup Trucks',
        description: 'Heavy-duty transport solutions for full-size trucks and commercial vehicles. Our equipment handles oversized loads with proper weight distribution and secure anchoring systems.'
    },
]
</script>