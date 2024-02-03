import { FormattedReading, WindData } from "../types/global";

export const formatWindData = (readings: FormattedReading[]): WindData => {
  const data: WindData = { direction: [], speed: [] };
  readings.forEach((reading: FormattedReading) => {
    data.direction.push(reading.wind_direction);
    data.speed.push(reading.wind_speed);
  });
  return data;
};
