import { Center } from "@mantine/core";
// import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { RadarChart } from "@mantine/charts";
import { WindData } from "../../../types/global";

export const ReadingWindRadarChart = (props: {
  data: WindData[];
  isMobile: boolean;
}) => {
  return (
    <Center>
      <RadarChart
        gridColor="wGrey.4"
        h={props.isMobile ? 182 : 364}
        w="100%"
        data={props.data}
        dataKey="dir"
        series={[
          {
            name: "amount",
            opacity: 0.6,
            color: "wGrey.4",
          },
        ]}
        polarGridProps={{
          strokeOpacity: 0.25,
          strokeDasharray: "5 5",
        }}
        // @ts-expect-error mantine needs to fix their types
        radarProps={{ strokeWidth: 2 }}
      />
    </Center>
  );
};
