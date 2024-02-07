import dayjs, { ManipulateType } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FormattedReading } from "../types/global";

export const getReadingsInDateRange = (
  readings: FormattedReading[],
  range: { period?: string; start?: string; end?: string }
): FormattedReading[] => {
  dayjs.extend(isBetween);
  const start = range.period ? dayjs() : dayjs(range.start);
  const end = range.period
    ? start.subtract(1, range.period as ManipulateType)
    : dayjs(range.end);

  return readings.filter((reading: FormattedReading) =>
    dayjs(reading.timestamp).isBetween(
      start,
      end,
      range.period ? "second" : "day",
      "[]"
    )
  );
};
