import { AreaChart, ChartReferenceLineProps } from "@mantine/charts";
import { IndividualReadingData } from "../../../types/global";
import { READINGS_LABELS } from "../../../consts";
import { Stack } from "@mantine/core";
import { ChartMinMax } from "../ChartLegend";

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

  return (
    <Stack align="flex-end">
      <AreaChart
        h={300}
        data={props.data}
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
