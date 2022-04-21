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

const join = (arr: string[], separator = ','): string => arr.join(separator)

export { groupBy, join }
