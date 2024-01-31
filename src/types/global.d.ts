import { DefaultMantineColor } from "@mantine/core";

export type ApiReading = {
  nickname: string;
  model: string;
  uid: string;
  timestamp: string;
  readings: {
    pressure: number; // hectopascals (hPa)
    rain: number; // millimetres (mm)
    wind_speed: number; // metres per second (m/s)
    temperature: number; // degrees celcius (°C)
    humidity: number; // percent (%)
    wind_direction: number; // degrees (°)
    rain_per_second: number; // millimetres per second (mm/s)
    luminance: number; // lux (lx)
  };
};

export interface FormattedReading {
  [key: string]: string | number;
  timestamp: string;
  pressure: number;
  rain: number;
  wind_speed: number;
  temperature: number;
  humidity: number;
  wind_direction: number;
  rain_per_second: number;
  luminance: number;
}

export interface ReadingLabels {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Record<string, string | DefaultMantineColor>;
  pressure: { label: string; color: DefaultMantineColor };
  rain: { label: string; color: DefaultMantineColor };
  wind_speed: { label: string; color: DefaultMantineColor };
  temperature: { label: string; color: DefaultMantineColor };
  humidity: { label: string; color: DefaultMantineColor };
  wind_direction: { label: string; color: DefaultMantineColor };
  rain_per_second: { label: string; color: DefaultMantineColor };
  luminance: { label: string; color: DefaultMantineColor };
}
