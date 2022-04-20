import 'chart.js/auto'
import { ChartData, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

type LineChartProps = {
  options: ChartOptions<'line'>
  data: ChartData<'line', (number | null)[], unknown>
}

const LineChart = ({ options, data }: LineChartProps) => {
  return <Line options={options} data={data} width="1000" height="500" />
}

export default LineChart
