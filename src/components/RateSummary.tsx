import { useEffect, useState } from 'react'
import LineChartHandler from './LineChartHandler'
import { fetchHistoricalRates } from '../services/getRates'
import { getLastMonthsBy } from '../utils'

type FilterType = {
  months: string[]
  currenciesSelected: string[]
}

const RatesSummary = () => {
  const [filters] = useState<FilterType>({
    months: getLastMonthsBy(6),
    currenciesSelected: ['MXN', 'USD', 'EUR']
  })

  const [ratesSummary, setRatesSummary] = useState<number[][]>([])

  useEffect(() => {
    async function getRates() {
      const rates = await fetchHistoricalRates(
        filters.months,
        filters.currenciesSelected
      )

      setRatesSummary(rates)
    }

    getRates()
  }, [filters])
  return (
    <LineChartHandler
      labels={getLastMonthsBy(6)}
      labelDatasets={filters.currenciesSelected}
      datasets={ratesSummary}
      title={'Show Fx Rates For Last 12 Months'}
    />
  )
}

export default RatesSummary
