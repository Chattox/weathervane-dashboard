import { ApiReading, FormattedReading } from "../types/global";
import { round } from "./round";

export const formatReadings = (readings: ApiReading[]): FormattedReading[] => {
  return readings.map((reading: ApiReading): FormattedReading => {
    return {
      timestamp: reading.timestamp,
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
