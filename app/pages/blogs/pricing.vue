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
                        <span itemprop="name" class="text-gray-700">Auto Transport Pricing Guide</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/calculate.jpg" 
                alt="Auto transport pricing calculator and cost factors for car shipping services"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Auto Transport Pricing Guide - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Auto Transport Pricing Guide</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Complete guide to car shipping costs and pricing factors</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Understanding Car Shipping Costs and Pricing Factors</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    When customers request a quote to ship a vehicle, it often isn't obvious why two seemingly similar shipments have very different costs. Whether you're considering <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink>, <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">enclosed transport</NuxtLink>, or specialized services like <NuxtLink to="/blogs/hawaii-alaska" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">Hawaii & Alaska shipping</NuxtLink>, understanding pricing factors is crucial.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    To build trust and clarity, it's essential to understand the key variables that go into calculating a car transport quote. Our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink> use transparent pricing with no hidden fees. Here are the major factors that affect pricing and how they influence cost.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Transparency Promise:</span> Understanding these factors helps you avoid the <NuxtLink to="/blogs/mistakes" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">common car shipping mistakes</NuxtLink> that lead to unexpected costs and delays.</p>
                </div>
            </div>

            <!-- Pricing Factors -->
            <div class="space-y-12">
                <!-- Factor 1: Distance and Route -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:map-pin-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Distance and Route</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Distance is one of the most fundamental elements affecting cost. Longer distances generally
                        result in higher total costs due to increased fuel, driver hours, and logistics.
                    </p>
                    <ul class="space-y-2 mb-4">
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span>Cost per mile often <span class="font-semibold">decreases for very long routes</span>
                                because fixed costs are spread across more miles</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span>High-volume city routes are typically <span class="font-semibold">cheaper than remote
                                    areas</span> where carriers must detour</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span>Major highway corridors offer better rates due to carrier availability</span>
                        </li>
                    </ul>
                    <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p class="text-blue-900 text-sm"><span class="font-semibold">Estimated Cost:</span> $0.50 - $1.50
                            per mile (shorter distances cost more per mile, longer distances less)</p>
                    </div>
                </div>

                <!-- Factor 2: Vehicle Size, Weight & Condition -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:truck-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Vehicle Size, Weight & Condition</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        The size and weight of your vehicle directly impact transport costs. Larger, heavier vehicles
                        take up more space on a carrier, use more fuel, and may require special handling.
                    </p>
                    <ul class="space-y-2 mb-4">
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Sedans and compact cars:</span> Most economical to
                                ship</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">SUVs and trucks:</span> 10-20% higher cost due to size and
                                weight</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Non-operational vehicles:</span> Additional $100-$300 for
                                special equipment</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Modified vehicles:</span> Lifted trucks, lowered sports
                                cars may require premium service</span>
                        </li>
                    </ul>
                </div>

                <!-- Factor 3: Transport Type -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:shield-check-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Type of Transport Service</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        The method you choose for transport is a major cost driver. Each option offers different levels
                        of protection and convenience.
                    </p>
                    <div class="grid md:grid-cols-2 gap-6 mb-4">
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="font-bold text-gray-900 mb-2">Open Transport</h3>
                            <p class="text-gray-600 text-sm mb-2">Standard and most economical option. Vehicles are
                                exposed to weather but securely loaded.</p>
                            <p class="text-blue-600 font-semibold">Base pricing</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="font-bold text-gray-900 mb-2">Enclosed Transport</h3>
                            <p class="text-gray-600 text-sm mb-2">Premium protection from weather and road debris. Ideal
                                for luxury or classic vehicles.</p>
                            <p class="text-blue-600 font-semibold">30-60% more than open transport</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="font-bold text-gray-900 mb-2">Door-to-Door</h3>
                            <p class="text-gray-600 text-sm mb-2">Maximum convenience with pickup and delivery at your
                                specified addresses.</p>
                            <p class="text-blue-600 font-semibold">$50-$200 premium</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="font-bold text-gray-900 mb-2">Terminal-to-Terminal</h3>
                            <p class="text-gray-600 text-sm mb-2">Most economical option where you drop off and pick up
                                at designated terminals.</p>
                            <p class="text-blue-600 font-semibold">Lowest cost option</p>
                        </div>
                    </div>
                </div>

                <!-- Factor 4: Location & Accessibility -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:home-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Pickup/Delivery Locations & Accessibility
                            </h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Where your vehicle is picked up and dropped off significantly impacts pricing. Urban areas near
                        major highways are more cost-effective than remote locations.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-green-900 mb-2">Lower Cost Locations</h4>
                            <ul class="space-y-1 text-sm text-green-800">
                                <li>• Major metropolitan areas</li>
                                <li>• Near interstate highways</li>
                                <li>• High-traffic transport corridors</li>
                                <li>• Easy truck access</li>
                            </ul>
                        </div>
                        <div class="bg-orange-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-orange-900 mb-2">Higher Cost Locations</h4>
                            <ul class="space-y-1 text-sm text-orange-800">
                                <li>• Rural or remote areas</li>
                                <li>• Narrow streets or limited access</li>
                                <li>• Off main transport routes</li>
                                <li>• Requires carrier detour (+$100-$300)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Factor 5: Seasonality & Market Demand -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:calendar-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Seasonality, Market Demand & Fuel Costs
                            </h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Like many logistics services, car shipping is subject to fluctuations based on season, demand,
                        and operating costs.
                    </p>
                    <ul class="space-y-3 mb-4">
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Peak seasons (Summer/Fall):</span> Higher demand during
                                moving season, college relocations, and snowbird migrations can increase prices by
                                10-30%</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Off-peak seasons (Winter/Spring):</span> Better rates and
                                more flexible scheduling</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Fuel costs:</span> When fuel prices rise, carriers adjust
                                rates accordingly</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 font-semibold mr-2">•</span>
                            <span><span class="font-semibold">Carrier availability:</span> Limited carrier supply during
                                peak times drives prices up</span>
                        </li>
                    </ul>
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p class="text-yellow-900 text-sm"><span class="font-semibold">Pro Tip:</span> Book 2-4 weeks in
                            advance during off-peak seasons for the best rates and availability.</p>
                    </div>
                </div>

                <!-- Factor 6: Additional Services -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full">
                            <UIcon name="heroicons:star-solid" class="text-blue-600" size="24" />
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Additional Services & Vehicle Value</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Special requirements and high-value vehicles require premium services that increase the overall
                        cost.
                    </p>
                    <div class="space-y-3">
                        <div class="flex items-start bg-gray-50 p-4 rounded-lg">
                            <span class="text-blue-600 font-bold mr-3">→</span>
                            <div>
                                <span class="font-semibold text-gray-900">Expedited Delivery:</span>
                                <span class="text-gray-700"> Guaranteed faster transit adds $200-$500</span>
                            </div>
                        </div>
                        <div class="flex items-start bg-gray-50 p-4 rounded-lg">
                            <span class="text-blue-600 font-bold mr-3">→</span>
                            <div>
                                <span class="font-semibold text-gray-900">Enhanced Insurance:</span>
                                <span class="text-gray-700"> Higher coverage for luxury vehicles (1-3% of vehicle
                                    value)</span>
                            </div>
                        </div>
                        <div class="flex items-start bg-gray-50 p-4 rounded-lg">
                            <span class="text-blue-600 font-bold mr-3">→</span>
                            <div>
                                <span class="font-semibold text-gray-900">Top-Load Service:</span>
                                <span class="text-gray-700"> Vehicle placed on top rack for extra protection
                                    (+$50-$150)</span>
                            </div>
                        </div>
                        <div class="flex items-start bg-gray-50 p-4 rounded-lg">
                            <span class="text-blue-600 font-bold mr-3">→</span>
                            <div>
                                <span class="font-semibold text-gray-900">Guaranteed Pickup Dates:</span>
                                <span class="text-gray-700"> Specific date scheduling adds $100-$300</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pricing Examples -->
            <div class="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Estimated Pricing Examples</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-lg text-gray-900 mb-2">Short Distance</h3>
                        <p class="text-sm text-gray-600 mb-4">0-500 miles</p>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Open)</span>
                                <span class="font-semibold text-blue-600">$300-$600</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">SUV (Open)</span>
                                <span class="font-semibold text-blue-600">$400-$700</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Enclosed)</span>
                                <span class="font-semibold text-blue-600">$500-$900</span>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-4">≈ $1.00-$1.50 per mile</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-lg text-gray-900 mb-2">Medium Distance</h3>
                        <p class="text-sm text-gray-600 mb-4">500-1,500 miles</p>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Open)</span>
                                <span class="font-semibold text-blue-600">$600-$1,200</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">SUV (Open)</span>
                                <span class="font-semibold text-blue-600">$700-$1,400</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Enclosed)</span>
                                <span class="font-semibold text-blue-600">$900-$1,800</span>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-4">≈ $0.70-$1.00 per mile</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-lg text-gray-900 mb-2">Long Distance</h3>
                        <p class="text-sm text-gray-600 mb-4">1,500+ miles (Coast-to-Coast)</p>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Open)</span>
                                <span class="font-semibold text-blue-600">$1,200-$1,800</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">SUV (Open)</span>
                                <span class="font-semibold text-blue-600">$1,400-$2,100</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-700">Sedan (Enclosed)</span>
                                <span class="font-semibold text-blue-600">$1,800-$2,800</span>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-4">≈ $0.50-$0.80 per mile</p>
                    </div>
                </div>
                <p class="text-center text-sm text-gray-600 mt-6">*Prices are estimates and vary based on specific route,
                    season, and market conditions</p>
            </div>

            <!-- What to Watch Out For -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-red-100 p-3 rounded-full">
                        <UIcon name="heroicons:exclamation-triangle-solid" class="text-red-600" size="24" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">What to Watch Out For When Choosing a Company
                        </h2>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Not all auto transport companies operate with the same level of transparency and reliability. Here
                    are critical factors to consider when selecting a transport provider:
                </p>

                <div class="space-y-4">
                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">Hidden Fees and Price Changes</h3>
                        <p class="text-gray-700 text-sm">Some companies quote low prices to win your business, then add
                            unexpected fees at pickup or delivery. Watch for cancellation fees, storage charges, fuel
                            surcharges, or "carrier assignment fees" not mentioned upfront.</p>
                    </div>

                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">Lack of Proper Licensing and Insurance</h3>
                        <p class="text-gray-700 text-sm">Verify the company is properly licensed with the FMCSA (Federal
                            Motor Carrier Safety Administration) and has adequate insurance coverage. Unlicensed carriers
                            put your vehicle at risk.</p>
                    </div>

                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">Poor Communication and Customer Service</h3>
                        <p class="text-gray-700 text-sm">Companies that are difficult to reach, don't provide tracking
                            updates, or fail to respond to concerns can leave you in the dark about your vehicle's
                            location and status.</p>
                    </div>

                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">Unrealistic Promises</h3>
                        <p class="text-gray-700 text-sm">Be wary of companies guaranteeing impossibly low prices or
                            unrealistic delivery timeframes. If it sounds too good to be true, it probably is.</p>
                    </div>

                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">No Written Contract or Vague Terms</h3>
                        <p class="text-gray-700 text-sm">Always get a written contract with clear terms. Avoid companies
                            that operate on verbal agreements or provide contracts with vague language about pricing and
                            liability.</p>
                    </div>

                    <div class="border-l-4 border-red-500 pl-6 py-2">
                        <h3 class="font-bold text-gray-900 mb-2">Negative Reviews and Complaints</h3>
                        <p class="text-gray-700 text-sm">Research the company's reputation. Check reviews on multiple
                            platforms, BBB ratings, and FMCSA complaint records. Patterns of negative feedback are red
                            flags.</p>
                    </div>
                </div>

                <div class="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                    <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                        <UIcon name="heroicons:check-circle-solid" class="text-green-600" size="24" />
                        Why First Line Transport INC is Different
                    </h3>
                    <ul class="space-y-2 text-green-900">
                        <li class="flex items-start">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <span><span class="font-semibold">No Hidden Fees:</span> Transparent pricing with everything
                                included in your quote</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <span><span class="font-semibold">TruePrice Guarantee:</span> 30-day price lock – your quote
                                won't change</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <span><span class="font-semibold">Fully Licensed & Insured:</span> Complete FMCSA compliance
                                and comprehensive coverage</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <span><span class="font-semibold">24/7 Customer Support:</span> Always available to answer
                                your questions</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-600 font-bold mr-2">✓</span>
                            <span><span class="font-semibold">Clear Written Contracts:</span> No vague terms or fine
                                print surprises</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Tips for Getting the Best Rate -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Tips for Getting the Best Rate</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Book in Advance</h4>
                            <p class="text-sm text-gray-600">Reserve 2-4 weeks ahead for better rates and availability
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Be Flexible with Dates</h4>
                            <p class="text-sm text-gray-600">Flexible pickup/delivery windows can reduce costs</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Choose Open Transport</h4>
                            <p class="text-sm text-gray-600">Unless you have a luxury vehicle, open transport is safe and
                                economical</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Ship During Off-Peak</h4>
                            <p class="text-sm text-gray-600">Winter and early spring typically offer lower rates</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Get Multiple Quotes</h4>
                            <p class="text-sm text-gray-600">Compare at least 3-5 reputable companies to find the best
                                value</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-blue-100 p-2 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:check-solid" class="text-blue-600" size="20" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Ensure Vehicle is Operable</h4>
                            <p class="text-sm text-gray-600">Non-running vehicles cost significantly more to transport</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What factors affect auto transport pricing?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Auto transport pricing is affected by distance and route, vehicle size and weight, transport type (open vs enclosed), pickup/delivery locations, seasonality and demand, and additional services like expedited delivery or enhanced insurance.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How much does it cost to ship a car?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Car shipping costs vary by distance: $300-$600 for short distances (0-500 miles), $600-$1,200 for medium distances (500-1,500 miles), and $1,200-$1,800 for long distances (1,500+ miles) for open transport. Enclosed transport costs 30-60% more.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">When is the best time to ship a car for lower costs?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">The best time for lower car shipping costs is during off-peak seasons (winter and early spring) when demand is lower. Booking 2-4 weeks in advance and being flexible with dates also helps reduce costs significantly.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Are there hidden fees in auto transport pricing?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Reputable companies like First Line Transport INC provide transparent pricing with no hidden fees. However, some companies may add unexpected charges for fuel, storage, or carrier assignment. Always get a written contract with clear terms.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How can I get the best auto transport rates?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">To get the best rates: book 2-4 weeks in advance, be flexible with dates, choose open transport for standard vehicles, ship during off-peak seasons, get multiple quotes from reputable companies, and ensure your vehicle is operable.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Articles -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Related Auto Transport Guides</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Open vs Enclosed Transport</h3>
                        <p class="text-gray-700 mb-4">Compare transport methods and understand how your choice affects pricing. Learn which option offers the best value for your vehicle.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Compare Transport Options →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Common Pricing Mistakes</h3>
                        <p class="text-gray-700 mb-4">Learn about pricing pitfalls and how to avoid companies that use hidden fees or bait-and-switch tactics.</p>
                        <NuxtLink to="/blogs/mistakes" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Avoid Pricing Mistakes →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Final CTA -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Free Quote?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Get transparent pricing with no hidden fees. Our TruePrice Guarantee locks in your rate for 30 days.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/quote"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg inline-block text-center">
                        Get Instant Quote
                    </NuxtLink>
                    <button
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Call +1 (929) 923-7706
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">No obligation • Free quote • Instant pricing</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Modal state management
// Modal logic removed - using direct navigation

// SEO Meta Tags
useHead({
    title: 'Auto Transport Pricing Guide - Understanding Car Shipping Costs | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Complete guide to auto transport pricing factors, costs, and how to get the best rates. Learn about car shipping costs with transparent pricing and no hidden fees.'
        },
        {
            name: 'keywords',
            content: 'auto transport pricing, car shipping costs, vehicle transport rates, auto shipping prices, car transport pricing factors, vehicle shipping costs'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/pricing' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Auto Transport Pricing Guide - Understanding Car Shipping Costs',
    ogDescription: 'Complete guide to auto transport pricing factors, costs, and how to get the best rates. Learn about car shipping costs with transparent pricing.',
    ogUrl: 'https://fltransportinc.com/blogs/pricing',
    ogImage: 'https://fltransportinc.com/calculate.jpg',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Auto Transport Pricing Guide - Understanding Car Shipping Costs',
    twitterDescription: 'Complete guide to auto transport pricing factors, costs, and how to get the best rates.',
    twitterImage: 'https://fltransportinc.com/calculate.jpg'
})

// Structured Data - Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Auto Transport Pricing Guide - Understanding Car Shipping Costs',
    description: 'Comprehensive guide to auto transport pricing including factors that affect costs, pricing examples, and tips for getting the best rates.',
    image: 'https://fltransportinc.com/calculate.jpg',
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
            name: 'Auto Transport Pricing Guide',
            item: 'https://fltransportinc.com/blogs/pricing'
        }
    ]
})

// FAQ Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What factors affect auto transport pricing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Auto transport pricing is affected by distance and route, vehicle size and weight, transport type (open vs enclosed), pickup/delivery locations, seasonality and demand, and additional services like expedited delivery.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much does it cost to ship a car?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Car shipping costs vary by distance: $300-$600 for short distances (0-500 miles), $600-$1,200 for medium distances (500-1,500 miles), and $1,200-$1,800 for long distances (1,500+ miles) for open transport.'
            }
        },
        {
            '@type': 'Question',
            name: 'When is the best time to ship a car for lower costs?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time for lower car shipping costs is during off-peak seasons (winter and early spring) when demand is lower. Booking 2-4 weeks in advance and being flexible with dates also helps reduce costs.'
            }
        }
    ]
})

// Service Schema for Pricing
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Auto Transport Service',
    description: 'Professional auto transport services with transparent pricing',
    provider: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        url: 'https://fltransportinc.com'
    },
    areaServed: {
        '@type': 'Country',
        name: 'United States'
    }
})
</script>
