<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Breadcrumb" class="bg-white border-b border-gray-200">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <ol class="flex items-center space-x-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <NuxtLink to="/" itemprop="item" class="text-blue-600 hover:text-blue-800 transition-colors">
                            <span itemprop="name">Home</span>
                        </NuxtLink>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="text-gray-400">/</li>
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name" class="text-gray-700">Hawaii & Alaska Car Shipping</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/hawai.jpg" 
                alt="Hawaii and Alaska car shipping service with maritime transport and beautiful island scenery"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Hawaii & Alaska Car Shipping Service - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Hawaii & Alaska Car Shipping - Complete Guide</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Expert multimodal transport to non-contiguous states</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">From Islands or Frontier to the Lower 48: What It Takes</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Transporting a vehicle from Hawaii or Alaska into the contiguous U.S. is more complex than standard interstate <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport</NuxtLink>. The process involves multiple legs—ocean or barge transit plus overland trucking—and coordination across different modes of transport. But it's entirely feasible, and many carriers specialize in it.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Important:</span> Whether you're relocating permanently, heading out for a military PCS, or simply need your car where it can't drive itself, shipping a vehicle to a non-contiguous state doesn't have to be confusing or stressful.</p>
                </div>

                <p class="text-gray-700 leading-relaxed mt-6">
                    Unlike standard <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink> or <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">enclosed transport</NuxtLink> within the continental U.S., Hawaii and Alaska shipping requires specialized knowledge of maritime regulations, port operations, and multimodal coordination. This service can also be combined with <NuxtLink to="/blogs/door-to-door" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">door-to-door delivery</NuxtLink> for maximum convenience.
                </p>
            </div>

            <!-- Why Ship Your Car -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Why Ship Your Car Instead of Buying One There?</h2>
                <p class="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                    In both Hawaii and Alaska, car prices are significantly higher than on the mainland. Inventory is limited, waitlists are long, and even base-model vehicles can come with inflated premiums.
                </p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">💰</span>
                            Cost Savings
                        </h3>
                        <p class="text-sm text-green-800">Avoid the markup and limited selection in remote markets. Shipping is usually more affordable than buying local.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🚗</span>
                            Reliable Vehicle
                        </h3>
                        <p class="text-sm text-green-800">Keep a dependable car you already know and trust, eliminating the hassle of buying, renting, or relying on limited transit systems.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⏱️</span>
                            Temporary Relocation
                        </h3>
                        <p class="text-sm text-green-800">Perfect if you're only relocating temporarily and want to bring your car back later.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🎖️</span>
                            Military & Government
                        </h3>
                        <p class="text-sm text-green-800">Ideal for military or government relocations that need to meet specific timelines.</p>
                    </div>
                </div>
            </div>

            <!-- How It Works -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">How the Shipping Process Works</h2>
                <p class="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    Shipping a car to Hawaii or Alaska involves a mix of ground and ocean transport. Here's the step-by-step process:
                </p>

                <div class="space-y-6">
                    <!-- Step 1 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
                        <div class="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            1
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Drop-off at Hawaii/Alaska Terminal</h3>
                            <p class="text-sm text-gray-700">You bring (or arrange to have) your car delivered to a specified port terminal in Hawaii or Alaska (e.g., Honolulu, Kahului, Anchorage, Kodiak). In some cases, there's a "port-to-door" arrangement where the carrier handles inland trucking from the port outwards.</p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
                        <div class="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            2
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Inspection & Documentation</h3>
                            <p class="text-sm text-gray-700">Before loading, your vehicle is inspected. You'll need to present required paperwork (title, registration, lienholder authorization if needed). The car must usually be emptied of personal items and have minimal fuel in tank.</p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
                        <div class="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            3
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Ocean / Barge / Maritime Leg</h3>
                            <p class="text-sm text-gray-700 mb-2">From the terminal, the vehicle is loaded onto a roll-on/roll-off ship, barge, or vessel specialized for auto freight.</p>
                            <ul class="space-y-1 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span><span class="font-semibold">Hawaii:</span> Route crosses the Pacific to a U.S. mainland port (e.g., Long Beach, Oakland)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span><span class="font-semibold">Alaska:</span> Shipped via barge or maritime + overland portions (often routing through Seattle/Tacoma)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-600">
                        <div class="bg-orange-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            4
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Arrival at U.S. Mainland Port</h3>
                            <p class="text-sm text-gray-700">Once the ship reaches the continental U.S. port, your vehicle is offloaded. Depending on your service level, the carrier may handle further land transportation from that port toward your final address.</p>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-gray-600">
                        <div class="bg-gray-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            5
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Inland Transport to Final Destination</h3>
                            <p class="text-sm text-gray-700">From the port, your car is trucked (or rail/road) to its final U.S. address (if you opted for door delivery) or to another terminal (if terminal-to-terminal). The inland leg is similar to any domestic auto shipping.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cost & Transit Time -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Cost & Transit Time: What to Expect</h2>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <!-- Hawaii -->
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-3 rounded-full">
                                <UIcon name="heroicons:map-pin-solid" class="text-white" size="24" />
                            </div>
                            <h3 class="text-2xl font-bold text-blue-900">Hawaii → Mainland U.S.</h3>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4">
                                <h4 class="font-bold text-blue-900 mb-2">Cost Range</h4>
                                <p class="text-2xl font-bold text-blue-600 mb-2">$1,020 - $1,800</p>
                                <p class="text-sm text-gray-700">Depending on origin, destination, and vehicle type</p>
                            </div>
                            
                            <div class="bg-white rounded-lg p-4">
                                <h4 class="font-bold text-blue-900 mb-2">Transit Time</h4>
                                <p class="text-2xl font-bold text-blue-600 mb-2">9-45 days</p>
                                <p class="text-sm text-gray-700">Depending on port schedules, barge connections (especially for neighbor islands), and inland transport</p>
                            </div>
                        </div>
                    </div>

                    <!-- Alaska -->
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-purple-600 p-3 rounded-full">
                                <UIcon name="heroicons:map-pin-solid" class="text-white" size="24" />
                            </div>
                            <h3 class="text-2xl font-bold text-purple-900">Alaska → Lower 48</h3>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4">
                                <h4 class="font-bold text-purple-900 mb-2">Cost Range</h4>
                                <p class="text-2xl font-bold text-purple-600 mb-2">$1,637+</p>
                                <p class="text-sm text-gray-700">Anchorage to Tacoma (Washington) for standard vehicle. In-state transport: $1.10-$1.75 per mile</p>
                            </div>
                            
                            <div class="bg-white rounded-lg p-4">
                                <h4 class="font-bold text-purple-900 mb-2">Transit Time</h4>
                                <p class="text-2xl font-bold text-purple-600 mb-2">6-7 days (maritime)</p>
                                <p class="text-sm text-gray-700">Plus additional time for inland ground transit depending on your destination</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p class="text-yellow-900 text-sm"><span class="font-semibold">Note:</span> These costs are indicative. Many variables influence the final quote (vehicle size, route, demand, service level, etc.).</p>
                </div>
            </div>

            <!-- Key Challenges -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-orange-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:exclamation-triangle-solid" class="text-orange-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Key Challenges & Considerations</h2>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Multimodal Coordination</h3>
                        <p class="text-gray-700 text-sm">Because your shipment involves both sea and land segments, delays in one leg (port congestion, bad weather, barge schedule changes) can ripple into the rest of your timeline.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Vehicle Size & Restrictions</h3>
                        <p class="text-gray-700 text-sm">Oversized vehicles, tall trucks, or those with special modifications may incur surcharges or may not be accepted on certain routes.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">EVs, Hybrids & Lithium Batteries</h3>
                        <p class="text-gray-700 text-sm">Some carriers suspend acceptance of electric vehicles or plug-in hybrids due to battery risks on sea vessels.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Port Operating Hours & Terminal Access</h3>
                        <p class="text-gray-700 text-sm">Especially in remote or island locations, port terminals may have limited hours. You must align drop-off/pick-up with those windows.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Storage & Demurrage</h3>
                        <p class="text-gray-700 text-sm">After arrival at mainland ports, there's often a grace period for free storage (typically 5 days). Additional storage days can cost around $25/day.</p>
                    </div>
                </div>
            </div>

            <!-- Tips Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Tips to Make It Smoother & More Cost-Effective</h2>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Book Early</h4>
                            <p class="text-sm text-gray-700">Vessel space is limited, especially for island or remote routes. Reserve 2-3 weeks in advance.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Be Flexible with Terminals</h4>
                            <p class="text-sm text-gray-700">Sometimes choosing a different port yields lower cost.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Reduce Vehicle Weight</h4>
                            <p class="text-sm text-gray-700">Remove nonessential items to avoid excess weight surcharges.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Comply with Pre-Shipment Rules</h4>
                            <p class="text-sm text-gray-700">Clean car, minimal fuel, document any existing damage with photos.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Monitor Arrival Schedule</h4>
                            <p class="text-sm text-gray-700">Plan pick-up to avoid storage fees.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Check Battery Policy</h4>
                            <p class="text-sm text-gray-700">If you have a hybrid or EV, ensure the carrier accepts it.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Work with Experienced Carriers</h4>
                            <p class="text-sm text-gray-700">Using shippers that specialize in Hawaii or Alaska routes gives you better predictability.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Get Multiple Quotes</h4>
                            <p class="text-sm text-gray-700">Compare routes and schedules. Consider combining separate carriers for better pricing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ports We Serve -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Ports We Serve</h2>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:map-pin-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Hawaii Ports</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Honolulu (Oahu)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Hilo (Big Island)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Kahului (Maui)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Nawiliwili (Kauai)</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-purple-50 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:map-pin-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">Alaska Ports</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Anchorage</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Fairbanks</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Kodiak (limited access, available on request)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Common Mistakes -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Common Mistakes to Avoid</h2>

                <div class="space-y-4">
                    <div class="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <span class="text-red-600 font-bold text-xl">✗</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Waiting Too Long to Book</h4>
                            <p class="text-sm text-gray-700">Can mean missing your preferred ship date, especially during busy summer months or PCS season.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <span class="text-red-600 font-bold text-xl">✗</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Leaving Personal Items in the Car</h4>
                            <p class="text-sm text-gray-700">Ports and carriers will refuse the vehicle if anything is left inside.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <span class="text-red-600 font-bold text-xl">✗</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Not Verifying Credentials</h4>
                            <p class="text-sm text-gray-700">Always verify FMCSA registration and ask for proof of cargo coverage. Some ports require special certifications like a TWIC card.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <span class="text-red-600 font-bold text-xl">✗</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Choosing the Wrong Port</h4>
                            <p class="text-sm text-gray-700">Dropping off at the wrong terminal or requesting delivery to a remote island or town can lead to unexpected costs and delays.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <span class="text-red-600 font-bold text-xl">✗</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Not Documenting Vehicle Condition</h4>
                            <p class="text-sm text-gray-700">Always document your vehicle's condition with photos prior to pickup.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why First Line Transport -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose First Line Transport INC?</h2>
                    <p class="text-lg text-gray-600">We're not just a broker—we're a partner in the process</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:check-badge-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Full Coordination</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">Our team coordinates every phase of the move, from the initial quote to final delivery. We don't subcontract and disappear—we stay with you.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Door-to-port and port-to-door coordination</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Single point of contact</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Real-time updates throughout</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Trusted Network</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">Our network includes fully insured carriers, veteran drivers, and trusted port partners who understand the demands of shipping to non-contiguous states.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Fully licensed and insured</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Experienced with Hawaii & Alaska routes</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>TWIC certified for port access</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:currency-dollar-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">Clear Pricing</h3>
                        </div>
                        <p class="text-purple-800 text-sm mb-3">Fast, accurate quotes with zero pressure. We don't offer flat-rate pricing because no two shipments are the same, but we do provide transparent, detailed quotes.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>No hidden fees</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Detailed price breakdowns</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>TruePrice guarantee</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:chat-bubble-left-right-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">Fast Responses</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">You'll have clear pricing and fast responses whenever you need support. Whether you're shipping one personal vehicle or managing a fleet move, we can handle it.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>24/7 customer support</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Dedicated transport coordinator</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Clear communication at every step</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <p class="text-blue-900 text-center"><span class="font-bold">Our Commitment:</span> We coordinate thousands of successful moves to and from Hawaii and Alaska. Let us help you build the best route, timeline, and delivery plan to get your car where it needs to go—quickly, safely, and with zero guesswork.</p>
                </div>
            </div>

            <!-- Not Sure Section -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Not Sure About the Process?</h2>
                <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Shipping to Hawaii or Alaska involves unique challenges. Our experts can guide you through every step.
                </p>

                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">🗺️</div>
                        <h3 class="font-bold text-gray-900 mb-2">Route Planning</h3>
                        <p class="text-sm text-gray-700">We'll help you choose the best ports and shipping methods for your specific situation.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">📋</div>
                        <h3 class="font-bold text-gray-900 mb-2">Documentation Help</h3>
                        <p class="text-sm text-gray-700">We'll guide you through all required paperwork and port requirements.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">⏰</div>
                        <h3 class="font-bold text-gray-900 mb-2">Timeline Coordination</h3>
                        <p class="text-sm text-gray-700">We'll coordinate vessel schedules, port times, and inland transport for seamless delivery.</p>
                    </div>
                </div>

                <div class="text-center">
                    <button @click="openConsultantModal()"
                        class="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl">
                        Get Expert Guidance
                    </button>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How much does it cost to ship a car to Hawaii or Alaska?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Hawaii car shipping costs $1,020-$1,800 depending on origin and destination. Alaska shipping costs $1,637+ from Anchorage to Tacoma, with in-state transport at $1.10-$1.75 per mile. Costs vary based on vehicle size, route, and seasonal demand.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How long does it take to ship a car to Hawaii or Alaska?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Hawaii shipping takes 9-45 days depending on port schedules and barge connections, especially for neighbor islands. Alaska maritime transport takes 6-7 days plus additional time for inland ground transit to your final destination.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What ports do you serve in Hawaii and Alaska?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Hawaii ports include Honolulu (Oahu), Hilo (Big Island), Kahului (Maui), and Nawiliwili (Kauai). Alaska ports include Anchorage, Fairbanks, and Kodiak (limited access, available on request).</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Can I ship electric vehicles to Hawaii or Alaska?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Some carriers suspend acceptance of electric vehicles or plug-in hybrids due to lithium battery risks on sea vessels. Always check with your carrier about their EV policy before booking.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What should I do to prepare my vehicle for Hawaii or Alaska shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Clean your vehicle inside and out, remove all personal items, reduce fuel to 1/4 tank or less, document existing damage with photos, and ensure you have all required paperwork including title and registration.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Articles -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Related Auto Transport Guides</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Open Transport Service</h3>
                        <p class="text-gray-700 mb-4">Learn about our most popular transport method that can be combined with Hawaii and Alaska shipping for the mainland portion.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Read About Open Transport →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Door-to-Door Service</h3>
                        <p class="text-gray-700 mb-4">Combine Hawaii/Alaska shipping with door-to-door service for ultimate convenience on the mainland portion of your transport.</p>
                        <NuxtLink to="/blogs/door-to-door" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Explore Door-to-Door Service →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Conclusion -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Conclusion</h2>
                <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                    Shipping a car from Hawaii or Alaska to the continental U.S. is more complex and costlier than normal interstate transport, but by understanding each leg of the journey and planning carefully, you can make it work smoothly.
                </p>
                <p class="text-center text-gray-600 font-semibold">
                    With the right partner, it's just another box checked off your move list.
                </p>
            </div>

            <!-- Final CTA -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Get a transparent quote for Hawaii or Alaska car shipping. We'll help you build the best route, timeline, and delivery plan to get your car where it needs to go.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="openModal()"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Request a Quote Now
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">Experienced with non-contiguous states • Full coordination • No hidden fees • Fast responses</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Modal state management
const modal = useState('globalModal', () => false)
const consultantModal = useState('consultantModal', () => false)

function openModal(){
    modal.value = !modal.value
}
function openConsultantModal(){
    consultantModal.value = !consultantModal.value
}

// SEO Meta Tags
useHead({
    title: 'Hawaii & Alaska Car Shipping - Complete Guide | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Complete guide to shipping vehicles to Hawaii and Alaska. Learn about costs, transit times, ports, and the multimodal process for non-contiguous state vehicle transport.'
        },
        {
            name: 'keywords',
            content: 'Hawaii car shipping, Alaska car shipping, non-contiguous state vehicle transport, island car shipping, maritime auto transport, Hawaii Alaska vehicle shipping'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/hawaii-alaska' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Hawaii & Alaska Car Shipping - Complete Guide',
    ogDescription: 'Complete guide to shipping vehicles to Hawaii and Alaska. Learn about costs, transit times, ports, and the multimodal process for non-contiguous state vehicle transport.',
    ogUrl: 'https://fltransportinc.com/blogs/hawaii-alaska',
    ogImage: 'https://fltransportinc.com/hawai.jpg',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Hawaii & Alaska Car Shipping - Complete Guide',
    twitterDescription: 'Complete guide to shipping vehicles to Hawaii and Alaska. Learn about costs, transit times, and the complete process.',
    twitterImage: 'https://fltransportinc.com/hawai.jpg'
})

// Structured Data - Service Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hawaii & Alaska Car Shipping',
    serviceType: 'Non-Contiguous State Vehicle Transport',
    description: 'Specialized car shipping service to Hawaii and Alaska with multimodal transport including maritime and overland segments',
    provider: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        url: 'https://fltransportinc.com',
        logo: 'https://fltransportinc.com/logo.png'
    },
    areaServed: [
        {
            '@type': 'State',
            name: 'Hawaii'
        },
        {
            '@type': 'State',
            name: 'Alaska'
        }
    ]
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
            position: 3,
            name: 'Hawaii & Alaska Car Shipping',
            item: 'https://fltransportinc.com/blogs/hawaii-alaska'
        }
    ]
})

// Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hawaii & Alaska Car Shipping - Complete Guide to Non-Contiguous State Vehicle Transport',
    description: 'Comprehensive guide to shipping vehicles to Hawaii and Alaska including costs, process, ports, and expert tips for successful transport.',
    image: 'https://fltransportinc.com/hawai.jpg',
    datePublished: '2024-11-01',
    dateModified: '2024-11-01',
    author: {
        '@type': 'Organization',
        name: 'First Line Transport INC'
    },
    publisher: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        logo: {
            '@type': 'ImageObject',
            url: 'https://fltransportinc.com/logo.png'
        }
    }
})

// FAQ Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does it cost to ship a car to Hawaii or Alaska?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hawaii car shipping costs $1,020-$1,800 depending on origin and destination. Alaska shipping costs $1,637+ from Anchorage to Tacoma, with in-state transport at $1.10-$1.75 per mile.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long does it take to ship a car to Hawaii or Alaska?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hawaii shipping takes 9-45 days depending on port schedules and connections. Alaska maritime transport takes 6-7 days plus additional time for inland ground transit.'
            }
        },
        {
            '@type': 'Question',
            name: 'What ports do you serve in Hawaii and Alaska?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hawaii ports include Honolulu (Oahu), Hilo (Big Island), Kahului (Maui), and Nawiliwili (Kauai). Alaska ports include Anchorage, Fairbanks, and Kodiak (limited access).'
            }
        }
    ]
})
</script>
