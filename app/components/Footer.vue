<template>
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="lg:col-span-2">
                    <div class="flex items-center mb-4">
                        <NuxtImg 
                            src="/logo.png" 
                            alt="First Line Transport INC Logo" 
                            class="h-12 w-auto mr-3"
                            loading="lazy"
                            width="120"
                            height="48"
                        />
                        <div>
                            <h3 class="text-xl font-bold">First Line Transport INC</h3>
                            <p class="text-gray-400 text-sm">Professional Auto Transport Services</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-6 max-w-md">
                        America's trusted auto transport company providing nationwide vehicle shipping services with open and enclosed transport options. Licensed, insured, and committed to excellence.
                    </p>
                    
                    <!-- Social Media Links -->
                    <div class="flex space-x-4">
                        <a 
                            href="https://www.facebook.com/FirstLineTransport" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                            aria-label="Follow us on Facebook"
                        >
                            <UIcon name="i-simple-icons-facebook" class="w-5 h-5" />
                        </a>
                        <a 
                            href="https://www.youtube.com/FirstLineTransport" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300"
                            aria-label="Subscribe to our YouTube channel"
                        >
                            <UIcon name="i-simple-icons-youtube" class="w-5 h-5" />
                        </a>
                        <a 
                            href="mailto:info@fltransportinc.com" 
                            class="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                            aria-label="Send us an email"
                        >
                            <UIcon name="heroicons:envelope-solid" class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Our Services</h4>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink 
                                to="/blogs/open" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Open Auto Transport
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="/blogs/enclosed" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Enclosed Auto Transport
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="/blogs/door-to-door" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Door-to-Door Shipping
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="/blogs/hawaii-alaska" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Hawaii & Alaska Shipping
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact & Resources -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contact & Resources</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center text-gray-300">
                            <UIcon name="heroicons:phone-solid" class="w-4 h-4 mr-2" />
                            <a href="tel:+19299237706" class="hover:text-white transition-colors duration-300">
                                +1 (929) 923-7706
                            </a>
                        </li>
                        <li class="flex items-center text-gray-300">
                            <UIcon name="heroicons:envelope-solid" class="w-4 h-4 mr-2" />
                            <a href="mailto:info@fltransportinc.com" class="hover:text-white transition-colors duration-300">
                                info@fltransportinc.com
                            </a>
                        </li>
                        <li class="mt-4">
                            <NuxtLink 
                                to="/blogs/pricing" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Pricing Guide
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="/blogs/prepare" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Vehicle Preparation
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink 
                                to="/blogs/mistakes" 
                                class="text-gray-300 hover:text-white transition-colors duration-300"
                                rel="bookmark"
                            >
                                Common Mistakes
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-400 text-sm mb-4 md:mb-0">
                        <p>&copy; 2024 First Line Transport INC. All rights reserved.</p>
                        <p class="mt-1">Licensed & Insured Auto Transport Company</p>
                    </div>
                    
                    <!-- Trust Badges -->
                    <div class="flex items-center space-x-6 text-sm text-gray-400">
                        <div class="flex items-center">
                            <UIcon name="heroicons:shield-check-solid" class="w-4 h-4 mr-1 text-green-500" />
                            <span>Licensed & Insured</span>
                        </div>
                        <div class="flex items-center">
                            <UIcon name="heroicons:currency-dollar-solid" class="w-4 h-4 mr-1 text-blue-500" />
                            <span>TruePrice Guarantee</span>
                        </div>
                        <div class="flex items-center">
                            <UIcon name="heroicons:clock-solid" class="w-4 h-4 mr-1 text-purple-500" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// No additional logic needed for footer
</script>