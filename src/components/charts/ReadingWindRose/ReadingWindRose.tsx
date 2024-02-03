import {
  Chart as WindRoseChart,
  calculateWindRose,
} from "react-windrose-chart";
import { WindData } from "../../../types/global";

export const ReadingWindRose = (props: { data: WindData }) => {
  console.log(props.data);
  const windRoseData = calculateWindRose(props.data);
  const columns = [
    "angle",
    "0-1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
    "5-6",
    "6-7",
    "7+",
  ];
  return (
    <WindRoseChart
      chartData={windRoseData}
      columns={columns}
      width={300}
      height={300}
    />
  );
};
