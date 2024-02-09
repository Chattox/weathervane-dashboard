import { round } from ".";
import { FormattedReading, IndividualReadingData } from "../types/global";

export const getIndividualReadingHistory = (
  readings: FormattedReading[],
  measurement: string
): IndividualReadingData[] => {
  if (measurement === "cumulative_rain") {
    const accumulatedRainfall: IndividualReadingData[] = [];
    readings.forEach((reading) => {
      if (accumulatedRainfall.length > 0) {
        accumulatedRainfall.push({
          timestamp: reading.timestamp,
          cumulative_rain: round(
            reading.rain + +accumulatedRainfall.at(-1)!.cumulative_rain,
            2
          ),
        });
      } else {
        accumulatedRainfall.push({
          timestamp: reading.timestamp,
          cumulative_rain: reading.rain,
        });
      }
    });
    return accumulatedRainfall;
  } else {
    return readings.map(
      (reading): IndividualReadingData => ({
        timestamp: reading.timestamp,
        [measurement]: reading[measurement] as number,
      })
    );
  }
};
