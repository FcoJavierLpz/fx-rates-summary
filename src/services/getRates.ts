import http from './http'
import { join, groupBy } from '../utils'

export const fetchHistoricalRates = async (
  dates: string[],
  currencies: string[]
) => {
  const endpointsWithDate = dates.map(date => date)
  const params = {
    params: {
      symbols: join(currencies)
    }
  }

  const response = await Promise.all(
    endpointsWithDate.map(endpoint => http.get(endpoint, params))
  )

  const rates = response.map(resp => resp.data.rates)

  return Object.values(groupBy(rates))
}
