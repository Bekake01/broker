<template>
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Car Transport Shipping Methods
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Choose from our comprehensive range of vehicle transport services designed to meet your specific
                    needs and budget requirements.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(service, index) in services" :key="service.title"
                    class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">

                    <!-- Service Image with Overlay -->
                    <div class="relative h-64 overflow-hidden">
                        <NuxtImg :src="service.img" :alt="service.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Icon Badge -->
                        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                            <UIcon :name="service.icon" class="text-blue-600" size="24" />
                        </div>
                    </div>

                    <!-- Service Content -->
                    <div class="p-8">
                        <div class="flex items-start justify-between mb-4">
                            <h3
                                class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {{ service.title }}
                            </h3>
                        </div>

                        <p class="text-gray-600 leading-relaxed mb-6">
                            {{ service.description }}
                        </p>

                        <!-- Features List -->
                        <ul class="space-y-2 mb-6">
                            <li v-for="feature in service.features" :key="feature"
                                class="flex items-start text-sm text-gray-700">
                                <span class="text-green-500 font-bold mr-2 mt-0.5">✓</span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>

                        <!-- Action Button -->
                        <button
                            class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                            <span>Learn More</span>
                            <UIcon name="heroicons-solid:arrow-right" size="18"
                                class="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center bg-blue-50 border-l-4 border-blue-600 p-8 rounded-xl">
                <p class="text-blue-900 text-lg mb-4">
                    <span class="font-bold">Not sure which service is right for you?</span> Our team is here to help you
                    choose the best option.
                </p>
                <button
                    class="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl">
                    Get Free Consultation
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        img: '/door.jpg',
        icon: 'heroicons:home-solid',
        title: 'Door-to-Door Delivery',
        description: 'Convenient pickup and delivery directly at your specified locations. Our drivers will collect your vehicle from your home or office and deliver it right to your destination.',
        features: [
            'Maximum convenience',
            'No terminal visits required',
            'Flexible scheduling'
        ]
    },
    {
        img: '/terminal.webp',
        icon: 'heroicons:building-office-2-solid',
        title: 'Terminal Services',
        description: 'Cost-effective option where you drop off and pick up your vehicle at designated terminals. Perfect for budget-conscious customers who don\'t mind a short drive.',
        features: [
            'Most economical option',
            'Secure storage facilities',
            'Extended hours available'
        ]
    },
    {
        img: '/open.jpg',
        icon: 'heroicons:truck-solid',
        title: 'Open Transport',
        description: 'Most popular and economical shipping method using open-air carriers. Your vehicle is securely loaded onto a multi-car trailer, ideal for everyday vehicles.',
        features: [
            'Industry standard method',
            'Fast and reliable',
            'Best value for money'
        ]
    },
    {
        img: '/enclosed.jpg',
        icon: 'heroicons:shield-check-solid',
        title: 'Enclosed Transport',
        description: 'Premium protection for luxury, classic, or high-value vehicles. Your car is transported in a fully enclosed trailer, shielding it from weather and road debris.',
        features: [
            'Complete weather protection',
            'Enhanced security',
            'Perfect for luxury vehicles'
        ]
    }
]
</script>