import { AreaChart } from "@mantine/charts";
import { IndividualReadingData } from "../../../types/global";
import { READINGS_LABELS } from "../../../consts";

export const ReadingAreaChart = (props: {
  data: IndividualReadingData[];
  measurement: string;
}) => {
  const readingInfo = READINGS_LABELS[props.measurement];
  return (
    <AreaChart
      h={300}
      data={props.data}
      dataKey="timestamp"
      unit={readingInfo.unit}
      yAxisProps={{ domain: ["auto", "auto"], width: 70 }}
      xAxisProps={{ tick: false }}
      series={[
        {
          name: props.measurement,
          label: readingInfo.label,
          color: readingInfo.color || "wGrey.4",
        },
      ]}
      curveType="bump"
      withDots={false}
    />
  );
};
