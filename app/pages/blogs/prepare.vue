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
                        <span itemprop="name" class="text-gray-700">Vehicle Preparation Guide</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>

        <!-- Hero Image Section -->
        <div class="relative h-[400px] md:h-[500px] overflow-hidden">
            <NuxtImg 
                src="/prep.webp" 
                alt="Professional vehicle preparation for car shipping - cleaning and inspection process"
                class="w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="500"
                title="Vehicle Preparation for Shipping - First Line Transport INC"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">How to Prepare Your Vehicle for Shipping</h1>
                    <p class="text-xl md:text-2xl text-gray-200">Complete step-by-step guide for successful car transport</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Introduction -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Essential Steps for Successful Vehicle Transport</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Getting ready to ship a vehicle involves more than just handing over the keys. Whether you're using <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">open transport</NuxtLink>, <NuxtLink to="/blogs/enclosed" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">enclosed transport</NuxtLink>, or specialized services like <NuxtLink to="/blogs/hawaii-alaska" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">Hawaii & Alaska shipping</NuxtLink>, proper preparation is crucial for success.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Proper preparation helps ensure a smooth transit, minimizes risk of extra fees or damage, and builds confidence in the shipping process. Our comprehensive <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">auto transport services</NuxtLink> include detailed preparation guidance to help you avoid common pitfalls. Below are the essential steps to prepare your vehicle for transport.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p class="text-blue-900 text-sm"><span class="font-semibold">Pro Tip:</span> Following this preparation guide can help you avoid the <NuxtLink to="/blogs/mistakes" class="text-blue-600 hover:text-blue-800 underline" rel="bookmark">common car shipping mistakes</NuxtLink> that lead to delays and extra costs.</p>
                </div>
            </div>

            <!-- Preparation Steps -->
            <div class="space-y-12">
                <!-- Step 1: Clean & Inspect -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:sparkles-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 1: Clean Your Car Thoroughly</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        A clean car is easier to inspect and helps both you and the shipping company identify any
                        pre-existing damage such as scratches, dents, or paint chips. Proper cleaning ensures accurate
                        documentation before shipping.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-blue-50 rounded-lg p-5 border border-blue-200">
                            <h3 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                <UIcon name="heroicons:sparkles" class="text-blue-600" size="20" />
                                Exterior Cleaning
                            </h3>
                            <ul class="space-y-2 text-sm text-blue-800">
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Thoroughly wash the outside, removing all dirt, mud, and debris</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Clean undercarriage, wheels, and fenders</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Remove bird droppings, bugs, and tar that can damage paint</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Optional: Apply wax for extra paint protection</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                            <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                                <UIcon name="heroicons:home-modern" class="text-green-600" size="20" />
                                Interior Cleaning
                            </h3>
                            <ul class="space-y-2 text-sm text-green-800">
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>Vacuum all surfaces including seats, carpets, and floor mats</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>Remove all trash and unnecessary items</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>Check under seats, glove compartment, and trunk</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">•</span>
                                    <span>Remove loose change, documents, and electronics</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p class="text-yellow-900 text-sm"><span class="font-semibold">Why It Matters:</span> Clean
                            vehicles make pre-existing damage clearly visible, protecting you in case of damage claims
                            during transit.</p>
                    </div>
                </div>

                <!-- Step 2: Remove Personal Items -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:archive-box-x-mark-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 2: Remove Personal Items and
                                Accessories</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        For safety and insurance reasons, personal items should not be left inside the vehicle during
                        transport. Items left in the car could shift during transit, potentially causing damage to the
                        interior or becoming lost or stolen.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-red-50 rounded-lg p-5 border border-red-200">
                            <h3 class="font-bold text-red-900 mb-3">What to Remove:</h3>
                            <ul class="space-y-2 text-sm text-red-800">
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>Electronics (GPS, phone chargers, dash cams)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>Personal belongings from glove box and trunk</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>Important documents, spare change, sunglasses</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>Loose accessories, air fresheners, hanging items</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>Toll tags and automatic payment devices</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-600 font-bold mr-2">✗</span>
                                    <span>External accessories: bike racks, antennas, roof racks</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-green-50 rounded-lg p-5 border border-green-200">
                            <h3 class="font-bold text-green-900 mb-3">What's Allowed:</h3>
                            <ul class="space-y-2 text-sm text-green-800">
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">✓</span>
                                    <span>Spare tire (in designated compartment)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">✓</span>
                                    <span>Jack and tire iron (factory equipment)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-green-600 font-bold mr-2">✓</span>
                                    <span>Factory-installed equipment only</span>
                                </li>
                            </ul>
                            <div class="mt-4 p-3 bg-white rounded border border-green-300">
                                <p class="text-xs text-green-900"><span class="font-semibold">Note:</span> Confirm with
                                    your shipping company about specific policies on emergency items.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                        <p class="text-orange-900 text-sm"><span class="font-semibold">Insurance Warning:</span> Most
                            auto transport companies do not insure personal belongings left inside the car. Remove
                            everything to avoid loss or theft.</p>
                    </div>
                </div>

                <!-- Step 3: Mechanical Checks -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:wrench-screwdriver-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 3: Check for Leaks and Mechanical
                                Issues</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        Ensuring your vehicle is in good mechanical condition before shipping is essential for
                        preventing delays and protecting other cars on the carrier. A leaking vehicle could cause damage
                        during transit.
                    </p>

                    <div class="space-y-4 mb-6">
                        <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                            <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span class="text-blue-600">🔍</span>
                                Checking for Leaks
                            </h3>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Inspect under vehicle for oil, coolant, or transmission fluid leaks</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Look for puddles or damp spots beneath the car</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Top off all fluids: oil, coolant, brake fluid, windshield washer</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                            <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span class="text-blue-600">⚙️</span>
                                Mechanical Inspections
                            </h3>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="space-y-2 text-sm text-gray-700">
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Battery:</span> Fully charged and reliable</span>
                                    </div>
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Brakes:</span> Working properly for
                                            loading/unloading</span>
                                    </div>
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Tires:</span> Properly inflated, no major
                                            wear</span>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-700">
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Engine:</span> Starts and runs smoothly</span>
                                    </div>
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Lights:</span> All lights functioning
                                            properly</span>
                                    </div>
                                    <div class="flex items-start">
                                        <span class="text-blue-600 font-bold mr-2">✓</span>
                                        <span><span class="font-semibold">Steering:</span> No issues or unusual
                                            sounds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                        <p class="text-red-900 text-sm"><span class="font-semibold">Non-Operable Vehicles:</span> If
                            your vehicle has mechanical issues, inform the shipping company in advance. Non-running
                            vehicles require special handling and may incur additional charges of $100-$300.</p>
                    </div>
                </div>

                <!-- Step 4: Fuel Level -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:beaker-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 4: Keep a Quarter Tank of Fuel</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        Your vehicle needs enough fuel for loading and unloading during the transport process, but a
                        full tank adds unnecessary weight which could slightly increase shipping costs.
                    </p>

                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                        <div class="bg-red-50 rounded-lg p-4 border border-red-200 text-center">
                            <div class="text-3xl mb-2">🚫</div>
                            <h4 class="font-bold text-red-900 mb-2">Empty Tank</h4>
                            <p class="text-xs text-red-800">Not enough fuel for loading/unloading operations</p>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4 border-2 border-green-500 text-center">
                            <div class="text-3xl mb-2">✅</div>
                            <h4 class="font-bold text-green-900 mb-2">¼ Tank (Ideal)</h4>
                            <p class="text-xs text-green-800">Perfect balance for operations without excess weight</p>
                        </div>
                        <div class="bg-orange-50 rounded-lg p-4 border border-orange-200 text-center">
                            <div class="text-3xl mb-2">⚠️</div>
                            <h4 class="font-bold text-orange-900 mb-2">Full Tank</h4>
                            <p class="text-xs text-orange-800">Adds unnecessary weight and fuel spill risk</p>
                        </div>
                    </div>

                    <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p class="text-blue-900 text-sm"><span class="font-semibold">Pro Tip:</span> Shipping companies
                            charge based on weight. While fuel weight may not significantly affect cost, keeping it low
                            minimizes the risk of fuel spills during transport.</p>
                    </div>
                </div>

                <!-- Step 5: Disable Alarms -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:bell-slash-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 5: Disable Alarms and Anti-Theft
                                Devices</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        If your vehicle's alarm system goes off during transit, it could cause unnecessary delays and
                        inconvenience for the driver. Disable all alarms and anti-theft devices before shipping.
                    </p>

                    <div class="space-y-4 mb-6">
                        <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                            <span class="text-2xl">🔔</span>
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-1">Turn Off All Alarms</h4>
                                <p class="text-sm text-gray-700">If your vehicle has a security system that activates
                                    with movement or vibrations, ensure it's fully disabled before transport.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                            <span class="text-2xl">🔑</span>
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-1">Keyless Entry Systems</h4>
                                <p class="text-sm text-gray-700">Disable keyless entry systems and remote start features
                                    to prevent accidental activation during transit.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                            <span class="text-2xl">📝</span>
                            <div>
                                <h4 class="font-semibold text-gray-900 mb-1">Provide Instructions</h4>
                                <p class="text-sm text-gray-700">If the alarm is difficult to disable, provide clear
                                    instructions to the driver on how to deactivate it if needed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 6: Document Condition -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:camera-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 6: Document Your Car's Condition</h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        One of the most important steps in preparing your vehicle for shipping is thoroughly documenting
                        its condition. This protects you in case of any damage claims.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-purple-50 rounded-lg p-5 border border-purple-200">
                            <h3 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
                                <UIcon name="heroicons:camera" class="text-purple-600" size="20" />
                                Taking Photos
                            </h3>
                            <ul class="space-y-2 text-sm text-purple-800">
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>Take clear, well-lit photos from multiple angles</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>Include close-ups of any scratches, dents, or paint chips</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>Ensure photos are time-stamped for reference</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>Document interior condition (dashboard, seats, electronics)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-purple-600 font-bold mr-2">•</span>
                                    <span>Capture all four corners, roof, and undercarriage if possible</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                            <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                                <UIcon name="heroicons:document-text" class="text-indigo-600" size="20" />
                                Vehicle Condition Report
                            </h3>
                            <ul class="space-y-2 text-sm text-indigo-800">
                                <li class="flex items-start">
                                    <span class="text-indigo-600 font-bold mr-2">•</span>
                                    <span>Shipping company will perform inspection at pickup</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-indigo-600 font-bold mr-2">•</span>
                                    <span>Condition noted on Bill of Lading (BOL)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-indigo-600 font-bold mr-2">•</span>
                                    <span>BOL acts as receipt for the shipment</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-indigo-600 font-bold mr-2">•</span>
                                    <span>Compare condition at delivery to pre-shipping photos</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-indigo-600 font-bold mr-2">•</span>
                                    <span>Note any discrepancies before signing delivery paperwork</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p class="text-yellow-900 text-sm"><span class="font-semibold">Important:</span> Keep copies of
                            all documentation for your records and insurance purposes. Don't sign the delivery BOL until
                            you've thoroughly inspected your vehicle.</p>
                    </div>
                </div>

                <!-- Step 7: Secure Loose Parts -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
                            <UIcon name="heroicons:shield-check-solid" class="text-blue-600" size="24" />
                        </div>
                        <div class="flex-1">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Step 7: Secure Loose Parts and Accessories
                            </h2>
                        </div>
                    </div>
                    <p class="text-gray-700 leading-relaxed mb-6">
                        Any loose or protruding parts on your vehicle could be damaged during transport or cause damage
                        to other vehicles on the carrier. Secure or remove these parts before shipping.
                    </p>

                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h4 class="font-semibold text-gray-900 mb-3">Items to Secure or Remove:</h4>
                            <div class="space-y-2 text-sm text-gray-700">
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">📡</span>
                                    <span><span class="font-semibold">Antennas:</span> Retract or remove if
                                        possible</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">🪟</span>
                                    <span><span class="font-semibold">Mirrors:</span> Fold in side mirrors</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">🚴</span>
                                    <span><span class="font-semibold">Bike racks:</span> Remove completely</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">🎒</span>
                                    <span><span class="font-semibold">Roof racks:</span> Remove or secure tightly</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">✈️</span>
                                    <span><span class="font-semibold">Spoilers:</span> Ensure securely fastened</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 mr-2">🔧</span>
                                    <span><span class="font-semibold">Custom parts:</span> Remove if detachable</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 class="font-semibold text-blue-900 mb-3">Special Conditions to Communicate:</h4>
                            <div class="space-y-2 text-sm text-blue-800">
                                <div class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Very low clearance vehicles</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Oversized or lifted trucks</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Convertible tops (ensure closed and secured)</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Wide body modifications</span>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-blue-600 font-bold mr-2">•</span>
                                    <span>Custom exhaust systems</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                        <p class="text-orange-900 text-sm"><span class="font-semibold">Note:</span> Special
                            characteristics may require special equipment or cause extra charges. Notify First Line
                            Transport INC ahead of time to ensure proper handling.</p>
                    </div>
                </div>
            </div>

            <!-- Complete Checklist -->
            <div class="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Complete Pre-Shipping Checklist</h2>
                <p class="text-center text-gray-600 mb-8">Print or save this checklist to ensure you don't miss any
                    important steps</p>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-white rounded-xl p-5 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="text-blue-600">📋</span>
                            Before Pickup Day
                        </h3>
                        <div class="space-y-2">
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Wash car inside and out; remove debris</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Take time-stamped photos (exterior, interior, all angles)</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Remove all personal items and valuables</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Remove/secure detachable accessories</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Remove toll tags and EZ passes</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Fuel level at ¼ tank</span>
                            </label>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl p-5 shadow-md">
                        <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="text-green-600">✅</span>
                            Final Checks
                        </h3>
                        <div class="space-y-2">
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Disable alarms and anti-theft systems</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Battery charged, tires inflated, no leaks</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Vehicle operational (or notify if non-operable)</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Notify company of modifications or special features</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Be present (or arrange representative) at pickup</span>
                            </label>
                            <label class="flex items-start gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input type="checkbox" class="mt-1">
                                <span>Retain inspection photos & contract; sign BOL</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Understanding Transport Types -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Understanding Transport Types</h2>
                <p class="text-center text-gray-600 mb-8">Choose the right transport method based on your vehicle and
                    budget</p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-3 rounded-full">
                                <UIcon name="heroicons:truck-solid" class="text-white" size="24" />
                            </div>
                            <h3 class="text-2xl font-bold text-blue-900">Open Transport</h3>
                        </div>
                        <p class="text-blue-800 mb-4 text-sm">Most popular and cost-effective method. Your vehicle is
                            transported on an open trailer along with other vehicles.</p>
                        <div class="space-y-2 mb-4">
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-blue-900">Cost-effective and widely available</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-blue-900">Suitable for standard vehicles</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-blue-900">Faster pickup and delivery times</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-orange-600 font-bold">⚠</span>
                                <span class="text-blue-900">Exposed to weather and road debris</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-orange-600 font-bold">⚠</span>
                                <span class="text-blue-900">Potential for minor cosmetic issues</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-purple-600 p-3 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="24" />
                            </div>
                            <h3 class="text-2xl font-bold text-purple-900">Enclosed Transport</h3>
                        </div>
                        <p class="text-purple-800 mb-4 text-sm">Premium protection for luxury, classic, or high-value
                            vehicles. Transported inside a fully covered trailer.</p>
                        <div class="space-y-2 mb-4">
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-purple-900">Complete weather protection</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-purple-900">Enhanced security and privacy</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-green-600 font-bold">✓</span>
                                <span class="text-purple-900">Perfect for luxury/classic cars</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-orange-600 font-bold">⚠</span>
                                <span class="text-purple-900">30-60% more expensive</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm">
                                <span class="text-orange-600 font-bold">⚠</span>
                                <span class="text-purple-900">Less widely available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bill of Lading -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                        <UIcon name="heroicons:document-check-solid" class="text-indigo-600" size="24" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Understanding the Bill of Lading (BOL)</h2>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-6">
                    The Bill of Lading is one of the most important documents in the car shipping process. It serves as
                    both a contract and a receipt for your vehicle's transportation.
                </p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                        <h3 class="font-bold text-gray-900 mb-3">What the BOL Includes:</h3>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">•</span>
                                <span>Pick-up and delivery addresses</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">•</span>
                                <span>Vehicle condition before shipping</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">•</span>
                                <span>Special instructions for the driver</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">•</span>
                                <span>Inspection report with pre-existing damage</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">•</span>
                                <span>Signatures from both parties</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                        <h3 class="font-bold text-indigo-900 mb-3">Important BOL Tips:</h3>
                        <ul class="space-y-2 text-sm text-indigo-800">
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">✓</span>
                                <span>Review carefully before signing</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">✓</span>
                                <span>Ensure all damage is documented</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">✓</span>
                                <span>Keep a copy for your records</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">✓</span>
                                <span>Compare at delivery to pickup condition</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 font-bold mr-2">✓</span>
                                <span>Note any new damage before signing delivery BOL</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Pickup and Delivery Day -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Pickup & Delivery Day Preparation</h2>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-green-50 rounded-xl p-6 border border-green-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:arrow-up-tray-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="text-xl font-bold text-green-900">Pickup Day Checklist</h3>
                        </div>
                        <ul class="space-y-3 text-sm text-green-800">
                            <li class="flex items-start gap-2">
                                <span class="text-green-600 font-bold">1.</span>
                                <span><span class="font-semibold">Be On Time:</span> Be available at scheduled pickup or
                                    have trusted representative present</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-600 font-bold">2.</span>
                                <span><span class="font-semibold">Have BOL Ready:</span> Review with driver and ensure
                                    all damage is documented</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-600 font-bold">3.</span>
                                <span><span class="font-semibold">Verify Contact Info:</span> Confirm delivery location
                                    details and contact numbers</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-600 font-bold">4.</span>
                                <span><span class="font-semibold">Hand Over Keys:</span> Provide only necessary keys (no
                                    house keys or other items)</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-600 font-bold">5.</span>
                                <span><span class="font-semibold">Take Final Photos:</span> Document vehicle condition
                                    just before loading</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:arrow-down-tray-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="text-xl font-bold text-blue-900">Delivery Day Checklist</h3>
                        </div>
                        <ul class="space-y-3 text-sm text-blue-800">
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">1.</span>
                                <span><span class="font-semibold">Be Present:</span> If possible, be there in person for
                                    vehicle inspection</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">2.</span>
                                <span><span class="font-semibold">Inspect Thoroughly:</span> Use pre-shipping photos and
                                    BOL to check for damage</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">3.</span>
                                <span><span class="font-semibold">Check All Areas:</span> Look for scratches, dents, or
                                    mechanical issues</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">4.</span>
                                <span><span class="font-semibold">Test Vehicle:</span> Start engine, check lights, test
                                    brakes if possible</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">5.</span>
                                <span><span class="font-semibold">Sign BOL:</span> Only after confirming condition. Note
                                    any damage immediately</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Why Proper Preparation Matters -->
            <div class="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Why Proper Preparation Matters</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="text-4xl mb-3 text-center">🛡️</div>
                        <h3 class="font-bold text-gray-900 mb-2 text-center">Reduces Risk</h3>
                        <p class="text-sm text-gray-700 text-center">Proper preparation minimizes the risk of damage and
                            misunderstandings, leading to fewer claims and smoother operations.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="text-4xl mb-3 text-center">🤝</div>
                        <h3 class="font-bold text-gray-900 mb-2 text-center">Builds Trust</h3>
                        <p class="text-sm text-gray-700 text-center">When you follow proper procedures, you feel safer
                            and more confident in the shipping service and process.</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-md">
                        <div class="text-4xl mb-3 text-center">💰</div>
                        <h3 class="font-bold text-gray-900 mb-2 text-center">Avoids Extra Costs</h3>
                        <p class="text-sm text-gray-700 text-center">Cleaning, removing items, and confirming access
                            reduces chances of complications and additional fees on loading day.</p>
                    </div>
                </div>
            </div>

            <!-- First Line Transport Support -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">First Line Transport INC Preparation Support</h2>
                    <p class="text-lg text-gray-600">We guide you through every step of the preparation process</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-blue-600 p-2 rounded-full">
                                <UIcon name="heroicons:document-text-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-blue-900 text-lg">Detailed Preparation Guide</h3>
                        </div>
                        <p class="text-blue-800 text-sm mb-3">We provide every customer with a comprehensive
                            pre-shipping checklist and preparation guide to ensure nothing is missed.</p>
                        <ul class="space-y-1 text-sm text-blue-800">
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Downloadable PDF checklist</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Email reminders before pickup</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-600 mr-2">•</span>
                                <span>Step-by-step video tutorials</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-green-600 p-2 rounded-full">
                                <UIcon name="heroicons:phone-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-green-900 text-lg">Expert Consultation</h3>
                        </div>
                        <p class="text-green-800 text-sm mb-3">Our team is available 24/7 to answer questions about
                            preparing your vehicle and address any concerns you may have.</p>
                        <ul class="space-y-1 text-sm text-green-800">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>24/7 customer support</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Dedicated preparation specialists</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">•</span>
                                <span>Pre-pickup confirmation calls</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-purple-600 p-2 rounded-full">
                                <UIcon name="heroicons:camera-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-purple-900 text-lg">Professional Documentation</h3>
                        </div>
                        <p class="text-purple-800 text-sm mb-3">We conduct thorough inspections and provide detailed
                            documentation at both pickup and delivery for your protection.</p>
                        <ul class="space-y-1 text-sm text-purple-800">
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Detailed condition reports</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Photo documentation included</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">•</span>
                                <span>Digital BOL copies provided</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div class="flex items-start gap-3 mb-3">
                            <div class="bg-orange-600 p-2 rounded-full">
                                <UIcon name="heroicons:shield-check-solid" class="text-white" size="20" />
                            </div>
                            <h3 class="font-bold text-orange-900 text-lg">Transparent Process</h3>
                        </div>
                        <p class="text-orange-800 text-sm mb-3">Clear communication about what to expect at every stage,
                            from preparation through delivery, with no surprises.</p>
                        <ul class="space-y-1 text-sm text-orange-800">
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Clear timeline expectations</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Real-time tracking updates</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-orange-600 mr-2">•</span>
                                <span>Proactive communication</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <p class="text-blue-900 text-center"><span class="font-bold">Our Commitment:</span> At First Line
                        Transport INC, we believe proper preparation is the foundation of successful vehicle shipping.
                        We're here to support you every step of the way.</p>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                
                <div class="space-y-6">
                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What should I remove from my car before shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Remove all personal items, electronics, important documents, loose accessories, toll tags, and anything not permanently attached to the vehicle. Most transport companies do not insure personal belongings left inside the car.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">How much fuel should I leave in my car for shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Keep your fuel tank at 1/4 full. This provides enough fuel for loading and unloading operations without adding unnecessary weight or creating spill risks during transport.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Why do I need to clean my car before shipping?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Cleaning your car makes pre-existing damage clearly visible during the inspection process. This protects you in case of damage claims and ensures accurate documentation on the Bill of Lading.</p>
                        </div>
                    </div>

                    <div class="border-b border-gray-200 pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">Do I need to be present during pickup and delivery?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">Yes, you or an authorized representative must be present during both pickup and delivery to conduct vehicle inspections, sign the Bill of Lading, and handle keys. This ensures proper documentation and protects your interests.</p>
                        </div>
                    </div>

                    <div class="pb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-xl font-bold text-gray-900 mb-3" itemprop="name">What happens if my car has mechanical problems?</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p class="text-gray-700" itemprop="text">If your vehicle has mechanical issues or is non-operable, inform the shipping company in advance. Non-running vehicles require special handling equipment and may incur additional charges of $100-$300.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Articles -->
            <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Related Auto Transport Guides</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Common Shipping Mistakes</h3>
                        <p class="text-gray-700 mb-4">Learn about the top car shipping mistakes and how proper preparation can help you avoid costly errors and delays.</p>
                        <NuxtLink to="/blogs/mistakes" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Read Mistakes Guide →
                        </NuxtLink>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Open Transport Service</h3>
                        <p class="text-gray-700 mb-4">Discover our most popular transport method and learn how proper preparation ensures smooth open transport service.</p>
                        <NuxtLink to="/blogs/open" class="text-blue-600 hover:text-blue-800 font-semibold underline" rel="bookmark">
                            Explore Open Transport →
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Final CTA -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Get your free preparation checklist and expert guidance from our team. We'll help you prepare your
                    vehicle for a smooth, worry-free transport experience.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="openModal()"
                        class="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-lg">
                        Get Free Quote
                    </button>
                    <button @click="openModal()"
                        class="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer font-semibold border-2 border-white/30 text-lg">
                        Download Checklist
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-6">Expert preparation support • 24/7 assistance • No hidden fees</p>
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
    title: 'How to Prepare Your Vehicle for Shipping - Complete Guide | First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Complete step-by-step guide to preparing your car for transport. Learn essential preparation steps, checklist, and best practices for smooth vehicle shipping.'
        },
        {
            name: 'keywords',
            content: 'prepare car for shipping, vehicle preparation checklist, car transport preparation, auto shipping preparation, vehicle shipping guide'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'First Line Transport INC' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/blogs/prepare' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta
useSeoMeta({
    ogTitle: 'How to Prepare Your Vehicle for Shipping - Complete Guide',
    ogDescription: 'Complete step-by-step guide to preparing your car for transport. Learn essential preparation steps, checklist, and best practices for smooth vehicle shipping.',
    ogUrl: 'https://fltransportinc.com/blogs/prepare',
    ogImage: 'https://fltransportinc.com/prep.webp',
    ogType: 'article',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: 'How to Prepare Your Vehicle for Shipping - Complete Guide',
    twitterDescription: 'Complete step-by-step guide to preparing your car for transport. Essential preparation steps and checklist.',
    twitterImage: 'https://fltransportinc.com/prep.webp'
})

// Structured Data - Article Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Prepare Your Vehicle for Shipping - Complete Guide',
    description: 'Comprehensive step-by-step guide to preparing your vehicle for transport including cleaning, documentation, mechanical checks, and preparation checklist.',
    image: 'https://fltransportinc.com/prep.webp',
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
            name: 'Vehicle Preparation Guide',
            item: 'https://fltransportinc.com/blogs/prepare'
        }
    ]
})

// How-To Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Prepare Your Vehicle for Shipping',
    description: 'Step-by-step guide to preparing your car for transport',
    totalTime: 'PT2H',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Clean Your Car Thoroughly',
            text: 'Wash car inside and out, remove all dirt and debris to make pre-existing damage clearly visible for inspection.'
        },
        {
            '@type': 'HowToStep',
            name: 'Remove Personal Items',
            text: 'Remove all personal belongings, electronics, and loose accessories from the vehicle for safety and insurance reasons.'
        },
        {
            '@type': 'HowToStep',
            name: 'Check for Mechanical Issues',
            text: 'Inspect for leaks, ensure battery is charged, check tire pressure, and verify all fluids are topped off.'
        },
        {
            '@type': 'HowToStep',
            name: 'Maintain Quarter Tank Fuel',
            text: 'Keep fuel level at 1/4 tank - enough for loading/unloading operations without excess weight.'
        },
        {
            '@type': 'HowToStep',
            name: 'Disable Alarms',
            text: 'Turn off all car alarms and anti-theft devices to prevent activation during transport.'
        },
        {
            '@type': 'HowToStep',
            name: 'Document Vehicle Condition',
            text: 'Take time-stamped photos from all angles and document any existing damage for insurance purposes.'
        },
        {
            '@type': 'HowToStep',
            name: 'Secure Loose Parts',
            text: 'Remove or secure any loose accessories, antennas, or custom parts that could be damaged during transport.'
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
            name: 'What should I remove from my car before shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Remove all personal items, electronics, important documents, loose accessories, toll tags, and anything not permanently attached to the vehicle. Most transport companies do not insure personal belongings.'
            }
        },
        {
            '@type': 'Question',
            name: 'How much fuel should I leave in my car for shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Keep your fuel tank at 1/4 full. This provides enough fuel for loading and unloading operations without adding unnecessary weight or creating spill risks during transport.'
            }
        },
        {
            '@type': 'Question',
            name: 'Why do I need to clean my car before shipping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cleaning your car makes pre-existing damage clearly visible during the inspection process. This protects you in case of damage claims and ensures accurate documentation on the Bill of Lading.'
            }
        }
    ]
})
</script>
