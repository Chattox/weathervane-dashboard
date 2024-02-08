import { AreaChart, ChartReferenceLineProps } from "@mantine/charts";
import { Stack } from "@mantine/core";
import { IndividualReadingData } from "../../../types/global";
import { MAX_DATA_POINTS, READINGS_LABELS } from "../../../consts";
import { ChartMinMax } from "../ChartMinMax";
import { formatTimestamps, downsampleData } from "../../../utils";

export const ReadingAreaChart = (props: {
  data: IndividualReadingData[];
  measurement: string;
}) => {
  const readingInfo = READINGS_LABELS[props.measurement];

  const referenceLine: ChartReferenceLineProps[] = [];

  if (props.measurement === "temperature") {
    let belowZero = false;
    props.data.forEach((reading: IndividualReadingData) => {
      if ((reading.temperature as number) < 0) {
        belowZero = true;
      }
    });
    if (belowZero) referenceLine.push({ y: 0, label: "0°C", color: "wBlue.4" });
  }

  const chartData =
    props.data.length > MAX_DATA_POINTS
      ? formatTimestamps(
          downsampleData(props.data, props.measurement),
          props.measurement
        )
      : formatTimestamps(props.data, props.measurement);

  return (
    <Stack align="flex-end">
      <AreaChart
        h={300}
        data={chartData}
        dataKey="timestamp"
        unit={readingInfo.unit}
        yAxisProps={{ domain: ["auto", "auto"], width: 70, tickLine: false }}
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
        referenceLines={referenceLine}
      />
      <ChartMinMax data={props.data} measurement={props.measurement} />
    </Stack>
  );
};
