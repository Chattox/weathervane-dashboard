import { BarChart } from "@mantine/charts";
import { READINGS_LABELS } from "../../../consts";
import { IndividualReadingData } from "../../../types/global";
import { Stack } from "@mantine/core";
import { ChartMinMax } from "../ChartLegend";

export const ReadingBarChart = (props: {
  data: IndividualReadingData[];
  measurement: string;
}) => {
  const readingInfo = READINGS_LABELS[props.measurement];

  return (
    <Stack align="flex-end">
      <BarChart
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
      />
      <ChartMinMax data={props.data} measurement={props.measurement} />
    </Stack>
  );
};
