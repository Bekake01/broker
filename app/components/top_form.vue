<template>
    <div
        class="backdrop-blur-md bg-gray-50/55 rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg border border-gray-300 p-4 sm:p-6 md:p-8">
        <!-- Step Header -->
        <h2 class="text-xl sm:text-2xl md:text-3xl text-center font-bold text-gray-900 mb-3">
            {{ stepHeaders[currentStep - 1] }}
        </h2>

        <!-- Progress Bar -->
        <div class="mb-6 md:mb-7">
            <div class="h-2 bg-gray-300/50 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-300 rounded-full transition-all duration-300"
                    :style="{ width: `${(currentStep / 3) * 100}%` }"></div>
            </div>
        </div>

        <!-- Step 1: Locations -->
        <div v-if="currentStep === 1">
            <UForm :schema="step1Schema" :state="state" @submit="nextStep" class="space-y-4">
                <UFormField name="from_location" label="Pick-up Location" class="w-full">
                    <USelectMenu v-model="state.from_location" v-model:search-term="fromSearchTerm"
                        :items="fromLocations" :search-input="{ placeholder: 'Type city name...' }" label-key="display"
                        size="lg" class="w-full" />
                </UFormField>

                <UFormField name="to_location" label="Delivery Location" class="w-full">
                    <USelectMenu v-model="state.to_location" v-model:search-term="toSearchTerm" :items="toLocations"
                        :search-input="{ placeholder: 'Type city name...' }" label-key="display" size="lg"
                        class="w-full" />
                </UFormField>

                <UButton type="submit" size="lg" block class="mt-2">
                    Continue to Vehicle Details
                </UButton>
            </UForm>
        </div>

        <!-- Step 2: Vehicle Details -->
        <div v-if="currentStep === 2">
            <UForm :schema="vehicleSchema" :state="currentVehicle" class="space-y-4">
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
            <UForm :schema="step3Schema" :state="state" @submit="submitForm" class="space-y-4">
                <UFormField name="type" label="Trailer Type">
                    <URadioGroup v-model="state.type" :items="['Open', 'Enclosed']" size="lg"
                        orientation="horizontal" />
                </UFormField>

                <UFormField name="ship_date" label="Preferred Ship Date" class="w-full">
                    <UInput v-model="state.ship_date" type="date" size="lg" class="w-full" />
                </UFormField>

                <UFormField name="email" label="Email" class="w-full">
                    <UInput v-model="state.email" type="email" size="lg" class="w-full" autocomplete="on" />
                </UFormField>
                <div class="flex gap-3">
                    <UButton type="submit" size="lg" block>
                        Get Instant Quote
                    </UButton>
                </div>
            </UForm>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as z from 'zod'
import { suggestCities } from '@/composables/useCities'

interface CityOption {
    display: string
    name: string
    stateCode?: string
}

interface Vehicle {
    vehicle_year: number
    vehicle_type: string
    vehicle_model: string
    inop: boolean
}

interface FormState {
    from_location: CityOption | undefined
    to_location: CityOption | undefined
    ship_date: string
    type: string
    email: string
}

// Step headers
const stepHeaders = [
    'Where are you shipping?',
    'Tell us about your vehicle(s)',
    'Shipping preferences'
]

// Current step
const currentStep = ref(1)

// Step 1 Schema - Locations
const step1Schema = z.object({
    from_location: z.object({
        display: z.string(),
        name: z.string(),
        stateCode: z.string().optional()
    }).refine(val => val !== undefined, 'Pick-up location is required'),
    to_location: z.object({
        display: z.string(),
        name: z.string(),
        stateCode: z.string().optional()
    }).refine(val => val !== undefined, 'Delivery location is required')
})

// Vehicle Schema
const vehicleSchema = z.object({
    vehicle_year: z.number().min(1900, 'Valid year required'),
    vehicle_type: z.string().min(1, 'Vehicle make is required'),
    vehicle_model: z.string().min(1, 'Vehicle model is required'),
    inop: z.boolean().default(false)
})

// Step 2 Schema - Vehicle Details (array)
const step2Schema = z.object({
    vehicles: z.array(vehicleSchema).min(1, 'At least one vehicle is required')
})

// Step 3 Schema - Shipping Details
const step3Schema = z.object({
    ship_date: z.string().min(1, 'Ship date is required'),
    type: z.string().min(1, 'Trailer type is required'),
    email: z.string().email('Valid email is required')
})

// Main form state
const state = reactive<FormState>({
    from_location: undefined,
    to_location: undefined,
    ship_date: '',
    type: 'Open',
    email: ''
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

// Computed filtered items for from location
const fromLocations = computed<CityOption[]>(() => {
    const input = fromSearchTerm.value.trim()
    if (input === '') {
        return []
    }
    const suggestions = suggestCities(input, 20)
    return suggestions.map(s => ({
        name: s.name,
        stateCode: s.stateCode,
        display: s.stateCode ? `${s.name}, ${s.stateCode}` : s.name
    }))
})

// Computed filtered items for to location
const toLocations = computed<CityOption[]>(() => {
    const input = toSearchTerm.value.trim()
    if (input === '') {
        return []
    }
    const suggestions = suggestCities(input, 20)
    return suggestions.map(s => ({
        name: s.name,
        stateCode: s.stateCode,
        display: s.stateCode ? `${s.name}, ${s.stateCode}` : s.name
    }))
})

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
    if (currentStep.value < 3) {
        currentStep.value++
    }
}

// Navigate to previous step
function prevStep() {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

// Final form submission
async function submitForm() {
    const { success } = step3Schema.safeParse(state)
    if (success && vehicles.value.length > 0) {
        const formData = {
            ...state,
            vehicles: vehicles.value
        }
        console.log('Form submitted:', formData)
        // Handle form submission - send to API, etc.
    }
}
</script>