import { LineChart } from "@mantine/charts";
import { FormattedReading } from "../types/global";
import { READINGS_LABELS } from "../consts";

export const ReadingChart = (props: {
  readings: FormattedReading[];
  measurement: string;
}) => {
  return (
    <LineChart
      h={400}
      w={600}
      data={props.readings}
      dataKey="timestamp"
      series={[
        {
          name: props.measurement,
          label: READINGS_LABELS[props.measurement].label,
          color: READINGS_LABELS[props.measurement].color,
        },
      ]}
      curveType="linear"
    />
  );
};
