import { Center } from "@mantine/core";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { WindData } from "../../../types/global";

export const ReadingWindRadarChart = (props: {
  data: WindData[];
  isMobile: boolean;
}) => {
  return (
    <Center>
      <RadarChart
        width={props.isMobile ? 182 : 364}
        height={props.isMobile ? 182 : 364}
        outerRadius="80%"
        data={props.data}
      >
        <PolarGrid strokeOpacity={0.3} stroke="#c9c9c9" strokeDasharray="5 5" />
        <PolarAngleAxis dataKey="dir" stroke="#828282" strokeOpacity={0} />
        <Radar
          dataKey="amount"
          stroke="var(--mantine-color-wGrey-4)"
          fill="var(--mantine-color-wGrey-4)"
          fillOpacity={0.6}
          strokeWidth={2}
          isAnimationActive={false}
        />
      </RadarChart>
    </Center>
  );
};
