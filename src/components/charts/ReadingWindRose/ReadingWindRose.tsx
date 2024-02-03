import { Center } from "@mantine/core";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

export const ReadingWindRose = (props: { data: WindData[] }) => {
  const data = [
    { dir: "N", speed: 10 },
    { dir: "NE", speed: 5 },
    { dir: "E", speed: 6 },
    { dir: "SE", speed: 2.75 },
    { dir: "S", speed: 3 },
    { dir: "SW", speed: 4 },
    { dir: "W", speed: 7 },
    { dir: "NW", speed: 12 },
  ];

  console.log(props.data);

  return (
    <Center>
      <RadarChart width={364} height={364} outerRadius="80%" data={props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="dir" />
        <PolarRadiusAxis tick={false} />
        <Radar
          dataKey="amount"
          stroke="var(--mantine-color-wGrey-4)"
          fill="var(--mantine-color-wGrey-4)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Center>
  );
};
