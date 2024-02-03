import { FormattedReading, IndividualReadingData } from "../types/global";

export const getIndividualReadingHistory = (
  readings: FormattedReading[],
  measurement: string
): IndividualReadingData[] => {
  return readings.map(
    (reading): IndividualReadingData => ({
      timestamp: reading.timestamp,
      [measurement]: reading[measurement] as number,
    })
  );
};
