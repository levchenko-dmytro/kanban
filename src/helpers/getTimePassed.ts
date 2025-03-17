import { differenceInCalendarDays, toDate } from "date-fns"

export const getTimePassed = (dateString: string) => {
  const createdAt = toDate(dateString)

  const result = differenceInCalendarDays(new Date().toUTCString(), createdAt)
  const days = result === 1 ? 'day' : 'days'

  return result > 0 ? `${result} ${days} ago` : 'today'
}
