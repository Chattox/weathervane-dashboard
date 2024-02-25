import { BarChart } from "@mantine/charts";
import { MAX_DATA_POINTS, READINGS_LABELS } from "../../../consts";
import { IndividualReadingData } from "../../../types/global";
import { Stack } from "@mantine/core";
import { ChartMinMax } from "../ChartMinMax";
import { downsampleData, formatTimestamps } from "../../../utils";

export const ReadingBarChart = (props: {
  data: IndividualReadingData[];
  measurement: string;
  isMobile: boolean;
}) => {
  const readingInfo = READINGS_LABELS[props.measurement];

  const chartData =
    props.data.length > MAX_DATA_POINTS
      ? formatTimestamps(
          downsampleData(props.data, props.measurement),
          props.measurement
        )
      : formatTimestamps(props.data, props.measurement);
  return (
    <Stack align="flex-end">
      <BarChart
        h={props.isMobile ? 150 : 300}
        data={chartData}
        dataKey="timestamp"
        unit={readingInfo.unit}
        yAxisProps={{
          domain: ["auto", "auto"],
          width: 70,
          tickLine: false,
          interval: 0,
        }}
        xAxisProps={{ tick: false }}
        series={[
          {
            name: props.measurement,
            label: readingInfo.label,
            color: readingInfo.color || "wGrey.4",
          },
        ]}
      />
      <ChartMinMax data={props.data} measurement={props.measurement} />
    </Stack>
  );
};
