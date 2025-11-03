<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white shadow-sm border-b">
            <div class="max-w-4xl mx-auto px-4 py-1">
                <div class="relative mobile-menu-container">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <NuxtLink to="/" class="flex items-center">
                                <NuxtImg src="/light_logo.png" alt="First Line Transport INC Logo" width="200" />
                            </NuxtLink>
                        </div>
                        <nav class="flex items-center space-x-2 sm:space-x-4">
                            <!-- Home Link -->
                            <NuxtLink to="/"
                                class="group flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                                <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span class="font-medium text-sm sm:text-base">Home</span>
                            </NuxtLink>

                            <!-- Separator -->
                            <div class="w-px h-6 bg-gray-300"></div>

                            <!-- Get Quote Button -->
                            <NuxtLink to="/quote"
                                class="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                                <!-- Animated background overlay -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out">
                                </div>

                                <!-- Button content -->
                                <div class="relative flex items-center gap-2">
                                    <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span class="text-sm sm:text-base">Get Quote</span>
                                    <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </NuxtLink>

                            <!-- Additional Navigation Links -->
                            <div class="hidden md:flex items-center space-x-2 ml-2">
                                <!-- Separator -->
                                <div class="w-px h-6 bg-gray-300"></div>

                                <!-- Terms Link -->
                                <NuxtLink to="/terms"
                                    class="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all duration-300 text-sm">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Terms
                                </NuxtLink>

                                <!-- Consultant Link -->
                                <NuxtLink to="/consultant"
                                    class="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all duration-300 text-sm">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Consultant
                                </NuxtLink>
                            </div>

                            <!-- Mobile Menu Button -->
                            <div class="md:hidden">
                                <button @click="showMobileMenu = !showMobileMenu"
                                    class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                    :class="{ 'bg-gray-100 text-gray-900': showMobileMenu }">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </nav>

                        <!-- Mobile Menu -->
                        <div v-if="showMobileMenu"
                            class="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-10">
                            <div class="px-4 py-3 space-y-2">
                                <NuxtLink to="/terms"
                                    class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                                    @click="showMobileMenu = false">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Terms of Service
                                </NuxtLink>
                                <NuxtLink to="/consultant"
                                    class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                                    @click="showMobileMenu = false">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Consultant
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Breadcrumb Navigation -->
        <div class="max-w-4xl mx-auto px-4 py-4">
            <nav class="flex items-center space-x-2 text-sm text-gray-500" aria-label="Breadcrumb">
                <NuxtLink to="/" class="hover:text-blue-600 transition-colors">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </NuxtLink>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-900 font-medium">Privacy Policy</span>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto px-4 pb-8">
            <div class="bg-white rounded-lg shadow-sm border p-8">
                <!-- Title -->
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Privacy Policy & SMS Terms</h1>
                    <p class="text-gray-600">How First Line Transport Inc protects your information</p>
                </div>

                <!-- Content -->
                <div class="prose prose-gray max-w-none text-sm">
                    <p class="text-lg mb-6">
                        At <strong>First Line Transport Inc</strong>, we are committed to protecting your privacy and
                        ensuring the security of your personal information. This Privacy Policy explains how we collect,
                        use, and safeguard your information when you use our auto transport services.
                    </p>

                    <!-- SMS Privacy Protection Section - Prominently Placed -->
                    <section class="mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h2 class="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            SMS & Mobile Information Privacy Protection
                        </h2>
                        <div class="space-y-4 text-blue-900">
                            <div class="bg-white p-4 rounded-lg border border-blue-200">
                                <h3 class="text-lg font-semibold mb-3 text-blue-800">
                                    🔒 Your Mobile Information is Protected
                                </h3>
                                <p class="mb-3">
                                    <strong>First Line Transport Inc specifically guarantees that your mobile phone
                                        number and SMS opt-in data will NOT be shared with any third parties or
                                        affiliates for marketing or promotional purposes.</strong>
                                </p>
                                <p class="mb-3">
                                    <strong>Text messaging originator opt-in data and consent information will not be
                                        shared with any third parties under any circumstances.</strong> This information
                                    remains strictly confidential and is used solely for providing you with service
                                    updates and communications related to your auto transport order.
                                </p>
                            </div>

                            <div class="bg-white p-4 rounded-lg border border-blue-200">
                                <h3 class="text-lg font-semibold mb-3 text-blue-800">
                                    📱 SMS Terms & Conditions
                                </h3>
                                <ul class="list-disc pl-6 space-y-2">
                                    <li><strong>Service Purpose:</strong> SMS messages are used exclusively for order
                                        updates, pickup notifications, delivery confirmations, and customer service
                                        communications</li>
                                    <li><strong>Opt-Out Rights:</strong> You can opt out of SMS communications at any
                                        time by replying "STOP" to any message</li>
                                    <li><strong>Message Frequency:</strong> Message frequency varies based on your
                                        transport order status and preferences</li>
                                    <li><strong>Carrier Charges:</strong> Standard message and data rates may apply from
                                        your mobile carrier</li>
                                    <li><strong>No Marketing Use:</strong> Your mobile number will never be used for
                                        unsolicited marketing messages</li>
                                </ul>
                            </div>

                            <div class="bg-white p-4 rounded-lg border border-blue-200">
                                <h3 class="text-lg font-semibold mb-3 text-blue-800">
                                    🛡️ Additional Mobile Privacy Protections
                                </h3>
                                <p class="mb-2">
                                    <strong>All other categories of information sharing exclude text messaging
                                        originator opt-in data and consent.</strong> This means:
                                </p>
                                <ul class="list-disc pl-6 space-y-1">
                                    <li>Carriers who transport your vehicle will NOT receive your mobile opt-in
                                        information</li>
                                    <li>Service providers and analytics companies will NOT have access to your SMS
                                        consent data</li>
                                    <li>Legal disclosures will NOT include your text messaging preferences unless
                                        specifically required by court order</li>
                                    <li>Your mobile information is stored separately and with enhanced security measures
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                        <div class="space-y-3">
                            <p><strong>Personal Information:</strong> We collect information you provide directly to us,
                                such as:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li><strong>Contact details:</strong> Name, email address, and phone number</li>
                                <li><strong>Service information:</strong> Pickup and delivery addresses</li>
                                <li><strong>Vehicle details:</strong> Vehicle information (make, model, year)</li>
                                <li><strong>Payment data:</strong> Payment information (processed securely)</li>
                            </ul>

                            <p><strong>Automatically Collected Information:</strong> We may collect certain information
                                automatically, including:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li><strong>Technical data:</strong> IP address and browser information</li>
                                <li><strong>Usage analytics:</strong> Website usage data and analytics</li>
                                <li><strong>Device information:</strong> Device type and operating system</li>
                            </ul>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <div class="space-y-3">
                            <p>We use your information to:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li><strong>Service delivery:</strong> Provide auto transport services and process your
                                    orders</li>
                                <li><strong>Communication:</strong> Communicate with you about your shipment status and
                                    updates</li>
                                <li><strong>Quotes and updates:</strong> Send you quotes and service notifications</li>
                                <li><strong>Service improvement:</strong> Improve our services and website functionality
                                </li>
                                <li><strong>Legal compliance:</strong> Comply with legal obligations and regulations
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                        <div class="space-y-3">
                            <p>We may share your information with:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li><strong>Carriers:</strong> Licensed transport carriers who will handle your vehicle
                                    shipment</li>
                                <li><strong>Service Providers:</strong> Third-party companies that help us operate our
                                    business (payment processors, analytics providers)</li>
                                <li><strong>Legal Requirements:</strong> When required by law, court order, or to
                                    protect our rights and safety</li>
                            </ul>
                            <p><strong>Important:</strong> We do not sell, rent, or trade your personal information to
                                third parties for marketing purposes.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                        <div class="space-y-3">
                            <p>We implement <strong>appropriate security measures</strong> to protect your personal
                                information against:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Unauthorized access</li>
                                <li>Alteration or modification</li>
                                <li>Disclosure to unauthorized parties</li>
                                <li>Destruction or loss</li>
                            </ul>
                            <p><strong>Please note:</strong> While we strive to protect your information, no method of
                                transmission over the internet is 100% secure.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                        <div class="space-y-3">
                            <p><strong>You have the right to:</strong></p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li><strong>Access:</strong> Access and review your personal information</li>
                                <li><strong>Update:</strong> Update or correct your personal information</li>
                                <li><strong>Delete:</strong> Request deletion of your data (subject to legal
                                    requirements)</li>
                                <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                                <li><strong>Information:</strong> Request information about how we use your data</li>
                            </ul>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                        <div class="space-y-3">
                            <p>We use <strong>cookies and similar technologies</strong> to:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Enhance your browsing experience</li>
                                <li>Analyze website traffic and user behavior</li>
                                <li>Understand user preferences</li>
                                <li>Provide personalized content</li>
                            </ul>
                            <p><strong>Cookie Control:</strong> You can control cookie settings through your browser
                                preferences. Note that disabling cookies may affect website functionality.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
                        <div class="space-y-3">
                            <p>Our website may contain links to third-party websites or services. We are <strong>not
                                    responsible for the privacy practices</strong> of these external sites. We encourage
                                you to review their privacy policies before providing any personal information.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
                        <div class="space-y-3">
                            <p>We retain your personal information for as long as necessary to:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Provide our services</li>
                                <li>Comply with legal obligations</li>
                                <li>Resolve disputes</li>
                                <li>Enforce our agreements</li>
                            </ul>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                        <p>If you have questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                            <p><strong>First Line Transport Inc</strong></p>
                            <p><strong>Email:</strong> info@fltransportinc.com</p>
                            <p><strong>Phone:</strong> +1 929 923-7706</p>
                            <p><strong>Address:</strong> United States</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                        <div class="space-y-3">
                            <p>We may update this Privacy Policy from time to time to reflect:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Changes in our practices</li>
                                <li>Legal or regulatory requirements</li>
                                <li>New features or services</li>
                            </ul>
                            <p><strong>Notification:</strong> We will notify you of any material changes by posting the
                                new Privacy Policy on our website and updating the "Last Updated" date below.</p>
                        </div>
                    </section>

                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <p class="text-sm text-gray-600">
                                <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
                            </p>

                            <!-- Back to Top Button -->
                            <button @click="scrollToTop"
                                class="group flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105">
                                <svg class="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <span class="text-sm font-medium">Back to Top</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Action Buttons -->
        <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
            <!-- Scroll to Top FAB -->
            <button v-show="showScrollTop" @click="scrollToTop"
                class="group p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top">
                <svg class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <!-- Quick Quote FAB -->
            <NuxtLink to="/quote"
                class="group p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Get quick quote">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
// Mobile menu state
const showMobileMenu = ref(false)
const showScrollTop = ref(false)

// Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Handle scroll events
const handleScroll = () => {
    showScrollTop.value = window.scrollY > 300
}

// Close mobile menu when clicking outside and handle scroll
onMounted(() => {
    const handleClickOutside = (event: Event) => {
        const target = event.target as Element
        if (!target.closest('.mobile-menu-container')) {
            showMobileMenu.value = false
        }
    }

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    // Check initial scroll position
    handleScroll()

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
        window.removeEventListener('scroll', handleScroll)
    })
})

// SEO Meta Tags
useHead({
    title: 'Privacy Policy - First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Learn how First Line Transport Inc protects your privacy and personal information. Read our comprehensive privacy policy for auto transport services.'
        },
        {
            name: 'keywords',
            content: 'privacy policy, data protection, personal information, auto transport privacy, vehicle shipping privacy'
        },
        { name: 'robots', content: 'index, follow' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/privacy-policy' }
    ]
})

useSeoMeta({
    ogTitle: 'Privacy Policy - First Line Transport INC',
    ogDescription: 'Learn how First Line Transport Inc protects your privacy and personal information.',
    ogUrl: 'https://fltransportinc.com/privacy-policy',
    ogType: 'website',
    ogLocale: 'en_US',

    twitterTitle: 'Privacy Policy - First Line Transport INC',
    twitterDescription: 'Learn how First Line Transport Inc protects your privacy and personal information.',
    twitterCard: 'summary'
})

// Breadcrumbs Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://fltransportinc.com'
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Privacy Policy',
            item: 'https://fltransportinc.com/privacy-policy'
        }
    ]
})
</script>