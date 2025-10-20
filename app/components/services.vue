<template>
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Car Transport Shipping Methods
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose from our comprehensive range of vehicle transport services designed to meet your specific
                    needs and budget requirements.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                <div v-for="service in services" :key="service.title"
                    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <!-- Service Image -->
                    <div class="relative h-48 overflow-hidden">
                        <NuxtImg :src="service.img" :alt="service.title"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy" />
                    </div>

                    <!-- Service Content -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        img: '/door.jpg',
        title: 'Door-to-Door Delivery',
        description: 'Convenient pickup and delivery directly at your specified locations. Our drivers will collect your vehicle from your home or office and deliver it right to your destination, saving you time and hassle.'
    },
    {
        img: '/terminal.webp',
        title: 'Terminal Services',
        description: 'Cost-effective option where you drop off and pick up your vehicle at designated terminals. Perfect for budget-conscious customers who don\'t mind a short drive to our secure facilities.'
    },
    {
        img: '/open.jpg',
        title: 'Open Transport',
        description: 'Most popular and economical shipping method using open-air carriers. Your vehicle is securely loaded onto a multi-car trailer, ideal for everyday vehicles and standard transportation needs.'
    },
    {
        img: '/enclosed.jpg',
        title: 'Enclosed Transport',
        description: 'Premium protection for luxury, classic, or high-value vehicles. Your car is transported in a fully enclosed trailer, shielding it from weather, road debris, and other external elements.'
    }
]
</script>