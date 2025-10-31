import { parse } from 'csv-parse/sync'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises'
import { join } from 'path'

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

async function loadCities(): Promise<CityRecord[]> {
  if (citiesCache) {
    return citiesCache
  }

  try {
    
    // const csvPath = resolve(process.cwd(), 'city.csv')
    // const csvContent = await readFile(csvPath, 'utf-8')
    // const csvPath = resolve(process.cwd(), 'server/assets/city.csv')
    // const csvContent = await readFile(csvPath, 'utf-8')

    // const __dirname = dirname(fileURLToPath(import.meta.url))
    // const csvPath = resolve(__dirname, '../assets/city.csv')
    // const csvContent = await readFile(csvPath, 'utf-8')
    const csvPath = join(process.cwd(), 'server', 'assets', 'city.csv')
    const csvContent = await readFile(csvPath, 'utf-8')
    
    const records = parse(csvContent, {
      columns: ['zip', 'col2', 'col3', 'city', 'state_id', 'state_name', 'col7', 'col8', 'col9', 'col10', 'col11', 'county_name'],
      skip_empty_lines: true,
      from_line: 2 // Skip header
    })

    citiesCache = records.map((record: any) => ({
      zip: record.zip?.trim() || '',
      city: record.city?.trim() || '',
      state_id: record.state_id?.trim() || '',
      state_name: record.state_name?.trim() || '',
      county_name: record.county_name?.trim() || ''
    })).filter(record => record.zip && record.city && record.state_id)

    return citiesCache
  } catch (error) {
    console.error('Error loading cities:', error)
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
        display: `${city.city}, ${city.state_id} ${city.zip}`
      })
    }
  }
  
  // Sort results: exact zip matches first, then city matches
  matches.sort((a, b) => {
    const aZipMatch = a.zip.startsWith(searchTerm)
    const bZipMatch = b.zip.startsWith(searchTerm)
    
    if (aZipMatch && !bZipMatch) return -1
    if (!aZipMatch && bZipMatch) return 1
    
    return a.city.localeCompare(b.city)
  })
  
  return matches
})