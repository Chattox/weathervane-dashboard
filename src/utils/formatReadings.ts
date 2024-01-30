import { ApiReading, FormattedReading } from "../types/readings";

export const formatReadings = (readings: ApiReading[]): FormattedReading[] => {
  return readings.map((reading: ApiReading): FormattedReading => {
    return {
      timestamp: reading.timestamp,
      Pressure: reading.readings.pressure,
      Rain: reading.readings.rain,
      "Wind speed": reading.readings.wind_speed,
      Temperature: reading.readings.temperature,
      Humidity: reading.readings.humidity,
      "Wind direction": reading.readings.wind_direction,
      "Rain per second": reading.readings.rain_per_second,
      Luminance: reading.readings.luminance,
    };
  });
};
