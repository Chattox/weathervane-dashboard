import { ApiReading, FormattedReading } from "../types/readings";

export const formatReadings = (readings: ApiReading[]): FormattedReading[] => {
  return readings.map((reading: ApiReading): FormattedReading => {
    const formattedTimestamp = new Date(reading.timestamp).toLocaleString(
      "en-GB"
    );
    return {
      timestamp: formattedTimestamp,
      pressure: reading.readings.pressure,
      rain: reading.readings.rain,
      wind_speed: reading.readings.wind_speed,
      temperature: reading.readings.temperature,
      humidity: reading.readings.humidity,
      wind_direction: reading.readings.wind_direction,
      rain_per_second: reading.readings.rain_per_second,
      luminance: reading.readings.luminance,
    };
  });
};
