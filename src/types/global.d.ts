import { DefaultMantineColor } from "@mantine/core";

export type ApiReading = {
  nickname: string;
  model: string;
  uid: string;
  timestamp: string;
  voltage?: number;
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
  [key: string]: string | number | undefined;
  timestamp: string;
  pressure: number;
  rain: number;
  wind_speed: number;
  temperature: number;
  humidity: number;
  wind_direction: number;
  rain_per_second: number;
  luminance: number;
  voltage?: number;
}

export interface FormattedReadingRanges {
  [key: string]: FormattedReading[];
  day: FormattedReading[];
  week: FormattedReading[];
  month: FormattedReading[];
  year: FormattedReading[];
  all: FormattedReading[];
  custom: FormattedReading[];
}

export interface ReadingLabels {
  [key: string]: ReadingLabel;
  pressure: ReadingLabel;
  rain: ReadingLabel;
  wind_speed: ReadingLabel;
  temperature: ReadingLabel;
  humidity: ReadingLabel;
  rain_per_second: ReadingLabel;
  wind_direction: ReadingLabel;
  luminance: ReadingLabel;
  cumulative_rain: ReadingLabel;
  voltage?: ReadingLabel;
}

export type ReadingLabel = {
  label: string;
  color?: DefaultMantineColor;
  unit: string;
};

export type IndividualReadingData = {
  timestamp: string;
  [key: string]: number | string;
};

export type WindData = {
  dir: string;
  amount: number;
};
