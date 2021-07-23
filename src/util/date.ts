import dayjs, { UnitType } from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Format } from "../domain/types";
dayjs.extend(LocalizedFormat)


export function dateConverter(timeStamp: number, format: Format) {
  return dayjs(timeStamp).format(format)
}


export function checkDateDifference(t1: number, isReplay?: string, unit: UnitType = "day", lessThen = 1) {
  if(isReplay) {
    return
  }
  return /*dayjs(dateConverter(t1)).diff(dayjs(), unit) < lessThen*/
}
