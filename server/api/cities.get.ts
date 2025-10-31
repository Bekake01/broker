// server/api/cities.get.ts
import cities from './city.json'

interface CityRecord {
  zip: string
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
      zip: r.zip,
      city: r.city,
      state_id: r.state_id,
      state_name: r.state_name,
      county_name: r.county_name,
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

    const cityLower = city.city.toLowerCase()
    const zipMatch = city.zip.startsWith(searchTerm)
    const cityMatch = cityLower.includes(searchTerm)

    if (zipMatch || cityMatch) {
      matches.push({
        zip: city.zip,
        city: city.city,
        state_id: city.state_id,
        county_name: city.county_name,
        display: `${city.city}, ${city.state_id} ${city.zip}`,
      })
    }
  }

  // ✅ Sort: zip matches first, then alphabetically
  matches.sort((a, b) => {
    const aZipMatch = a.zip.startsWith(searchTerm)
    const bZipMatch = b.zip.startsWith(searchTerm)

    if (aZipMatch && !bZipMatch) return -1
    if (!aZipMatch && bZipMatch) return 1

    return a.city.localeCompare(b.city)
  })

  return matches
})
