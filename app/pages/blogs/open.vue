<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg src="/open.jpg" alt="Open Auto Transport Service"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Open Auto Transport</h1>
                    <p class="text-xl md:text-2xl text-gray-200">The most popular and cost-effective vehicle shipping method</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">What is Open Transport?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Open transport (also called open auto transport) is a vehicle shipping method in which your car is transported on an open-air trailer—one of the large multi-car haulers you often see on highways.
                </p>
                
                <div class="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                    <h3 class="font-bold text-blue-900 mb-3">In this method:</h3>
                    <ul class="space-y-2 text-sm text-blue-800">
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>Your vehicle is loaded along with other vehicles (often 6-10 cars) onto the open trailer</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>The trailer has no full enclosure around the vehicle: sides are exposed (to weather, road debris, etc.)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-bold mr-2">•</span>
                            <span>It is the most common and cost-effective shipping method for everyday cars</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- How It Works -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">How Open Transport Works</h2>
                <p class="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    Here's a step-by-step of the typical process for open transport with First Line Transport INC:
                </p>

                <div class="space-y-6">
                    <!-- Step 1 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
                        <div class="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            1
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Request a Quote & Book Service</h3>
                            <p class="text-sm text-gray-700">You provide origin, destination, vehicle details (make, model, condition), and preferred pickup date.</p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
                        <div class="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            2
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Vehicle Preparation</h3>
                            <p class="text-sm text-gray-700">Before loading, the vehicle will need to be cleaned for inspection, fuel reduced (often to about ¼ tank or less), personal items removed, and keys ready.</p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
                        <div class="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            3
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Pickup & Loading</h3>
                            <p class="text-sm text-gray-700">The carrier (truck + trailer) arrives at the pickup location. The driver inspects the vehicle, documents condition, then loads and secures it on the open trailer (using tie-downs/straps).</p>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-600">
                        <div class="bg-orange-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            4
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Transit</h3>
                            <p class="text-sm text-gray-700">The vehicle travels on open carrier across road networks. Since many vehicles share the trailer, scheduling is flexible but you might have to wait for a full load or optimal route.</p>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-gray-600">
                        <div class="bg-gray-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                            5
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Delivery & Inspection</h3>
                            <p class="text-sm text-gray-700">Upon arrival at destination, the driver off-loads the vehicle, you inspect it, sign paperwork, and complete delivery. Any discrepancy should be noted immediately.</p>
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
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Advantages of Open Transport</h2>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">💰</span>
                            Cost-Effective
                        </h3>
                        <p class="text-sm text-green-800">Because you share space on a trailer with multiple vehicles and the carrier is more common, open transport tends to cost significantly less than enclosed—often saving 30-50% or more.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⚡</span>
                            Better Availability
                        </h3>
                        <p class="text-sm text-green-800">There are many more open carriers on the road (over 90% of truckers), so scheduling is often faster and you have more route options.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🚗</span>
                            Suitable for Everyday Vehicles
                        </h3>
                        <p class="text-sm text-green-800">Standard sedans, SUVs, trucks that don't require special protection are well-suited for open transport.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🛣️</span>
                            Efficient for Long-Distance
                        </h3>
                        <p class="text-sm text-green-800">Because this is the most common form of auto transport, it works well for coast-to-coast or interstate shipping.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🏢</span>
                            Used by Dealerships
                        </h3>
                        <p class="text-sm text-green-800">Dealerships almost always use open auto transport when they send cars from one location to another, including brand new vehicles.</p>
                    </div>

                    <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⬆️</span>
                            Top Load Available
                        </h3>
                        <p class="text-sm text-green-800">You can add the top load preference for a little extra. This means no vehicle would be loaded above yours during the shipping process.</p>
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
                            While open transport is good for many use-cases, there are trade-offs to be aware of:
                        </p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Exposure to Elements</h3>
                        <p class="text-gray-700 text-sm">The vehicle is exposed to weather (rain, sun, snow), road salt, dust, debris, etc. While risk of serious damage is low with reputable carriers, there is some exposure.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Less Protection Compared to Enclosed</h3>
                        <p class="text-gray-700 text-sm">For luxury, classic, exotic or highly modified vehicles, open transport offers less shielding from external hazards than enclosed carriers.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Potential for Minor Cosmetic Issues</h3>
                        <p class="text-gray-700 text-sm">Because of exposure, your vehicle may arrive needing a cleanup (dust, road grime). It's typically not serious, but you should be aware.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Dependence on Route/Load Schedule</h3>
                        <p class="text-gray-700 text-sm">Because you share space with other vehicles and often carriers wait to optimize load, pickup and delivery windows may be less tight than exclusive or dedicated services.</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                        <h3 class="font-bold text-gray-900 mb-2">Vehicle Condition & Modifications Matter</h3>
                        <p class="text-gray-700 text-sm">Oversized, lowered, lifted, or non-op vehicles may require special handling (even for open transport) and may incur extra cost or limitations.</p>
                    </div>
                </div>
            </div>

            <!-- Cost & Pricing -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Average Open Car Shipping Cost Per Mile (2025)</h2>
                <p class="text-center text-gray-600 mb-8">Open car shipping prices are determined by several factors, including shipping distance, vehicle size and weight, pickup and delivery locations, and time of year.</p>

                <div class="overflow-x-auto mb-8">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b-2 border-gray-200 bg-blue-50">
                                <th class="text-left p-4 font-bold text-gray-900">Distance</th>
                                <th class="text-center p-4 font-bold text-gray-900">Mileage</th>
                                <th class="text-center p-4 font-bold text-blue-900">Open Transport Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Short Routes</td>
                                <td class="p-4 text-center text-gray-700">1-500 miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$1.85/mile</td>
                            </tr>
                            <tr class="border-b border-gray-100 bg-gray-50">
                                <td class="p-4 font-semibold text-gray-900">Medium Routes</td>
                                <td class="p-4 text-center text-gray-700">501-1,500 miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$0.91/mile</td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="p-4 font-semibold text-gray-900">Long Routes</td>
                                <td class="p-4 text-center text-gray-700">1,500+ miles</td>
                                <td class="p-4 text-center text-blue-600 font-bold">$0.59/mile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Note:</span> Longer distances, larger vehicles, and rural areas can increase the price. Seasonal demand, fuel costs, carrier competition, and urgency of shipment also play roles in determining the final rate.</p>
                </div>
            </div>

            <!-- When to Choose -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose Open Transport</h2>
                <p class="text-center text-gray-600 mb-8">Open transport is a strong choice when:</p>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Standard Vehicle</h4>
                            <p class="text-sm text-gray-700">Your vehicle is a standard model, not a rare or high-value collectible.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Budget-Friendly Solution</h4>
                            <p class="text-sm text-gray-700">Cost is a major factor or you want the best value for your money.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Acceptable Exposure</h4>
                            <p class="text-sm text-gray-700">You are okay with some exposure to elements (the vehicle won't be perfectly pristine).</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Flexible Schedule</h4>
                            <p class="text-sm text-gray-700">You are shipping a reasonable distance and schedule flexibility is acceptable.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Standard Service</h4>
                            <p class="text-sm text-gray-700">You don't require ultra-premium or "white glove" treatment.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-green-600 font-bold text-xl">✓</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Long-Distance Moves</h4>
                            <p class="text-sm text-gray-700">Ideal for coast-to-coast or interstate shipping.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Practical Tips -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Practical Tips to Make it Work Smoothly</h2>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Book with a Reputable Carrier</h4>
                            <p class="text-sm text-gray-700">Check U.S. Department of Transportation (DOT) registration, insurance, and reviews.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Prepare Your Vehicle Properly</h4>
                            <p class="text-sm text-gray-700">Clean inside/out, note existing damage with photos, reduce fuel, remove loose items, disable alarms.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Ask About Insurance/Coverage</h4>
                            <p class="text-sm text-gray-700">Professional firms will have cargo insurance and inspect/load vehicles carefully.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Be Clear About Details</h4>
                            <p class="text-sm text-gray-700">Provide accurate addresses, availability times, and any restrictions at destination.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Understand Timeline</h4>
                            <p class="text-sm text-gray-700">Weather, route, and logistics can affect delivery time. Build in buffer time.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span class="text-blue-600 font-bold text-xl">•</span>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Get Written Contract</h4>
                            <p class="text-sm text-gray-700">Clearly state what's included, what happens in case of damage, and what fees apply.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose First Line Transport -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose First Line Transport INC for Open Car Shipping?</h2>
                    <p class="text-lg text-gray-600">We make open transport simple, affordable, and reliable</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:users-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Trusted Network of Carriers</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">All of our carriers are chosen because of their dedication to high quality service standards. This allows us to find the best quality carriers to ship your car very quickly.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>DOT registered and insured</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Experienced professional drivers</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Nationwide coverage</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:currency-dollar-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Best Prices</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">We always offer the best car shipping prices possible. Our smart system determines all factors to get you the fairest and most accurate open car transport cost.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Competitive pricing</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>No hidden fees</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>TruePrice guarantee</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:credit-card-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">No Upfront Payment</h3>
                        </div>
                        <p class="text-purple-800 text-sm mb-3">You'll be charged once the carrier has been dispatched for your order. This means you'll be able to book your open auto transport now and worry about the bill later.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Pay after dispatch</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Secure payment options</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Flexible payment terms</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:chat-bubble-left-right-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">Friendly Customer Service</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">Our representatives are always friendly and helpful. They will make sure that you have an excellent experience from start to finish.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>24/7 support available</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Real-time tracking updates</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Dedicated support team</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <p class="text-blue-900 text-center"><span class="font-bold">Our Commitment:</span> First Line Transport INC specializes in open auto transport with transparent pricing, reliable service, and a trusted network of professional carriers nationwide.</p>
                </div>
            </div>

            <!-- Conclusion -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Conclusion</h2>
                <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                    Open transport is the go-to, cost-effective method for transporting a vehicle across states or long distances when you have a standard car that doesn't require special protection. It offers good value, wide availability, and reliable service.
                </p>
                <p class="text-center text-gray-600 font-semibold">
                    While it does come with some exposure to the elements, for most everyday vehicles it delivers more than enough protection and value.
                </p>
            </div>

            <!-- Final CTA -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Free Quote?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Experience the most affordable and reliable open auto transport service with First Line Transport INC. Get a transparent quote with no hidden fees and no upfront payments required.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Get Your Free Quote
                    </button>
                    <button
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Consult with a Specialist
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">No upfront payments • Best prices guaranteed • Trusted carriers • 24/7 support</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// SEO Meta tags
useHead({
    title: 'Open Auto Transport Service | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Learn about open auto transport - the most popular and cost-effective vehicle shipping method. Get transparent pricing, fast service, and reliable carriers with First Line Transport INC.'
        }
    ]
})
</script>
