import dayjs, { UnitType } from "dayjs";


export function dateConverter(timeStamp: number) {
  return dayjs(timeStamp).toDate()
}


export function checkDateDifference(t1: number, isReplay?: string, unit: UnitType = "day", lessThen = 1) {
  if(isReplay) {
    return
  }
  return dayjs(dateConverter(t1)).diff(dayjs(), unit) < lessThen
}
