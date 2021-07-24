import dayjs, { UnitType } from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Format } from "../domain/types";
dayjs.extend(LocalizedFormat)


export function dateConverter(timeStamp: number, format: Format) {
  const d = dayjs(timeStamp)
  return d.format(format)
}


export function checkDateDifference(t1: number, unit: UnitType = "day") {
  return dayjs(dayjs(t1)).diff(dayjs(), unit) < - 1
}
