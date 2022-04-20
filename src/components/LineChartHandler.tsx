import LineChart from './LineChart'

const colors = ['#16A34A', '#EF476F', '#FFD166', '#118AB2', '#073B4C']

type LineChartHandlerProps = {
  labels: Array<string>
  datasets: Array<Array<number>>
  labelDatasets: Array<string>
  title: string
}

const LineChartHandler = ({
  labels,
  datasets,
  labelDatasets,
  title
}: LineChartHandlerProps) => {
  const options = {
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: title,
        fontSize: 25
      }
    },
    layout: { padding: 5 }
  }

  const data: {
    label: string
    data: number[]
    borderColor: string
    pointStyle: string
    pointRadius: number
    pointHoverRadius: number
  }[] = []

  datasets.forEach((currentValue, index) => {
    data.push({
      label: labelDatasets[index],
      data: currentValue,
      borderColor: colors[index],
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
    })
  })

  const targetData = {
    labels,
    datasets: data
  }

  return <LineChart data={targetData} options={options} />
}

export default LineChartHandler
