import { COMPASS_DIRECTIONS } from "../consts";
import { FormattedReading, WindData } from "../types/global";

export const formatWindData = (readings: FormattedReading[]): WindData[] => {
  const windCount: Record<string, number> = {
    n: 0,
    ne: 0,
    e: 0,
    se: 0,
    s: 0,
    sw: 0,
    w: 0,
    nw: 0,
  };

  readings.forEach(
    (reading: FormattedReading) =>
      (windCount[COMPASS_DIRECTIONS[reading.wind_direction].toLowerCase()] +=
        reading.wind_speed)
  );

  const windData: WindData[] = Object.keys(windCount).map(
    (dir: string): WindData => {
      return { dir: dir.toUpperCase(), amount: windCount[dir] };
    }
  );

  return windData;
};
