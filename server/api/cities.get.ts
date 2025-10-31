// server/api/cities.get.ts
// import cities from './city.json'

import citiesRaw from './city.json'
const cities = citiesRaw as CityRecord[];

interface CityRecord {
  zip: number | string
  city: string
  state_id: string
  state_name: string
  county_name: string
}

interface CityResponse {
  zip: string
  city: string
  state_id: string
  county_name: string
  display: string
}

let citiesCache: CityRecord[] | null = null

export async function loadCities(): Promise<CityRecord[]> {
  if (citiesCache) return citiesCache

  try {
    // ✅ Directly use imported JSON (no CSV parsing)
    citiesCache = cities.map((r: any) => ({
      zip: String(r.zip), // Convert zip to string
      city: String(r.city || ''),
      state_id: String(r.state_id || ''),
      state_name: String(r.state_name || ''),
      county_name: String(r.county_name || ''),
    }))
    return citiesCache
  } catch (err) {
    console.error('Error loading city.json:', err)
    return []
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchTerm = (query.q as string)?.toLowerCase().trim()

  if (!searchTerm || searchTerm.length < 2) {
    return []
  }

  const cities = await loadCities()
  const limit = parseInt(query.limit as string) || 10
  const matches: CityResponse[] = []

  for (const city of cities) {
    if (matches.length >= limit) break

    const cityLower = String(city.city || '').toLowerCase()
    const zipStr = String(city.zip || '')
    const zipMatch = zipStr.startsWith(searchTerm)
    const cityMatch = cityLower.includes(searchTerm)

    if (zipMatch || cityMatch) {
      matches.push({
        zip: zipStr,
        city: city.city,
        state_id: city.state_id,
        county_name: city.county_name,
        display: `${city.city}, ${city.state_id} ${zipStr}`,
      })
    }
  }

  // ✅ Sort: zip matches first, then alphabetically
  matches.sort((a, b) => {
    const aZipMatch = String(a.zip).startsWith(searchTerm)
    const bZipMatch = String(b.zip).startsWith(searchTerm)

    if (aZipMatch && !bZipMatch) return -1
    if (!aZipMatch && bZipMatch) return 1

    return a.city.localeCompare(b.city)
  })

  return matches
})
