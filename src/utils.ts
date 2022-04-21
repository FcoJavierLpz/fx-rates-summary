const groupBy = (arr: object[]) =>
  arr.reduce((acc: { [key: string]: number[] }, el) => {
    Object.entries(el).forEach(([key, val]) => {
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(val)
    })
    return acc
  }, {})

const getLastMonthsBy = (monthNumber: number): string[] => {
  const today = new Date()
  const lastMonths = []
  for (let i = 0; i < monthNumber; i++) {
    const month = today.getMonth() - i
    const year = today.getFullYear()
    const date = new Date(year, month, 0)
    lastMonths.push(date.toISOString().split('T')[0])
  }
  return lastMonths
}

const join = (arr: string[], separator = ','): string => arr.join(separator)

export { groupBy, getLastMonthsBy, join }
