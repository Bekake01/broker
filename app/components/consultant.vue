<template>
  <UModal v-model:open="isOpen" title="Speak with a Transport Consultant">
    <template #body>
      <div class="space-y-6">
        <!-- Contact Form -->
        <div v-if="!showSuccess">
          <UForm :schema="consultantSchema" :state="state" @submit="submitForm" class="space-y-4">
            <UFormField name="full_name" label="Full Name" class="w-full">
              <UInput v-model="state.full_name" type="text" size="lg" class="w-full"
                placeholder="Enter your full name" />
            </UFormField>

            <UFormField name="email" label="Email" class="w-full">
              <UInput v-model="state.email" type="email" size="lg" class="w-full" autocomplete="on" 
                placeholder="your.email@example.com" />
            </UFormField>

            <UFormField name="phone" label="Phone Number" class="w-full">
              <UInput v-model="state.phone" v-maska="{ mask: '+1 (###) ###-####' }" size="lg" class="w-full"
                placeholder="(555) 123-4567" autocomplete="tel" />
            </UFormField>

            <UFormField name="description" label="How can we help you?" class="w-full">
              <UTextarea v-model="state.description" size="lg" class="w-full" :rows="4"
                placeholder="Tell us about your transport needs, questions, or concerns..." />
            </UFormField>

            <UButton type="submit" size="lg" block :loading="isSubmitting" icon="i-lucide-send">
              {{ isSubmitting ? 'Sending...' : 'Contact Consultant' }}
            </UButton>
          </UForm>
        </div>

        <!-- Success State -->
        <div v-if="showSuccess" class="text-center py-8">
          <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <UIcon name="i-lucide-check" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
          <p class="text-gray-600 mb-6">A transport consultant will contact you within 24 hours.</p>
          <UButton @click="resetForm" size="lg">
            Send Another Message
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { vMaska } from "maska/vue"

interface ConsultantFormState {
  full_name: string
  email: string
  phone: string
  description: string
}

// Modal state
const isOpen = useState('consultantModal', () => false)
const isSubmitting = ref(false)
const showSuccess = ref(false)

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

  // Reset form state
  state.full_name = ''
  state.email = ''
  state.phone = ''
  state.description = ''
}

// Reset form when modal closes
watch(isOpen, (newValue) => {
  if (!newValue) {
    resetForm()
  }
})

// Expose function to open modal
defineExpose({
  open: () => {
    isOpen.value = true
  }
})
</script>