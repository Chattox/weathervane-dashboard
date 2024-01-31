import { LineChart } from "@mantine/charts";
import { FormattedReading } from "../types/readings";
import { READINGS_LABELS } from "../consts";

export const ReadingsDisplay = (props: { readings: FormattedReading[] }) => {
  console.log(props.readings);
  return (
    <LineChart
      h={400}
      w={600}
      data={props.readings}
      dataKey="timestamp"
      series={[
        {
          name: "pressure",
          label: READINGS_LABELS.pressure,
          color: "grape.6",
        },
        { name: "rain", label: READINGS_LABELS.rain, color: "teal.6" },
        {
          name: "wind_speed",
          label: READINGS_LABELS.wind_speed,
          color: "cyan.6",
        },
        {
          name: "temperature",
          label: READINGS_LABELS.temperature,
          color: "green.6",
        },
        {
          name: "humidity",
          label: READINGS_LABELS.humidity,
          color: "indigo.6",
        },
        {
          name: "wind_direction",
          label: READINGS_LABELS.wind_direction,
          color: "pink.6",
        },
        {
          name: "rain_per_second",
          label: READINGS_LABELS.rain_per_second,
          color: "blue.6",
        },
        {
          name: "luminance",
          label: READINGS_LABELS.luminance,
          color: "orange.6",
        },
      ]}
      curveType="linear"
    />
  );
};
