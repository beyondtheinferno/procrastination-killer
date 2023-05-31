import * as dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"
import isLeapYear from "dayjs/plugin/isLeapYear"

dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export const CURRENT_DATE = new Date()
export const CURRENT_YEAR = CURRENT_DATE.getFullYear()

export const getFullData = ({ startYear, deadlineYear }) => {
  let year = startYear
  const today = dayjs(CURRENT_DATE)
  const todayWeekNumber = today.week()

  const chartData = []
  let totalWeeks = 0,
    completedWeeks = 0
  while (year <= deadlineYear) {
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

// Simple object comparison
export const isObjectEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  return keys1.every((key) => obj1[key] === obj2[key])
}

export const isInputValid = (globalsCopy) => {
  if (
    globalsCopy.startYear < CURRENT_YEAR &&
    CURRENT_YEAR < globalsCopy.deadlineYear &&
    globalsCopy.name &&
    globalsCopy.name.length <= 20
  ) {
    return true
  }
  return false
}

// Deadlines page
export const getDateInputFormat = () => {
  const offset = CURRENT_DATE.getTimezoneOffset()
  const formattedDate = new Date(CURRENT_DATE.getTime() - offset * 60 * 1000)
  return formattedDate.toISOString().split("T")[0]
}

export const isDeadlinesInputValid = (globals) => {
  const { deadlines } = globals
  if (deadlines.length > 0) {
    const allTrue = deadlines.every((d) => d.name && d.dueOn)
    if (allTrue) {
      return true
    }
  }
  return false
}

export const getDeadlinesData = (deadlines) => {
  if (!deadlines.length) return []
  const data = deadlines.map((d) => {
    const dueOn = dayjs(d.dueOn)
    const dateTime = new Date(dueOn).getTime()
    const today = dayjs(CURRENT_DATE)
    return {
      ...d,
      formattedDueOn: dueOn.format("DD MMM YY"),
      days: dueOn.diff(today, "day"),
      weeks: dueOn.diff(today, "week"),
      months: dueOn.diff(today, "month"),
      years: dueOn.diff(today, "year"),
      dateTime,
    }
  })
  return data.sort((a, b) => a.dateTime - b.dateTime)
}
