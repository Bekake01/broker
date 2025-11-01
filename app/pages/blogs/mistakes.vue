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
                        <span itemprop="name" class="text-gray-700">Common Car Shipping Mistakes</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/mistake.jpg" 
                alt="Common car shipping mistakes to avoid - expert guidance for successful vehicle transport"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Common Car Shipping Mistakes to Avoid - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Common Car Shipping Mistakes to Avoid</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Expert guide to successful vehicle transport without costly errors</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Don't Let These Pitfalls Derail Your Vehicle Shipping Experience</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Shipping a car might sound straightforward, but many customers run into avoidable problems that cause delays, extra costs, or even damage. Whether you're using <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink>, <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">enclosed transport</NuxtLink>, or specialized services like <NuxtLink to="/blogs/hawaii-alaska" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">Hawaii & Alaska shipping</NuxtLink>, avoiding these common mistakes will ensure a smoother experience.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    By proactively avoiding key mistakes, you help ensure a smoother and more reliable transport experience with our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink>. Below are the most frequent pitfalls and how to avoid them.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Expert Tip:</span> The key to successful car shipping is preparation, research, and working with experienced professionals who guide you through the process.</p>
                </div>
            </div>

            <!-- Top 7 Mistakes -->
            <div class="space-y-12">
                <!-- Mistake 1: Wrong Company -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:exclamation-triangle-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">1. Not Researching the Transport Company
                            </h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        One of the biggest mistakes is going with the first quote you get, especially if it's very
                        cheap, without verifying the company's credentials.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Problems You May Face:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Company may be a broker with extra layers and less accountability</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Lack of proper licensing, insurance, or track record</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>No verifiable MC (Motor Carrier) or DOT registration</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Extremely low quotes often signal hidden fees or poor service</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">What to Do Instead:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Check USDOT and MC numbers using the FMCSA website</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Read reviews from multiple sources (Google, BBB, TransportReviews.com)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Ask detailed questions about insurance, pickup windows, and carrier type</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Focus on value (quality + reliability), not just lowest cost</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mistake 2: Choosing Lowest Quote -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:currency-dollar-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">2. Choosing the Lowest Quote Without
                                Understanding Costs</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        While everyone wants to save money, selecting the cheapest quote is one of the riskiest vehicle
                        shipping errors. Ultra-low pricing often sacrifices service quality.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Hidden Costs and Risks:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Delayed pickup or delivery due to carriers declining low-paying loads</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Poor carrier quality (lack of proper equipment or experience)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Bait-and-switch tactics: quote one price, charge another later</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Price hikes after booking with no recourse</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">What to Do Instead:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Compare 3-5 quotes and understand what's included</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Ask about enclosed vs open transport, door-to-door vs terminal service</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Verify insurance coverage levels and customer support availability</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Choose value over cost – mid-range quotes from reputable companies deliver better
                                    results</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mistake 3: Poor Vehicle Preparation -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:wrench-screwdriver-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">3. Failing to Prepare Your Vehicle for
                                Shipping</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Many problems stem from the vehicle not being ready when the carrier arrives. Neglecting
                        pre-shipment prep can delay pickup, result in extra charges, or even vehicle rejection.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Common Oversights:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Vehicle is dirty, making it hard to document pre-existing damage</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Personal items, accessories, or loose parts left inside → risk of damage and
                                    insurance complications</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Mechanical issues, full fuel tank, or active alarms delay pickup</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Forgetting to remove toll tags and EZ passes</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">Pre-Shipping Checklist:</h3>
                        <div class="grid md:grid-cols-2 gap-3">
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Wash vehicle inside and out</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Take dated photos from all angles</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Remove personal belongings</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Check tire pressure and fluid levels</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Disable car alarms</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Maintain ¼ tank fuel level</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Remove loose accessories</span>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span class="text-sm text-green-800">Verify battery is charged</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mistake 4: Inadequate Documentation -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:document-text-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">4. Inadequate Documentation & Contract
                                Details</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Shipping a vehicle isn't just loading it on a truck – proper contracts and paperwork matter.
                        Missing documentation or unclear terms can lead to serious complications.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Common Problems:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Missing key documents (title, registration, export/import paperwork)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Contract terms not clearly understood: service type, insurance coverage, delay
                                    policies</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Assuming everything is included without reading fine print</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Hidden surcharges for fuel, oversized vehicles, or remote pickup</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>No written contract or vague terms about pricing and liability</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">What to Do Instead:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Get a clear written contract that you review and sign</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Ensure website and quote clearly state included services</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Read all terms and highlight common fine-print items</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Obtain detailed Bill of Lading (BOL) at pickup documenting vehicle condition</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mistake 5: Insurance Issues -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:shield-exclamation-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">5. Skipping Insurance and Inspection
                                Protocols</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Assuming the vehicle is "covered" without checking can lead to major disappointment. This is one
                        of the most expensive car shipping mistakes.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">What You Risk:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Basic carrier liability may be minimal (often only $50,000 coverage)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Personal auto insurance often doesn't cover transit damage</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Without pre-inspection documentation, damage claims may be denied</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Receiving damaged vehicle with no proof it happened during transit</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Disputes with carrier or their insurer</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">Protection Steps:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Request a copy of the carrier's insurance certificate</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Know the coverage limits and deductibles</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Conduct thorough inspection at both pickup and delivery</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Sign Bill of Lading only after confirming condition</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Consider gap coverage for luxury, antique, or exotic vehicles</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mistake 6: Poor Timing -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:clock-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">6. Booking Last Minute or Ignoring
                                Seasonal Impacts</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Car shipping involves complex logistics across vast distances. Underestimating lead time or
                        picking the wrong dates is one of the most frustrating mistakes.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Timing Problems:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Peak seasons (summer, fall) mean higher demand and prices</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Last-minute fees for expedited shipping</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Limited carrier availability during peak times</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Weather-related delays (especially winter in northern states)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Route congestion during major holidays</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
                        <h3 class="font-bold text-blue-900 mb-3">Seasonal Guide:</h3>
                        <div class="grid md:grid-cols-2 gap-3 text-sm">
                            <div class="bg-white p-3 rounded">
                                <span class="font-semibold text-blue-900">Spring (Mar-May):</span>
                                <span class="text-gray-700"> Busy northbound snowbird traffic</span>
                            </div>
                            <div class="bg-white p-3 rounded">
                                <span class="font-semibold text-blue-900">Summer (Jun-Aug):</span>
                                <span class="text-gray-700"> High demand, highest prices</span>
                            </div>
                            <div class="bg-white p-3 rounded">
                                <span class="font-semibold text-blue-900">Fall (Sep-Nov):</span>
                                <span class="text-gray-700"> Best time—lower demand, better deals</span>
                            </div>
                            <div class="bg-white p-3 rounded">
                                <span class="font-semibold text-blue-900">Winter (Dec-Feb):</span>
                                <span class="text-gray-700"> Weather delays in northern states</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">Smart Timing Tips:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Book 2-4 weeks in advance for best rates and availability</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Be flexible with pickup/delivery windows to reduce costs</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Avoid holiday weeks for smoother transit</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Build buffer time into delivery expectations</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mistake 7: Poor Communication -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-red-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:phone-x-mark-solid" class="text-red-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">7. Miscommunication or Lack of Clear
                                Contact</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Good logistics require clear communication. Without it, things go wrong quickly and can result
                        in delays, extra fees, or missed deliveries.
                    </p>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                        <h3 class="font-bold text-red-900 mb-2">Communication Failures:</h3>
                        <ul class="space-y-2 text-sm text-red-800">
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Customer unreachable at pickup/delivery causing wait time fees</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Company fails to provide status updates, leaving customer anxious</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Unclear pickup/drop-off locations or instructions</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2">•</span>
                                <span>Changes not documented or communicated promptly</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <h3 class="font-bold text-green-900 mb-2">Communication Best Practices:</h3>
                        <ul class="space-y-2 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Provide multiple contact numbers and clear addresses</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Expect regular updates: pickup confirmation, in-transit status, delivery
                                    window</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Ensure clear "what to expect" instructions from your provider</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 font-bold mr-2">✓</span>
                                <span>Be available when carrier is scheduled to arrive</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Quick Reference Guide -->
            <div class="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Quick Reference: Avoid These Mistakes</h2>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">❌</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Don't</h4>
                                <p class="text-sm text-gray-700">Choose the cheapest quote without research</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">✅</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Do</h4>
                                <p class="text-sm text-gray-700">Compare 3-5 reputable companies and check credentials
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">❌</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Don't</h4>
                                <p class="text-sm text-gray-700">Leave personal items in your vehicle</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">✅</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Do</h4>
                                <p class="text-sm text-gray-700">Clean vehicle and document condition with photos</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">❌</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Don't</h4>
                                <p class="text-sm text-gray-700">Assume basic insurance covers everything</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">✅</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Do</h4>
                                <p class="text-sm text-gray-700">Review insurance certificate and consider supplemental
                                    coverage</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">❌</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Don't</h4>
                                <p class="text-sm text-gray-700">Book last minute during peak season</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4 shadow-md">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">✅</span>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-1">Do</h4>
                                <p class="text-sm text-gray-700">Book 2-4 weeks ahead with flexible dates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why First Line Transport is Different -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Why First Line Transport INC is Different</h2>
                    <p class="text-lg text-gray-600">We've built our business around avoiding these common mistakes</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:check-badge-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Fully Licensed & Transparent</h3>
                        </div>
                        <p class="text-green-800 text-sm">FMCSA licensed and insured with verifiable credentials. No
                            hidden fees or surprise charges – what you see is what you pay.</p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">TruePrice Guarantee</h3>
                        </div>
                        <p class="text-blue-800 text-sm">30-day price lock means your quote won't change. No
                            bait-and-switch tactics or last-minute price hikes.</p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:chat-bubble-left-right-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">24/7 Communication</h3>
                        </div>
                        <p class="text-purple-800 text-sm">Always available to answer questions and provide updates.
                            Real-time tracking and proactive notifications throughout transit.</p>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:document-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">Comprehensive Documentation</h3>
                        </div>
                        <p class="text-orange-800 text-sm">Clear contracts, detailed Bill of Lading, and thorough
                            vehicle inspections at pickup and delivery. Your protection is our priority.</p>
                    </div>
                </div>

                <div class="mt-8 bg-gray-50 border-l-4 border-gray-600 p-6 rounded-lg">
                    <h3 class="font-bold text-gray-900 mb-3">Our Customer Preparation Support:</h3>
                    <ul class="grid md:grid-cols-2 gap-3">
                        <li class="flex items-start text-sm text-gray-700">
                            <span class="text-gray-600 font-bold mr-2">✓</span>
                            <span>Pre-shipping checklist provided to every customer</span>
                        </li>
                        <li class="flex items-start text-sm text-gray-700">
                            <span class="text-gray-600 font-bold mr-2">✓</span>
                            <span>Guidance on optimal booking times and dates</span>
                        </li>
                        <li class="flex items-start text-sm text-gray-700">
                            <span class="text-gray-600 font-bold mr-2">✓</span>
                            <span>Insurance options clearly explained upfront</span>
                        </li>
                        <li class="flex items-start text-sm text-gray-700">
                            <span class="text-gray-600 font-bold mr-2">✓</span>
                            <span>Dedicated support team from quote to delivery</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Action Steps Summary -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">5 Steps to Avoid These Mistakes</h2>
                <div class="space-y-4">
                    <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                        <div
                            class="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            1</div>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-1">Research Your Transport Provider</h4>
                            <p class="text-sm text-gray-700">Verify licensing, insurance, and reviews. Check USDOT and MC
                                numbers on FMCSA website.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                        <div
                            class="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            2</div>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-1">Request Multiple Quotes</h4>
                            <p class="text-sm text-gray-700">Compare 3-5 quotes analyzing beyond price – look at included
                                services, insurance, and customer feedback.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                        <div
                            class="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            3</div>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-1">Prepare Your Vehicle Properly</h4>
                            <p class="text-sm text-gray-700">Clean your car, document condition with photos, remove
                                personal belongings, and follow the pre-shipping checklist.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                        <div
                            class="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            4</div>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-1">Schedule with Lead Time</h4>
                            <p class="text-sm text-gray-700">Book 2-4 weeks in advance, consider seasonal demand, and stay
                                flexible with dates for better rates.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                        <div
                            class="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            5</div>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-1">Review Insurance & Inspection Process</h4>
                            <p class="text-sm text-gray-700">Verify coverage limits, conduct thorough inspections at
                                pickup/delivery, and only sign BOL after confirming condition.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What is the biggest mistake when choosing a car shipping company?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">The biggest mistake is not researching the transport company and choosing based solely on the lowest price without verifying credentials, licensing, insurance, and customer reviews. Always check USDOT and MC numbers.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How should I prepare my vehicle for shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Wash your vehicle inside and out, take dated photos from all angles, remove personal belongings, check tire pressure and fluid levels, disable car alarms, and maintain 1/4 tank fuel level. This preparation prevents delays and protects your interests.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">When is the best time to book car shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Book 2-4 weeks in advance for best rates and availability. Fall (September-November) typically offers the best deals, while summer has the highest demand and prices. Avoid booking last minute during peak seasons.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What insurance coverage should I expect?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Request a copy of the carrier's insurance certificate and understand coverage limits. Basic carrier liability may be minimal, so consider gap coverage for luxury or high-value vehicles. Never assume your personal auto insurance covers transit damage.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How can I avoid hidden fees and price increases?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Get a clear written contract with all terms specified. Ask about potential surcharges for fuel, oversized vehicles, or remote locations. Choose companies that offer price guarantees and avoid those with extremely low quotes that seem too good to be true.</p>
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
                        <p class="text-gray-700 mb-4">Learn about the most popular and cost-effective vehicle shipping method and how to prepare for open transport service.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Read Open Transport Guide →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Door-to-Door Service</h3>
                        <p class="text-gray-700 mb-4">Discover the convenience of door-to-door car shipping and how it can simplify your vehicle transport experience.</p>
                        <NuxtLink to="/blogs/door-to-door" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Explore Door-to-Door Service →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Final Thoughts -->
            <div class="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Final Thoughts: Ship Smarter, Not Harder</h2>
                <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                    Shipping a car doesn't have to be stressful, but it does require planning and informed decision-making. By avoiding these seven common mistakes, you'll ensure a smoother, safer experience with fewer surprises. Whether you're a first-time shipper or a seasoned pro, staying proactive about research, timing, preparation, and protection pays off.
                </p>
                <p class="text-center text-gray-600 font-semibold">
                    Take the guesswork out of auto transport with First Line Transport INC.
                </p>
            </div>

            <!-- Final CTA -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Avoid These Mistakes?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Ship with confidence knowing you're working with a trusted, fully licensed provider. Our expert team
                    guides you every step of the way.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="openModal()"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Get Free Quote
                    </button>
                    <button
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Call +1 (929) 923-7706
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">No hidden fees • TruePrice Guarantee • 24/7 Support</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Modal state management
const modal = useState('globalModal', () => false)

function openModal(){
    modal.value = !modal.value
}

// SEO Meta Tags
useHead({
    title: 'Common Car Shipping Mistakes to Avoid - Expert Guide | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Learn the top 7 car shipping mistakes and how to avoid them. Expert guidance on choosing reliable transport, proper preparation, insurance, and timing for successful vehicle shipping.'
        },
        {
            name: 'keywords',
            content: 'car shipping mistakes, auto transport errors, vehicle shipping tips, car transport guide, shipping mistakes to avoid, auto transport advice'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/mistakes' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'Common Car Shipping Mistakes to Avoid - Expert Guide',
    ogDescription: 'Learn the top 7 car shipping mistakes and how to avoid them. Expert guidance on choosing reliable transport, proper preparation, insurance, and timing.',
    ogUrl: 'https://fltransportinc.com/blogs/mistakes',
    ogImage: 'https://fltransportinc.com/mistake.jpg',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'Common Car Shipping Mistakes to Avoid - Expert Guide',
    twitterDescription: 'Learn the top 7 car shipping mistakes and how to avoid them. Expert guidance for successful vehicle shipping.',
    twitterImage: 'https://fltransportinc.com/mistake.jpg'
})

// Structured Data - Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Common Car Shipping Mistakes to Avoid - Expert Guide',
    description: 'Comprehensive guide to avoiding the top 7 car shipping mistakes including company research, pricing, preparation, insurance, and timing.',
    image: 'https://fltransportinc.com/mistake.jpg',
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
            name: 'Common Car Shipping Mistakes',
            item: 'https://fltransportinc.com/blogs/mistakes'
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
            name: 'What is the biggest mistake when choosing a car shipping company?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The biggest mistake is not researching the transport company and choosing based solely on the lowest price without verifying credentials, licensing, insurance, and customer reviews.'
            }
        },
        {
            '@type': 'Question',
            name: 'How should I prepare my vehicle for shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Wash your vehicle inside and out, take dated photos from all angles, remove personal belongings, check tire pressure and fluid levels, disable car alarms, and maintain 1/4 tank fuel level.'
            }
        },
        {
            '@type': 'Question',
            name: 'When is the best time to book car shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Book 2-4 weeks in advance for best rates and availability. Fall (September-November) typically offers the best deals, while summer has the highest demand and prices.'
            }
        }
    ]
})

// How-To Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Avoid Common Car Shipping Mistakes',
    description: 'Step-by-step guide to avoiding the most common car shipping mistakes',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Research Your Transport Provider',
            text: 'Verify licensing, insurance, and reviews. Check USDOT and MC numbers on FMCSA website.'
        },
        {
            '@type': 'HowToStep',
            name: 'Request Multiple Quotes',
            text: 'Compare 3-5 quotes analyzing beyond price – look at included services, insurance, and customer feedback.'
        },
        {
            '@type': 'HowToStep',
            name: 'Prepare Your Vehicle Properly',
            text: 'Clean your car, document condition with photos, remove personal belongings, and follow the pre-shipping checklist.'
        },
        {
            '@type': 'HowToStep',
            name: 'Schedule with Lead Time',
            text: 'Book 2-4 weeks in advance, consider seasonal demand, and stay flexible with dates for better rates.'
        },
        {
            '@type': 'HowToStep',
            name: 'Review Insurance & Inspection Process',
            text: 'Verify coverage limits, conduct thorough inspections at pickup/delivery, and only sign BOL after confirming condition.'
        }
    ]
})
</script>
