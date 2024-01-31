import { ReadingLabels } from "./types/global";

export const READINGS_LABELS: ReadingLabels = {
  pressure: { label: "Pressure", color: "grape.6", unit: "hPa" },
  rain: { label: "Rainfall", color: "teal.6", unit: "mm" },
  wind_speed: { label: "Wind speed", color: "cyan.6", unit: "m/s" },
  temperature: { label: "Temperature", color: "green.6", unit: "°C" },
  humidity: { label: "Humidity", color: "indigo.6", unit: "%" },
  wind_direction: { label: "Wind direction", color: "pink.6", unit: "°" },
  rain_per_second: {
    label: "Rain per second",
    color: "blue.6",
    unit: "mm/s",
  },
  luminance: { label: "Luminance", color: "orange.6", unit: "lx" },
};
