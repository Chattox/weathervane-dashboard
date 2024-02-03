import { PolarArea } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Center, Stack } from "@mantine/core";

export const ReadingWindRose = (props: { data: number[] }) => {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  console.log(props.data);
  const data = {
    labels: ["N", "NW", "W", "SW", "S", "SE", "E", "NE"],
    datasets: [
      {
        label: "My First Dataset",
        data: props.data,
        backgroundColor: [
          "var(--mantine-color-wGreen-4)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  return (
    <Center mah="22.75rem">
      <PolarArea
        data={data}
        options={{
          responsive: true,
          scales: {
            r: {
              startAngle: 337.5,
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </Center>
  );
};
