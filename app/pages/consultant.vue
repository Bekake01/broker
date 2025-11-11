<template>
    <div class="min-h-screen relative">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/anback.jpg')">
            <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 min-h-screen flex flex-col">
            <!-- Header with Logo -->
            <div class="flex justify-center pt-8 pb-4">
                <NuxtImg src="/logo.png" alt="First Line Transport INC Logo" 
                    class="h-16 w-auto" />
            </div>

            <!-- Main Content -->
            <div class="flex-1 flex items-center justify-center px-4 py-8">
                <div class="w-full max-w-2xl">
                    <!-- Form Container -->
                    <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                        <div class="text-center mb-8">
                            <h1 class="text-3xl font-bold text-gray-900 mb-2">
                                Speak with a Transport Consultant
                            </h1>
                            <p class="text-gray-600">
                                Get expert advice and personalized assistance for your auto transport needs
                            </p>
                        </div>

                        <!-- Contact Form -->
                        <div v-if="!showSuccess" class="space-y-6">
                            <UForm :schema="consultantSchema" :state="state" @submit="submitForm" class="space-y-4">
                                <UFormField name="full_name" label="Full Name" class="w-full" required>
                                    <UInput v-model="state.full_name" type="text" size="lg" class="w-full"
                                        placeholder="Enter your full name" />
                                </UFormField>

                                <UFormField name="email" label="Email" class="w-full">
                                    <UInput v-model="state.email" type="email" size="lg" class="w-full"
                                        autocomplete="on" placeholder="your.email@example.com" />
                                </UFormField>

                                <UFormField name="phone" label="Phone Number" class="w-full" required>
                                    <UInput v-model="state.phone" v-maska="{ mask: '+1 (###) ###-####' }" size="lg"
                                        class="w-full" placeholder="(555) 123-4567" autocomplete="tel" />
                                </UFormField>

                                <UFormField name="description" label="How can we help you?" class="w-full">
                                    <UTextarea v-model="state.description" size="lg" class="w-full" :rows="4"
                                        placeholder="Tell us about your transport needs, questions, or concerns..." />
                                </UFormField>

                                <TermCondition />

                                <div class="pt-4">
                                    <UCheckbox v-model="termsAccepted"
                                        label="I agree to receive calls/messages and accept the terms & conditions"
                                        required />
                                </div>

                                <UButton type="submit" size="lg" block :loading="isSubmitting"
                                    :disabled="isSubmitting" icon="i-lucide-send">
                                    {{ isSubmitting ? 'Sending...' : 'Contact Consultant' }}
                                </UButton>
                            </UForm>
                        </div>

                        <!-- Success State -->
                        <div v-if="showSuccess" class="text-center py-8">
                            <div
                                class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <UIcon name="i-lucide-check" class="w-8 h-8 text-green-600" />
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                            <p class="text-gray-600 mb-6">A transport consultant will contact you within 24 hours.</p>
                            <div class="flex flex-col sm:flex-row gap-3 justify-center">
                                <UButton @click="resetForm" size="lg">
                                    Send Another Message
                                </UButton>
                                <UButton @click="$router.push('/')" variant="outline" size="lg">
                                    Back to Home
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { vMaska } from "maska/vue"

// SEO Meta Tags
useHead({
    title: 'Speak with Transport Consultant - First Line Transport INC',
    meta: [
        {
            name: 'description',
            content: 'Get expert advice from our transport consultants. Personalized assistance for all your auto transport needs and questions.'
        },
        {
            name: 'keywords',
            content: 'transport consultant, auto transport advice, car shipping expert, transport specialist'
        },
        { name: 'robots', content: 'index, follow' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/consultant' }
    ]
})

useSeoMeta({
    ogTitle: 'Speak with Transport Consultant - First Line Transport INC',
    ogDescription: 'Get expert advice from our transport consultants. Personalized assistance for all your auto transport needs.',
    ogUrl: 'https://fltransportinc.com/consultant',
    ogImage: 'https://fltransportinc.com/andback.jpg',
    ogType: 'website',
    ogLocale: 'en_US',

    twitterTitle: 'Speak with Transport Consultant',
    twitterDescription: 'Get expert advice from our transport consultants.',
    twitterImage: 'https://fltransportinc.com/andback.jpg',
    twitterCard: 'summary_large_image'
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
            name: 'Consultant',
            item: 'https://fltransportinc.com/consultant'
        }
    ]
})

interface ConsultantFormState {
    full_name: string
    email: string
    phone: string
    description: string
}

// Form state
const isSubmitting = ref(false)
const showSuccess = ref(false)
const termsAccepted = ref(false)

// Validation schema
const consultantSchema = z.object({
    full_name: z.string().min(1, 'Full name is required'),
    email: z.string().email('Valid email is required'),
    phone: z.string().min(10, 'Valid phone number is required').regex(/^[\d\s\-\(\)\+\.]+$/, 'Invalid phone number format'),
    description: z.string().min(10, 'Please provide at least 10 characters describing how we can help')
})

// Form state
const state = reactive<ConsultantFormState>({
    full_name: '',
    email: '',
    phone: '',
    description: ''
})

// Form submission
async function submitForm() {
    const { success } = consultantSchema.safeParse(state)
    if (!success) return

    isSubmitting.value = true

    try {
        const response = await $fetch('/api/consultant', {
            method: 'POST',
            body: state
        })

        if (response.status === 'success') {
            showSuccess.value = true
        }
    } catch (error) {
        console.error('Form submission error:', error)
        // You can add error handling here
    } finally {
        isSubmitting.value = false
    }
}

function resetForm() {
    showSuccess.value = false
    isSubmitting.value = false
    termsAccepted.value = false

    // Reset form state
    state.full_name = ''
    state.email = ''
    state.phone = ''
    state.description = ''
}
</script>