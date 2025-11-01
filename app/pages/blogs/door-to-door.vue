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
                        <span itemprop="name" class="text-gray-700">Door-to-Door Car Shipping</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/door.jpg" 
                alt="Door-to-door car shipping service with professional carrier picking up vehicle at customer's home"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Door-to-Door Car Shipping Service - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Door-to-Door Car Shipping - Ultimate Convenience</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Professional vehicle pickup and delivery at your location</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">What Is Door-to-Door Car Shipping?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Door-to-door delivery (also called door-to-door auto shipping) means that the transport carrier will pick up your vehicle at your specified address—home, business, or other agreed location—and deliver it directly to the drop-off address you've chosen. This service is part of our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink> designed for maximum customer convenience.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Unlike terminal-to-terminal shipping (where you drop off the vehicle at a depot and someone else picks it up on the other end), door-to-door reduces the number of steps the customer must handle, providing maximum convenience and time savings. This service works with both <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink> and enclosed transport methods.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Important Note:</span> "Door" is often used loosely—if the carrier cannot safely enter a narrow street or building complex, they will arrange to load/unload at a nearby accessible location (large parking lot, commercial lot, etc.).</p>
                </div>

                <p class="text-gray-700 leading-relaxed mt-6">
                    Door-to-door service is ideal for customers who value convenience and want to minimize the time and effort required for vehicle transport. It's particularly popular among busy professionals, families relocating, and anyone shipping valuable or luxury vehicles.
                </p>
            </div>

            <!-- How It Works -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">How Does Door-to-Door Shipping Work?</h2>
                <p class="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    Here's a typical door-to-door process for car shipping with First Line Transport INC:
                </p>

                <div class="space-y-6">
                    <!-- Step 1 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
                        <div class="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            1
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Booking & Scheduling</h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Customer provides pickup address, drop-off address, and vehicle details (make, model, condition)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Carrier schedules the pickup window and confirms with you a few days ahead</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
                        <div class="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            2
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Pickup Day</h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>The carrier arrives at (or as close as safely possible to) your pickup address</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>You or your authorized person inspect the vehicle, note any pre-existing damage, and sign the bill of lading</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>The vehicle is loaded onto the transport trailer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
                        <div class="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            3
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Transport</h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>The vehicle stays on the carrier, ideally with minimal handling or transfers, en route to the destination</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>The carrier gives you updates on estimated arrival</span>
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
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Delivery Day</h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-orange-600 font-bold mr-2">•</span>
                                    <span>Carrier arrives at (or as close as safely possible to) your drop-off address</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-orange-600 font-bold mr-2">•</span>
                                    <span>You inspect the vehicle condition and sign off on delivery</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-orange-600 font-bold mr-2">•</span>
                                    <span>The carrier hands over all relevant delivery documentation</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-gray-600">
                        <div class="bg-gray-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            5
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Post-Delivery</h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-gray-600 font-bold mr-2">•</span>
                                    <span>If any issues or damage, you follow the carrier's claims process</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-gray-600 font-bold mr-2">•</span>
                                    <span>You're ready to drive or use the vehicle as agreed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Advantages Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:check-badge-solid" class="text-green-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Advantages of Door-to-Door Delivery</h2>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🏠</span>
                            Highest Level of Convenience
                        </h3>
                        <p class="text-sm text-green-800">The customer doesn't need to drive to a depot or wait at a terminal. Pickup and delivery are linked directly to their locations.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⏱️</span>
                            Time-Savings & Less Hassle
                        </h3>
                        <p class="text-sm text-green-800">Because drop-off and pickup are at or near the door, there are fewer extra trips or logistics for the customer.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🛡️</span>
                            Reduced Handling Risk
                        </h3>
                        <p class="text-sm text-green-800">With fewer transfers (especially compared to terminal shipping), there is less opportunity for damage, mishandling, or delay.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⭐</span>
                            Better Customer Experience
                        </h3>
                        <p class="text-sm text-green-800">Direct communication, personalized service, and greater transparency lead to higher satisfaction.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🚗</span>
                            Ideal for Sensitive Vehicles
                        </h3>
                        <p class="text-sm text-green-800">Perfect for luxury cars, or customers relocating for work who have little time to handle drop-off/pick-up logistics.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">📍</span>
                            Direct Service
                        </h3>
                        <p class="text-sm text-green-800">No need to coordinate multiple stops or worry about terminal hours—service comes to you.</p>
                    </div>
                </div>
            </div>

            <!-- Limitations Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-orange-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:exclamation-triangle-solid" class="text-orange-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Things to Be Aware Of</h2>
                        <p class="text-gray-700 leading-relaxed">
                            While door-to-door is incredibly convenient, it's important to understand potential trade-offs:
                        </p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Higher Cost</h3>
                        <p class="text-gray-700 text-sm">Because the carrier must go to specified addresses (which may involve more time or less efficient routing), this service typically costs more than simpler methods.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Accessibility Constraints</h3>
                        <p class="text-gray-700 text-sm">Some residential areas, narrow streets, low overhangs, gated communities, or parking restrictions may make it impossible for large transport trucks to reach the exact door. In those cases, a nearby accessible point will be arranged.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Availability & Scheduling</h3>
                        <p class="text-gray-700 text-sm">In some remote or less-frequent routes, the door-to-door service may take longer or have fewer carriers servicing them, impacting timing.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Flexibility Required</h3>
                        <p class="text-gray-700 text-sm">Even though it's "door-to-door," customers still need to be flexible—weather, traffic, or carrier availability can impact pickup or delivery.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Non-Running Vehicles</h3>
                        <p class="text-gray-700 text-sm">If the vehicle cannot drive onto the trailer, or requires special equipment, door-to-door may involve extra cost or coordination.</p>
                    </div>
                </div>
            </div>

            <!-- Cost Factors -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Cost Factors for Door-to-Door Delivery</h2>
                <p class="text-center text-gray-600 mb-8">Understanding what influences your shipping price</p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:map-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Distance & Route</h3>
                        </div>
                        <p class="text-sm text-blue-800">Longer distances generally increase cost, though cost-per-mile may drop for long hauls.</p>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:truck-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Vehicle Size & Weight</h3>
                        </div>
                        <p class="text-sm text-blue-800">Larger and heavier vehicles cost more to handle and take up more space on the carrier.</p>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Transport Type</h3>
                        </div>
                        <p class="text-sm text-blue-800">Open carriers (exposed trailers) are cheaper. Enclosed carriers (for luxury or classic cars) cost more.</p>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:home-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Pickup & Delivery Locations</h3>
                        </div>
                        <p class="text-sm text-blue-800">Difficult access (narrow road, steep driveway) may increase cost or require meeting at another point.</p>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:calendar-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Timing & Season</h3>
                        </div>
                        <p class="text-sm text-blue-800">High demand seasons, long weekends, or poor weather can raise rates.</p>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:wrench-screwdriver-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Vehicle Condition</h3>
                        </div>
                        <p class="text-sm text-blue-800">If the car is inoperable or has modifications, extra handling is needed (increasing cost).</p>
                    </div>
                </div>
            </div>

            <!-- Tips for Smooth Delivery -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Tips for a Smooth Door-to-Door Delivery</h2>
                <p class="text-center text-gray-600 mb-8">Follow these expert tips to ensure your transport goes smoothly</p>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Clean Your Vehicle</h4>
                            <p class="text-sm text-gray-700">Thoroughly wash inside and out before pickup. A clean car helps the inspection process.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Remove Personal Items</h4>
                            <p class="text-sm text-gray-700">Many transport insurance policies will not cover items left inside.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Check Vehicle Condition</h4>
                            <p class="text-sm text-gray-700">Make sure the vehicle is in good working order so it can be driven onto/off the carrier without trouble.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Maintain ¼ Tank Fuel</h4>
                            <p class="text-sm text-gray-700">Enough to securely load but not so much that unnecessary weight is added.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Provide Accurate Addresses</h4>
                            <p class="text-sm text-gray-700">Advise the carrier of any unusual access issues (gates, narrow streets, low power lines).</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Be Responsive</h4>
                            <p class="text-sm text-gray-700">Confirm your date, make sure someone is present at pickup/delivery, sign the bill of lading.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Verify Insurance Coverage</h4>
                            <p class="text-sm text-gray-700">Ask about what is included in the door-to-door service and if there are any extra fees.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Allow Timing Flexibility</h4>
                            <p class="text-sm text-gray-700">There may be slight variances in timing—communicate with the carrier about your preferred window.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose First Line Transport -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose First Line Transport INC for Door-to-Door Service?</h2>
                    <p class="text-lg text-gray-600">We make door-to-door shipping simple, transparent, and reliable</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:check-badge-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">End-to-End Convenience</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">We handle everything from pickup at your door to delivery at your destination, with minimal hassle for you.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>No terminal visits required</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Flexible scheduling options</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Professional handling throughout</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:currency-dollar-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Transparent Pricing</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">Clear quotes with no hidden fees. We explain exactly what you're paying for and why.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>TruePrice 30-day guarantee</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>No surprise charges</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Detailed price breakdowns</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">Full Insurance Coverage</h3>
                        </div>
                        <p class="text-purple-800 text-sm mb-3">Your vehicle is fully protected during transport with comprehensive insurance coverage.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Complete coverage included</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>No upfront payments required</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Peace of mind guaranteed</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:chat-bubble-left-right-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">24/7 Communication</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">Always available to answer questions and provide updates throughout your vehicle's journey.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Real-time tracking updates</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Dedicated support team</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Proactive notifications</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <p class="text-blue-900 text-center"><span class="font-bold">Over 10 Years of Experience:</span> We've been shipping vehicles door-to-door with professional and outstanding service, building trust through transparency and reliability.</p>
                </div>
            </div>

            <!-- Not Sure Section -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Not Sure If Door-to-Door Is Right for You?</h2>
                <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Choosing the right shipping method depends on your specific needs, budget, and vehicle type. Our experts can help you decide.
                </p>

                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">🤔</div>
                        <h3 class="font-bold text-gray-900 mb-2">Compare Options</h3>
                        <p class="text-sm text-gray-700">We'll explain the differences between door-to-door, terminal service, and other options to help you choose.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">💰</div>
                        <h3 class="font-bold text-gray-900 mb-2">Budget Guidance</h3>
                        <p class="text-sm text-gray-700">Get transparent pricing for all service levels so you can make an informed decision that fits your budget.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">📞</div>
                        <h3 class="font-bold text-gray-900 mb-2">Expert Consultation</h3>
                        <p class="text-sm text-gray-700">Speak with our transport specialists who can assess your situation and recommend the best solution.</p>
                    </div>
                </div>

                <div class="text-center">
                    <button @click="openConsultantModal()"
                        class="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl">
                        Get Free Consultation
                    </button>
                </div>
            </div>

            <!-- Comparison Table -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Door-to-Door vs Terminal Service</h2>
                <p class="text-center text-gray-600 mb-8">Quick comparison to help you decide</p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b-2 border-gray-200">
                                <th class="text-left p-4 font-bold text-gray-900">Feature</th>
                                <th class="text-center p-4 font-bold text-blue-900">Door-to-Door</th>
                                <th class="text-center p-4 font-bold text-gray-700">Terminal Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Convenience</td>
                                <td class="p-4 text-center text-green-600 font-bold">Highest</td>
                                <td class="p-4 text-center text-orange-600">Moderate</td>
                            </tr>
                            <tr class="border-b border-gray-100 bg-gray-50">
                                <td class="p-4 font-semibold text-gray-900">Cost</td>
                                <td class="p-4 text-center text-orange-600">Higher</td>
                                <td class="p-4 text-center text-green-600 font-bold">Lower</td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Time Required</td>
                                <td class="p-4 text-center text-green-600 font-bold">Minimal</td>
                                <td class="p-4 text-center text-orange-600">More</td>
                            </tr>
                            <tr class="border-b border-gray-100 bg-gray-50">
                                <td class="p-4 font-semibold text-gray-900">Handling</td>
                                <td class="p-4 text-center text-green-600 font-bold">Less</td>
                                <td class="p-4 text-center text-orange-600">More</td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Best For</td>
                                <td class="p-4 text-center text-sm text-gray-700">Busy schedules, luxury vehicles</td>
                                <td class="p-4 text-center text-sm text-gray-700">Budget-conscious, flexible timing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What is door-to-door car shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Door-to-door car shipping means the transport carrier picks up your vehicle at your specified address and delivers it directly to your destination address, providing maximum convenience and time savings compared to terminal services.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How much does door-to-door car shipping cost?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Door-to-door car shipping typically costs more than terminal service due to the added convenience. Costs vary based on distance, vehicle size, transport type (open vs enclosed), and accessibility of pickup/delivery locations. Contact us for a personalized quote.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Can the carrier reach any address?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">While called "door-to-door," carriers may not reach every exact address due to narrow streets, low overhangs, or parking restrictions. In such cases, they arrange pickup/delivery at a nearby accessible location like a large parking lot or commercial area.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How long does door-to-door shipping take?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Door-to-door shipping typically takes 1-7 days depending on distance. Short routes (under 500 miles) usually take 1-3 days, while cross-country shipments average 5-7 days. The convenience of door-to-door service doesn't significantly impact transit time.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Do I need to be present for pickup and delivery?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Yes, you or an authorized representative must be present during both pickup and delivery to inspect the vehicle, sign the bill of lading, and handle keys. This ensures proper documentation and protects both parties.</p>
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
                        <p class="text-gray-700 mb-4">Learn about our most popular and cost-effective vehicle shipping method that works perfectly with door-to-door service.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Read About Open Transport →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">All Transport Services</h3>
                        <p class="text-gray-700 mb-4">Explore all our auto transport services and find the perfect solution for your vehicle shipping needs.</p>
                        <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            View All Services →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Conclusion -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Conclusion</h2>
                <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                    Door-to-door delivery is one of the most convenient, customer-friendly options for vehicle transport. While it comes at a premium compared to simpler methods, the trade-offs—less hassle, fewer transfers, closer monitoring, and a smoother customer experience—often make it worth it.
                </p>
                <p class="text-center text-gray-600 font-semibold">
                    First Line Transport INC specializes in door-to-door service with over 10 years of experience, transparent pricing, and full insurance coverage.
                </p>
            </div>

            <!-- Final CTA -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Free Quote?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Experience the convenience of door-to-door car shipping with First Line Transport INC. Get a transparent quote with no hidden fees and no upfront payments required.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="openModal()"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Get Free Quote Now
                    </button>
                    <button
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Call +1 (929) 923-7706
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">No upfront payments • Full insurance coverage • TruePrice guarantee • 24/7 support</p>
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
    title: 'Door-to-Door Car Shipping - Ultimate Convenience | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Door-to-door car shipping offers ultimate convenience with pickup and delivery at your location. Learn costs, benefits, and process. Get your free quote today.'
        },
        {
            name: 'keywords',
            content: 'door to door car shipping, door to door auto transport, vehicle pickup delivery, convenient car shipping, home pickup car transport'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/door-to-door' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Door-to-Door Car Shipping - Ultimate Convenience',
    ogDescription: 'Door-to-door car shipping offers ultimate convenience with pickup and delivery at your location. Learn costs, benefits, and process.',
    ogUrl: 'https://fltransportinc.com/blogs/door-to-door',
    ogImage: 'https://fltransportinc.com/door.jpg',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Door-to-Door Car Shipping - Ultimate Convenience',
    twitterDescription: 'Door-to-door car shipping offers ultimate convenience with pickup and delivery at your location.',
    twitterImage: 'https://fltransportinc.com/door.jpg'
})

// Structured Data - Service Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Door-to-Door Car Shipping',
    serviceType: 'Door-to-Door Auto Transport',
    description: 'Convenient door-to-door car shipping service with pickup and delivery at your specified locations nationwide',
    provider: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        url: 'https://fltransportinc.com',
        logo: 'https://fltransportinc.com/logo.png'
    },
    areaServed: {
        '@type': 'Country',
        name: 'United States'
    }
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
            name: 'Door-to-Door Car Shipping',
            item: 'https://fltransportinc.com/blogs/door-to-door'
        }
    ]
})

// Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Door-to-Door Car Shipping - Complete Guide to Convenient Vehicle Transport',
    description: 'Comprehensive guide to door-to-door car shipping including process, costs, benefits, and tips for choosing the right service.',
    image: 'https://fltransportinc.com/door.jpg',
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
            name: 'What is door-to-door car shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Door-to-door car shipping means the transport carrier picks up your vehicle at your specified address and delivers it directly to your destination address, providing maximum convenience and time savings.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much does door-to-door car shipping cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Door-to-door car shipping typically costs more than terminal service due to the added convenience. Costs vary based on distance, vehicle size, transport type, and accessibility of pickup/delivery locations.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can the carrier reach any address?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While called "door-to-door," carriers may not reach every exact address due to narrow streets, low overhangs, or parking restrictions. In such cases, they arrange pickup/delivery at a nearby accessible location.'
            }
        }
    ]
})
</script>
