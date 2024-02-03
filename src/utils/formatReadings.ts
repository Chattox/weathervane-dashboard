import { ApiReading, FormattedReading } from "../types/global";

export const formatReadings = (readings: ApiReading[]): FormattedReading[] => {
  return readings.map((reading: ApiReading): FormattedReading => {
    const formattedTimestamp = new Date(reading.timestamp).toLocaleString(
      "en-GB"
    );

    const round = (n: number, d: number): number => {
      const precis = Math.pow(10, d);
      return Math.round(n * precis) / precis;
    };

    return {
      timestamp: formattedTimestamp,
      pressure: reading.readings.pressure,
      rain: round(reading.readings.rain, 2),
      wind_speed: round(reading.readings.wind_speed, 2),
      temperature: reading.readings.temperature,
      humidity: reading.readings.humidity,
      wind_direction: reading.readings.wind_direction,
      rain_per_second: round(reading.readings.rain_per_second, 4),
      luminance: reading.readings.luminance,
    };
  });
};
