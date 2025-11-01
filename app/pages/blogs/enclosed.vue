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
                        <NuxtLink to="/blogs" itemprop="item" class="text-blue-600 hover:text-blue-800 transition-colors">
                            <span itemprop="name">Blog</span>
                        </NuxtLink>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li class="text-gray-400">/</li>
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name" class="text-gray-700">Enclosed Auto Transport</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/enclosed.jpg" 
                alt="Enclosed auto transport trailer providing premium protection for luxury and classic vehicles"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Enclosed Auto Transport Service - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Enclosed Auto Transport - Premium Protection</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Ultimate protection for luxury, classic, and exotic vehicles</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">What is Enclosed Car Shipping?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Enclosed car shipping is a premium vehicle-transport method where your car is carried inside a fully covered trailer rather than on an open carrier. Inside the trailer, the vehicle is shielded on all sides from weather, debris, and external exposure. This service is part of our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink> designed for high-value and specialty vehicles.
                </p>
                
                <div class="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                    <h3 class="font-bold text-blue-900 mb-3">Key Features of Enclosed Transport:</h3>
                    <ul class="space-y-2 text-sm text-blue-800">
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>Enclosed trailers typically transport fewer vehicles per load than open carriers (2-6 cars)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>Complete protection from weather, road debris, and external exposure</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>Specialized equipment including hydraulic lift gates for low-clearance vehicles</span>
                        </li>
                    </ul>
                </div>

                <p class="text-gray-700 leading-relaxed">
                    While <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink> is suitable for most everyday vehicles, enclosed transport is the preferred choice for luxury cars, classic automobiles, exotic vehicles, and any car where maintaining pristine condition is paramount. This premium service can also be combined with <NuxtLink to="/blogs/door-to-door" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">door-to-door delivery</NuxtLink> for ultimate convenience.
                </p>
            </div>

            <!-- How It Works -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">How Enclosed Transport Works</h2>
                <p class="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    Here's the typical process for shipping a vehicle via enclosed transport with First Line Transport INC:
                </p>

                <div class="space-y-6">
                    <!-- Step 1 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
                        <div class="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            1
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Request Quote & Book Service</h3>
                            <p class="text-sm text-gray-700">You provide vehicle details (make, model, condition), origin and destination addresses, and preferred pickup date.</p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
                        <div class="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            2
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Carrier Arrival & Inspection</h3>
                            <p class="text-sm text-gray-700">The carrier arrives at pickup location with the enclosed trailer. Note that because of its size, access may be more restricted than open carriers. The vehicle is inspected and prepped (cleaned, fuel reduced, any modifications noted).</p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
                        <div class="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            3
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Secure Loading</h3>
                            <p class="text-sm text-gray-700">The car is loaded into the enclosed trailer via ramps or hydraulic lift gates (especially for low-clearance vehicles) with specialized tie-downs and secure positioning.</p>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-600">
                        <div class="bg-orange-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            4
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Protected Transit</h3>
                            <p class="text-sm text-gray-700">The car rides inside the trailer, protected from elements (rain, snow, road debris) with secure tie-downs, potentially climate control and reduced handling.</p>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-gray-600">
                        <div class="bg-gray-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            5
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Delivery & Final Inspection</h3>
                            <p class="text-sm text-gray-700">Upon arrival, you inspect the vehicle, sign off, and complete delivery. Your vehicle arrives in pristine condition.</p>
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
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Advantages of Enclosed Car Shipping</h2>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🛡️</span>
                            Maximum Protection from Elements
                        </h3>
                        <p class="text-sm text-green-800">The vehicle is shielded from weather, road salt, debris, insects, and all external hazards during transit.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🔒</span>
                            Increased Security & Privacy
                        </h3>
                        <p class="text-sm text-green-800">Because the vehicle is hidden inside the trailer, it's less exposed to theft, vandalism or casual observation.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🏎️</span>
                            Perfect for Specialty Vehicles
                        </h3>
                        <p class="text-sm text-green-800">Ideal for luxury cars, exotics, classics, low-clearance cars or vehicles with delicate finishes.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">💎</span>
                            Preserves Vehicle Value
                        </h3>
                        <p class="text-sm text-green-800">For collector or high-value vehicles, the extra care can protect resale value better than standard shipping.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🔧</span>
                            Hydraulic Lift Gates Available
                        </h3>
                        <p class="text-sm text-green-800">Essential for loading and unloading cars with low ground clearance safely without risk of damage.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🌡️</span>
                            Climate Control Options
                        </h3>
                        <p class="text-sm text-green-800">Some enclosed carriers offer climate-controlled environments for ultimate protection during extreme weather.</p>
                    </div>
                </div>
            </div>

            <!-- Considerations Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-orange-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:exclamation-triangle-solid" class="text-orange-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Considerations & Trade-offs</h2>
                        <p class="text-gray-700 leading-relaxed">
                            While enclosed transport offers premium protection, there are some factors to consider:
                        </p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Higher Cost</h3>
                        <p class="text-gray-700 text-sm">Enclosed shipping costs significantly more than open shipping because of fewer vehicles per load, specialized equipment, and additional protection.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Limited Availability</h3>
                        <p class="text-gray-700 text-sm">Because enclosed carriers are less common and handle fewer vehicles per load, scheduling may be more restricted with longer wait times.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Potentially Slower Transit</h3>
                        <p class="text-gray-700 text-sm">Due to scheduling, load constraints or routing, the pickup or delivery window may be less flexible than open transport.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Not Always Necessary</h3>
                        <p class="text-gray-700 text-sm">For standard everyday vehicles with no special requirements, the extra cost may not justify the benefits.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Access Restrictions</h3>
                        <p class="text-gray-700 text-sm">Enclosed trailers are larger and may have difficulty accessing narrow streets or residential areas with limited clearance.</p>
                    </div>
                </div>
            </div>

            <!-- Cost & Pricing -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Average Enclosed Car Shipping Cost Per Mile (2025)</h2>
                <p class="text-center text-gray-600 mb-8">Enclosed car transport service prices are calculated similarly to open car transport, but you'll pay about 35-50% more per trip for the added protection and premium service.</p>

                <div class="overflow-x-auto mb-8">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b-2 border-gray-200 bg-blue-50">
                                <th class="text-left p-4 font-bold text-gray-900">Distance</th>
                                <th class="text-center p-4 font-bold text-gray-900">Mileage</th>
                                <th class="text-center p-4 font-bold text-blue-900">Enclosed Transport Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Short Routes</td>
                                <td class="p-4 text-center text-gray-700">1-500 miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$2.65/mile (~$750)</td>
                            </tr>
                            <tr class="border-b border-gray-100 bg-gray-50">
                                <td class="p-4 font-semibold text-gray-900">Medium Routes</td>
                                <td class="p-4 text-center text-gray-700">501-1,500 miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$1.32/mile (~$980)</td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Long Routes</td>
                                <td class="p-4 text-center text-gray-700">1,500+ miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$0.88/mile (~$1,240)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Note:</span> Prices vary based on vehicle size, weight, modifications, seasonal demand, fuel costs, and specific route. Luxury and exotic vehicles may require additional insurance coverage.</p>
                </div>
            </div>

            <!-- When to Choose -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose Enclosed Transport</h2>
                <p class="text-center text-gray-600 mb-8">Enclosed car shipping is most appropriate when one or more of the following apply:</p>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Luxury or Exotic Vehicles</h4>
                            <p class="text-sm text-gray-700">You're transporting a luxury, exotic, or classic/collector vehicle that you want to keep in pristine condition.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Low Ground Clearance</h4>
                            <p class="text-sm text-gray-700">Your vehicle has low ground clearance, or special modifications that make loading/unloading on an open carrier risky.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Extreme Weather Conditions</h4>
                            <p class="text-sm text-gray-700">You're shipping during winter, heavy salt roads, or through rough terrain and want increased protection.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Pristine Condition Priority</h4>
                            <p class="text-sm text-gray-700">You're very concerned about the appearance and condition of the vehicle upon delivery, and budget is less of a constraint.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">High-Value Vehicles</h4>
                            <p class="text-sm text-gray-700">Your vehicle's value justifies the premium cost for maximum protection and security.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Show Cars or Collectibles</h4>
                            <p class="text-sm text-gray-700">You're transporting a show car, rare collectible, or vehicle with custom paint that requires white-glove treatment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Practical Tips -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Practical Tips for Using Enclosed Transport</h2>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Compare Open vs Enclosed</h4>
                            <p class="text-sm text-gray-700">Get quotes for both options to see whether the extra cost is justified for your specific vehicle.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Book Earlier</h4>
                            <p class="text-sm text-gray-700">Because of limited capacity, scheduling may need more advance notice than open transport—book 3-4 weeks ahead.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Prepare Thoroughly</h4>
                            <p class="text-sm text-gray-700">Clean, note existing damage, limit fuel to ¼ tank, remove personal items, ensure access for lift gates if needed.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Check Special Features</h4>
                            <p class="text-sm text-gray-700">Ask whether the enclosed carrier includes hydraulic lift gates, climate control, or special tie-downs for your vehicle type.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Understand Route & Timing</h4>
                            <p class="text-sm text-gray-700">Ask about pickup and delivery windows, potential for delays, how many other vehicles are in the trailer.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Verify Insurance Coverage</h4>
                            <p class="text-sm text-gray-700">Because you're entrusting a higher-value vehicle, ensure the carrier's liability/insurance levels are appropriate.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Document Everything</h4>
                            <p class="text-sm text-gray-700">Take detailed photos before pickup and after delivery. Document any pre-existing damage thoroughly.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Consider Value vs Cost</h4>
                            <p class="text-sm text-gray-700">If your vehicle is standard, open carrier may suffice; but if value is high, enclosed is the smarter choice.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose First Line Transport -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose First Line Transport INC for Enclosed Auto Transport?</h2>
                    <p class="text-lg text-gray-600">We make enclosed transport secure, transparent, and reliable</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Trusted Network of Carriers</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">Our team personally vets each and every enclosed car hauler company in our network to ensure you're getting a trusted, dependable service.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Experienced classic car haulers</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Specialized equipment available</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Superior compliance standards</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:document-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Enhanced Insurance Coverage</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">All carrier companies are vetted for compliance with higher insurance standards, assuring your vehicle has additional coverage during transit.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Higher coverage limits</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Comprehensive protection</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Peace of mind guarantee</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:currency-dollar-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">Transparent Pricing</h3>
                        </div>
                        <p class="text-purple-800 text-sm mb-3">Clear quotes with no hidden fees. We explain exactly what you're paying for and why enclosed transport is worth the investment.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>TruePrice 30-day guarantee</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>No surprise charges</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Detailed price breakdowns</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:star-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">White-Glove Service</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">Premium handling for your valuable vehicle from pickup to delivery. We treat your car like the treasure it is.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Careful loading/unloading</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Dedicated support team</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Real-time tracking updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Decision Helper -->
            <div class="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Do I Need Enclosed Car Transport?</h2>
                <p class="text-center text-gray-600 mb-8">Ask yourself these questions to determine if enclosed transport is right for you:</p>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                ?
                            </div>
                            <h3 class="font-bold text-gray-900">Is it a classic, luxury or collectible vehicle?</h3>
                        </div>
                        <p class="text-sm text-gray-600">High-value vehicles deserve premium protection to maintain their condition and value.</p>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                ?
                            </div>
                            <h3 class="font-bold text-gray-900">Are you concerned about harsh weather?</h3>
                        </div>
                        <p class="text-sm text-gray-600">Shipping during winter or through areas with extreme weather conditions? Enclosed is your best bet.</p>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                ?
                            </div>
                            <h3 class="font-bold text-gray-900">Worried about debris or road hazards?</h3>
                        </div>
                        <p class="text-sm text-gray-600">Enclosed carriers shield your vehicle from rocks, dirt, and other road hazards during transit.</p>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                ?
                            </div>
                            <h3 class="font-bold text-gray-900">Does it have any modifications?</h3>
                        </div>
                        <p class="text-sm text-gray-600">Custom paint, lowered suspension, or special features require the extra care of enclosed transport.</p>
                    </div>
                </div>

                <div class="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg text-center">
                    <p class="text-green-900 font-semibold text-lg">If you answered YES to any of these questions, enclosed transport is the right choice for you.</p>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What is enclosed car shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Enclosed car shipping is a premium vehicle transport method where your car is carried inside a fully covered trailer, providing complete protection from weather, debris, and external exposure. It's ideal for luxury, classic, and exotic vehicles.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How much does enclosed auto transport cost?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Enclosed auto transport costs 35-50% more than open transport. Prices range from $2.65/mile for short routes to $0.88/mile for long routes, with additional costs for luxury vehicles and specialized equipment like hydraulic lift gates.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">When should I choose enclosed transport?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Choose enclosed transport for luxury, classic, exotic vehicles, cars with low ground clearance, during extreme weather conditions, or when pristine condition is a priority and budget allows for premium protection.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How long does enclosed transport take?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Enclosed transport typically takes the same time as open transport (1-7 days depending on distance), but scheduling may require more advance notice due to limited availability of enclosed carriers.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What vehicles need enclosed transport?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Vehicles that benefit from enclosed transport include luxury cars, classic automobiles, exotic sports cars, vehicles with custom paint jobs, lowered cars, collectibles, and any high-value vehicle where maintaining pristine condition is essential.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Articles -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Related Auto Transport Guides</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Open vs Enclosed Transport</h3>
                        <p class="text-gray-700 mb-4">Compare open and enclosed transport methods to determine which option best fits your vehicle and budget needs.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Learn About Open Transport →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Door-to-Door Service</h3>
                        <p class="text-gray-700 mb-4">Combine enclosed transport with door-to-door service for the ultimate in convenience and vehicle protection.</p>
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
                    Enclosed auto transport is the premium choice for protecting valuable, luxury, classic, and exotic vehicles during shipping. While it costs more than open transport, the complete protection from weather, debris, and external hazards makes it worthwhile for high-value vehicles.
                </p>
                <p class="text-center text-gray-600 font-semibold">
                    First Line Transport INC specializes in enclosed transport with trusted carriers, enhanced insurance coverage, and white-glove service for your valuable vehicles.
                </p>
            </div>

            <!-- CTA Section -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Ship Your Vehicle Safely?</h2>
                <p class="text-xl mb-8 text-blue-100">Get a free quote for enclosed auto transport and experience premium protection for your valuable vehicle.</p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-2">
                        <UIcon name="heroicons:calculator-solid" size="24" />
                        <span @click="openModal()">Get Your Free Quote</span>
                    </button>
                    
                    <button @click="openConsultantModal()"
                        class="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-400 transition-colors cursor-pointer font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 border-2 border-white">
                        <UIcon name="heroicons:phone-solid" size="24" />
                        <span>Speak with a Specialist</span>
                    </button>
                </div>

                <div class="mt-8 pt-8 border-t border-blue-400">
                    <div class="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div class="text-3xl font-bold mb-2">30-Day</div>
                            <div class="text-blue-200">TruePrice Guarantee</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold mb-2">24/7</div>
                            <div class="text-blue-200">Customer Support</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold mb-2">100%</div>
                            <div class="text-blue-200">Insured & Licensed</div>
                        </div>
                    </div>
                </div>
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
    title: 'Enclosed Auto Transport - Premium Vehicle Protection | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Enclosed auto transport offers premium protection for luxury, classic, and exotic vehicles. Complete weather and debris protection with specialized equipment. Get your free quote today.'
        },
        {
            name: 'keywords',
            content: 'enclosed auto transport, enclosed car shipping, luxury car transport, classic car shipping, premium vehicle transport, covered car carrier'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/enclosed' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Enclosed Auto Transport - Premium Vehicle Protection',
    ogDescription: 'Enclosed auto transport offers premium protection for luxury, classic, and exotic vehicles. Complete weather and debris protection with specialized equipment.',
    ogUrl: 'https://fltransportinc.com/blogs/enclosed',
    ogImage: 'https://fltransportinc.com/enclosed.jpg',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Enclosed Auto Transport - Premium Vehicle Protection',
    twitterDescription: 'Enclosed auto transport offers premium protection for luxury, classic, and exotic vehicles.',
    twitterImage: 'https://fltransportinc.com/enclosed.jpg'
})

// Structured Data - Service Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enclosed Auto Transport',
    serviceType: 'Enclosed Car Shipping',
    description: 'Premium enclosed auto transport service providing complete protection for luxury, classic, and exotic vehicles nationwide',
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
            position: 2,
            name: 'Blog',
            item: 'https://fltransportinc.com/blogs'
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Enclosed Auto Transport',
            item: 'https://fltransportinc.com/blogs/enclosed'
        }
    ]
})

// Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Enclosed Auto Transport - Complete Guide to Premium Vehicle Protection',
    description: 'Comprehensive guide to enclosed auto transport including benefits, costs, process, and when to choose premium vehicle protection.',
    image: 'https://fltransportinc.com/enclosed.jpg',
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
            name: 'What is enclosed car shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Enclosed car shipping is a premium vehicle transport method where your car is carried inside a fully covered trailer, providing complete protection from weather, debris, and external exposure.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much does enclosed auto transport cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Enclosed auto transport costs 35-50% more than open transport. Prices range from $2.65/mile for short routes to $0.88/mile for long routes, with additional costs for luxury vehicles and specialized equipment.'
            }
        },
        {
            '@type': 'Question',
            name: 'When should I choose enclosed transport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Choose enclosed transport for luxury, classic, exotic vehicles, cars with low ground clearance, during extreme weather, or when pristine condition is a priority and budget allows for premium protection.'
            }
        }
    ]
})
</script>
