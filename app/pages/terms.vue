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

                                <!-- Privacy Policy Link -->
                                <NuxtLink to="/privacy-policy"
                                    class="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all duration-300 text-sm">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Privacy
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
                                <NuxtLink to="/privacy-policy"
                                    class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                                    @click="showMobileMenu = false">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Privacy Policy
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
                <span class="text-gray-900 font-medium">Terms & Conditions</span>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto px-4 pb-8">
            <div class="bg-white rounded-lg shadow-sm border p-8">
                <!-- Title -->
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
                    <p class="text-gray-600">First Line Transport Inc Service Agreement</p>
                </div>

                <!-- Content -->
                <div class="prose prose-gray max-w-none text-sm">
                    <p class="text-lg mb-6">
                        Thank you for choosing <strong>First Line Transport Inc</strong> for your vehicle's transport.
                        By using our vehicle transportation broker services, you and the person or entity you represent
                        accept all of the terms and conditions of service ("TERMS") stated herein. In the event of a
                        conflict between these TERMS and those in any other document, including a motor carrier bill of
                        lading, tariff or service guide, or any other documents, these TERMS will supersede and control
                        as between you and <strong>First Line Transport Inc</strong>. These TERMS cannot be modified by
                        anyone except for <strong>First Line Transport Inc</strong>.
                    </p>

                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p class="text-sm font-medium text-yellow-800">
                            <strong>IMPORTANT NOTICE:</strong> THESE TERMS CONTAIN PROVISIONS THAT GOVERN HOW CLAIMS
                            CUSTOMER AND FIRST LINE TRANSPORT INC MAY HAVE AGAINST EACH OTHER CAN BE BROUGHT. THESE
                            PROVISIONS WILL, WITH LIMITED EXCEPTION, REQUIRE CUSTOMER TO SUBMIT CLAIMS CUSTOMER HAS
                            AGAINST FIRST LINE TRANSPORT INC TO BINDING AND FINAL ARBITRATION ON AN INDIVIDUAL BASIS,
                            NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, GROUP OR REPRESENTATIVE ACTION OR
                            PROCEEDING. PLEASE REVIEW SECTION 8 FOR THE DETAILS REGARDING CUSTOMER'S AGREEMENT TO
                            ARBITRATE ANY DISPUTES WITH FIRST LINE TRANSPORT INC.
                        </p>
                    </div>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Definitions</h2>
                        <div class="space-y-3">
                            <p><strong>a. "Additional Services"</strong> means upgrades and additional services ordered
                                by the Customer such as vehicle top-loading, guaranteed pick up date, covered transport,
                                additional personal belongings, etc.</p>

                            <p><strong>b. "Bill of Lading"</strong> means a document provided by the Carrier to the
                                Customer at delivery documenting the details of the Shipment and its condition, Point of
                                Origin, Destination and other details regarding the Order. Bill of Lading can serve as a
                                receipt or a contract between the Carrier and Customer.</p>

                            <p><strong>c. "Carrier"</strong> means a motor carrier of property, as defined at 49 U.S.C.
                                §13102(14), duly licensed by State and/or Federal Department of Transportation, or a
                                carrier of goods by sea pursuant to 46 U.S.C. § 30701.</p>

                            <p><strong>d. "Customer"</strong> means the individual, company or other entity, including
                                its agents and representatives, ordering the transportation of Shipment.</p>

                            <p><strong>e. "First Line Transport Inc", "we", "us" or "our"</strong> means First Line
                                Transport Inc, its affiliates and subsidiaries. First Line Transport Inc is a
                                transportation broker as defined at 49 U.S.C. § 13102(2), arranging for the
                                transportation of freight through third party Carriers and is duly licensed by the
                                Department of Transportation (DOT), and is registered with the Federal Motor Carrier
                                Safety Administration (FMCSA) and/or other government agencies as may be required by
                                law. <strong>First Line Transport Inc is not a Carrier.</strong></p>

                            <p><strong>f. "Order"</strong> means Customer's request for First Line Transport Inc to
                                arrange for the transportation of Customer's Shipment.</p>

                            <p><strong>g. "Shipment"</strong> means the Customer's property — an automobile or motorized
                                vehicle — arranged for transportation in accordance with these TERMS.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> Upon Customer's request, First Line Transport Inc will arrange for
                                the transportation of Customer's Shipment by Carriers subject to these TERMS.
                                <strong>First Line Transport Inc reserves the right, in its sole discretion, to refuse
                                    or cancel any Order at any time.</strong>
                            </p>

                            <p><strong>b.</strong> <strong>First Line Transport Inc's services are deemed completed when
                                    a Carrier has accepted Customer's Order.</strong></p>

                            <p><strong>c.</strong> Customer understands and accepts that First Line Transport Inc (i)
                                <strong>operates only as a transportation broker</strong>, (ii) <strong>is not a motor
                                    carrier or transporter</strong>, and (iii) <strong>does not hold itself out as
                                    providing the transportation of property.</strong>
                            </p>

                            <p><strong>d.</strong> Customer expressly understands and agrees that <strong>First Line
                                    Transport Inc never takes custody or possession of, transports, or handles
                                    Customer's Shipment, or assumes any liability for the Shipment.</strong></p>

                            <p><strong>e.</strong> First Line Transport Inc shall provide Customer with an estimated
                                pickup and estimated delivery date, however, delays may occur prior to, and/or during
                                transport due to weather or road conditions, government regulations, mechanical
                                problems, and other causes that are beyond First Line Transport Inc's control.
                                <strong>First Line Transport Inc cannot and does not guarantee delivery dates or
                                    times.</strong>
                            </p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Customer's Responsibilities</h2>
                        <div class="space-y-3">
                            <p><strong>a. Accuracy of Information.</strong> Customer understands and accepts that
                                <strong>only Customer is responsible to ensure the accuracy of all of the
                                    details</strong> including the description of the Shipment (year, make, model, body
                                style, trim, etc.), Point of Origin, Destination, fees, and special instructions in the
                                Order Confirmation.
                            </p>

                            <p><strong>b. Preparing Shipment.</strong> Customer understands and accepts that
                                <strong>Customer is responsible for preparing the Shipment for transportation.</strong>
                                Customer must either secure or remove all loose parts, fragile accessories, low hanging
                                spoilers, etc. prior to shipment. <strong>Shipment must be tendered to Carrier in
                                    operable condition with no more than a quarter tank of fuel.</strong>
                            </p>

                            <p><strong>c. Personal Property.</strong> Customer may leave <strong>one suitcase OR one bag
                                    carrying personal property which shall not exceed one hundred pounds (100
                                    lbs.)</strong> and must be confined to the trunk or storage area of the Shipment.
                                Customer is advised <strong>not to leave any negotiable instruments, legal papers,
                                    jewelry, furs, money, cash or currency, antiques, or any valuable articles</strong>
                                in the Shipment.</p>

                            <p><strong>d. Prohibited Items.</strong> Customer understands and accepts that Customer is
                                <strong>expressly prohibited from loading any explosives, guns, ammunition, weapons,
                                    flammable products, live pets, live plants, any contraband, drugs or narcotics,
                                    alcoholic beverages, and or any illegal goods</strong> in the Shipment.
                            </p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Fees and Payment</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> Customer agrees to <strong>pay all amounts due in full</strong> for
                                each Order and any Additional Services as per the terms of the Order Confirmation and
                                these TERMS. <strong>Payment for First Line Transport Inc's services is due when a
                                    Carrier accepts an Order</strong> as First Line Transport Inc's services have been
                                rendered at that point.</p>

                            <p><strong>b.</strong> All payments for the balance due to Carrier for C.O.D. must be made
                                on or before the delivery of Shipment in the form of <strong>cash, certified funds,
                                    cashier's check or money order made payable to the Carrier.</strong></p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Cancellation and Refund Policy</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> Customer may cancel an Order at any time at <strong>no cost or
                                    cancellation fees as long as the Order has not yet been accepted by a
                                    Carrier.</strong> If the Order is canceled for any reason after a Carrier accepts
                                the Order, then the Customer agrees to pay a <strong>minimum of two hundred and forty
                                    nine dollars ($249.00) in cancellation fees.</strong></p>

                            <p><strong>b.</strong> Customer is entitled to a refund for <strong>only the unfulfilled
                                    portion of the services.</strong></p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Loss, Damage or Delay Claims</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> <strong>First Line Transport Inc is a property transportation broker,
                                    therefore, is not and will not be liable for any cargo loss and damage claims for
                                    any reason.</strong></p>

                            <p><strong>b.</strong> If Customer has a claim for loss or damage to a Shipment, then
                                Customer understands and agrees that <strong>the party liable for all such claims is the
                                    Carrier and not First Line Transport Inc</strong>, and it is <strong>Customer's
                                    responsibility to file any claim directly with the Carrier</strong> who transported
                                the Shipment.</p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> The <strong>total cumulative liability of First Line Transport Inc
                                    for any and all claims and damages</strong>, whether arising from statute, contract,
                                tort or otherwise, <strong>shall not under any circumstances exceed the total fees paid
                                    by Customer to First Line Transport Inc</strong> for First Line Transport Inc's
                                services under the respective Order Confirmation.</p>

                            <p><strong>b.</strong> <strong>EXCEPT AS OTHERWISE PROVIDED HEREIN, FIRST LINE TRANSPORT INC
                                    MAKES NO WARRANTIES FOR ANY OF ITS SERVICES AND HEREBY DISCLAIMS ALL WARRANTIES OR
                                    REPRESENTATIONS, EXPRESSED OR IMPLIED.</strong></p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Arbitration</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> <strong>Any dispute, controversy, or claim between the parties
                                    arising out of or relating in any way to these TERMS, an Order, First Line Transport
                                    Inc's services or any other Customer engagement with First Line Transport Inc will
                                    be resolved by binding arbitration, rather than in court.</strong></p>

                            <p><strong>b.</strong> The parties each agree that <strong>any dispute resolution
                                    proceedings or lawsuits, whether in arbitration or in a court of law, will be
                                    conducted only on an individual basis and not in a class or representative
                                    action.</strong></p>
                        </div>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                        <p>These TERMS shall be construed in accordance with <strong>Title 49, United States
                                Code</strong> and be governed by the <strong>laws of the United States</strong> without
                            regard to any conflict of law principles.</p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Miscellaneous</h2>
                        <div class="space-y-3">
                            <p><strong>a.</strong> These TERMS supersede all prior written or oral representations and
                                constitute the <strong>entire agreement between Customer and First Line Transport
                                    Inc</strong> and may not be changed by anyone except for First Line Transport Inc.
                            </p>

                            <p><strong>b.</strong> Customer warrants that <strong>Customer has read these TERMS in their
                                    entirety</strong> and by continuing with the transaction, <strong>fully understands
                                    and agrees to them.</strong></p>

                            <p><strong>c.</strong> If any provision of these TERMS shall be adjudged by any court of
                                competent jurisdiction to be unenforceable or invalid, that provision shall be limited
                                or eliminated to the minimum extent necessary so that these TERMS will otherwise remain
                                in full force and effect.</p>
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
    title: 'Terms & Conditions - First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Read the complete terms and conditions for First Line Transport Inc auto transport services. Understand your rights and responsibilities when using our vehicle shipping services.'
        },
        {
            name: 'keywords',
            content: 'terms and conditions, auto transport terms, vehicle shipping agreement, transport service terms'
        },
        { name: 'robots', content: 'index, follow' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/terms' }
    ]
})

useSeoMeta({
    ogTitle: 'Terms & Conditions - First Line Transport INC',
    ogDescription: 'Read the complete terms and conditions for First Line Transport Inc auto transport services.',
    ogUrl: 'https://fltransportinc.com/terms',
    ogType: 'website',
    ogLocale: 'en_US',

    twitterTitle: 'Terms & Conditions - First Line Transport INC',
    twitterDescription: 'Read the complete terms and conditions for First Line Transport Inc auto transport services.',
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
            name: 'Terms & Conditions',
            item: 'https://fltransportinc.com/terms'
        }
    ]
})
</script>