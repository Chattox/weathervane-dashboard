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

export type FormattedReading = {
  timestamp: string;
  pressure: number;
  rain: number;
  wind_speed: number;
  temperature: number;
  humidity: number;
  wind_direction: number;
  rain_per_second: number;
  luminance: number;
};
