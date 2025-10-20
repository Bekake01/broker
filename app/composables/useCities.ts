// ~/composables/useCities.ts
import allCities from 'cities.json';

interface City {
  name: string;
  country: string;
  lat: string;
  lng: string;
  admin1?: string;
  admin2?: string;
}

// Filter US cities only (country code “US”), or keep all if you want global
// const usCities: City[] = allCities.filter(c => c.country === 'US');
const usCities = allCities as City[]

// Optionally map to a lighter shape (just name, maybe state)
const usCityNames = usCities.map(c => ({
  name: c.name,
  stateCode: c.admin1,  // e.g. admin1 is state code for U.S. in cities.json
  lat: c.lat,
  lng: c.lng
}));

/**
 * Returns up to `limit` suggestions whose `name` starts with `input` (case-insensitive).
 */
export function suggestCities(input: string, limit = 10): { name: string; stateCode?: string }[] {
  if (!input) return [];
  const lower = input.toLowerCase();
  const matches = [];
  for (const c of usCityNames) {
    if (c.name.toLowerCase().startsWith(lower)) {
      matches.push(c);
      if (matches.length >= limit) break;
    }
  }
  return matches;
}
