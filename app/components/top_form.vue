<template>
    <div
        class="backdrop-blur-md bg-gray-50/75 rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg border border-gray-300 p-4 sm:p-5 lg:p-6">
        <!-- Step Header -->
        <h2 class="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-gray-900 mb-2 sm:mb-3">
            {{ stepHeaders[currentStep - 1] }}
        </h2>

        <!-- Progress Bar -->
        <div class="mb-4 sm:mb-5 lg:mb-6">
            <div class="h-2 bg-gray-300/50 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-300 rounded-full transition-all duration-300"
                    :style="{ width: `${(currentStep / 4) * 100}%` }"></div>
            </div>
        </div>

        <!-- Step 1: Locations -->
        <div v-if="currentStep === 1">
            <UForm :schema="step1Schema" :state="state" @submit="nextStep" class="space-y-3 sm:space-y-4">
                <UFormField name="from_location" label="Pick-up Location(zip or city name)" class="w-full">
                    <div class="relative">
                        <USelectMenu v-if="!showFromInput" v-model="selectedFromLocation"
                            v-model:search-term="fromSearchTerm" :items="fromLocations"
                            :search-input="{ placeholder: 'Type city name or zip...' }" label-key="display" size="lg"
                            class="w-full" @update:search-term="handleFromSearchChange" />
                        <div v-else class="space-y-2">
                            <div class="flex gap-2">
                                <UInput v-model="fromSearchTerm" placeholder="Enter custom location..." size="lg"
                                    class="flex-1" @input="handleFromInputChange" />
                                <UButton @click="resetFromSearch" variant="outline" size="lg" icon="i-lucide-search">
                                    Search
                                </UButton>
                            </div>
                            <p class="text-xs text-gray-500">No matching cities found. Using custom location.</p>
                        </div>
                    </div>
                </UFormField>

                <UFormField name="to_location" label="Delivery Location(zip or city name)" class="w-full">
                    <div class="relative">
                        <USelectMenu v-if="!showToInput" v-model="selectedToLocation" v-model:search-term="toSearchTerm"
                            :items="toLocations" :search-input="{ placeholder: 'Type city name or zip...' }"
                            label-key="display" size="lg" class="w-full" @update:search-term="handleToSearchChange" />
                        <div v-else class="space-y-2">
                            <div class="flex gap-2">
                                <UInput v-model="toSearchTerm" placeholder="Enter custom location..." size="lg"
                                    class="flex-1" @input="handleToInputChange" />
                                <UButton @click="resetToSearch" variant="outline" size="lg" icon="i-lucide-search">
                                    Search
                                </UButton>
                            </div>
                            <p class="text-xs text-gray-500">No matching cities found. Using custom location.</p>
                        </div>
                    </div>
                </UFormField>

                <UButton type="submit" size="lg" block class="mt-2">
                    Continue to Vehicle Details
                </UButton>
            </UForm>
        </div>

        <!-- Step 2: Vehicle Details -->
        <div v-if="currentStep === 2">
            <UForm :schema="vehicleSchema" :state="currentVehicle" class="space-y-3 sm:space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UFormField name="vehicle_year" label="Year" class="w-full">
                        <UInputNumber v-model="currentVehicle.vehicle_year" placeholder="2024" size="lg"
                            orientation="vertical" :format-options="{ useGrouping: false }" class="w-full" />
                    </UFormField>

                    <UFormField name="vehicle_type" label="Make" class="w-full">
                        <UInput v-model="currentVehicle.vehicle_type" placeholder="Toyota" size="lg" class="w-full" />
                    </UFormField>

                    <UFormField name="vehicle_model" label="Model" class="w-full">
                        <UInput v-model="currentVehicle.vehicle_model" placeholder="Camry" size="lg" class="w-full" />
                    </UFormField>
                    <UFormField name="inop" label="Vehicle is Inoperable (INOP)"
                        class="w-full flex flex-col sm:items-center">
                        <UCheckbox v-model="currentVehicle.inop" />
                    </UFormField>
                </div>

                <div v-if="vehicles.length > 0" class="mt-6 space-y-3">
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900">Added Vehicles ({{ vehicles.length }})</h3>
                    </div>
                    <div v-for="(vehicle, index) in vehicles" :key="index"
                        class="flex items-center justify-between bg-white/60 rounded-lg pl-4 py-1.5 border border-gray-200">
                        <div>
                            <p class="font-medium text-gray-900">
                                {{ vehicle.vehicle_type }} {{ vehicle.vehicle_model }}
                            </p>
                        </div>
                        <UButton color="error" variant="ghost" size="xl" @click="removeVehicle(index)"
                            icon="jam:delete-f" />
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <UButton @click="addVehicle" color="success" size="lg" variant="outline"
                        class="mt-4 w-full sm:w-[180px] " block>
                        Add Vehicle
                    </UButton>
                    <UButton @click="nextStep" size="lg" block class="mt-4" icon="i-lucide-rocket">
                        Shipping Details
                    </UButton>
                </div>
            </UForm>

            <!-- Display Added Vehicles -->
        </div>

        <!-- Step 3: Shipping Details -->
        <div v-if="currentStep === 3">
            <UForm :schema="shippingSchema" :state="state" @submit="nextStep" class="space-y-3 sm:space-y-4">
                <UFormField name="type" label="Trailer Type">
                    <URadioGroup v-model="state.type" :items="['Open', 'Enclosed']" size="lg"
                        orientation="horizontal" />
                </UFormField>

                <UFormField name="ship_date" label="Preferred Ship Date" class="w-full">
                    <UInput v-model="state.ship_date" type="date" size="lg" class="w-full" />
                </UFormField>

                <div class="flex gap-3">
                    <UButton type="submit" size="lg" block>
                        Continue to Contact Info
                    </UButton>
                </div>
            </UForm>
        </div>

        <!-- Step 4: Contact Information -->
        <div v-if="currentStep === 4 && !showSuccess">
            <UForm :schema="contactSchema" :state="state" @submit="submitForm" class="space-y-3 sm:space-y-4">
                <UFormField name="full_name" label="Full Name" class="w-full">
                    <UInput v-model="state.full_name" type="text" size="lg" class="w-full"
                        placeholder="Enter your full name" />
                </UFormField>

                <UFormField name="email" label="Email" class="w-full">
                    <UInput v-model="state.email" type="email" size="lg" class="w-full" autocomplete="on" />
                </UFormField>

                <UFormField name="phone" label="Phone Number" class="w-full">
                    <UInput v-model="state.phone" v-maska="{ mask: '+1 (###) ###-####' }" size="lg" class="w-full"
                        placeholder="(555) 123-4567" autocomplete="tel" />
                </UFormField>

                <!-- Terms and Privacy Disclaimer -->
                <TermCondition />

                <div class="pt-4">
                    <UCheckbox v-model="termsAccepted"
                        label="I agree to receive calls/messages and accept the terms & conditions" required />
                </div>

                <div class="flex gap-3">
                    <UButton type="submit" size="lg" block :loading="isSubmitting"
                        :disabled="!termsAccepted || isSubmitting" icon="i-lucide-send">
                        {{ isSubmitting ? 'Submitting...' : 'Get Instant Quote' }}
                    </UButton>
                </div>
            </UForm>
        </div>

        <!-- Success State -->
        <div v-if="showSuccess" class="text-center py-8">
            <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <UIcon name="i-lucide-check" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Quote Request Submitted!</h3>
            <p class="text-gray-600 mb-6">We'll get back to you with a quote within 24 hours.</p>
            <div class="text-sm text-gray-500">
                Redirecting to form in {{ countdown }} seconds...
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as z from 'zod'
import { useCitySearch } from '@/composables/useCitySearch'
import { vMaska } from "maska/vue"

interface CityOption {
    zip: string
    city: string
    state_id: string
    county_name: string
    display: string
}

interface Vehicle {
    vehicle_year: number
    vehicle_type: string
    vehicle_model: string
    inop: boolean
}

interface FormState {
    from_location: CityOption | string | undefined
    to_location: CityOption | string | undefined
    ship_date: string
    type: string
    email: string
    phone: string
    full_name: string
}

// Step headers
const stepHeaders = [
    'Locations',
    'Tell us about your vehicle(s)',
    'Shipping preferences',
    'Contact Information'
]

// Current step
const currentStep = ref(1)

// Form submission state
const isSubmitting = ref(false)
const showSuccess = ref(false)
const countdown = ref(5)
const termsAccepted = ref(false)

// Step 1 Schema - Locations
const step1Schema = z.object({
    from_location: z.union([
        z.object({
            zip: z.string(),
            city: z.string(),
            state_id: z.string(),
            county_name: z.string(),
            display: z.string()
        }),
        z.string().min(1, 'Pick-up location is required')
    ]).refine(val => val !== undefined, 'Pick-up location is required'),
    to_location: z.union([
        z.object({
            zip: z.string(),
            city: z.string(),
            state_id: z.string(),
            county_name: z.string(),
            display: z.string()
        }),
        z.string().min(1, 'Delivery location is required')
    ]).refine(val => val !== undefined, 'Delivery location is required')
})

// Vehicle Schema
const vehicleSchema = z.object({
    vehicle_year: z.number().min(1900, 'Valid year required'),
    vehicle_type: z.string().min(1, 'Vehicle make is required'),
    vehicle_model: z.string().min(1, 'Vehicle model is required'),
    inop: z.boolean().default(false)
})



// Step 3 Schema - Shipping Details
const shippingSchema = z.object({
    ship_date: z.string().min(1, 'Ship date is required'),
    type: z.string().min(1, 'Trailer type is required')
})

// Step 4 Schema - Contact Information
const contactSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Valid email is required'),
    phone: z.string().min(10, 'Valid phone number is required').regex(/^[\d\s\-\(\)\+\.]+$/, 'Invalid phone number format'),
    full_name: z.string().min(1, 'Full name is required')
})

// Main form state
const state = reactive<FormState>({
    from_location: undefined,
    to_location: undefined,
    ship_date: '',
    type: 'Open',
    email: '',
    phone: '',
    full_name: ''
})

// Current vehicle being added
const currentVehicle = reactive<Vehicle>({
    vehicle_year: 2025,
    vehicle_type: '',
    vehicle_model: '',
    inop: false
})

// List of added vehicles
const vehicles = ref<Vehicle[]>([])

// Search terms for location fields
const fromSearchTerm = ref('')
const toSearchTerm = ref('')

// City search composable
const { debouncedSearch } = useCitySearch()

// Reactive arrays for search results
const fromLocations = ref<CityOption[]>([])
const toLocations = ref<CityOption[]>([])

// Flags to determine if we should show input instead of select
const showFromInput = ref(false)
const showToInput = ref(false)

// Computed properties for select menu models (only CityOption type)
const selectedFromLocation = computed({
    get: () => typeof state.from_location === 'object' ? state.from_location : undefined,
    set: (value: CityOption | undefined) => {
        state.from_location = value
    }
})

const selectedToLocation = computed({
    get: () => typeof state.to_location === 'object' ? state.to_location : undefined,
    set: (value: CityOption | undefined) => {
        state.to_location = value
    }
})

// Watch for changes in search terms and fetch results
watch(fromSearchTerm, async (newTerm) => {
    if (newTerm && newTerm.length >= 2) {
        const results = await debouncedSearch(newTerm, 15)
        fromLocations.value = results

        // If no results found and user has typed enough, show input
        if (results.length === 0 && newTerm.length >= 3) {
            showFromInput.value = true
            state.from_location = newTerm
        } else {
            showFromInput.value = false
        }
    } else {
        fromLocations.value = []
        showFromInput.value = false
    }
})

watch(toSearchTerm, async (newTerm) => {
    if (newTerm && newTerm.length >= 2) {
        const results = await debouncedSearch(newTerm, 15)
        toLocations.value = results

        // If no results found and user has typed enough, show input
        if (results.length === 0 && newTerm.length >= 3) {
            showToInput.value = true
            state.to_location = newTerm
        } else {
            showToInput.value = false
        }
    } else {
        toLocations.value = []
        showToInput.value = false
    }
})

// Watch for when user selects an option to reset input mode
watch(() => state.from_location, (newValue) => {
    if (newValue && typeof newValue === 'object') {
        showFromInput.value = false
    }
})

watch(() => state.to_location, (newValue) => {
    if (newValue && typeof newValue === 'object') {
        showToInput.value = false
    }
})

// Handle search term changes for from location
function handleFromSearchChange(term: string) {
    fromSearchTerm.value = term
}

// Handle search term changes for to location  
function handleToSearchChange(term: string) {
    toSearchTerm.value = term
}

// Handle input changes for custom from location
function handleFromInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    fromSearchTerm.value = target.value
    state.from_location = target.value
}

// Handle input changes for custom to location
function handleToInputChange(event: Event) {
    const target = event.target as HTMLInputElement
    toSearchTerm.value = target.value
    state.to_location = target.value
}

// Reset from location search to show select menu again
function resetFromSearch() {
    showFromInput.value = false
    fromSearchTerm.value = ''
    state.from_location = undefined
}

// Reset to location search to show select menu again
function resetToSearch() {
    showToInput.value = false
    toSearchTerm.value = ''
    state.to_location = undefined
}

// Add vehicle to list
function addVehicle() {
    const { success } = vehicleSchema.safeParse(currentVehicle)
    if (success) {
        vehicles.value.push({ ...currentVehicle })
        currentVehicle.vehicle_year = 2025
        currentVehicle.vehicle_type = ''
        currentVehicle.vehicle_model = ''
        currentVehicle.inop = false
    }
}

// Remove vehicle from list
function removeVehicle(index: number) {
    vehicles.value.splice(index, 1)
}

// Navigate to next step
function nextStep() {
    // Validate vehicles array before moving to step 3
    if (currentStep.value === 2) {
        const { success } = vehicleSchema.safeParse(currentVehicle)
        if (!success) {
            return
        }
        vehicles.value.push({ ...currentVehicle })
        currentVehicle.vehicle_year = 2025
        currentVehicle.vehicle_type = ''
        currentVehicle.vehicle_model = ''
        currentVehicle.inop = false
    }
    if (currentStep.value < 4) {
        currentStep.value++
    }
}



// Final form submission
async function submitForm() {
    const { success } = contactSchema.safeParse(state)
    if (!success || vehicles.value.length === 0) return

    isSubmitting.value = true

    const formData = {
        ...state,
        from_location: state.from_location,
        to_location: state.to_location,
        vehicles: vehicles.value
    }

    try {
        const response = await $fetch('/api/submit', {
            method: 'POST',
            body: formData
        })

        if (response.status === 'success') {
            showSuccess.value = true
            startCountdown()
        }
    } catch (error) {
        console.error('Form submission error:', error)
        // You can add error handling here
    } finally {
        isSubmitting.value = false
    }
}

// Start countdown and reset form
function startCountdown() {
    countdown.value = 5
    const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
            clearInterval(timer)
            resetForm()
        }
    }, 1000)
}

// Reset form to initial state
function resetForm() {
    currentStep.value = 1
    showSuccess.value = false
    isSubmitting.value = false
    countdown.value = 5
    termsAccepted.value = false

    // Reset form state
    state.from_location = undefined
    state.to_location = undefined
    state.ship_date = ''
    state.type = 'Open'
    state.email = ''
    state.phone = ''
    state.full_name = ''

    // Reset vehicle state
    currentVehicle.vehicle_year = 2025
    currentVehicle.vehicle_type = ''
    currentVehicle.vehicle_model = ''
    currentVehicle.inop = false
    vehicles.value = []

    // Reset search state
    fromSearchTerm.value = ''
    toSearchTerm.value = ''
    fromLocations.value = []
    toLocations.value = []
    showFromInput.value = false
    showToInput.value = false
}
</script>