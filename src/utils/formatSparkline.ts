import { FormattedReading } from "../types/global";

export const formatSparkline = (
  readings: FormattedReading[],
  measurement: string
): number[] => {
  return readings.map(
    (reading: FormattedReading) => reading[measurement] as number
  );
};
