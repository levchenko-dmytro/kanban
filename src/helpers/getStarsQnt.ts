export const getStarsQnt = (num: number) => {
  const result = num / 1000

  return result >= 1 ? `${Math.floor(result)} K` : `${result}`
}
