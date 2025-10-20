<template>
  <div>
    <USelectMenu
      v-model="selected"
      v-model:search-term="searchTerm"
      :items="filteredItems"
      :search-input="{ placeholder: 'Type city...' }"
      class="w-80"
      label-key="display"        
    />
  </div>
</template>

<script setup lang="ts">
import { suggestCities } from '@/composables/useCities';

interface CityOption {
  display: string;
  name: string;
  stateCode?: string;
}

// The user’s current selected city (object or string, depending on your design)
const selected = ref<CityOption | undefined>(undefined);

// The current search term typed into the select menu
const searchTerm = ref('');

// Compute filtered items whenever searchTerm changes
const filteredItems = computed<CityOption[]>(() => {
  const input = searchTerm.value.trim();
  if (input === '') {
    // maybe show a few top cities, or empty list
    return [];
  }
  const suggestions = suggestCities(input, 20);
  return suggestions.map(s => ({
    name: s.name,
    stateCode: s.stateCode,
    display: s.stateCode ? `${s.name}, ${s.stateCode}` : s.name
  }));
});

</script>