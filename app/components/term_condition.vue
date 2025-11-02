<template>
    <div class="text-xs text-gray-600 leading-relaxed bg-gray-50/50 p-3 rounded-lg border border-gray-200">
                    <p>
                        By providing your phone number and clicking through, you agree to our 
                        <button 
                            type="button"
                            @click="showTermsModal = true" 
                            class="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            Terms
                        </button>, 
                        <button 
                            type="button"
                            @click="showPrivacyModal = true" 
                            class="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            Privacy Policy
                        </button>, 
                        and authorize us to make or initiate sales calls, text msgs, and prerecorded voicemails to that number using an automated system. Your agreement is not a condition of purchasing products, goods or services. You may opt out at any time.
                    </p>
                </div>
 
                <UModal
        v-model:open="showTermsModal"
        title="Terms & Conditions" :ui="{content: 'max-w-[1200px]'}"
        >
        <!-- :ui="{content: 'max-w-[1000px]'}" -->
        <template #body>
            <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
            <Terms />
            </div>
        </template>
    </UModal>


    <!-- Privacy Modal -->
    <UModal v-model:open="showPrivacyModal" title="Privacy Policy" :ui="{content: 'max-w-[1200px]'}">
        <template #body>
            <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
                <Privacy />
            </div>
        </template>
    </UModal>
</template>

<script setup>
const showTermsModal = ref(false)
const showPrivacyModal = ref(false)
</script>