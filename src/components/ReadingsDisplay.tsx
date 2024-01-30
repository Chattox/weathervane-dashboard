import { LineChart } from "@mantine/charts";
import { FormattedReading } from "../types/readings";

export const ReadingsDisplay = (props: { readings: FormattedReading[] }) => {
  console.log(props.readings);
  return (
    <LineChart
      h={400}
      w={600}
      data={props.readings}
      dataKey="timestamp"
      series={[
        { name: "pressure", label: "Pressure", color: "grape.6" },
        { name: "rain", label: "Rain", color: "teal.6" },
        { name: "wind_speed", label: "Wind speed", color: "cyan.6" },
        { name: "temperature", label: "Temperature", color: "green.6" },
        { name: "humidity", label: "Humidity", color: "indigo.6" },
        { name: "wind_direction", label: "Wind direction", color: "pink.6" },
        { name: "rain_per_second", label: "Rain per second", color: "blue.6" },
        { name: "luminance", label: "Luminance", color: "orange.6" },
      ]}
      curveType="linear"
    />
  );
};
