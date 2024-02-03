import { PolarArea } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { WindData } from "../../../types/global";

export const ReadingWindRose = (props: { data: WindData }) => {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue", "f", "g", "h"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14, 20, 12, 6],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  return (
    <PolarArea
      data={data}
      options={{
        scales: {
          r: {
            startAngle: 22.5,
          },
        },
        elements: {
          arc: {
            angle: 45,
          },
        },
      }}
    />
  );
};
