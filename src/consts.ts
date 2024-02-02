import { ReadingLabels } from "./types/global";

export const READINGS_LABELS: ReadingLabels = {
  pressure: { label: "Pressure", color: "wGreen.4", unit: "hPa" },
  rain: { label: "Rainfall", color: "wBlue.4", unit: "mm" },
  wind_speed: { label: "Wind speed", color: "wGreen.4", unit: "m/s" },
  temperature: { label: "Temperature", color: "wGreen.4", unit: "°C" },
  humidity: { label: "Humidity", color: "wBlue.4", unit: "%" },
  wind_direction: { label: "Wind direction", unit: "°" },
  rain_per_second: {
    label: "Rain per second",
    color: "wBlue.4",
    unit: "mm/s",
  },
  luminance: { label: "Luminance", unit: "lx" },
};
