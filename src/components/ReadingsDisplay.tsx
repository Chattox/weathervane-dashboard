import { LineChart } from "@mantine/charts";
import { FormattedReading } from "../types/readings";

export const ReadingsDisplay = (props: { readings: FormattedReading[] }) => {
  return (
    <LineChart
      h={400}
      w={600}
      data={props.readings}
      dataKey="timestamp"
      series={[
        { name: "Pressure", color: "grape.6" },
        { name: "Rain", color: "teal.6" },
        { name: "Wind speed", color: "cyan.6" },
        { name: "Temperature", color: "green.6" },
        { name: "Humidity", color: "indigo.6" },
        { name: "Wind direction", color: "pink.6" },
        { name: "Rain per second", color: "blue.6" },
        { name: "Luminance", color: "orange.6" },
      ]}
      curveType="linear"
    />
  );
};
