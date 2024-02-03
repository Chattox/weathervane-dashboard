import { COMPASS_DIRECTIONS } from "../consts";
import { FormattedReading } from "../types/global";

export const formatWindData = (readings: FormattedReading[]): number[] => {
  const windData: Record<string, number> = {
    n: 0,
    nw: 0,
    w: 0,
    sw: 0,
    s: 0,
    se: 0,
    e: 0,
    ne: 0,
  };

  readings.forEach(
    (reading: FormattedReading) =>
      (windData[COMPASS_DIRECTIONS[reading.wind_direction].toLowerCase()] +=
        reading.wind_speed)
  );

  console.log(windData);

  return Object.values(windData);
};
