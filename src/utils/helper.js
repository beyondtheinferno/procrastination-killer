import * as dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"
import isLeapYear from "dayjs/plugin/isLeapYear"

dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export const CURRENT_DATE = new Date()

export const BIRTH_YEAR = 1998
export const CURRENT_YEAR = CURRENT_DATE.getFullYear()
export const FINAL_YEAR = 2075

export const getWeeksInAYear = () => {
  let year = BIRTH_YEAR
  const today = dayjs(CURRENT_DATE)
  const todayWeekNumber = today.week()

  const chartData = []
  let totalWeeks = 0,
    completedWeeks = 0
  while (year <= FINAL_YEAR) {
    const noOfWeeksInThisYear = dayjs(new Date(year, 0)).isoWeeksInYear()
    totalWeeks += noOfWeeksInThisYear

    let completed = 0
    if (year < CURRENT_YEAR) {
      completed = noOfWeeksInThisYear
      completedWeeks += noOfWeeksInThisYear
    } else if (year === CURRENT_YEAR) {
      completed = todayWeekNumber - 1
      completedWeeks += todayWeekNumber - 1
    }

    chartData.push({
      year,
      count: noOfWeeksInThisYear,
      completed,
    })

    year += 1
  }
  return {
    chartData,
    totalWeeks,
    weeksRemaining: totalWeeks - completedWeeks,
  }
}
