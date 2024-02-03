import { AreaChart } from "@mantine/charts";
import { IndividualReadingData } from "../../../types/global";
import { READINGS_LABELS } from "../../../consts";
import { Stack } from "@mantine/core";
import { ChartMinMax } from "../ChartLegend";

export const ReadingAreaChart = (props: {
  data: IndividualReadingData[];
  measurement: string;
}) => {
  const readingInfo = READINGS_LABELS[props.measurement];
  return (
    <Stack align="flex-end">
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
      <ChartMinMax data={props.data} measurement={props.measurement} />
    </Stack>
  );
};
