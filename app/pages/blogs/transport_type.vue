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
                        <span itemprop="name" class="text-gray-700">Transport Type Selection Guide</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/types.webp" 
                alt="Different car transport types including open and enclosed carriers for vehicle shipping selection"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Car Transport Type Selection Guide - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Choosing the Right Car Transport Type</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Expert guide to matching your vehicle with the perfect shipping method</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Making the Right Transport Decision for Your Vehicle</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    When choosing how to ship your vehicle, you're making two interconnected decisions: the transport method (<NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open</NuxtLink> vs. <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">enclosed</NuxtLink>, etc.) and how that method fits your specific vehicle type. Whether you need standard service, <NuxtLink to="/blogs/door-to-door" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">door-to-door convenience</NuxtLink>, or specialized <NuxtLink to="/blogs/hawaii-alaska" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">Hawaii & Alaska shipping</NuxtLink>, understanding your options is crucial.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    By understanding both transport methods and vehicle requirements, you can make an informed choice that balances protection, cost, and peace of mind. Our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink> include expert guidance to help you select the optimal shipping method.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Expert Tip:</span> Choosing the wrong transport type is one of the <NuxtLink to="/blogs/mistakes" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">common car shipping mistakes</NuxtLink> that can lead to unexpected costs or inadequate protection for your vehicle.</p>
                </div>
            </div>

            <!-- Main Transport Types -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Main Transport Options</h2>
                
                <div class="space-y-8">
                    <!-- Open Carrier Transport -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div class="flex items-start gap-4 mb-6">
                            <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                <UIcon name="heroicons:truck-solid" class="text-blue-600" size="28" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Open Carrier Transport</h3>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    The vehicle rides on an open-air trailer, typically a double-deck trailer carrying
                                    multiple vehicles. This is the most common and economical shipping method.
                                </p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                                <h4 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">✓</span>
                                    Advantages
                                </h4>
                                <ul class="space-y-2 text-sm text-green-800">
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>More affordable than enclosed transport</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Widely available with flexible scheduling</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Faster pickup and delivery times</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Industry standard for most vehicles</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-orange-50 rounded-lg p-5 border border-orange-200">
                                <h4 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">⚠</span>
                                    Trade-offs
                                </h4>
                                <ul class="space-y-2 text-sm text-orange-800">
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Vehicle exposed to weather and road debris</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>May pick up dust or minor dings</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Less privacy during transport</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                            <p class="text-blue-900 text-sm"><span class="font-semibold">Best For:</span> Standard cars,
                                everyday sedans, SUVs, or used vehicles where maximum protection is not the priority.
                                Cost-effective for most shipping needs.</p>
                        </div>
                    </div>

                    <!-- Enclosed Carrier Transport -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div class="flex items-start gap-4 mb-6">
                            <div class="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                <UIcon name="heroicons:shield-check-solid" class="text-purple-600" size="28" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Enclosed Carrier Transport</h3>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Uses a trailer with full walls and a roof, protecting the vehicle from the
                                    environment. Premium service for high-value or delicate vehicles.
                                </p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                                <h4 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">✓</span>
                                    Advantages
                                </h4>
                                <ul class="space-y-2 text-sm text-green-800">
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Complete protection from weather and debris</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Enhanced security for high-value vehicles</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Privacy during transport</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Climate-controlled options available</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-orange-50 rounded-lg p-5 border border-orange-200">
                                <h4 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">⚠</span>
                                    Trade-offs
                                </h4>
                                <ul class="space-y-2 text-sm text-orange-800">
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>30-60% more expensive than open transport</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Fewer carriers and routes available</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Possibly longer wait times for pickup</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                            <p class="text-purple-900 text-sm"><span class="font-semibold">Best For:</span> Luxury
                                vehicles, sports cars, classic/collector cars, exotic vehicles, or any high-value vehicle
                                where condition and protection are critical.</p>
                        </div>
                    </div>

                    <!-- Expedited Transport -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div class="flex items-start gap-4 mb-6">
                            <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                                <UIcon name="heroicons:bolt-solid" class="text-red-600" size="28" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-3">Expedited Transport</h3>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Fast-track shipping service that prioritizes your vehicle for quicker pickup and
                                    delivery. Ideal when time is critical.
                                </p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                                <h4 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">✓</span>
                                    Advantages
                                </h4>
                                <ul class="space-y-2 text-sm text-green-800">
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Faster delivery (3-7 days typical)</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Priority scheduling and routing</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Door-to-door service included</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-600 font-bold mr-2">•</span>
                                        <span>Minimal paperwork required</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-orange-50 rounded-lg p-5 border border-orange-200">
                                <h4 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                                    <span class="text-2xl">⚠</span>
                                    Trade-offs
                                </h4>
                                <ul class="space-y-2 text-sm text-orange-800">
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Significantly more expensive</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>Limited availability during peak seasons</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-orange-600 font-bold mr-2">•</span>
                                        <span>May require flexible pickup windows</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
                            <p class="text-red-900 text-sm"><span class="font-semibold">Best For:</span> Time-sensitive
                                relocations, important meetings or events, last-minute moves, or when you need guaranteed
                                fast delivery.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vehicle Types and Recommendations -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Matching Transport Type to Your Vehicle
                </h2>
                <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Different vehicles have different needs. Here's how to choose the right transport method based on
                    your vehicle type, value, and condition requirements.
                </p>

                <div class="space-y-8">
                    <!-- Everyday/Standard Cars -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div class="md:flex">
                            <div class="md:w-2/5">
                                <NuxtImg src="/modern.jpg" alt="Standard Vehicles"
                                    class="w-full h-full object-cover min-h-[250px]" />
                            </div>
                            <div class="md:w-3/5 p-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-blue-100 p-2 rounded-full">
                                        <UIcon name="heroicons:check-badge-solid" class="text-blue-600" size="24" />
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">Everyday / Standard Cars</h3>
                                </div>
                                <p class="text-gray-600 mb-4 text-sm">
                                    Common sedans, compact cars, mid-range SUVs, trucks used for practical purposes
                                </p>
                                <div class="bg-blue-50 rounded-lg p-4 mb-4">
                                    <h4 class="font-semibold text-blue-900 mb-2">Recommended: Open Carrier</h4>
                                    <p class="text-sm text-blue-800">
                                        These vehicles are lower value (relatively) and often just need reliable
                                        transport. Open carrier is cost-effective, widely available, and provides an
                                        acceptable level of protection.
                                    </p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Most economical option for daily drivers</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Fast and reliable service</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-blue-600 font-bold mr-2">→</span>
                                        <span class="text-gray-700">Consider enclosed if pristine condition is
                                            critical</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Luxury/Sports Cars -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div class="md:flex md:flex-row-reverse">
                            <div class="md:w-2/5">
                                <NuxtImg src="/luxury.jpg" alt="Luxury Vehicles"
                                    class="w-full h-full object-cover min-h-[250px]" />
                            </div>
                            <div class="md:w-3/5 p-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-purple-100 p-2 rounded-full">
                                        <UIcon name="heroicons:sparkles-solid" class="text-purple-600" size="24" />
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">Premium / Luxury / Sports Cars</h3>
                                </div>
                                <p class="text-gray-600 mb-4 text-sm">
                                    High-end sedans (Mercedes, BMW), luxury SUVs, sports cars (Porsche, Corvette, etc.)
                                </p>
                                <div class="bg-purple-50 rounded-lg p-4 mb-4">
                                    <h4 class="font-semibold text-purple-900 mb-2">Recommended: Enclosed Transport</h4>
                                    <p class="text-sm text-purple-800">
                                        These vehicles have higher value, premium finishes, sometimes custom parts, and
                                        high expectations for condition on arrival. The extra cost buys protection from
                                        road debris and weather.
                                    </p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Protects expensive custom paint jobs</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Preserves premium finishes and body</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Peace of mind for high-value vehicles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Exotic/Classic Cars -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div class="md:flex">
                            <div class="md:w-2/5">
                                <NuxtImg src="/sportcar.webp" alt="Exotic and Classic Vehicles"
                                    class="w-full h-full object-cover min-h-[250px]" />
                            </div>
                            <div class="md:w-3/5 p-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-yellow-100 p-2 rounded-full">
                                        <UIcon name="heroicons:star-solid" class="text-yellow-600" size="24" />
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">Exotic / Classic / Collector Cars</h3>
                                </div>
                                <p class="text-gray-600 mb-4 text-sm">
                                    Rare exotic vehicles (Lamborghini, Ferrari), vintage/collector cars, fully restored
                                    vehicles
                                </p>
                                <div class="bg-yellow-50 rounded-lg p-4 mb-4">
                                    <h4 class="font-semibold text-yellow-900 mb-2">Recommended: Enclosed + White Glove
                                        Service</h4>
                                    <p class="text-sm text-yellow-800">
                                        These vehicles merit the highest protection because value is very high,
                                        replacement parts may be unavailable, and condition is absolutely critical.
                                        Single-car trailers available.
                                    </p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Climate-controlled trailer options</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Minimized stops and handling</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Single-car exclusive transport available</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Extra insurance coverage included</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SUVs and Trucks -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div class="md:flex md:flex-row-reverse">
                            <div class="md:w-2/5">
                                <NuxtImg src="/suv1.jpg" alt="SUVs and Trucks"
                                    class="w-full h-full object-cover min-h-[250px]" />
                            </div>
                            <div class="md:w-3/5 p-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-green-100 p-2 rounded-full">
                                        <UIcon name="heroicons:cube-solid" class="text-green-600" size="24" />
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">SUVs, Crossovers & Pickup Trucks</h3>
                                </div>
                                <p class="text-gray-600 mb-4 text-sm">
                                    Full-size SUVs, crossovers, pickup trucks (standard and lifted)
                                </p>
                                <div class="bg-green-50 rounded-lg p-4 mb-4">
                                    <h4 class="font-semibold text-green-900 mb-2">Recommended: Open or Enclosed (depends
                                        on value)</h4>
                                    <p class="text-sm text-green-800">
                                        Standard SUVs and trucks work well with open transport. Luxury SUVs or heavily
                                        modified trucks should consider enclosed. Oversized vehicles may require special
                                        arrangements.
                                    </p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-start text-sm">
                                        <span class="text-blue-600 font-bold mr-2">→</span>
                                        <span class="text-gray-700">Open transport for standard models</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-blue-600 font-bold mr-2">→</span>
                                        <span class="text-gray-700">Enclosed for luxury SUVs (Range Rover, Escalade)</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-orange-600 font-bold mr-2">⚠</span>
                                        <span class="text-gray-700">Lifted trucks may incur additional fees</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Motorcycles -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div class="md:flex">
                            <div class="md:w-2/5">
                                <NuxtImg src="/motorcylce.jpeg" alt="Motorcycles"
                                    class="w-full h-full object-cover min-h-[250px]" />
                            </div>
                            <div class="md:w-3/5 p-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-red-100 p-2 rounded-full">
                                        <UIcon name="heroicons:fire-solid" class="text-red-600" size="24" />
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">Motorcycles & Specialty Vehicles</h3>
                                </div>
                                <p class="text-gray-600 mb-4 text-sm">
                                    Motorcycles, ATVs, custom bikes, vintage motorcycles
                                </p>
                                <div class="bg-red-50 rounded-lg p-4 mb-4">
                                    <h4 class="font-semibold text-red-900 mb-2">Recommended: Enclosed with Custom Cradles
                                    </h4>
                                    <p class="text-sm text-red-800">
                                        Motorcycles require specialized equipment including custom cradle systems and soft
                                        straps. Enclosed trailers protect from weather and road debris during transport.
                                    </p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Custom cradle systems for stability</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Soft straps prevent damage</span>
                                    </div>
                                    <div class="flex items-start text-sm">
                                        <span class="text-green-600 font-bold mr-2">✓</span>
                                        <span class="text-gray-700">Protection from elements</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Special Cases -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-orange-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:exclamation-triangle-solid" class="text-orange-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Special Cases: Oversized, Low-Clearance &
                            Non-Operable</h2>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Vehicles with unusual specifications may require special trailer types or services regardless of
                    value. It's important to communicate these details upfront to ensure proper handling.
                </p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                        <h3 class="font-bold text-gray-900 mb-3">Special Considerations:</h3>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-start">
                                <span class="text-orange-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Oversized tires or lifted trucks:</span> May require
                                    specialized loading equipment</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Very low sports cars:</span> Need hydraulic lift gates
                                    and careful loading</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Non-operable vehicles:</span> Require winch service
                                    (+$100-$300)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Wide body modifications:</span> May need enclosed or
                                    special permits</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Convertibles:</span> Should use enclosed to protect
                                    soft tops</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-blue-50 rounded-lg p-5 border border-blue-200">
                        <h3 class="font-bold text-blue-900 mb-3">What to Communicate:</h3>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">✓</span>
                                <span>Exact vehicle dimensions (height, width, length)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">✓</span>
                                <span>Ground clearance measurements</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">✓</span>
                                <span>Any modifications or custom parts</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">✓</span>
                                <span>Operational status (runs or non-running)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">✓</span>
                                <span>Special loading/unloading requirements</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Decision Guide -->
            <div class="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Quick Decision Guide</h2>
                <p class="text-center text-gray-600 mb-8">Answer these questions to determine the best transport option
                </p>

                <div class="space-y-4 max-w-3xl mx-auto">
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                            What is your vehicle's value?
                        </h3>
                        <div class="space-y-2 text-sm text-gray-700 ml-10">
                            <p><span class="font-semibold">Under $20,000:</span> Open transport is usually sufficient</p>
                            <p><span class="font-semibold">$20,000-$50,000:</span> Consider enclosed for peace of mind</p>
                            <p><span class="font-semibold">Over $50,000:</span> Strongly recommend enclosed transport</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                            What condition do you expect on delivery?
                        </h3>
                        <div class="space-y-2 text-sm text-gray-700 ml-10">
                            <p><span class="font-semibold">Minor dust/wear acceptable:</span> Open transport works well</p>
                            <p><span class="font-semibold">Showroom condition required:</span> Choose enclosed transport</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                            Does your vehicle have special characteristics?
                        </h3>
                        <div class="space-y-2 text-sm text-gray-700 ml-10">
                            <p><span class="font-semibold">Low clearance:</span> Enclosed with hydraulic lift gates</p>
                            <p><span class="font-semibold">Oversized/modified:</span> Contact for customized recommendation</p>
                            <p><span class="font-semibold">Non-running:</span> Specify upfront for proper equipment</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                            What's your budget and timeline?
                        </h3>
                        <div class="space-y-2 text-sm text-gray-700 ml-10">
                            <p><span class="font-semibold">Budget-conscious:</span> Open transport offers best value</p>
                            <p><span class="font-semibold">Flexible timeline:</span> Standard service saves money</p>
                            <p><span class="font-semibold">Time-critical:</span> Expedited service available</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cost Comparison -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Transport Type Cost Comparison</h2>
                <p class="text-center text-gray-600 mb-8">Approximate pricing for 1,000-mile transport</p>

                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold text-green-900 mb-2">$600-$900</div>
                            <h3 class="text-xl font-bold text-green-900">Open Transport</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-center">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Most economical</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Widely available</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Fast scheduling</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-400">
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold text-purple-900 mb-2">$900-$1,400</div>
                            <h3 class="text-xl font-bold text-purple-900">Enclosed Transport</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-purple-800">
                            <li class="flex items-center">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Premium protection</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Weather shielded</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Enhanced security</span>
                            </li>
                        </ul>
                        <div class="mt-4 text-center">
                            <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">MOST
                                POPULAR FOR LUXURY</span>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold text-red-900 mb-2">$1,200-$2,000+</div>
                            <h3 class="text-xl font-bold text-red-900">Expedited Service</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-center">
                                <span class="text-red-600 mr-2">✓</span>
                                <span>Fastest delivery</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-red-600 mr-2">✓</span>
                                <span>Priority routing</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-red-600 mr-2">✓</span>
                                <span>Guaranteed timeline</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="text-center text-sm text-gray-500 mt-6">*Prices vary based on distance, season, and specific
                    vehicle requirements</p>
            </div>

            <!-- Why This Matters -->
            <div class="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choosing the Right Type Matters</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">🤝</div>
                        <h3 class="font-bold text-gray-900 mb-2">Builds Trust</h3>
                        <p class="text-sm text-gray-700">Clear guidance demonstrates expertise and helps you make
                            informed decisions about protecting your investment.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">✅</div>
                        <h3 class="font-bold text-gray-900 mb-2">Manages Expectations</h3>
                        <p class="text-sm text-gray-700">Understanding the right service for your vehicle type prevents
                            problems and ensures satisfaction with the delivery condition.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md text-center">
                        <div class="text-4xl mb-3">💰</div>
                        <h3 class="font-bold text-gray-900 mb-2">Proper Value</h3>
                        <p class="text-sm text-gray-700">Matching service to vehicle ensures you're not overpaying for
                            unnecessary protection or underprotecting valuable vehicles.</p>
                    </div>
                </div>
            </div>

            <!-- International Shipping -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:globe-americas-solid" class="text-blue-600" size="28" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">International Vehicle Shipping</h2>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Shipping vehicles overseas requires additional considerations and documentation. Here's what you need
                    to know about international transport options.
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-blue-50 rounded-lg p-5 border border-blue-200">
                        <h3 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🚢</span>
                            Ocean Shipping
                        </h3>
                        <p class="text-sm text-blue-800 mb-3">Most economical option for international transport</p>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Cost:</span> $1,000-$5,000 depending on destination</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Timeline:</span> 2-8 weeks depending on route</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Methods:</span> Container or Roll-on/Roll-off (RoRo)</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-purple-50 rounded-lg p-5 border border-purple-200">
                        <h3 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">✈️</span>
                            Air Transport
                        </h3>
                        <p class="text-sm text-purple-800 mb-3">Fastest but most expensive international option</p>
                        <ul class="space-y-2 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Cost:</span> $5,000-$40,000+ depending on size</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Timeline:</span> 1-2 weeks</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 font-bold mr-2">•</span>
                                <span><span class="font-semibold">Best for:</span> Extremely valuable or time-critical shipments</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <h4 class="font-semibold text-yellow-900 mb-2">Required Documentation for International Shipping:</h4>
                    <div class="grid md:grid-cols-2 gap-2 text-sm text-yellow-800">
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>Vehicle title and registration</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>Passport and driver's license</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>Import/export paperwork</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>Insurance documentation</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>VIN number verification</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-600 mr-2">•</span>
                            <span>Customs clearance forms</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- First Line Transport Advantage -->
            <div class="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">First Line Transport INC: Expert Guidance</h2>
                    <p class="text-lg text-gray-600">We help you choose the perfect transport method for your vehicle</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:chat-bubble-left-right-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Personalized Consultation</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">Our experts ask the right questions to understand your
                            vehicle and needs, then recommend the optimal transport solution.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Vehicle assessment and recommendations</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Clear cost vs. benefit explanations</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>No pressure, honest advice</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">All Options Available</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">We offer every transport type, so our recommendations are
                            based on your needs, not our limitations.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Open and enclosed carriers</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Expedited and standard service</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Specialized equipment for unique vehicles</span>
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
                        <p class="text-purple-800 text-sm mb-3">Clear quotes with no hidden fees. We explain exactly what
                            you're paying for and why.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Detailed price breakdowns</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>TruePrice 30-day guarantee</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>No surprise charges</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:wrench-screwdriver-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">Special Vehicle Expertise</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">Experience handling exotic, classic, modified, and
                            specialty vehicles with proper equipment and care.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Low-clearance vehicle specialists</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Oversized vehicle accommodations</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Non-operable vehicle service</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What is the difference between open and enclosed car transport?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Open transport uses open-air trailers and is more economical, while enclosed transport provides complete protection from weather and debris in a covered trailer. Enclosed costs 30-60% more but offers premium protection for luxury vehicles.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Which transport type should I choose for my vehicle?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Choose based on vehicle value and condition requirements: Open transport for standard vehicles under $20,000, consider enclosed for vehicles $20,000-$50,000, and strongly recommend enclosed for vehicles over $50,000 or when showroom condition is required.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">When should I choose expedited car transport?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Choose expedited transport for time-sensitive relocations, important meetings or events, last-minute moves, or when you need guaranteed fast delivery within 3-7 days. It costs significantly more but provides priority scheduling.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Do luxury vehicles always need enclosed transport?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">While not mandatory, enclosed transport is strongly recommended for luxury vehicles, sports cars, classic cars, and any vehicle over $50,000 in value. It provides complete protection from weather, debris, and road hazards that could damage premium finishes.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What special considerations apply to modified vehicles?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Modified vehicles with low clearance, oversized tires, or custom parts may require specialized equipment like hydraulic lift gates or enclosed transport. Always communicate modifications upfront to ensure proper handling and avoid additional fees.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Articles -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Related Auto Transport Guides</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Open Transport Guide</h3>
                        <p class="text-gray-700 mb-4">Learn about the most popular and cost-effective transport method, including when it's the right choice for your vehicle.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Explore Open Transport →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Enclosed Transport Guide</h3>
                        <p class="text-gray-700 mb-4">Discover premium enclosed transport for luxury, classic, and high-value vehicles requiring maximum protection.</p>
                        <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Learn About Enclosed Transport →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Final CTA -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Option is Right for You?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Our transport specialists will assess your vehicle and recommend the perfect shipping method. Get
                    expert guidance and a free quote today.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="openConsultantModal()"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Get Free Consultation
                    </button>
                    <button
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Call +1 (929) 923-7706
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">Expert recommendations • All transport types available • No
                    obligation</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Modal state management
const consultantModal = useState('consultantModal', () => false)

function openConsultantModal(){
    consultantModal.value = !consultantModal.value
}

// SEO Meta Tags
useHead({
    title: 'Choosing the Right Car Transport Type - Complete Guide | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Complete guide to choosing between open, enclosed, and expedited car transport. Match your vehicle type to the perfect shipping method for optimal protection and value.'
        },
        {
            name: 'keywords',
            content: 'car transport types, open vs enclosed transport, vehicle shipping methods, auto transport options, car shipping guide, transport type selection'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/transport_type' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Choosing the Right Car Transport Type - Complete Guide',
    ogDescription: 'Complete guide to choosing between open, enclosed, and expedited car transport. Match your vehicle type to the perfect shipping method.',
    ogUrl: 'https://fltransportinc.com/blogs/transport_type',
    ogImage: 'https://fltransportinc.com/types.webp',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Choosing the Right Car Transport Type - Complete Guide',
    twitterDescription: 'Complete guide to choosing between open, enclosed, and expedited car transport.',
    twitterImage: 'https://fltransportinc.com/types.webp'
})

// Structured Data - Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Choosing the Right Car Transport Type - Complete Guide',
    description: 'Comprehensive guide to selecting the optimal car transport method including open, enclosed, and expedited options based on vehicle type and needs.',
    image: 'https://fltransportinc.com/types.webp',
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
            position: 2,
            name: 'Blog',
            item: 'https://fltransportinc.com/blogs'
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Transport Type Selection Guide',
            item: 'https://fltransportinc.com/blogs/transport_type'
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
            name: 'What is the difference between open and enclosed car transport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Open transport uses open-air trailers and is more economical, while enclosed transport provides complete protection from weather and debris in a covered trailer. Enclosed costs 30-60% more but offers premium protection for luxury vehicles.'
            }
        },
        {
            '@type': 'Question',
            name: 'Which transport type should I choose for my vehicle?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Choose based on vehicle value and condition requirements: Open transport for standard vehicles under $20,000, consider enclosed for vehicles $20,000-$50,000, and strongly recommend enclosed for vehicles over $50,000 or when showroom condition is required.'
            }
        },
        {
            '@type': 'Question',
            name: 'When should I choose expedited car transport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Choose expedited transport for time-sensitive relocations, important meetings or events, last-minute moves, or when you need guaranteed fast delivery within 3-7 days. It costs significantly more but provides priority scheduling.'
            }
        }
    ]
})

// How-To Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Choose the Right Car Transport Type',
    description: 'Step-by-step guide to selecting the optimal car transport method',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Assess Your Vehicle Value',
            text: 'Determine if your vehicle is under $20,000 (open transport), $20,000-$50,000 (consider enclosed), or over $50,000 (enclosed recommended).'
        },
        {
            '@type': 'HowToStep',
            name: 'Consider Condition Requirements',
            text: 'Decide if minor dust/wear is acceptable (open transport) or if showroom condition is required (enclosed transport).'
        },
        {
            '@type': 'HowToStep',
            name: 'Evaluate Special Characteristics',
            text: 'Consider low clearance, oversized modifications, or non-running status that may require specialized equipment.'
        },
        {
            '@type': 'HowToStep',
            name: 'Review Budget and Timeline',
            text: 'Balance cost considerations with timeline requirements to choose between standard, enclosed, or expedited service.'
        }
    ]
})
</script>
