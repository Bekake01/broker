<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Auto Transport Insights</h2>
            <p class="text-lg text-gray-600">Everything you need to know about vehicle shipping</p>
        </header>

        <!-- Blog 1: Pricing Factors (Image Left) -->
        <article class="mb-20 flex flex-col lg:flex-row items-center gap-8">
            <div class="w-full lg:w-1/2">
                <NuxtImg src="/pricing.webp" alt="Car transportation pricing factors and cost breakdown"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    @click="router.push('/blogs/pricing')" loading="lazy" width="600" height="400" format="webp"
                    quality="80" />
            </div>
            <div class="w-full lg:w-1/2">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Understanding Auto Transport Pricing Factors</h3>
                <p class="text-gray-700 mb-4">Several key factors influence the cost of car transport. Knowing these
                    helps you get accurate quotes:</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start">
                        <span class="text-blue-600 font-semibold mr-2">•</span>
                        <span><span class="font-semibold text-gray-900">Distance:</span> Longer routes cost more</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-600 font-semibold mr-2">•</span>
                        <span><span class="font-semibold text-gray-900">Vehicle size/weight:</span> Larger vehicles
                            require more space</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-600 font-semibold mr-2">•</span>
                        <span><span class="font-semibold text-gray-900">Transport method:</span> Open vs enclosed
                            carriers</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-600 font-semibold mr-2">•</span>
                        <span><span class="font-semibold text-gray-900">Seasonal influences:</span> Peak seasons affect
                            availability</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-600 font-semibold mr-2">•</span>
                        <span><span class="font-semibold text-gray-900">Location:</span> Pickup and drop-off
                            accessibility</span>
                    </li>
                </ul>
                <button @click="router.push('/blogs/pricing')"
                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                    <span>Read More</span>
                    <UIcon name="heroicons-solid:arrow-right" size="18"
                        class="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </article>

        <!-- Blog 2: Common Mistakes (Text Left) -->
        <article class="mb-20 flex flex-col lg:flex-row-reverse items-center gap-8">
            <div class="w-full lg:w-1/2">
                <NuxtImg src="/mistakes.jpg" alt="Common car transport mistakes to avoid when shipping vehicles"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    @click="router.push('/blogs/mistakes')" loading="lazy" width="600" height="400" format="webp"
                    quality="80" />
            </div>
            <div class="w-full lg:w-1/2">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Common Auto Transport Mistakes to Avoid</h3>
                <p class="text-gray-700 mb-4">Protect yourself by avoiding these common pitfalls when choosing a
                    transport service:</p>
                <ul class="space-y-3 mb-6">
                    <li class="flex items-start">
                        <span class="text-red-500 font-semibold mr-2">✗</span>
                        <span><span class="font-semibold text-gray-900">Choosing extremely low quotes</span> without
                            checking reliability and reviews</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-red-500 font-semibold mr-2">✗</span>
                        <span><span class="font-semibold text-gray-900">Not verifying credentials</span> of carriers or
                            brokers</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-red-500 font-semibold mr-2">✗</span>
                        <span><span class="font-semibold text-gray-900">Ignoring terms</span> or overlooking hidden
                            fees</span>
                    </li>
                </ul>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                    <p class="text-blue-900 font-semibold">✓ First Line Transport INC has no hidden fees – transparent
                        pricing guaranteed!</p>
                </div>
                <button @click="router.push('/blogs/mistakes')"
                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                    <span>Read More</span>
                    <UIcon name="heroicons-solid:arrow-right" size="18"
                        class="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </article>

        <!-- Blog 3: Preparing for Shipping (Image Left) -->
        <article class="mb-20 flex flex-col lg:flex-row items-center gap-8">
            <div class="w-full lg:w-1/2">
                <NuxtImg src="/prepare.jpg" alt="Preparing your vehicle for auto transport - essential checklist"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    @click="router.push('/blogs/prepare')" loading="lazy" width="600" height="400" format="webp"
                    quality="80" />
            </div>
            <div class="w-full lg:w-1/2">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">How to Prepare Your Car for Shipping</h3>
                <p class="text-gray-700 mb-4">Follow this simple checklist to ensure your vehicle is ready for
                    transport:</p>
                <div class="space-y-3 mb-6">
                    <div class="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span class="text-green-600 font-bold text-xl mr-3">✓</span>
                        <span class="text-gray-900 font-medium">Clean your vehicle inside and out</span>
                    </div>
                    <div class="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span class="text-green-600 font-bold text-xl mr-3">✓</span>
                        <span class="text-gray-900 font-medium">Gather all necessary documents</span>
                    </div>
                    <div class="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span class="text-green-600 font-bold text-xl mr-3">✓</span>
                        <span class="text-gray-900 font-medium">Remove all personal items</span>
                    </div>
                    <div class="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span class="text-green-600 font-bold text-xl mr-3">✓</span>
                        <span class="text-gray-900 font-medium">Deactivate car alarms</span>
                    </div>
                    <div class="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span class="text-green-600 font-bold text-xl mr-3">✓</span>
                        <span class="text-gray-900 font-medium">Check lights and maintain ¼ tank fuel level</span>
                    </div>
                </div>
                <button @click="router.push('/blogs/prepare')"
                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                    <span>Read More</span>
                    <UIcon name="heroicons-solid:arrow-right" size="18"
                        class="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </article>

        <!-- Blog 4: Vehicle Inspection (Text Left) -->
        <article class="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div class="w-full lg:w-1/2">
                <NuxtImg src="/about.webp" alt="Choosing the right auto transport type - open vs enclosed carriers"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    @click="router.push('/blogs/transport_type')" loading="lazy" width="600" height="400" format="webp"
                    quality="80" />
            </div>
            <div class="w-full lg:w-1/2">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Auto Transport Type</h3>
                <p class="text-gray-700 mb-4">Proper documentation protects both you and the carrier. Here's why it
                    matters:</p>
                <div class="space-y-4 mb-6">
                    <div class="border-l-4 border-blue-600 pl-4">
                        <h4 class="font-semibold text-gray-900 mb-1">Before Pickup</h4>
                        <p class="text-gray-700">Write down your car's current condition in detail, noting any existing
                            scratches, dents, or damage.</p>
                    </div>
                    <div class="border-l-4 border-blue-600 pl-4">
                        <h4 class="font-semibold text-gray-900 mb-1">Photo Documentation</h4>
                        <p class="text-gray-700">Take clear photos from multiple angles at both pickup and delivery.
                            Include timestamps if possible.</p>
                    </div>
                    <div class="border-l-4 border-blue-600 pl-4">
                        <h4 class="font-semibold text-gray-900 mb-1">Upon Delivery</h4>
                        <p class="text-gray-700">Carefully inspect your vehicle and confirm everything matches the
                            initial condition report before signing.</p>
                    </div>
                </div>
                <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                    <p class="text-yellow-900 text-sm"><span class="font-semibold">Pro Tip:</span> Keep copies of all
                        documentation for your records and insurance purposes.</p>
                </div>
                <button @click="router.push('/blogs/transport_type')"
                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl">
                    <span>Read More</span>
                    <UIcon name="heroicons-solid:arrow-right" size="18"
                        class="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </article>
    </div>
</template>
<script setup>
const router = useRouter()
</script>