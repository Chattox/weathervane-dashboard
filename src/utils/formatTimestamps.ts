import { IndividualReadingData } from "../types/global";

export const formatTimestamps = (
  data: IndividualReadingData[],
  measurement: string
): IndividualReadingData[] => {
  return data.map((reading) => ({
    timestamp: new Date(reading.timestamp).toLocaleString("en-gb"),
    [measurement]: reading[measurement],
  }));
};

export const formatSingleTimestamp = (timeStr: string): string => {
  return new Date(timeStr).toLocaleString("en-GB");
};
